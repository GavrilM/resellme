import React, {Component} from 'react'
import { Text, TextInput, ScrollView, View, Image, Picker, Platform, ToastAndroid } from 'react-native'
import { Button } from 'react-native-material-ui'
import RNFetchBlob from 'react-native-fetch-blob'
import ImagePicker from 'react-native-image-picker'

import Styles from './styles'
import NavBar from '../../components/navbar'

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export default class Create	extends Component{
	constructor(props){
		super(props)
		this.state= {}
	}

	validate(){
		//all fields filled out
		const obj = Object.assign({}, this.state);

		if(obj.name && obj.cost){
			//trim beginning/trailing whitespace
			delete obj.imagePath
			obj.name = obj.name.trim()
			obj.about = obj.about ? obj.about.trim() : ''
			return obj;
		}
		ToastAndroid.show("Invalid Fields", ToastAndroid.SHORT);
		//close the thing
	}

	takePicture(){
      const options = {
        mediaType: 'photo',
        quality: 1,
        noData: true,
      };
      ImagePicker.showImagePicker(options, (response) => {
		  if (response.didCancel) {
		  }
		  else if (response.error) {
		  	ToastAndroid.show(response.error, ToastAndroid.LONG);
		  }
		  else {
		    this.setState({
	            imagePath: response.uri,
	            // imageHeight: response.height,
	            // imageWidth: response.width,
	          })
		  }
		});
    }

	uploadImage(uri, imageName, mime = 'image/jpg'){

	  return new Promise((resolve, reject) => {
	    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
	      let uploadBlob = null
	      const imageRef = this.props.firebase.storage().ref('products/').child(imageName)
	      fs.readFile(uploadUri, 'base64')
	      .then((data) => {
	        return Blob.build(data, { type: `${mime};BASE64` })
	      })
	      .then((blob) => {
	        uploadBlob = blob
	        return imageRef.put(blob, { contentType: mime })
	      })
	      .then(() => {
	        uploadBlob.close()
	        return imageRef.getDownloadURL()
	      })
	      .then((url) => {
	        resolve(url)
	      })
	      .catch((error) => {
	        Promise.reject(error)
	      })
	  })
	}

	submit(){
		const productsRef = this.props.firebase.database().ref('products')
		let key, data = this.validate()
		if(data){
			productsRef.push(data)
			.then((ref) => {
				key = ref.key
				if(this.state.imagePath)
					return this.uploadImage(this.state.imagePath, `images/${ref.key}.jpg`);

				Promise.resolve(ref)
			})
			.then((uri) => {
				if(uri)
					productsRef.child(`${key}`).update({image: uri})
				ToastAndroid.show("Item Uploaded", ToastAndroid.SHORT);
				// 
			})
			.catch((error) => {
		      	Promise.reject(error)
		    })
		}
		this.props.navigator.pop()
	}

	render(){
		const Blob = RNFetchBlob.polyfill.Blob
		const fs = RNFetchBlob.fs
		window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
		window.Blob = Blob
		return (<View style={{flex:1}}>
			<NavBar title="Add New Item" navigator={this.props.navigator} openDrawer={() => this.props.toggleDrawer()}/>
			<View style={{marginTop: 50, flex:1}}>
				<TextInput style={Styles.nameInput} placeholder="Product Name" onChangeText={text => this.setState({name: text})} />
				<TextInput style={Styles.nameInput} placeholder="Brief Description" multiline={true} onChangeText={text => this.setState({about: text})}/>
				<Picker
	              selectedValue={this.state.condition}
	              onValueChange={val => this.setState({condition: val})}
	              style={{width: 125}}>
	              <Picker.Item label="No Condition" value="" />
	              <Picker.Item label="Like New" value="Like New" />
	              <Picker.Item label="Lightly Used" value="Lightly Used" />
	              <Picker.Item label="Fair" value="Fair" />
	              <Picker.Item label="Well Worn" value="Well Worn" />
	              <Picker.Item label="Falling Apart" value="Falling Apart" />
	            </Picker>
	        	<TextInput keyboardType= 'numeric' placeholder= "Price" onChangeText={text => this.setState({cost: text})}/>
	        	<Button text="Upload Image"  onPress={() => this.takePicture()}/>
	        	<Button raised primary text="Create"  onPress={ () => this.submit() } />
			</View>
		</View>)
	}
}
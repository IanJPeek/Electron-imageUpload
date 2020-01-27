import React, { Component } from "react";
import "./App.css";
import axios from "axios"

// from https://www.youtube.com/watch?v=XeiOnkEI7XI

class App extends Component {

  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState({
    selectedFile: event.target.files[0]
  });
}

fileUploadHandler = () => {
  const fd = new FormData() 
  fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
 axios.post("example URL", fd, {
   onUploadProgress: progressEvent => {
     console.log("upload progress: " + Math.round(progressEvent.loaded / progressEvent.total * 100) + " %")
   }
 })
 .then(res =>{ 
   console.log(res)
 })
} 

  render() { 
    return (
      <div className="App">
        <input 
        style={{display:"none"}}
        type="file" 
        onChange={this.fileSelectedHandler} 
        ref={fileInput => this.fileInput = fileInput}/>
        <button onClick={() => this.fileInput.click()}>Pick File</button>
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    ); 
  }
}

export default App;

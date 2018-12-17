import React from 'react'
import './style.css'
import { ReactMic } from 'react-mic';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      blobURL:null
    }
 
  }
 
  startRecording = () => {
    this.setState({
      record: true
    });
  }
 
  stopRecording = () => {
    this.setState({
      record: false
    });
  }
  onSave=(blobObject) => {
  }
  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }
  onStart=() => {
    console.log('You can tap into the onStart callback');
  }
  onStop=(recordedBlob)=>{
    console.log('recordedBlob is: ', recordedBlob);
    this.setState({
      blobURL : recordedBlob.blobURL
    });
  }
 
  render() {
    const { record } = this.state
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          onStart={this.onStart}
          onSave={this.onSave}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <button onClick={this.startRecording} secondary={true}
            disabled={record} type="button">Start</button>
        <button onClick={this.stopRecording} secondary={true}
            disabled={!record} type="button">Stop</button>
        <audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio>
      </div>
    );
  }
}
export default App
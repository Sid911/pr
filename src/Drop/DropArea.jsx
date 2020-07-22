import React, { Component } from 'react'
import ReactDropzone from 'react-dropzone'

export default class DropArea extends Component {
    onDrop = (files) =>{
        console.log("The Files dropped",files)
    }
    render() {
        return (
            <div>
                <ReactDropzone onDrop={this.onDrop}>
                    Drop your files here
                </ReactDropzone>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Div, Text, Input, Row, Col } from 'atomize'
import FileDescList from '../FileList/FileList'

export default class DropArea extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.render = this.render.bind(this)
        this.fileInput = React.createRef()
        this.fileList = []
        this.state = { filesSelected: false }
    }
    click(event) {
        event.preventDefault();

        console.log("clicked")
        document.getElementById('fileInput').click();
    }

    handleSelect() {
        this.fileList = this.fileInput.current.files
        if (this.fileList.length !== 0) {
            this.setState({ filesSelected: true })
            console.log(`Total Objects Selected = ${this.fileList.length}`)
            console.log(`Name = ${this.fileList[0].name}`)
        }
    }
    render() {
        var List = this.fileList
        console.log(List)
        return (
            <div>
                <Row style={{ width: "90%", margin: "5%" }} d="flex" transition>

                    <Col bg="white" h="10rem" shadow="4" hoverShadow="5" size="auto" flexGrow="2"
                        cursor="pointer" rounded="lg" transition d="flex" justify="center" onClick={this.click}>
                        <Text tag="h1" textSize="display1" style={{ margin: "6%" }} textColor="black800">
                            Drop the files here or click <span>📁</span>
                        </Text>
                    </Col>
                    {this.state.filesSelected ?
                        <Col bg="info600" h="10rem" shadow="4" hoverShadow="5" size="auto" flexGrow="1"
                            cursor="pointer" rounded="lg" transition d="flex" justify="center" style={{marginLeft:"1%"}}>
                            <Text tag="h1" textSize="display1" style={{ marginTop: "15%" }} textColor="white">
                                Submit <span>🚀</span>
                            </Text>
                        </Col> : <br />}
                </Row>
                <Input id="fileInput" type="file" rounded="lg" m={"5%"} accept="image/*" style={{ display: "none" }} ref={this.fileInput} onChange={this.handleSelect} multiple />
                {this.state.filesSelected ? <FileDescList li={this.fileList} /> : console.log("Files not Selected")}

            </div>

        )
    }
}

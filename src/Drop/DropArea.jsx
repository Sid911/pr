import React, { Component } from 'react'
import { Text, Input, Row, Col } from 'atomize'
import FileDescList from '../FileList/FileList'
import Overdrive from "react-overdrive";
import Predict from '../api/com'

export default class DropArea extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.render = this.render.bind(this)
        this.fileInput = React.createRef()
        this.fileList = []
        this.state = { filesSelected: false,submitClicked:false }
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
            document.getElementById('submit').style.display = 'block'
            console.log(`Total Objects Selected = ${this.fileList.length}`)
            console.log(`Name = ${this.fileList[0].name}`)
        }
    }
    onSubmit(){
        console.log("Submition Started !")
        this.setState({
            submitClicked :true
        })
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
                            Drop the files here or click <span role="img" aria-label="(Browse)">📁</span>
                        </Text>
                    </Col>

                    <Col bg="info600" h="10rem" shadow="4" hoverShadow="5" size="auto" flexGrow="1" id="submit"
                        cursor="pointer" rounded="lg" transition d="flex" justify="center" style={{ marginLeft: "1%",display:"none" }} onClick={this.onSubmit}>
                        <Text tag="h1" textSize="display1" style={{ marginTop: "13%",marginLeft:"30%" }} textColor="white">
                            Submit <span role="img" aria-label="(Rocket)">🚀</span>
                        </Text>
                    </Col>
                </Row>
                <Input id="fileInput" type="file" rounded="lg" m={"5%"} accept="image/*" style={{ display: "none" }} ref={this.fileInput} onChange={this.handleSelect} multiple />
                {this.state.filesSelected ? <Overdrive id="list" duration={500} easing="linear"><FileDescList li={this.fileList} /></Overdrive> : <Overdrive id="list"><br /></Overdrive>}
                {this.state.submitClicked ? <Predict projID="abcd" serLocation="india" modelID="1234" arr={this.fileList}/>:""}
            </div>

        )
    }
}

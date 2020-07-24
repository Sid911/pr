import React, { Component } from 'react'
import { Div, Button,Icon, Image } from "atomize"
import './TitleBar.css'
import logo from "./o2logo.png"
export default class TitleBar extends Component {
    onClose(e){
        e.preventDefault();
        window.close()
    }
    onMinimize(e){
        e.preventDefault()
    }
    onMaximize(e){
        e.preventDefault()
    }
    render() {
        return (
            <Div className="drag" style={{width:"100%"}} p={{ xs: '0.5rem', md: '0.7rem' }} d="flex" justify="space-between">
                <Div d="flex" ><Image src={logo} w="3rem" h= "3rem" className="nodrag"/></Div>
                <Div className= "nodrag" d="flex">
                    <Button className="nodrag" h="2rem" w="2rem" bg="white" hoverBg="info400" shadow="3" rounded="lg" m={{ r: "1rem" }}>
                        <Icon className= "nodrag" name="DownArrow" size="20px" color="info700"  />
                    </Button>
                    <Button h="2rem" w="2rem" bg="white" hoverBg="info400" rounded="lg" shadow="3" m={{ r: "1rem" }}>
                        <Icon name="Expand" size="20px" color="info700"/>
                    </Button>
                    <Button h="2rem" w="2rem" bg="white" hoverBg="danger400" rounded="lg" shadow="3" m={{ r: "1rem" }} onClick={this.onClose}>
                        <Icon name="Cross" size="20px" color="danger700"/>
                    </Button>
                </Div>
            </Div>
        )
    }
}

import React, { Component } from 'react'
import { Div, Button,Icon } from "atomize"
import './TitleBar.css'

export default class TitleBar extends Component {
    render() {
        return (
            <Div className="drag" style={{height:"2.5rem",width:"100%"}} p={{ xs: '0.5rem', md: '0.7rem' }} d="flex" justify="SpaceBetween">
                <Div className= "nodrag" d="flex" justify="flex-end">
                    <Button h="2rem" w="2rem" bg="danger300" hoverBg="danger400" rounded="lg" m={{ r: "1rem" }}>
                        <Icon name="HeartSolid" size="20px" color="danger700"/>
                    </Button>
                    <Button className="nodrag" h="2rem" w="2rem" bg="info300" hoverBg="info400" rounded="lg" m={{ r: "1rem" }}>
                        <Icon className= "nodrag"name="HeartSolid" size="20px" color="info700" />
                    </Button>
                    <Button h="2rem" w="2rem" bg="black300" hoverBg="black400" rounded="lg" m={{ r: "1rem" }}>
                        <Icon name="HeartSolid" size="20px" color="black700"/>
                    </Button>
                </Div>
            </Div>
        )
    }
}

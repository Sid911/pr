import React, { Component } from 'react'
import {Div, Text} from 'atomize'

export default class DropArea extends Component {
    render() {
        return (
            <div>
                <Div bg="white" h="10rem" style={{width:"90%",margin:"5%"}} shadow="4" hoverShadow="5" 
                cursor="pointer" rounded="lg" transition d="flex" justify="center">
                <Text tag="h1" textSize="display1" style={{margin: "5%"}} textColor="black800">
                        Drop the files here or click 📁
                </Text>
                </Div>
            </div>
        )
    }
}

import React from 'react'
import {Text,Div,Col,Row,Icon} from "atomize";

export default function FileDescList(props) {
    console.log(props.li);
    const element = [];
    var Files = props.li;
    for (let i = 0; i < Files.length; i++) {
        element.push(Files.item(i));
    };

    var item = element.map((i)=>
        <Div bg="white" style={{width:"94%", marginLeft:"3%",marginTop:"1%",padding:"1%"}} 
        shadow="2" hoverShadow="3" 
        cursor="pointer" rounded="lg" transition key={i.name}>
            <Row>
                <Col size="4">
                    <b>Name : </b>{i.name}
                </Col>
                <Col size="4">
                    <b>Size : </b>{i.size/1024}KB
                </Col>
                <Col size="3">
                    <b>Format : </b>{i.type}
                </Col>
                <Col size="1">
                    <Icon name="CloseSolid" size="20px" />
                </Col>
            </Row>
        </Div>
    );
    return (
        <div style={{paddingBottom:"5%"}}>
        <Text tag="header" textSize="title" style={{paddingLeft:"5%",paddingBottom:"1%"}}>Files Selected : </Text>
            {item}
        </div>
    )
}

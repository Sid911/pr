import React, { Component } from 'react'
import { Button } from 'atomize'
const fs = require('fs');
const getAuthenticated = require('./auth')


const { PredictionServiceClient } = require('@google-cloud/automl');
export default class predict extends Component {
    constructor(props) {
        super(props);
        //this.prepare = this.prepare.bind(this);
        this.props = props;
        this.state = {
            requests: [],
            counter: 0
        };
    }
    componentDidMount() {
        this.arr = this.props.arr;
        this.projId = this.props.projId;
        this.serLocation = this.props.serLocation;
        this.modelId = this.props.modelId;
        //this.client = new PredictionServiceClient();
        console.log(this.arr)
    }

    prepare(arr) {
        arr.forEach(element => {
            var content = fs.readFileSync(element.path)
            this.setState({
                requests: this.state.requests.push(
                    {
                        name: this.client.modelPath(this.projId, this.serLocation, this.modelId),
                        payload: {
                            image: {
                                imageBytes: content,
                            },
                        },
                        params: {
                            score_threshold: '0.7'
                        }
                    }
                )
            })
        });
        console.log("The requests are : ", this.state.requests)
    }


    render() {
        return (
            <div>
                <Button></Button>
            </div>
        )
    }
}
import React, {Component} from "react";


export class LifeCycle extends Component {
    constructor(props){
        super(props);
        console.log("constructor is called");
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps is called");
        console.log("props",props);
        console.log("state",state);
    }
    
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate is called");
        return true;
    }
    render(){
        console.log("render is called");
        return (
            <div>
                Life cycle method
                {this.props.values}
            </div>
        )
    }

    componentDidMount(){
        console.log("componentDidMount is called");
    }

   

    componentDidUpdate(){
        console.log("componentDidUpdate is called");
    }

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate is called");
        return null;
    }

    componentWillUnmount(){
        console.log("componentWillUnmount is called");
    }
}


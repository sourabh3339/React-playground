import React,{Component}  from "react";
import CustomForm1 from "./controlledComponents/CustomForm";
import CustomForm2 from "./uncontrolledComponents/CustomForm";
import {LifeCycle} from  "./llifeCycle/LifeCycle";
import HookBasedControlledComponent from "./hookControlledComponents/CustomForm";

class ReactContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            values:""
        };
        this.changeState = this.changeState.bind(this);
    }

    changeState(values){
        this.setState({
            values
        })
    }

    render(){
        console.log("parent is called");
        return (
            <div className="parent">
                <CustomForm1 callback = {this.changeState} />
                <CustomForm2 callback = {this.changeState}/>
                <LifeCycle {...this.state}/>
                <HookBasedControlledComponent/>
            </div>
        )
    }
    componentDidUpdate(){
        console.log("parent did update...");
    }
}

export default ReactContainer;
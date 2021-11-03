import React,{Component} from "react";

class CustomForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue : "hi there"
        };
        this.changeHandler =  this.changeHandler.bind(this);
    }

    changeHandler(e){
        let value = e.target.value;
        console.log(value);

        this.setState({
            inputValue:value
        });
        this.props.callback(value);
    }

    render(){
        let {inputValue} = this.state;
        return (
            <div className="custom_form_container">
                <input onChange={this.changeHandler} type={"Number"} value={inputValue}/>
            </div>
            
        )
    }
}

export default CustomForm;
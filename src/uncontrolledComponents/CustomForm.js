import React,{Component} from "react";

class CustomForm extends Component{
    constructor(props){
        super(props)
        this.inputValue = React.createRef();
        this.submit = this.submit.bind(this);
    };
    
    submit(e){
        console.log(this.inputValue.current.value);
        this.props.callback(this.inputValue.current.value)
        e.preventDefault();
    }

    render(){
        return (
            <div className="container">
                <input ref = {this.inputValue}/>
                <button onClick={this.submit}>Submit</button>
            </div>
        )
    }
}

export default CustomForm;
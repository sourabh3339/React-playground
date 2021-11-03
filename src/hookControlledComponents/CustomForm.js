import React,{useState} from "react";

function CustomForm(){
    let [value,setValue] = useState(0);

    const setInputValue = ()=>{
        setValue(++value);
    }
   // setInterval(setInputValue,1000)
    return(
        <div className="container">
            <input value={value} onChange={setInputValue}/>
        </div>
    )
};

export default CustomForm;

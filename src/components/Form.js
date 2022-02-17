import React,{ useState } from "react";

function Form(){

    const[state, setState] = useState();
    const[value,setValue] = useState([]);
    function submitHandler(event){
        event.preventDefault()
        setValue([...value,state])
        setState('')
    }
    function remove(event){
        if(event.target.style.textDecoration === 'line-through'){
            event.target.style.textDecoration = 'none'
        }
        else{
            event.target.style.textDecoration = 'line-through'
        }
    }
    return(
        <div>
            <h1>Todo list</h1>
                    <form onSubmit={(event) => submitHandler(event)}>
            <button>+</button>
            <input value={state} minLength='2' maxLength='40' onChange={(event) => setState(event.target.value)} type="text"/>
        </form>
        <ul>
        {
            value.map((item, idx) => {
                return(
                    <li onClick={remove} style={{cursor:"pointer"}} key={idx}>{item}</li>
                )
            })
        }
        </ul>
        </div>
        
    )
}

export default Form
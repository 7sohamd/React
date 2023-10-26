import{useState} from 'react';
import "./styles.css";
function Counter(){
    const [counter,setCounter]=useState("Hello ");
    const names = ["Soham", "Dibyendu", "Amrit"];
    var temp="";
    const random = Math.floor(Math.random() * names.length);
    const increaseCounter= () => {
        if(names[random]!==temp)
        {
            setCounter(counter+names[random]+" ");
            temp=names[random];
        }
        if(counter!=="Hello ")
        {
            Reset();
        }
    }
    var Reset= () =>{
        setCounter("Hello ");
    }

    return(
        <div>
            <any className='any'>
            <h1>Hello Counter</h1>
            <h2>{counter}</h2>
            </any>
            <button className='Soham' onClick={increaseCounter}>Increase The Number</button>
        </div>
    )
}

export default Counter;
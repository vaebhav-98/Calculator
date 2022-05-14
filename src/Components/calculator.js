import React,{useState} from 'react'
import './calculator.css'
const Calculator=()=> {

    const [result, setResult] = useState('');
    const clickHandler=(event)=>{
        setResult(result.concat(event.target.value))
    }

    const clearDisplay=()=>{
        setResult('');
    }

    const calculate=()=>{
        setResult(eval(result).toString());
    }

    const backspace=()=>{
        setResult(result.slice(0,-1));
    }

  return (
  <>
  <div className='calc'>
  <input type='text' placeholder='0' value={result} id= 'answer'/>
     <div className='buttonBox'>
     
      <input type='button' value='AC' className='button acbtn' onClick={clearDisplay}/>
      <input type='button' value='C' className='button acbtn' onClick={backspace}/>
      <input type='button' value='%' className='button acbtn' onClick={clickHandler}/>
      <input type='button' value='/' className='button lastbtn' onClick={clickHandler}/>
      <input type='button' value='7' className='button' onClick={clickHandler}/>
      <input type='button' value='8' className='button' onClick={clickHandler}/>
      <input type='button' value='9' className='button' onClick={clickHandler}/>
      <input type='button' value='*' className='button lastbtn' onClick={clickHandler}/>
      <input type='button' value='4' className='button' onClick={clickHandler}/>
      <input type='button' value='5' className='button' onClick={clickHandler}/>
      <input type='button' value='6' className='button' onClick={clickHandler}/>
      <input type='button' value='-' className='button lastbtn' onClick={clickHandler}/>
      <input type='button' value='1' className='button' onClick={clickHandler}/>
      <input type='button' value='2' className='button' onClick={clickHandler}/>
      <input type='button' value='3' className='button' onClick={clickHandler}/>
      <input type='button' value='+' className='button lastbtn' onClick={clickHandler}/>
      <input type='button' value='0' className='button' onClick={clickHandler}/>
      <input type='button' value='.' className='button' onClick={clickHandler}/>
      <input type='button' value='=' className='button lastbtn button1' onClick={calculate}/>
     
      
      

     
      
    
      
      
      
      
     
      
     </div>

  </div>
  </>
    )
}

export default Calculator
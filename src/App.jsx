


import { useState } from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';

function App() {
  const[weight,setWeight]=useState("")
  const[height,setHeight]=useState("")
  const[bmi,setBmi]=useState(0)
  const[isWight,setisWeight]=useState("true")
  const[isHeight,setisHeight]=useState("true")

  const Validite = (e)=>{
    console.log(e.target.name);
    
  console.log(e.target.value);

   console.log(e.target.value.match('^[0-9]*$'));

   console.log(!!e.target.value.match('^[0-9]*$'));


   if(!!e.target.value.match('^[0-9]*$')){
    if(e.target.name=='weight'){
      setWeight(e.target.value)
      setisWeight(true)
    }
    else if(e.target.name=='height'){
      setHeight(e.target.value)
      setisHeight(true)
    }
   }
   else{
    if(e.target.name=='weight'){
      setWeight(e.target.value)
      setisWeight(false)
    }
    else if(e.target.name=='height'){
      setHeight(e.target.value)
      setisHeight(false)
    }

   }

  
      
     
       
  }

  const handreset = ()=>{
    setWeight("")
    setHeight("")
    setisWeight(true)
    setisHeight(true)
    setBmi(0)
  }
  const hansubmit = ()=>{
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const hansubmit = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(hansubmit);
      let bmiMessage = '';

      if (hansubmit < 18.5) {
        bmiMessage = 'Underweight';
      } else if (hansubmit >= 18.5 && hansubmit < 24.9) {
        bmiMessage = 'Normal weight';
      } else if (hansubmit >= 25 && hansubmit < 29.9) {
        bmiMessage = 'Overweight';
      } else {
        bmiMessage = 'Obesity';
      }
      setMessage(bmiMessage);
    } else {
      alert('Please enter valid height and weight');
    }
    
     

  }
    

    
  return (
    <>
      <div className='container-fluid'>
        <div className='row w-100'>
          <div className='col-md-3'></div>
          <div className='col-md-6 p-md-5 p-0' >
            <div className='rounded bg-light p-5 ' style={{width:"600px"}}> 
             <h2 className='text-center'><span style={{color:"red"}}>BMI</span> <span style={{color:"yellow"}}>calculater</span></h2>
             <h4 className='text-center p-3' >Your bmi is</h4>
             <h2 className='text-center p-2 ' style={{color:"green"}}>{bmi}</h2>
             <h5 className='text-center p-1'>you are healthy</h5>

             
             
    
              

                <div className='d-flex justify-content-between p-2'>
                   <h5>Height (cm) :</h5>
                   <input type="0" name='height' placeholder='0' value={height} className='form-control'  style={{width:"200px"}} onChange={(e)=>Validite(e)}/>
                   </div>
                   <div className='d-flex justify-content-between p-2 '>
                   <h5>Weight (kg) :</h5>                 
                   <input type="0" name='weight' placeholder='0' value={weight} className='form-control'  style={{width:"200px"}} onChange={(e)=>Validite(e)}/>
  
                </div>
               
                



                <div className='d-flex justify-content-between my-3 '>
                <Button onClick={handreset} style={{width:'190px', height:'40px'}} variant="danger" disabled={isWight && isHeight ?false:true}>Reset</Button>
                <Button onClick={hansubmit} style={{width:'190px', height:'40px'}} variant="primary">Submit</Button>
                </div>
                 
            
              
           

             


            </div>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </>
  )
}

export default App





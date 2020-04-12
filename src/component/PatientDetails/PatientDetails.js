import React from 'react';
import './PatientDetails.css';
import { useForm} from 'react-hook-form';
import { useParams } from 'react-router-dom';

const PatientDetails = (props) => {
   
    const {key1,key2,key3} = useParams();
    const { register, handleSubmit, errors } = useForm();

    
    const onSubmit = (data) =>{
        fetch('https://warm-river-37564.herokuapp.com/patientinfo',{
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          alert('Your details successfully sent');
         
        })
        
      }
      

    return (
        <div className="container">
           
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <h1 style={{textAlign: "center", paddingBottom:"10px"}}>{key2}</h1>
                    <input name="name" className="form-control"  ref={register({ required: true })} placeholder="Your Name" />
                    {errors.name && <span className="error">Name is required</span>}<br/>

                    <input name="age" className="form-control"  ref={register({ required: true })} placeholder="Your Age" />
                    {errors.age && <span className="error">Age is required</span>}<br/>

                    <input name="weight" className="form-control"  ref={register({ required: true })} placeholder="Your weight" />
                    {errors.weight && <span className="error">Weight is required</span>}<br/>

                    <input name="address" className="form-control"  ref={register({ required: true })} placeholder="Your Address" />
                    {errors.address && <span className="error">Address is required</span>}<br/>

                    <input name="email" className="form-control" ref={register({ required: true })} placeholder="Your Email" />
                    {errors.email && <span className="error">Email is required</span>}<br/>

                    <input name="phone" className="form-control" ref={register({ required: true })} placeholder="Phone" />
                    {errors.phone && <span className="error">Phone Number is required</span>}<br/>

                    <input name="date" type="date" className="form-control" defaultValue={key3} ref={register({ required: true })} placeholder="dd/mm/yy" />
                    {errors.date && <span className="error">Date is required</span>}<br/>

                    <input name="time" className="form-control" defaultValue={key1} ref={register({ required: true })} />
                    {errors.time && <span className="error">Time is required</span>}<br/>

                    <button className="btn btn-primary form-control" type="submit" >Submit</button>
                </form> 
                        
        </div>
    );
};

export default PatientDetails;
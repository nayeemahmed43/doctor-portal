import React, { useState, useEffect } from 'react';
import './Appointment.css';
import MaskGroup1 from "../../images/Mask Group 1.png";
import DatePickers from './Calender';
import { Link } from 'react-router-dom';


const Appointment = () => {
    const [startDate, setStartDate] = useState(null);
    const [doctorInfo,setdoctorInfo] = useState([]);
    
    useEffect(() =>{
        fetch('https://warm-river-37564.herokuapp.com/doctor')
        .then(res => res.json())
        .then(data => {
            setdoctorInfo(data);
        })
    },[])
        
    return (
        <div className="container">

            <div className=" row d-flex align-items-center">
                <div className="col-md-6">
                    <h1 id="/appointment">Appointment</h1><br/><br/>
                    <DatePickers  handleDate={(e)=> setStartDate(e.target.value)}/> 
                </div> 
                <div className="col-md-6">
                    <img src={MaskGroup1} alt=""/>
                </div>
            </div>

            <h1 id="availableAppointment">Available Appointments on {startDate}</h1>
            {doctorInfo.length === 0  && <h3 style={{textAlign: "center"}}>Loading...</h3>}
            <div className="row d-flex justify-content-around">
            { doctorInfo.map((item,i) =>(
                <div class="card" key={i}>
                    <div class="card-body">
                        <h5 class="card-title" style={{color:"#38D2D2"}}>{item.specialist}</h5>
                        <p class="card-text">{item.time}</p>
                        <Link to={"/patientdetails/"+item.time+"/"+item.specialist+"/"+startDate}>
                            <button class="btn btn-primary">
                            Book Appointment
                            </button></Link>
                    </div>
                </div>
            ))}      
        </div>    
    </div>
    );
};

export default Appointment;
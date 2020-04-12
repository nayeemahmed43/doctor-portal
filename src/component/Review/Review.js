import React, { useState, useEffect } from 'react';
import './Review.css';
import { Link } from 'react-router-dom';
import DatePickers from '../Appointment/Calender';


const Review = () => {
    const [queryDate,setQueryDate] = useState(null);
    const [patients,setPatients] = useState([]);
    console.log(patients);

    useEffect(() =>{
        fetch('https://warm-river-37564.herokuapp.com/patientInfo/'+queryDate)
        .then(res => res.json())
        .then(data => {
            setPatients(data)
        })
    },[queryDate])

    return (
        
        <div>
            <div id="sidebar">
                <ul>
                    <li><Link to="/dashboard"><h6>Dashboard</h6></Link></li>
                    <li><Link><h6>Appointments</h6></Link></li>
                    <li><Link to="/patients"><h6>Patients</h6></Link></li>
                    <li><Link><h6>Prescription</h6></Link></li>
                    <li><Link><h6>Setting</h6></Link></li>
                </ul>
            </div>
            <h3 id="appointments">Appointments</h3>

            <div id="datepickers">
                <DatePickers handleDate={(e)=> setQueryDate(e.target.value)}/>
            </div>
            
            <div id="patientlist">
               <table className="table table-hover">
               <thead>
                    <tr>
                        <th>Name</th>
                        <th>Schedule</th>
                        <th>Action</th> 
                    </tr>  
                </thead>
                    
                {patients.map((item,i) =>(
                    
                    <tbody key={i}>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.time}</td>
                        </tr>
                        
                    </tbody>
                    
                ))}
               </table>
               
            </div>
            </div>
    );
};

export default Review;
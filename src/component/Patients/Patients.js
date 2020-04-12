import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Patients.css';

const Patients = () => {
    const [patients,setPatients] = useState([]);
    useEffect(() =>{
        fetch('https://warm-river-37564.herokuapp.com/patientinfo')
        .then(res => res.json())
        .then(data => {
            setPatients(data)
        })
    },[])
    return (
        <div>
            <div id="sidebar">
                <ul>
                    <li><Link to="/dashboard"><h6>Dashboard</h6></Link></li>
                    <li><Link to="/review"><h6>Appointments</h6></Link></li>
                    <li><Link><h6>Patients</h6></Link></li>
                    <li><Link><h6>Prescription</h6></Link></li>
                    <li><Link><h6>Setting</h6></Link></li>
                </ul>
            </div>
            <h3 id="allpatients">All Patients</h3>
            {patients.length === 0  && <h3 style={{textAlign: "center"}}>Loading...</h3>}
            <div id="all-patients-table">
            <table className="table table-hover">
               <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Age</th>
                         <th>Weight</th>
                         <th>Contact</th>
                         <th>Address</th>
                    </tr>  
                </thead>
                {patients.map((item,i) =>(
                    
                    <tbody key={i}>
                        <tr>
                            <td>{i+1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.weight}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                        </tr>
                        
                    </tbody>
                    
                ))}
            </table>
            </div>
        </div>
    );
};

export default Patients;
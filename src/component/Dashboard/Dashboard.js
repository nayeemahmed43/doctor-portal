import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const [recentAppointment,setRecentAppointment] = useState([]);

    useEffect(() =>{
        fetch('https://warm-river-37564.herokuapp.com/patientinfo')
        .then(res => res.json())
        .then(data => {
            setRecentAppointment(data)
        })
    },[])
    return (
        <div>
             <div id="sidebar">
                <ul>
                    <li><Link><h6>Dashboard</h6></Link></li>
                    <li><Link to="/review"><h6>Appointments</h6></Link></li>
                    <li><Link to="/patients"><h6>Patients</h6></Link></li>
                    <li><Link><h6>Prescription</h6></Link></li>
                    <li><Link><h6>Setting</h6></Link></li>
                </ul>
            </div>
            <h3 id="recentappointments">Recent Appointments</h3>
            {recentAppointment.length === 0  && <h3 style={{textAlign: "center"}}>Loading...</h3>}
            <div id="recent-appointment-table">
            <table className="table table-hover">
               <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Date</th>
                        <th>Time</th>
                         <th>Name</th>
                         <th>Contact</th>
                         <th>Prescription</th>
                         <th>Action</th>
                    </tr>  
                </thead>
                {recentAppointment.map((item,i) =>(
                    
                    <tbody key={i}>
                        <tr>
                            <td>{i+1}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                        </tr>
                        
                    </tbody>
                    
                ))}
            </table>
            </div>
        </div>
    );
};

export default Dashboard;
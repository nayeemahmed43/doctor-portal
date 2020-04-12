import React from 'react';
//import doctorInfo from '../doctorInfo';
const Info = () => {
    const handleAddInfo = () => {
        // this part is used to load data into Database from doctorInfo file(only for admin)
            
            // console.log('before post', doctorInfo.length);
            // fetch('http://localhost:4200/doctorinfo',{
            //     method: 'POST',
            //     headers:{
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(doctorInfo)
            // })
            // .then(res => res.json())
            // .then(data => {
            //     console.log('post successful', data);
            // })
    }
    return (
        <div>
            <h1>Add doctors info...</h1>
            <button className="btn btn-warning" onClick={handleAddInfo}>Add Inventory</button>
        </div>
    );
};

export default Info;
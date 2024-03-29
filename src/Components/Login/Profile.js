// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// function Profile() {
// const [records, setRecords] = useState([])

// useEffect(() =>{
//   fetch('http://localhost:51294/api/GetAllValues')
//   .then(response => response.json())
//   .then(data => setRecords([data]))
//   .catch(err => console.log(err))
// }, [])


// return (
//   <div>

//     <ul>
//       {/* {records.map((list, index)=>
//       <li key={index}>{list.Data[0].Message} </li>
//       )} */}


//         {records.map(item => (
//           <input key={item.Id}>{item.Data[11].FirstName} {item.Data[11].LastName} </input>
//           ))}
//    {records.map(item => (
//           <li key={item.Id}>{item.Data[11].MiddleName}</li>
//           ))}

//     </ul>


    
//   </div>
// )

// }

// export default Profile;

import React, { Component } from 'react'

export default class MyProfile extends Component {

constructor(props){
    super(props);
    this.state={
        user:[]
    }
}





async refreshUser(){
    fetch("http://localhost:51294/api/GetAllValues").then(response=>response.json())
    .then(data=>{
        this.setState({user : [data]});
    })
}

componentDidMount(){
    this.refreshUser();
}

    render() {
        const{user}=this.state;
        return (
            <div>
                <h2> My Profile</h2>
            {user.map(user=>
                <p>
                    <b>FirstName : {user.Data[1].FirstName}</b>
                    
                </p>
                )}<br/>
                 {user.map(user=>
                <p>
                    <b>Last Nam : {user.Data[1].LastName}</b>
                    
                </p>
                )}
            </div>
        )
    }
}

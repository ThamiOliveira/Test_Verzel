import React from 'react';

import Login from '../../Components/Login'

import { Redirect } from 'react-router-dom';

    

export default function PageLogin(){

     const signed = true 
     if(signed === false){
        return <Redirect to="dashboard" />
     }
    return <Login/>
    
}
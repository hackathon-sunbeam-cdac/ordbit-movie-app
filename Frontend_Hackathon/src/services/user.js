import {config} from './config'
import axios from 'axios'

export async function Register(firstName,lastName,email,password,phone,birth){

    try{
        const url = `${config.server}/user/register`
        const body = {firstName,lastName,email,password,phone,birth}
        const response =await axios.post(url,body) 
        return response.data;

    }catch(error){
        console.log("Exception in register post " + error);
    }
}

export async function loginx (email,password){

    try{
        const url = `${config.server}/user/login`
        const body = {email,password}
        const response = await axios.post(url,body)
        return response.data;
    }catch(error){
        console.log("Exception in login post " + error);
    }
    
}
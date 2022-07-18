import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

function Create() {
    let navigate = useNavigate();

    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [companyNumber, setCompanyNumber] = useState('');;

    const postData = () => {

        const url = `https://62c45bb0abea8c085a73b996.mockapi.io/Reactcrud`

            if(companyName.length <= 1){
                return Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Company name should not be empty',
                    showConfirmButton: true
                  })
            }else if(companyNumber.length !== 10){
                return Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'mobile number should be a 10 digit number',
                    showConfirmButton: true
                  })
            }else{
                axios.post(url, {
                    companyName,
                    email,
                    companyNumber,
                })
    
            .then(() => {
                navigate('/company/list');
            })
            }
            
    }

    const goBack = () =>{
        navigate("/company/list")
    } 

    return (
        <div className='container-fluid'>
        <div className='row'>
        <div className='col-lg-4'></div>
        <div className='text-black align-content-center col-lg-5 '>
            <Form className="create-form">
                <Form.Field>
                    <label>Company Name</label>
                    <input  placeholder='Company Name' onChange={(e) => setCompanyName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input  placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Company Mobile Number</label>
                    <input  placeholder='Company Number' onChange={(e) => setCompanyNumber(e.target.value)}/>
                </Form.Field>
                <Button color="blue" onClick={postData} type='submit'>Submit</Button>
                 <Button color="red" onClick={goBack}>
                    Cancel
                 </Button>
            </Form>
        </div>
        </div>
        </div>
    )
}

export default Create;
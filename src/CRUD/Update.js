import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

function Update() {
    let navigate = useNavigate();
    const [id, setID] = useState(null);
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('')
    const [companyName, setCompanyName] = useState('');
    const [companyNumber, setCompanyNumber] = useState('');
    const [uniqueNumber, setUniqueNumber] = useState('');
    const [lineofBusiness, setLineofBusiness] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setImage(localStorage.getItem('Image'));
        setCompanyName(localStorage.getItem('Company Name'));
        setEmail(localStorage.getItem('Email'));
        setCompanyNumber(localStorage.getItem('Company Number'));
        setUniqueNumber(localStorage.getItem('Unique Number'));
        setLineofBusiness(localStorage.getItem('Line of Business'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://62a6f21797b6156bff833b05.mockapi.io/CRUD/${id}`, {
            image,
            email,
            companyName,
            companyNumber,
            uniqueNumber,
            lineofBusiness
        }).then(() => {
            navigate('/company/list')
        })
    }

    const goBack = () =>{
        navigate("/company/list")
    } 

    return (
        <div className="container-fluid">
           
            <div className='row'>
            <div className='col-lg-4'>

            </div>
            <div className="col-lg-6">

            <Form className="create-form">
                <Form.Field>
                    <label>Image</label>
                    <input type="file" accept='image' onChange={(e) => setImage(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Company Name</label>
                    <input placeholder='Company Name' value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Company Mobile Number</label>
                    <input placeholder='Company Number' value={companyNumber} onChange={(e) => setCompanyNumber(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Unique Number</label>
                    <input placeholder='Unique Number' value={uniqueNumber} onChange={(e) => setUniqueNumber(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Line of Business</label>
                    <input placeholder='Line of Business' value={lineofBusiness} onChange={(e) => setLineofBusiness(e.target.value)}/>
                </Form.Field>
                <Button color='blue' type='submit' onClick={updateAPIData}>Update</Button>
                <Button color="red" onClick={goBack}>
                    Cancel
                 </Button>
            </Form>
        </div>
        </div>
        </div>
    )
}

export default Update;
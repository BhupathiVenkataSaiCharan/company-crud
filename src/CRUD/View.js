import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
// import axios from 'axios';
import { useNavigate } from 'react-router';

function View() {
    let navigate = useNavigate();
    const [id, setID] = useState(null);
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyNumber, setCompanyNumber] = useState('');
    const [uniqueNumber, setUniqueNumber] = useState('');
    const [lineofBusiness, setLineofBusiness] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setImage(localStorage.getItem('image'));
        setEmail(localStorage.getItem('Email'));
        setCompanyName(localStorage.getItem('Company Name'));
        setCompanyNumber(localStorage.getItem('Company Number'));
        setUniqueNumber(localStorage.getItem('Unique Number'));
        setLineofBusiness(localStorage.getItem('Line of Business'));
    }, []);

    // const updateAPIData = () => {
    //     axios.put(`https://62a6f21797b6156bff833b05.mockapi.io/CRUD/${id}`, {
    //         firstName,
    //         lastName,
    //         checkbox
    //     }).then(() => {
    //         navigate('/analytics')
    //     })
    // }

    const backHome = () => {
        navigate("/company/list");
    }
    return (
        <>
        <div className='main text-black' style={{width:"100%",height:"270px",backgroundColor:"aqua",marginTop:"-25px"}}>
            {/* <h1 style={{marginLeft:"120px",marginTop:"40px",fontSize:"40px"}}>{companyName}</h1>
            <p style={{marginLeft:"120px",marginTop:"100px",color:"black"}}>{email}</p>
            <p style={{marginLeft:"120px",marginTop:"60px"}}>{companyNumber}</p> */}
            <div>
                <ul style={{marginLeft:"120px",listStyle:"none",marginTop:"50px"}}>
                    <li style={{fontSize:"40px"}}>{companyName}</li>
                    <li style={{marginTop:"50px"}}>{email}</li>
                    <li style={{marginTop:"10px"}}>{companyNumber}</li>
                </ul>
            </div>
        </div>
        <div className='text-black text-lg-center' 
            style={{backgroundColor:"gray",width:"300px",height:"400px",float:"right",marginRight:"180px",marginTop:"-200px"}}>
            Image
        </div>
        <div className='text-lg-center p-lg-5 text-black'>
            <Form className="create-form">
                <Form.Field>
                    <label>Company Image:{image}</label>
                    {/* <p>{image}</p> */}
                </Form.Field>
                <Form.Field>
                    <label>Company Name:{companyName}</label>
                    {/* <p>{companyName}</p> */}
                </Form.Field>
                <Form.Field>
                    <label>Company Phone Number:{companyNumber}</label>
                    {/* <p>{companyNumber}</p> */}
                </Form.Field>
                <Form.Field>
                    <label>Website URL:website</label>
                    {/* <p>website</p> */}
                </Form.Field>
                <Form.Field>
                    <label>E-mail ID:{email}</label>
                    {/* <p>{email}</p> */}
                </Form.Field>
                <Form.Field>
                    <label>Line of Business:{lineofBusiness}</label>
                    {/* <p>{lineofBusiness}</p> */}
                </Form.Field>
                <Form.Field>
                    <label>GSTIN:GSTIN</label>
                    {/* <p>GSTIN</p> */}
                </Form.Field>
                <Form.Field>
                    <label>PAN: PAN Number</label>
                    {/* <p>PAN number</p> */}
                </Form.Field>
                <Form.Field>
                    <label>Company Opening Time: Time</label>
                    {/* <p>Time</p> */}
                </Form.Field>
                <Form.Field>
                    <label>Company Closing Time: Time</label>
                    {/* <p>Time</p> */}
                </Form.Field>
                <Form.Field>
                    <label>Address: Address</label>
                    {/* <p>Address</p> */}
                </Form.Field>
                <Form.Field>
                    <label>List of Branches</label>
                    <p>branch1</p>
                    <p>branch2</p>
                    <p>branch3</p>
                </Form.Field>
                <Form.Field>
                    <label>Company Unique Number:{uniqueNumber}</label>
                    {/* <p>{uniqueNumber}</p> */}
                </Form.Field>
                
                <Button primary type="submit" onClick={backHome} >Go back home</Button>
            </Form>
        </div>
        </>
    )
}

export default View;
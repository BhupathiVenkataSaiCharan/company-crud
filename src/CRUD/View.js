import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";

import {Icon} from "semantic-ui-react";
import {Link} from "react-router-dom";

function View() {
    let navigate = useNavigate();
    const [id, setID] = useState(null);
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyNumber, setCompanyNumber] = useState('');
    const [uniqueNumber, setUniqueNumber] = useState('');
    const [lineofBusiness, setLineofBusiness] = useState('');
    // const [companyRevenue, setCompanyRevenue] = useState('');
    // const [openingTime, setOpeningTime] = useState('');
    // const [closingTime, setClosingTime] = useState('');
    // const [discount, setDiscount] = useState('');
    // const [rating, setRating] = useState('');
    // const [pincode, setPincode] = useState('');
    // const [address1,setAddress1] = useState('');
    // const [address2, setAddress2] = useState('');
    // const [area, setArea] = useState('');
    // const [city, setCity] = useState('');
    // const [state, setState] = useState('');
    // const [country, setCountry] = useState('');

    // const [APIData, setAPIData] = useState([]);

    // useEffect(() => {
    //     axios.get(`https://62a6f21797b6156bff833b05.mockapi.io/CRUD`)
    //         .then((response) => {
    //             console.log(response.data)
    //             setAPIData(response.data);
    //         })
    // }, []);


    const setData = (data) => {
        let { id, image, companyName, email, companyNumber, uniqueNumber, lineofBusiness,
                companyRevenue,openingTime,closingTime,discount,rating,address1,address2,
                pincode,area,city,state,country } = data;

        localStorage.setItem('ID', id);
        localStorage.setItem('Image', image);
        localStorage.setItem('Email',email);
        localStorage.setItem('Company Name', companyName);
        localStorage.setItem('Company Number', companyNumber);
        localStorage.setItem('Unique Number', uniqueNumber);
        localStorage.setItem('Line of Business', lineofBusiness);
        localStorage.setItem('Company Revenue', companyRevenue);
        localStorage.setItem('Opening Time', openingTime);
        localStorage.setItem('Closing Time', closingTime);
        localStorage.setItem('Discount', discount);
        localStorage.setItem('Rating', rating);
        localStorage.setItem('Address1', address1);
        localStorage.setItem('Address2', address2);
        localStorage.setItem('Pincode', pincode);
        localStorage.setItem('Area', area);
        localStorage.setItem('City', city);
        localStorage.setItem('State', state);
        localStorage.setItem('Country', country);
    }

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setImage(localStorage.getItem('image'));
        setEmail(localStorage.getItem('Email'));
        setCompanyName(localStorage.getItem('Company Name'));
        setCompanyNumber(localStorage.getItem('Company Number'));
        setUniqueNumber(localStorage.getItem('Unique Number'));
        setLineofBusiness(localStorage.getItem('Line of Business'));
        // setCompanyRevenue(localStorage.setItem('Company Revenue'));
        // setOpeningTime(localStorage.setItem('Opening Time'));
        // setClosingTime(localStorage.setItem('Closing Time'));
        // setDiscount(localStorage.setItem('Discount'));
        // setRating(localStorage.setItem('Rating'));
        // setAddress1(localStorage.setItem('Address1'));
        // setAddress2(localStorage.setItem('Address2'));
        // setPincode(localStorage.setItem('Pincode'));
        // setArea(localStorage.setItem('Area'));
        // setCity(localStorage.setItem('City'));
        // setState(localStorage.setItem('State'));
        // setCountry(localStorage.setItem('Country'));
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
            {/* {APIData.map((data) => {
                return(
                    <div className='edit'>
                <Link to='/company/edit'>
                    <button onClick={() => setData(data)} style={{ border:"none", marginLeft:"150px"}}>
                        <Icon name='edit'/> 
                        Edit
                    </button>
                </Link>
            </div>
                )
            })} */}
            <div>
                <ul style={{marginLeft:"120px",listStyle:"none",marginTop:"50px"}}>
                    <li style={{fontSize:"40px"}}>{companyName}</li>
                    <li style={{marginTop:"50px"}}><FiIcons.FiMail style={{width:"20px",height:"20px",margin:"10px"}}/>{email}</li>
                    <li style={{marginTop:"10px"}}><FiIcons.FiPhoneCall style={{width:"20px",height:"20px",margin:"10px"}}/>{companyNumber}</li>
                    <li style={{marginTop:"10px"}}><BsIcons.BsGlobe style={{width:"20px",height:"20px",margin:"10px"}}/>Website URL</li>
                </ul>
                <p style={{position:"relative",marginLeft:"500px",marginTop:"-150px"}}>Line of Business</p>
            </div>
        </div>
        <div className='text-black text-lg-center' 
            style={{backgroundColor:"gray",width:"300px",height:"400px",float:"right",marginRight:"180px",marginTop:"-200px"}}>
            Image
        </div>
        {/* <div className='text-black' style={{marginLeft:"50px",marginTop:"40px"}}>
            <h3>Line of business</h3>
        </div> */}
        <div className='text-black' style={{}}>
            <h1 style={{marginLeft:"40px",marginTop:"30px"}}>Head Branch details</h1>
            <p style={{marginLeft:"50px"}}>{}<BiIcons.BiMap style={{width:"20px",height:"20px",margin:"10px"}}/>Address</p>
            <p style={{marginLeft:"50px"}}>
                <BiIcons.BiTime style={{width:"20px",height:"20px",margin:"10px"}}/>
                opening-closing
            </p>
        </div>
        <div className='text-lg-center p-lg-5 text-black'>
            <Form className="create-form">
                {/* <Form.Field>
                    <label>Company Image:{image}</label>
                </Form.Field>
                <Form.Field>
                    <label>Company Name:{companyName}</label>
                </Form.Field>
                <Form.Field>
                    <label>Company Phone Number:{companyNumber}</label>
                </Form.Field> */}
                {/* <Form.Field>
                    <label>Website URL:website</label>
                </Form.Field>
                <Form.Field>
                    <label>E-mail ID:{email}</label>
                </Form.Field> */}
                <Form.Field>
                    <label>Line of Business:{lineofBusiness}</label>
                </Form.Field>
                <Form.Field>
                    <label>GSTIN:GSTIN</label>
                </Form.Field>
                <Form.Field>
                    <label>PAN: PAN Number</label>
                </Form.Field>
                {/* <Form.Field>
                    <label>Company Opening Time: Time</label>
                </Form.Field>
                <Form.Field>
                    <label>Company Closing Time: Time</label>
                </Form.Field>
                <Form.Field>
                    <label>Address: Address</label>
                </Form.Field>
                <Form.Field>
                    <label>List of Branches</label>
                    <p>branch1</p>
                    <p>branch2</p>
                    <p>branch3</p>
                </Form.Field> */}
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
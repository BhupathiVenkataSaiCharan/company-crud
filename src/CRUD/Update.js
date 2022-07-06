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
    const [companyRevenue, setCompanyRevenue] = useState('');
    const [openingTime, setOpeningTime] = useState('');
    const [closingTime, setClosingTime] = useState('');
    const [discount, setDiscount] = useState('');
    const [rating, setRating] = useState('');
    const [pincode, setPincode] = useState('');
    const [address1,setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [area, setArea] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setImage(localStorage.getItem('Image'));
        setCompanyName(localStorage.getItem('Company Name'));
        setEmail(localStorage.getItem('Email'));
        setCompanyNumber(localStorage.getItem('Company Number'));
        setUniqueNumber(localStorage.getItem('Unique Number'));
        setLineofBusiness(localStorage.getItem('Line of Business'));
        setCompanyRevenue(localStorage.getItem('Company Revenue'));
        setOpeningTime(localStorage.getItem('Opening Time'));
        setClosingTime(localStorage.getItem('Closing Time'));
        setDiscount(localStorage.getItem('Discount'));
        setRating(localStorage.getItem('Rating'));
        setAddress1(localStorage.getItem('Address1'));
        setAddress2(localStorage.getItem('Address2'));
        setPincode(localStorage.getItem('Pincode'));
        setArea(localStorage.getItem('Area'));
        setCity(localStorage.getItem('City'));
        setState(localStorage.getItem('State'));
        setCountry(localStorage.getItem('Country'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://62c45bb0abea8c085a73b996.mockapi.io/Reactcrud/${id}`, {
            image,
            email,
            companyName,
            companyNumber,
            uniqueNumber,
            lineofBusiness,
            companyRevenue,
            openingTime,
            closingTime,
            address1,
            address2,
            discount,
            rating,
            pincode,
            area,
            city,
            state,
            country
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
                    {/* <input placeholder='Line of Business' value={lineofBusiness} onChange={(e) => setLineofBusiness(e.target.value)}/> */}
                    <select value={lineofBusiness} onChange={(e)=>{setLineofBusiness(e.target.value)}}>
                        <option value="Products and Services">Product & Services</option>
                        <option value="Products">Products</option>
                        <option value="Services">Services</option>
                        <option value="Business">Business</option>
                        <option value="Education">Education</option>
                        <option value="Others">Others</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Revenue of the Company</label>
                    <input  placeholder='Company Revenue' value={companyRevenue} onChange={(e) => setCompanyRevenue(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Openingtime of the company</label>
                    <input  placeholder='Opening Time' value={openingTime} onChange={(e) => setOpeningTime(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Closingtime of the company</label>
                    <input  placeholder='Closing Time' value={closingTime} onChange={(e) => setClosingTime(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Discount</label>
                    {/* <input  placeholder='Discount' value={discount} onChange={(e) => setDiscount(e.target.value)}/> */}
                    <select value={discount} onChange={(e)=>setDiscount(e.target.value)}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Rating</label>
                    {/* <input  placeholder='Rating' value={rating} onChange={(e) => setRating(e.target.value)}/> */}
                    <select value={rating} onChange={(e)=>setRating(e.target.value)}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Address of the Head Branch</label>
                    <input  placeholder='Address1' value={address1} onChange={(e) => setAddress1(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Address of second branch(if any)</label>
                    <input  placeholder='Address2' value={address2} onChange={(e) => setAddress2(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Pincode</label>
                    <input  placeholder='Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Area</label>
                    <input  placeholder='Area' value={area} onChange={(e) => setArea(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input  placeholder='City' value={city} onChange={(e) => setCity(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <input  placeholder='State' value={state} onChange={(e) => setState(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Country</label>
                    <input  placeholder='Country' value={country} onChange={(e) => setCountry(e.target.value)}/>
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
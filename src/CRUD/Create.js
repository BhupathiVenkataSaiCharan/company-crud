import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

function Create() {
    let navigate = useNavigate();

    const [image, setImage] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [lineofBusiness, setLineofBusiness] = useState('');
    const [companyNumber, setCompanyNumber] = useState('');
    const [uniqueNumber, setUniqueNumber] = useState('');
    const [companyRevenue, setCompanyRevenue] = useState('');
    const [openingTime, setOpeningTime] = useState('');
    const [closingTime, setClosingTime] = useState('');
    const [discount, setDiscount] = useState('yes');
    const [rating, setRating] = useState('yes');
    const [pincode, setPincode] = useState('');
    const [address1,setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [area, setArea] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    // const [checkbox, setCheckbox] = useState(false);
    // console.log(checkbox)
    const postData = () => {

        const url = `https://62c45bb0abea8c085a73b996.mockapi.io/Reactcrud`

        // const formData = new FormData()
        // formData.append('image',image)
        // console.log("hello charan")
            if(companyName.length <= 3){
                // alert("invalid name of company");
                return Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'All fields are mandatory!',
                    showConfirmButton: true
                  })
            // }else if(companyNumber.length !==10){
            //     return Swal.fire({
            //         icon: 'error',
            //         title: 'Error',
            //         text: 'Company Number is mandatory!',
            //         showConfirmButton: true
            //       })
            }else{


                axios.post(url, {
                    image,
                    companyName,
                    email,
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
                    <label>Image</label>
                    {/* <input required placeholder='First Name' onChange={(e) => setImage(e.target.value)}/> */}
                    <input type="file" accept='image' onChange={(e) => setImage(e.target.files[0])} />
                </Form.Field>
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
                <Form.Field>
                    <label>Unique Company Number</label>
                    <input  placeholder='Unique Number' onChange={(e) => setUniqueNumber(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Line of business of the company</label>
                    {/* <input  placeholder='Line of Business' onChange={(e) => setLineofBusiness(e.target.value)}/> */}
                    <select value={lineofBusiness} onChange={(e)=>{setLineofBusiness(e.target.value)}}>
                        <option value="ps">Product & Services</option>
                        <option value="pro">Products</option>
                        <option value="serv">Services</option>
                        <option value="bus">Business</option>
                        <option value="edu">Education</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Revenue of the Company</label>
                    <input  placeholder='Company Revenue' onChange={(e) => setCompanyRevenue(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Openingtime of the company</label>
                    <input  placeholder='Opening Time' onChange={(e) => setOpeningTime(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Closingtime of the company</label>
                    <input  placeholder='Closing Time' onChange={(e) => setClosingTime(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Discount</label>
                    {/* <input  placeholder='Discount' onChange={(e) => setDiscount(e.target.value)}/> */}
                    <select value={discount} onChange={(e)=>setDiscount(e.target.value)}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Rating</label>
                    {/* <input  placeholder='Rating' onChange={(e) => setRating(e.target.value)}/> */}
                    <select value={rating} onChange={(e)=>setRating(e.target.value)}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Address of the Head Branch</label>
                    <input  placeholder='Address1' onChange={(e) => setAddress1(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Address of second branch(if any)</label>
                    <input  placeholder='Address2' onChange={(e) => setAddress2(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Pincode</label>
                    <input  placeholder='Pincode' onChange={(e) => setPincode(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Area</label>
                    <input  placeholder='Area' onChange={(e) => setArea(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input  placeholder='City' onChange={(e) => setCity(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <input  placeholder='State' onChange={(e) => setState(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Country</label>
                    <input  placeholder='Country' onChange={(e) => setCountry(e.target.value)}/>
                </Form.Field>
                {/* <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field> */}
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
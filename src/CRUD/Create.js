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
    const [companyRevenue, setCompanyRevenue] = useState('');
    const [openingTime, setOpeningTime] = useState('');
    const [closingTime, setClosingTime] = useState('');
    const [uniqueNumber, setUniqueNumber] = useState('');
    const [address,setAddress] = useState('');
    

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [checkbox, setCheckbox] = useState(false);
    // console.log(checkbox)
    const postData = () => {

        const url = `https://62a6f21797b6156bff833b05.mockapi.io/CRUD`

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
            }else if(companyNumber.length !==10){
                return Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Company Number is mandatory!',
                    showConfirmButton: true
                  })
            }else{
                axios.post(url, {
                    // firstName,
                    // lastName,
                    image,
                    companyName,
                    email,
                    companyNumber,
                    uniqueNumber,
                    lineofBusiness,
                    address
                    // checkbox
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
                    <input type="file" accept='image' onChange={(e) => setImage(e.target.value)} />
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
                    <input  placeholder='Line of Business' onChange={(e) => setLineofBusiness(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Line of business of the company</label>
                    <input  placeholder='Address' onChange={(e) => setAddress(e.target.value)}/>
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
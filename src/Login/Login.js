import React,{useState,useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./login.css";

import * as FaIcons from "react-icons/fa";

import Swal from 'sweetalert2';


import OTPInput, { ResendOTP } from "otp-input-react";


const Login = () => {

    const initialvalues = {number:"", password:""}
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) =>{
        const value = e.target.value;
        const name = e.target.name;
        setFormValues((prev)=>({...prev, [name]:value}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const errors = validate(formValues);
      
        if (Object.keys(errors).length) {
          setFormErrors(errors);
        } else {
          setIsSubmit(true);
        }
    }

    let navigate = useNavigate();

    // const handleSubmits = (e) =>{
    //      e.preventDefault();
    //      const passerrors = validates(formValues);
      
    //     if (Object.keys(passerrors).length) {
    //       setFormErrors(passerrors);
    //     } else {
    //       navigate("/company/list");
    //     }
    // }


    useEffect(()=>{
        const formS = JSON.parse(localStorage.getItem("user"));
        if(formValues ===""){
            setFormValues((prev)=>({...prev, ...formS}));
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(formValues));
    },[formValues]);


    const validates = (values) =>{
        const passerrors ={}

        const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/;

        if(!values.password){
            passerrors.password = "Password is required";
        }else if(!regexp.test(values.password)){
            passerrors.password = "passsword must contain atleast one uppercase,lowercase,number,special character";
        }
        else if(values.password.length < 4){
            passerrors.password = "Password must me more than 4 characters";
        }else if (values.password.length > 6){
            passerrors.password = "Password cannot be more than 6 characters";
        }
        return passerrors;

    }

    const validate = (values) =>{
        const errors = {}
        
        const regexn = /^(\+91[-\s]?)?[0]?(91)?[123456789]\d{9}$/;
        
        /*number validation */

        if(!values.number){
            errors.number = "Mobile Number is required";
        }else if(!regexn.test(values.number)){
            errors.number = "Please enter a valid mobile number"
        }else if(values.number.length > 10){
            errors.number = "number must be only 10 digits"
        }
        return errors;
    };


    const [otp, setOtp] = useState("");

    const handleSubmits = (e) =>{
        e.preventDefault();
        if(otp.length !==4){
            return Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Invalid OTP',
                showConfirmButton: true
              })
        }else{
            navigate("/company/list");
        }
    }


  return (
    <>
        <div className='container-fluid'>
            {/* <div className='row'>
                <div className='col-lg-12' style={{width:"100%"}}>
                    <h1 className='text-lg-center' style={{marginTop:"100px"}}>Login with the help of OTP</h1>
                </div>
            </div> */}
            <div className='row'>
                <div className='col-lg-12 text-lg-center'>
                    <p style={{marginTop:"100px"}}></p>
                </div>
            </div>

            {/*form for phone number input field and validation */}
            <div className='row'>
                <div className='col-lg-12 text-lg-center'>
                {  !isSubmit 
                    
                    ? 
                            
                    <form onSubmit={handleSubmit} >
                        <div>
                        <div className='otp-heading'>
                                <h1>OTP sent to the registered Mobile Number</h1>
                            </div>
                            <div>
                                <label style={{position:"relative", top:"8px",right:"5px",left:"115px"}}>

                                <FaIcons.FaPhoneAlt/></label>

                                <input className='input_field' type="number" name="number" placeholder='&nbsp;'
                                        autoComplete='off'
                                        value={formValues.number}
                                        onChange={handleChange}
                                        style={{width:"180px",height:"35px",backgroundColor:"#DCDCDC"}}
                                />
                                <label className='input_label'>Mobile Number</label>

                                <p style={{color:"red",fontSize:"13px",position:"fixed",marginLeft:"690px",marginTop:"10px"}} >{formErrors.number}</p>
                            </div>
                                <button className='btn-primary'
                                        style={{width:"210px",height:"30px",fontSize:"15px",
                                        marginLeft:"30px",marginTop:"50px",
                                        backgroundColor:" rgb(0, 110, 255)"
                                        }}>
                                        Submit</button>
                        </div>
                    </form>
                     
                    :

                    <form onSubmit={handleSubmits} >
                        <div>
                            {/* <div>
                                <label style={{position:"relative", top:"8px",right:"5px",left:"80px"}} ><FaIcons.FaLock/></label>
                                <input className='input_fieldp' type="password" name='password' placeholder='&nbsp;'
                                value={formValues.password}
                                onChange={handleChange}
                                style={{width:"180px",height:"35px",backgroundColor:"transparent"}}
                                />
                                <label className='input_labelp'>Password</label>
                                <p style={{color:"red",fontSize:"13px",marginTop:"10px"}}>{formErrors.password}</p>
                            </div>                     */}
                            {/* style={{marginLeft:"670px"}} */}
                            <div className='otp-heading'>
                                <h1>OTP sent to the registered Mobile Number</h1>
                            </div>
                            <div className='otp-input'>
                            <OTPInput value={otp} onChange={setOtp} autoFocus OTPLength={4} otpType="number" disabled={false}/>
                            </div>
                            {/* style={{marginLeft:"650px",marginTop:"30px",marginRight:"600px"}} */}
                            <div className='resend-otp'>
                            <ResendOTP onResendClick={() => console.log("Resend clicked")} />
                            </div>
                            <button className='otp-button'>Login</button>
                        </div>
                    </form>
                }
                </div>
            </div>
            {/*form for phone number input field and validation */}

        </div>
    </>
  )
}

export default Login;
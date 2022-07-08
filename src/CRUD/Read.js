import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, List, Popup, Grid, Icon } from 'semantic-ui-react';
import { useNavigate, Link } from 'react-router-dom';

import * as CgIcons from "react-icons/cg"
import * as MdIcons from "react-icons/md"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from "react-icons/bi";

import Modal from "@material-ui/core/Modal";
// import { Typography } from '@material-ui/core';

import SideMenu from '../SideMenu/SideMenu';

function Read() {

    const [APIData, setAPIData] = useState([]);
    
    // const url = `https://62a6f21797b6156bff833b05.mockapi.io/CRUD`

        // const formData = new FormData()

        // formData.append('image',image)

    useEffect(() => {
        axios.get(`https://62c45bb0abea8c085a73b996.mockapi.io/Reactcrud`)
            .then((response) => {
                console.log(response.data);
                setAPIData(response.data);
            })
    }, []);

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

    const getData = () => {
        axios.get(`https://62c45bb0abea8c085a73b996.mockapi.io/Reactcrud`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://62c45bb0abea8c085a73b996.mockapi.io/Reactcrud/${id}`)
        
        // .then(()=>{
        //     navigate("/company/list");
        // })
        .then(() => {
            getData();
        })
    }

    let navigate = useNavigate();

    const addUser = () => {
        navigate("/company/create");
    }


    //modal for delete

    const [open, setOpen] = useState(false);

    const modalOpen = () => {
        setOpen(!open);

    }

    //search filter

    const [search, setSearch] = useState('');

    return (
        <>
       <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12' style={{marginLeft:"-11px"}}>
                    <SideMenu/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6'>
                    <Button primary
                        style={{width:"150px",height:"40px"}}
                        onClick={addUser}>Add Company</Button>

                        {/* search input */}
                        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} style={{width:"150px",height:"40px"}} />


<table style={{width:"800px",height:"200px"}}>
       <thead style={{margin:"50px"}}>
        <tr>
            <th style={{textAlign:"center"}}>List of Companies</th>
        </tr>
       </thead>
                {APIData.filter(data=> data.companyName.includes(search)).map((data,id)=>{
                    return(
                        <>
                        {/* <tbody>
                            data.image
                        </tbody> */}
                        <tbody key={id}>
                            <li style={{ minHeight:"140px",borderRadius:"5px",margin:"20px 0px",listStyle:"none",padding:"25px",
                                        backgroundColor:"white",boxShadow:"0 0 20px 0px rgba(0,0,0,0.2)"}}>
                            <tr>
                            <Link to="/company/view">
                                            <button 
                                                style={{background:"transparent",border:"none",color:"blue"}} 
                                                    onClick={() => setData(data)}>
                                                {data.companyName}
                                            </button>
                                            
                            </Link>
                            </tr>
                            <tr>{data.companyNumber}</tr>
                            <tr>{data.uniqueNumber}</tr>
                            <tr>{data.lineofBusiness}</tr>
                            </li>
                            <div style={{position:"absolute",right:"380px",marginTop:"-120px"}}>
                                    <Popup
                                        content=''
                                        on='click'
                                        openOnTriggerClick
                                        position="bottom right"
                                        trigger={<Button circular basic icon={<AiIcons.AiOutlineEllipsis bo color='black' fontSize="1.3rem"/>} />}>
                                    <Grid>
                                        <Grid.Row>
                                            <Link to='/company/edit'>
                                            <button onClick={() => setData(data)}
                                            style={{background:"transparent", border:"none", marginLeft:"50px"}}>
                                                <Icon name='edit'/> Edit</button>
                                            </Link>
                                        </Grid.Row>
                                        <hr/>
                                        <Grid.Row>
                                            <button onClick={() => onDelete(data.id)}
                                                    style={{background:"transparent", border:"none"}}
                                                    color="red">
                                                <MdIcons.MdDelete color='black' fontSize="1.3rem"/>delete
                                            </button>
                                        </Grid.Row>
                                    </Grid>
                                    </Popup>
                            </div>
                        </tbody>
                        </>
                            )
                        })}
                    </table>
                    
                </div>
                <p>hello</p>
            </div>
        </div>
       {/* <div className='row'> */}

       
       {/* <Button primary onClick={addUser}>Add Company</Button>
       <>
       
       <table style={{width:"800px",height:"200px"}}>
       <thead style={{margin:"50px"}}>
        <tr>
            <th style={{textAlign:"center"}}>List of Companies</th>
        </tr>
       </thead>
                {APIData.map((data,id)=>{
                    return(
                        <>
                        //<tbody>
                          //  data.image
                        //</tbody>
                        <tbody key={id}>
                            <li style={{ minHeight:"120px",borderRadius:"5px",margin:"20px 0px",listStyle:"none",padding:"25px",
                                        backgroundColor:"white",boxShadow:"0 0 20px 0px rgba(0,0,0,0.2)"}}>
                            <tr>
                            <Link to="/company/view">
                                            <button 
                                                style={{background:"transparent",border:"none",color:"blue"}} 
                                                    onClick={() => setData(data)}>
                                                {data.companyName}
                                            </button>
                                            
                            </Link>
                            <div style={{marginLeft:"650px"}}>
                                    <Popup
                                        content=''
                                        on='click'
                                        openOnTriggerClick
                                        position="bottom right"
                                        trigger={<Button circular icon={<AiIcons.AiOutlineEllipsis color='black' fontSize="1.3rem"/>} />}>
                                    <Grid>
                                        <Grid.Row>
                                            <Link to='/company/edit'>
                                            <button onClick={() => setData(data)}
                                            style={{background:"transparent", border:"none", marginLeft:"50px"}}>
                                                <Icon name='edit'/> Edit</button>
                                            </Link>
                                        </Grid.Row>
                                        <hr/>
                                        <Grid.Row>
                                            <button onClick={() => onDelete(data.id)}
                                                    style={{background:"transparent", border:"none"}}
                                                    color="red">
                                                <MdIcons.MdDelete color='black' fontSize="1.3rem"/>delete
                                            </button>
                                        </Grid.Row>
                                    </Grid>
                                    </Popup>
                                    </div>
                            </tr>
                            <tr>{data.companyNumber}</tr>
                            <tr>{data.uniqueNumber}</tr>
                            <tr>{data.lineofBusiness}</tr>
                            
                            </li>

                        </tbody>
                        
                        </>
                    )
                })}
       </table>
       </>
       </div> */}
        {/* </div> */}
        {/*       <Table singleLine>
                <Table.Header>
                    <Table.Row textAlign='right' >
                        <Table.HeaderCell>List of Companies</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                
                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>
                                    <List>
                                        <List.Item>
                                            <div style={{width:"40px",height:"40px"}}>
                                                {data.image}
                                            </div>
                                        </List.Item>
                                        <List.Item>
                                            <Link to="/company/view">
                                            <button 
                                                style={{background:"transparent",border:"none",color:"blue"}} 
                                                    onClick={() => setData(data)}>
                                                {data.companyName}
                                            </button>
                                            </Link>
                                        </List.Item>
                                        <List.Item>{data.companyNumber}</List.Item>
                                        <List.Item>{data.uniqueNumber}</List.Item>
                                        <List.Item>{data.lineofBusiness}</List.Item>
                                    </List>
                                </Table.Cell>
                                <Table.Cell> 

                                    <div style={{float:"right",marginTop:"30px",marginRight:"30px"}}>
                                    <Popup
                                        content=''
                                        on='click' 
                                        position="bottom right" 
                                        trigger={<Button circular icon={<AiIcons.AiOutlineEllipsis color='black' fontSize="1.3rem"/>} />}>
                                    <Grid>
                                        <Grid.Row>
                                            <Link to='/company/edit'>
                                            <button onClick={() => setData(data)}
                                            style={{background:"transparent", border:"none", marginLeft:"50px"}}>
                                                <Icon name='edit'/> Edit</button>
                                            </Link>
                                        </Grid.Row>
                                        <hr/>
                                        <Grid.Row>
                                            <button onClick={() => onDelete(data.id)}
                                            style={{background:"transparent", border:"none"}}
                                            color="red">
                                                <MdIcons.MdDelete color='black' fontSize="1.3rem"/>Delete</button>
                                        </Grid.Row>
                                    </Grid>
                                    </Popup>
                                    </div>
                                        <Modal
                                            onClose={()=>setOpen(!open)}
                                            open={open}
                                            style={{
                                            position: 'absolute',
                                            border: '2px solid #000',
                                            backgroundColor: 'gray',
                                            boxShadow: '2px solid black',
                                            height:150,
                                            width: 300,
                                            margin: 'auto'
                                            }}
                                        >
                                        <>
                                            <h2 className="text-lg-center">Are You Sure?</h2>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <Button color='red' onClick={() => onDelete(data.id)}>
                                                        Yes
                                                    </Button>
                                                </div>
                                                <div className="col-lg-6">
                                                <Link to='/company/list'>
                                                    <Button primary onClick={() => modalOpen(!open)}>
                                                        Cancel
                                                    </Button>
                                                </Link>
                                                
                                                </div>
                                            </div>
                                        </>
                                        </Modal>

                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>*/}
    </>

            
    )
}

export default Read;
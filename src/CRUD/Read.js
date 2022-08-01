import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button, List, Popup, Grid, Icon,Dropdown,Menu, Header } from 'semantic-ui-react';
import { useNavigate, Link } from 'react-router-dom';

import * as CgIcons from "react-icons/cg"
import * as MdIcons from "react-icons/md"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from "react-icons/fi";


import { CSVLink } from 'react-csv';


import {
     Modal, ModalFooter,
    ModalHeader, ModalBody
} from "reactstrap"

// import Modal from "@material-ui/core/Modal";
// import { Typography } from '@material-ui/core';

import SideMenu from '../SideMenu/SideMenu';

function Read() {

    const [APIData, setAPIData] = useState([]);

    const [idToDelete, setIdToDelete] = useState(0);
    
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

    const onDelete = () => {
        axios.delete(`https://62c45bb0abea8c085a73b996.mockapi.io/Reactcrud/${idToDelete}`)

        
        // .then(()=>{
        //     navigate("/company/list");
        // })
        .then(()=>{
            navigate("/company/list");
            toggle();
        })
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

    const toggle = () => setOpen(!open);


    //search filter const for individual data

    // const [filter,setFilter] = useState("");

    const [search, setSearch] = useState('');

    // const [output,setOutput] = useState('');
    
    // useEffect(()=>{
    //     setOutput([])
    //     APIData.filter((val)=>{
    //         if(val.companyName.toLowerCase().includes(search.toLowerCase())){
    //             setOutput(output=>[...output,val])
    //         }
    //     })
    // },[search])

    // search const for multiple items

    // const [searchText, setSearchText] = useState('');
    // const [ data1,setData1] = useState('');

    // const handleChange = (value) =>{
    //     setSearchText(value);
    // }

    // const [crud, setCrud] = useState(false);


    //filter items

    // const [items, setItems] = useState(APIData);

    // const filterItem = (categItem) =>{
    //     const updatedItems = APIData.filter((curElem)=>{
    //         return curElem.lineofBusiness === categItem;
    //     });
    //     setItems(updatedItems);
    // }


    const headers = [
        {label:'Company Name', key:'companyName'},
        {label:'Company Number', key:'companyNumber'},
        {label:'Email', key:'email'}
    ];

    const csvReport ={
        filename: 'Report.csv',
        headers:headers,
        data: APIData
    };


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

                        {/* search input for individual data */}
                        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder="Search by any Category"
                                style={{position:"absolute",width:"260px",height:"40px",marginLeft:"285px",border:"none",
                                        fontSize:"15px",padding:"8px",borderRadius:"20px 20px 20px 20px"}} />

                            {/* Search:<input type="text" placeholder='type to search' value={searchText} onChange={(e)=>handleChange(e.target.value)} /> */}

                <table style={{width:"700px",height:"200px"}}>
                    <thead style={{margin:"50px"}}>
                        <tr>
                            <th style={{textAlign:"center"}}>List of Companies</th>
                        </tr>
                    </thead>
       
{/*to add search for 1 particular id-------
.filter(data=> data.companyName.toLowerCase().includes(search.toLowerCase()))-----add this tho below btw APIData and .map */}
        
{/*to add search for all categories of array data--------
.filter(data =>Object.values(data).some(value => value.toLowerCase().includes(search.toLowerCase())))
-----add this tho below btw APIData and .map */}
{/* .filter(data =>Object.values(data).some(value => value.toLowerCase().includes(search.toLowerCase()))) */}
        {/* {items.filter(data =>Object.values(data).some(value => value.toLowerCase().includes(search.toLowerCase()))).map((data,id)=>{ */}
        {APIData.filter(data =>Object.values(data).some(value => value.toLowerCase().includes(search.toLowerCase()))).map((data,id)=>{
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
                            {/* style={{position:"absolute",right:"480px",marginTop:"-120px"}} */}
                            <div style={{position:"absolute",marginLeft:"580px",marginTop:"-120px"}}>
                                    {/* <Popup
                                        content=''
                                        on='click'
                                        closeOnTriggerClick
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
                                    </Popup> */}
                            <Dropdown icon={<AiIcons.AiOutlineEllipsis 
                                                    style={{color:'black',fontSize:"1.3rem",marginTop:"15px",marginLeft:"30px",
                                                            border:"1px solid black",width:"30px",height:"30px",borderRadius:"50%"}}
                                                    />} pointing="top right">
                                <Dropdown.Menu>
                                    <Dropdown.Item icon='edit' text='Edit'>
                                        <Link to='/company/edit'>
                                            <button onClick={() => setData(data)}
                                            style={{background:"transparent", border:"none"}}>
                                                 <FiIcons.FiEdit color='black' fontSize="1.3rem"/> Edit</button>
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item icon='delete' text='Delete'>
                                            {/* <button onClick={toggle} */}
                                            <button onClick={() => {setIdToDelete(data.id);toggle();}}
                                            
                                                    style={{background:"transparent", border:"none"}}
                                                    color="red">
                                                <MdIcons.MdDelete color='black' fontSize="1.3rem"/>delete
                                            </button>
                                            {/* <Modal
                                            onClose={modalClose}
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
                                                    <button color='red' onClick={() => onDelete(data.id)}>
                                                        Yes
                                                    </button>
                                                </div>
                                                <div className="col-lg-6">
                                                <Link to='/company/list'>
                                                    <button primary onClick={modalClose}>
                                                        Cancel
                                                    </button>
                                                </Link>
                                                
                                                </div>
                                            </div>
                                        </>
                                        </Modal> */}
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                                
                                                <Modal isOpen={open} toggle={toggle}>
                                                    <ModalHeader
                                                        toggle={toggle}>Warning</ModalHeader>
                                                    <ModalBody>
                                                        Are you sure to delete this id from the list...
                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button color="red" onClick={onDelete}>Okay</Button>
                                                        <Button color="primary" onClick={toggle}>Cancel</Button>
                                                    </ModalFooter>
                                                </Modal>

                                    {/* <button
                                    style={{background:"transparent",border:"1px solid black",borderRadius:"50%",width:"40px",height:"40px"}}
                                     onClick={()=>setCrud(crud=>!crud)}><AiIcons.AiOutlineEllipsis bo color='black' fontSize="1.3rem"/></button>
                                    {crud
                                    ? 
                                    <>
                                    <ul key={id} style={{listStyle:"none",position:"relative",marginLeft:"-60px",border:"1px solid black"
                                                    ,width:"100px",height:"70px",background:"white"}}>
                                        <li style={{marginBottom:"10px"}}>
                                        <Link to='/company/edit'>
                                            <button onClick={() => setData(data)}
                                            style={{background:"transparent", border:"none",marginTop:"8px"}}>
                                                <Icon name='edit'/> Edit</button>
                                            </Link>
                                        </li>
                                        <li>Delete</li>
                                    </ul>
                                    </>
                                    :
                                    null} */}
                            </div>
                        </tbody>
                        </>
                            )
                        })}
                    </table>
                    
                </div>
                {/* <div className='col-lg-3'>
                    <h1>Filter</h1>
                    <selct value={setAPIData}>
                        <option><button onClick={()=>setItems(APIData)}>All</button></option>
                        <option></option>
                    </selct>
                    <ul style={{listStyle:"none"}}>
                        <li></li>
                        <li><button onClick={()=>filterItem('Product & Services')}>Product & Services</button></li>
                        <li><button onClick={()=>filterItem("Products")}>Products</button></li>
                        <li><button onClick={()=>filterItem("Services")}>Services</button></li>
                        <li><button onClick={()=>filterItem("Business")}>Business</button></li>
                        <li><button onClick={()=>filterItem("Education")}>Education</button></li>
                        <li><button onClick={()=>filterItem("Others")}>Others</button></li>
                        <li><button onClick={()=>filterItem("not-selected")}>none</button></li>
                    </ul>
                </div> */}
                {/* <div className='col-lg-3'>
                    filtering 
                    <select value={filter} onChange={(e)=>{setFilter(e.target.value)}}>
                        <option value="ps">Product & Services</option>
                        <option value="pro">Products</option>
                        <option value="serv">Services</option>
                        <option value="bus">Business</option>
                        <option value="edu">Education</option>
                        <option value="not-selected">none</option>
                    </select>
                </div> */}
                <div className='col-lg-3'>
                    <CSVLink {...csvReport}>Export to CSV</CSVLink>
                </div>
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
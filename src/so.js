// import React, { useState } from 'react';
// import { Button, Form } from 'semantic-ui-react'
// import axios from 'axios';
// import { useNavigate} from 'react-router-dom';
// import Swal from 'sweetalert2';

// function Create() {
//     let navigate = useNavigate();

//     const [image, setImage] = useState('');
//     const [companyName, setCompanyName] = useState('');

//     const postData = () => {

//         const url = `https://62a6f21797b6156bff833b05.mockapi.io/CRUD`

//             if(companyName.length <= 3){
//                 return Swal.fire({
//                     icon: 'error',
//                     title: 'Error',
//                     text: 'All fields are mandatory!',
//                     showConfirmButton: true
//                   })
//             }else{
//                 axios.post(url, {
//                     image,
//                     companyName
//                 })
    
//             .then(() => {
//                 navigate('/company/list');
//             })
//             }
            
//     }

//     return (
        
//         <div>
//             <Form className="create-form">
//                 <Form.Field>
//                     <label>Image</label>
//                     <input type="file" accept='image' onChange={(e) => setImage(e.target.value)} />
//                 </Form.Field>
//                 <Form.Field>
//                     <label>Company Name</label>
//                     <input  placeholder='Company Name' onChange={(e) => setCompanyName(e.target.value)}/>
//                 </Form.Field>
//                 <Button color="blue" onClick={postData} type='submit'>Submit</Button>
//             </Form>
//         </div>
//     )
// }

// export default Create;




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, List } from 'semantic-ui-react';


function Read() {

    const [APIData, setAPIData] = useState([]);
    
    useEffect(() => {
        axios.get(`https://62a6f21797b6156bff833b05.mockapi.io/CRUD`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    return (
        <div>
            <Table singleLine>
                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>
                                    <List>
                                        <List.Item>
                                                {data.image}
                                        </List.Item>
                                        <List.Item>
                                                {data.companyName}
                                        </List.Item>
                                    </List>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

export default Read;
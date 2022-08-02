import React, { useState } from 'react';
import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as CgIcons from "react-icons/cg"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";
import * as TbIcons from "react-icons/tb";
import {SidemenuData} from './SidemenuData';
import SubMenu from './SubMenu';


// display: flex;
  // justify-content: flex-start;
  // align-items: center;
  // background: #15171c;
const Nav = styled.div`
  background: #15171c;
  height: 80px;
  width:1540px;
  margin-left:0px;  
  margin-bottom:25px;
`;

const LeftNavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

// display: flex;
//   justify-content: flex-end;
//   align-items: center;
const RightNavIcon = styled(Link)`
  margin-left: 1300px;
  font-size: 2.5rem;
  background:transparent;
  display:flex;
  justify-content:flex-end;
  margin-right:100px;
  margin-top:-50px;
`;

const RightNavIcon1 = styled(Link)`
  margin-left: 1300px;
  font-size: 2.5rem;
  background:transparent;
  display:flex;
  justify-content:flex-end;
  ${'' /* margin-right:100px; */}
  margin-top:50px;
`;

const LeftbarNav = styled.nav`
  background: #15171c;
  width: 20%;
  height: 100vh;
  overflow-y: auto;
  display: flex;  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;


const SidebarWrap = styled.div`
  width: 100%;
`;

const RightbarNav = styled.nav`
  background: #15171c;
  color:white;
  border:1px solid black;
  border-radius: 0px 0px 5px 5px;
  width: 20%;
  height: 30vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 80px;
  ${'' /* right:70px; */}
  right: ${({ dropbar }) => (dropbar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;


const SideMenu = () => {

  const [sidebar, setSidebar] = useState(false);
  const [dropbar, setDropbar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showDropbar = () => setDropbar(!dropbar);

  let navigate = useNavigate();
  const handleLogout = () =>{
    navigate("/company/login");
  }

  return (
    <>
    <div>
      <div>
        <Nav>
          <LeftNavIcon to='#'>
          {/* onClick={showSidebar} */}
            <FaIcons.FaBars onClick={showSidebar}/>
          </LeftNavIcon>
          <RightNavIcon to='#'>
          {/* onClick={showSidebar} */}
            <CgIcons.CgProfile  onClick={showDropbar}/>
          </RightNavIcon>
        </Nav>
      </div>
      <div>
        <LeftbarNav sidebar={sidebar}>
          <SidebarWrap>
          <LeftNavIcon to='#'>
          {/* onClick={showSidebar}  */}
            <AiIcons.AiOutlineClose onClick={showSidebar}/>
          </LeftNavIcon>
          {SidemenuData.map((item,index)=>{
            return <SubMenu item={item} key={index} />;
          })}
          </SidebarWrap>
        </LeftbarNav>
      </div>
      <div> 
        <RightbarNav dropbar={dropbar}>
        <SidebarWrap>
          <RightNavIcon1 to='#'>
          {/* onClick={showSidebar}  */}
            <AiIcons.AiOutlineClose onClick={showDropbar}/>
          </RightNavIcon1>
          <ul style={{listStyle:"none",marginTop:"-20px"}}>
            <li><BiIcons.BiLogOut style={{width:"30px",height:"30px",marginRight:"15px",marginBottom:"10px"}}/>
            <button className='' style={{border:"none",background:"transparent",color:"white"}} onClick={handleLogout}>Logout</button></li>
            <li><FiIcons.FiFilter style={{width:"30px",height:"30px",marginRight:"15px",marginBottom:"10px"}}/>Filter</li>
            <li><TbIcons.TbSettings style={{width:"30px",height:"30px",marginRight:"15px"}}/>Settings</li>
          </ul>
          </SidebarWrap>
        </RightbarNav>
      </div>
      </div>
    </>
  )
}

export default SideMenu;
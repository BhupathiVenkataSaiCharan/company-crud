import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as CgIcons from "react-icons/cg"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from "react-icons/bi";
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

const NavIcon = styled(Link)`
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
const NavIcon2 = styled(Link)`
  margin-left: 1300px;
  font-size: 2.5rem;
  background:transparent;
  display:flex;
  justify-content:flex-end;
  margin-right:100px;
  margin-top:-50px;
`;

const SidebarNav = styled.nav`
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

const DropbarNav = styled.nav`
  background: white;
  color:black;
  border:1px solid black;
  border-radius:5px;
  width: 250px;
  height: 30vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 70px;
  right:70px;
  top: ${({ dropbar }) => (dropbar ? '80px' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;


const SideMenu = () => {

  const [sidebar, setSidebar] = useState(false);
  const [dropbar, setDropbar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showDropbar = () => setDropbar(!dropbar);

  return (
    <>
    <div>
      <div>
        <Nav>
          <NavIcon to='#'>
          {/* onClick={showSidebar} */}
            <FaIcons.FaBars onClick={showSidebar}/>
          </NavIcon>
          <NavIcon2 to='#'>
          {/* onClick={showSidebar} */}
            <CgIcons.CgProfile  onClick={showDropbar}/>
          </NavIcon2>
        </Nav>
      </div>
      <div>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
          <NavIcon to='#'>
          {/* onClick={showSidebar}  */}
            <AiIcons.AiOutlineClose onClick={showSidebar}/>
          </NavIcon>
          {SidemenuData.map((item,index)=>{
            return <SubMenu item={item} key={index} />;
          })}
          </SidebarWrap>
        </SidebarNav>
      </div>
      <div> 
        <DropbarNav dropbar={dropbar}>
        <SidebarWrap>
          <NavIcon to='#'>
          {/* onClick={showSidebar}  */}
            {/* <AiIcons.AiOutlineClose onClick={showDropbar}/> */}
          </NavIcon>
          <BiIcons.BiLogOut style={{width:"30px",height:"30px",top:"0"}}/>LogOut
          </SidebarWrap>
        </DropbarNav>
      </div>
      </div>
    </>
  )
}

export default SideMenu;
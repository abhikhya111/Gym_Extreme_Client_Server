import React, { useState } from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import  "./Sidebar.css";
const Nav = styled.div`

`;



const SidebarNav = styled.nav`

`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {
const [sidebar, setSidebar] = useState(false);


return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<Nav>
		
		
		</Nav>
		<SidebarNav className="sidebar-nav" sidebar={sidebar}>
       
		<SidebarWrap>
       
			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			})}
		</SidebarWrap>
		</SidebarNav>
	</IconContext.Provider>
	</>
);
};

export default Sidebar;

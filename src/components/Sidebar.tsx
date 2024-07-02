import React, { useState } from "react";
import '../Sidebar.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import image5 from '../assets/Images/SBPic5.jpg';
import {Link} from 'react-router-dom';
import { SidebarData } from "./SidebarData";
import Dropdown from './Dropdown';
import ScrollableTable from './Table';

function Sidebar(){
    const [sidebar, setSidebar] = useState(false);
    const [width, setWidth] = useState(250);
    const headers = ['Language', 'Progress'];
    const data = [['Bengali', ''],
        ['Maithili',''],
        ['Odia',''],
        ['Hindi',''],
        ['Punjabi',''],
        ['Assamese','']


];
    const showSidebar = () => setSidebar(!sidebar);

    const closeSidebar = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
        event.stopPropagation(); // Prevent event from propagating to parent elements
        setSidebar(false);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault(); // Prevent text selection while resizing
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      };
    
      const handleMouseMove = (e: MouseEvent) => {
        setWidth(e.clientX > 50 ? e.clientX : 50); // Prevent sidebar from being too small
      };
    
      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    

    return(
        <div>
            
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{ width: `${width}px` }}>
                <ul className="nav-menu-items" >
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose onClick={closeSidebar}/>
                        </Link>
                    </li>
                    <li className="sidebar-image">
                        <img src={image5} alt="Sidebar" />
                    </li>
                    <li className="nav-text">
                        <h2 className="nav-text">Sanskriti Bench</h2>
                    </li>
                    <li className="nav-text">
                        <p className="nav-text">Navigation</p>
                    </li>
                    <li className="nav-menu-dropdown">
                        <Dropdown options={SidebarData} />
                    </li>
                    <ScrollableTable headers={headers} data={data} />

                    
                </ul>
                <div className="resizer" onMouseDown={handleMouseDown}></div>
            </nav>
        </div>
    );
}
export default Sidebar;

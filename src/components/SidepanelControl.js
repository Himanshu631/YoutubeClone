import React from 'react';
import { useSelector } from "react-redux";
import CollapsedSidebar from "./CollapsedSidebar";
import Sidebar from "./Sidebar";

const SidepanelControl = () => {
    
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    
    return isMenuOpen ? <Sidebar /> : <CollapsedSidebar />;

}

export default SidepanelControl;
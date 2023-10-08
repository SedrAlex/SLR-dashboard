import { Box, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import  Navbar from "components/Navbar"
import  Sidebar from "components/Sidebar"

const Layout = () => {
  const isNonMobile  = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen,setIsSidebarOpen] = useState(true)
  return (
  <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%" >
    <Sidebar
       isNonMobile={isNonMobile}
       drawerWidth="250px"
       isSidebarOpen={isSidebarOpen}
       setIsSidebarOpen={setIsSidebarOpen}
       />
    <Box>
      <Navbar 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Outlet />
    </Box>
  </Box>
  )
}


export default Layout
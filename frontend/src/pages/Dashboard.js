import React from 'react';
import  Box  from '@mui/material/Box';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/Navbar';

function Dashboard(){
    return(
        <>
        <Box sx={{ bgcolor:'#eeeeee',height:'100vh'}}>
        <NavBar/>
        <Box height={30}/>
        <Box sx={{ display: 'flex'}}>  
        <Sidebar/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box height={40}/>
        <h1>Dashboard</h1>
        </Box>
        </Box>
        </Box>
        </>
    )
}

export default Dashboard
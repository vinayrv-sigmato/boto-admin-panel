import React from 'react';
import  Box  from '@mui/material/Box';
import Sidebar from '../../components/Sidebar';
import NavBar from '../../components/Navbar';
import { Typography } from '@mui/material';

function Payment(){
    return(
        <>
        <Box sx={{ bgcolor:'#eeeeee',height:'100vh'}}>
            <NavBar/>
            <Box height={30}/>
            <Box sx={{ display: 'flex'}}>  
                <Sidebar/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Box height={40}/>
                    <Typography variant='h4' sx={{fontWeight:"bold"}}>Payments</Typography>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Payment
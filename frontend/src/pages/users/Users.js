import React from 'react';
import  Box  from '@mui/material/Box';
import Sidebar from '../../components/Sidebar';
import NavBar from '../../components/Navbar';
import UsersList from './UsersList';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

function Users(){
    return(
        <>
        <Box sx={{ bgcolor:'#eeeeee',height:'100vh'}}>
            <NavBar/>
            <Box height={30}/>
            <Box sx={{ display: 'flex'}}>  
                <Sidebar/>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Box height={40}/>
                        <Typography variant='h4' sx={{fontWeight:"bold"}}>Users List</Typography>
                        <Autocomplete
                            id="size-small-standard"
                            size="small"
                            //options={}
                            getOptionLabel={(option) => option.title}
                            //defaultValue={}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Search"
                                sx={{maxWidth:"20%"}} 
                            />
                            )}
                        />
                            <Box height={20}/>
                            <UsersList/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Users
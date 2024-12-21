import { Container,Paper, Typography,TextField,Button } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {

    const [isLogin,setIsLogin] = useState(true);
    const toggleLogin = () => setIsLogin(false);
  return <Container component={"main"} maxWidth="xs" sx={{
    
    borderRadius:5,
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }} >
    <Paper
    elevation = {3}
    sx={{
        padding:4,
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }}
    >{isLogin ? (<><Typography variant='h5'> Login</Typography>
    <form action="">
        <TextField 
        required 
        fullWidth 
        label="Username" 
        margin='normal'
        variant='outlined'
        ></TextField>
         <TextField 
        required 
        fullWidth 
        label="Password"
        type='password' 
        margin='normal'
        variant='outlined'
        ></TextField>
        <Button
        sx={{
            marginTop:"1rem"
        }}
        variant="contained"
        color='primary'
        type='submit'
        fullWidth
        >Login</Button>
        <Typography textAlign={"center"} m={"1rem"}> Or </Typography>
        <Button
        sx={{
            marginTop:"1rem"
        }}
        varient="text"
        fullWidth
        onClick={toggleLogin}
        >Sign Up</Button>
    </form>
    </>): <span>register</span>}</Paper>

  </Container>
  
}

export default Login
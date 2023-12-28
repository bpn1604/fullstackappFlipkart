import React, { useContext, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { authenticateSignup,authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    height:70vh;
    width:90vh
`

const Image = styled(Box)`
    background:#2874f0 url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') center 85% no-repeat;
    height:83%;;
    width:28%;
    padding:45px 35px;
    & > p, & > h5 {
        color:white;
        font-weight:600;
    }
`

const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
    & > div, & > button, & > p{
        margin-top:20px;
    }  
`;

const LoginButton = styled(Button)`
    text-transform:none;
    background:#fb641b;
    color:white;
    height:48px;
    border-radius:2px;
`

const RequestOtp = styled(Button)`
    text-transform:none;
    background:white;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0 / 20%);

`

const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`

const CreateAccount = styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;
`
const Error = styled(Typography)`
    font-size:10px;
    color:#ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600;
`

const initialView = {
    login: {
        view: 'login',
        heading:"Login",
        subheading:"Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: 'signup',
        heading:"Looks like you're new here!",
        subheading:"Sign up with your mobile number to get started."
    }
}

const singupIntialValue = {
    firstName: '',
    lastName:'' ,
    userName:'',
    email:'',
    password:'',
    phone:''
}

const loginIntialValue = {
    userName:'',
    password:''
}

const LoginPage = ({ open, setOpen }) => {

    const [account, setAccount] = useState(initialView.login)
    const [signup,setSignup] = useState(singupIntialValue)

    const {setUserAccount} = useContext(DataContext)
    const [login,setLogin] = useState(loginIntialValue)
    const [error,setError] = useState(false)




    const handleClose = () => {
        setOpen(false)
        setAccount(initialView.login)
        setError(false)
    }

    const toggleSignup = () => {
        setAccount(initialView.signup)
    }

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value})
        console.log(signup)
    }

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
        console.log(login)
    }

    const signupUser = async() => {
     let res =  await  authenticateSignup(signup)
     console.log(res)
     if(!res){
        return
     }
     else{
        handleClose()
        setUserAccount(signup.firstName)
     }
    }

    const loginUser = async() => {
      let res = await  authenticateLogin(login)
      console.log(res)
      if(res.status===200 || res.status===201){
        handleClose()
        setUserAccount(res.data.data.firstName)
      }
      else{
        setError(true)
      }
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>
                    </Image>
                    { 
                        account.view === 'login' ?
                        <Wrapper>
                            <TextField variant='standard' onChange={(e)=> onValueChange(e)} name="userName" label="Enter username" />
                            {error && <Error>Please Enter Valid username or password</Error>}
                            <TextField variant='standard' onChange={(e)=> onValueChange(e)} name="password" label="Enter Password" />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</Text>
                            <LoginButton onClick={()=> loginUser()}>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <RequestOtp>Request OTP</RequestOtp>
                            <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="firstName" label="Enter First Name" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="lastName" label="Enter Last Name" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="userName" label="Enter Username" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="email" label="Enter Email" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="password" label="Enter Password" />
                            <TextField variant='standard' onChange={(e)=> onInputChange(e)} name="phone" label="Enter Phone Number" />
                            <LoginButton onClick={()=> signupUser()}>Continue</LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginPage

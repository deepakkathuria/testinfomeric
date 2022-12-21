import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  { useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import frame1 from './frame2.png'
import frame2 from './infomeric.png'



toast.configure()


function Copyright(props) {
  return (
    
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {/* {'Copyright © '} */}
      <Link color="inherit" href="https://images.app.goo.gl/dPPQCgKeLKucQVGV7">
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {



  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [r, setR] = useState('resp');
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email_v = data.get('email')
    const password_v = data.get('password')
    const isEmailValid = /@/.test(email_v);

    if(!isEmailValid){
      setEmailError("Invalid Email")
    }
    
    if (password_v.length<8) {
      setPasswordError('Password must be at least 8 character long');
    }

    signin(email_v,password_v)
  };



  const tok = localStorage.getItem("tokentest")


  if(tok){
    history.push("/dashboard")

  }
  const signin = async(email_v,password_v,props) => {

  const pswd = {email_v}
  const loginid = {password_v}
    
  
  try {
    let userData = await axios({
      method: "post",
      url: 'http://localhost:8000/login',
      data: {
        "id": loginid,
        "password": pswd
      },
      headers: {
        'Content-Type': 'application/json'
      },
    })

    localStorage.setItem("tokentest",userData.data.token)
    history.push("/dashboard")


  } catch (error) {
    console.log(error);
    toast.error('Invalid Credentials',
    {position: toast.POSITION.BOTTOM_RIGHT})  
    

  }


  

  // console.log(tok, "tokvalue")
  if (tok!==null) {
    history.push("/dashboard")
  }

}

































  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" 
       sx={{
        backgroundImage: `url(${frame1})`,
        marginLeft:'-100px',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[10] : t.palette.grey[40],
        backgroundSize: 'center',
        backgroundPosition: 'left',
      }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
         
        />
        <Grid item xs={12} sm={8} md={6}  >

          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '300px',
              marginRight: '11px',
            
              marginTop: '60px',
            }}
          >

           <img style={{marginTop:"70px",top:"30px",height:"60px",width:"280px"}} src={frame2} ></img>
           <br/>

            
            <Box component="form" validate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Typography component="h1" style={{ fontStyle: 'normal', fontSize: '20px', lineHeight: '59px', color: '#000000' }}>
              Welcome To Infomerics Rating
              <hr></hr>

            </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                variant="outlined"
                placeholder="Enter user ID"
              />
              <span style={{color:"red"}}>{emailError}</span>
              <br/>
             
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="outlined"
                placeholder='Password'

              />
              <span style={{color:"red"}}>{passwordError}</span>
              <br/>
              <br/>
              <Grid container>
              </Grid>
              <br/>
              
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
                style={{ borderRadius: '10px', borderShadow: '0px 4px 14px 1px #949AFF', backgroundColor: '#3742FA', height: '50px', fontSize: '15px', color: '#FFFFFF', lineHeight: '30px', fontWeight: '600', fontStyle: 'normal',width:"150px",left:"220px" }}
              >
                LOG IN
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
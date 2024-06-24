import {
  Stack,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import {useState} from "react";
import {loginSuccess} from "./redux/slices/authSlice"
import { useDispatch } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function SigninCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const[signin,setSignin]=useState({
    emailandnumber:"",
    password:""
  })
const handleChange=(e)=>{
  const{name,value}=e.target
  setSignin((prevState)=>({
    ...prevState,
    [name]:value
  }))
}

const handleClick = async () => {
  try {
    
    const response = await fetch(`${process.env.REACT_APP_URL}user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signin),
      credentials: 'include'
    });

    const data = await response.json();

    if (response.status === 200) {
      // console.log(data.name);
      dispatch(loginSuccess({ name: data.name }));
      navigate("/"); 
    } else {
      toast.error('Invalid Credentials 1')
    }
  } catch (error) {
    // console.log(error);
    toast.error('check email and password')
  }
};


  // console.log(signin)
  return (
    <>
    <Toaster/>
      <Stack
        mx={{
          xs: "10px",
          sx: "15px",
          md: "auto",
          lg: "auto",
        }
        }
      >
        <Typography
          display={{
            md: "none",
            lg: "none",
          }}
          color={"#2E0052"}
          fontWeight={"600"}
          fontSize={"31px"}
          mt={"25px"}
        >
          Welcome
        </Typography>
        <Box
        mb={{ xs: "30px", md: "40px", lg: "40px" }}
          sx={{
            padding: "35px",
            boxShadow: "2",
            borderRadius: "20px",
          }}
        >
          <Typography mb={2} variant="h4" size={{ xs: "16px", lg: "50px" }}>
            Sign in
          </Typography>
          <Box>
            <Typography
              fontSize={{ xs: "15px", md: "17px", lg: "20px" }}
              fontWeight={"500"}
            >
              Enter your email or mobile number
            </Typography>
          </Box>
          <TextField name="emailandnumber" type='text' fullWidth size="small" variant="outlined" onChange={handleChange} />
          <Typography
            fontSize={{ xs: "15px", md: "17px", lg: "20px" }}
            fontWeight={"500"}
          >
            Password
          </Typography>
          <TextField name="password" type="password" fullWidth size="small" variant="outlined" onChange={handleChange} />

          <Button sx={{ mt: "20px" }} fullWidth variant="contained" onClick={handleClick}>
            Continue
          </Button>
          <Typography
            sx={{ mt: "20px" }}
            fontSize={{ xs: "10px", md: "15px", lg: "15px" }}
            fontWeight={"500"}
          >
            By continuing, you agree to Musicart privacy notice and conditions
            of use.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "16px 0",
          }}
        >
          <Box sx={{ flexGrow: 1, height: "1px", bgcolor: "black" }} />
          <Typography
            variant="h6"
            component="span"
            sx={{ margin: "0 25px", fontWeight: "bold" }}
          >
            New to Musicart?
          </Typography>
          <Box sx={{ flexGrow: 1, height: "1px", bgcolor: "black" }} />
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{boxShadow: "2",
            borderRadius: "5px", padding:'10px',marginBottom:'25px'}} >
        <Typography variant="h6"
            component="span">
              <Link to="/signin" style={{textDecoration:'none', color:'black'}}>Create your Musicart account</Link>
              </Typography>
        </Box>
      </Stack>
      
    </>
  );
}

export default SigninCard;

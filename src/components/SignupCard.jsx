import {
  Stack,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import {useState} from "react"
import { Link,useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const SignupCard = () => {
  let navigate=useNavigate()
  const [signup,setSignup] = useState({
    name:"",
    mobile:"",
    email:"",
    password:""
})
console.log(signup)
const handleChange = (e) =>{
  const {name,value}=e.target
  setSignup(prevState => ({
    ...prevState,
    [name]: value
  }));
}

async function submit()
{
  console.log("hello",signup)
  const res=await fetch(`${process.env.REACT_APP_URL}user/register`,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(signup),
    credentials: 'include'
  },)
  if(res.status===200 || res.status===201)
  {
    navigate("/"); 
  }
  else 
  {
    toast.error('Invalid Credentials')
  }
}

  return (
    <>
    <Toaster/>
    <Stack
      mx={{
        xs: "auto",
        sx: "auto",
        md: "auto",
        lg: "auto",
      }}
    >
      <Box
        mb={{ xs: "30px", md: "40px", lg: "30px" }}
        sx={{
          padding: "30px",
          boxShadow: "2",
          borderRadius: "20px",
        }}
      >
        <Typography mb={2} variant="h4" fontSize={{ xs: "25px" ,md:'30px', lg: "30px" }}>
          Create Account
        </Typography>
        <Box>
          <Typography
            fontSize={{ xs: "15px", md: "17px", lg: "20px" }}
            fontWeight={"500"}
          >
            Your name
          </Typography>
          <TextField name="name" type='text' value={signup.name} fullWidth size="small" variant="outlined" onChange={handleChange}/>
        </Box>
        <Box>
          <Typography
            fontSize={{ xs: "15px", md: "17px", lg: "20px" }}
            fontWeight={"500"}
            
          >
            Mobile number
          </Typography>
          <TextField name="mobile" type='number' value={signup.mobile} fullWidth size="small" variant="outlined" onChange={handleChange} />
        </Box>
        <Box>
          <Typography
            fontSize={{ xs: "15px", md: "17px", lg: "20px" }}
            fontWeight={"500"}
          >
            Email Id
          </Typography>
          <TextField name="email" type='email' value={signup.email} fullWidth size="small" variant="outlined" onChange={handleChange} />
        </Box>
        <Box>
          <Typography
            fontSize={{ xs: "15px", md: "17px", lg: "20px" }}
            fontWeight={"500"}
          >
            Password
          </Typography>
          <TextField name="password" type='password' value={signup.password} fullWidth size="small" variant="outlined" onChange={handleChange}/>
        </Box>
        <Box>
          <Typography
            sx={{ mt: "10px"}}
            fontSize={{ xs: "10px", md: "15px", lg: "15px" }}
            fontWeight={"500"}
            width={'500px'}
            // textAlign={'center'}
            display={{
              xs:'none',
              md:'block',

            }}
          >
            By enrolling your mobile phone number, you consent to receive
            automated security notifications via text message from Musicart.
            Message and data rates may apply.
          </Typography>
          <Typography >

          </Typography>
        </Box>
        <Button sx={{ mt: "10px" }} fullWidth variant="contained" onClick={submit}>
          Continue
        </Button>
        <Typography
            sx={{ mt: "10px" }}
            fontSize={{ xs: "10px", md: "15px", lg: "15px" }}
            fontWeight={"500"}
          >
            By continuing, you agree to Musicart privacy notice and conditions
            of use.
          </Typography>
      </Box>
        <Typography textAlign={'center'}>Already have an account? <Link to={"/login"} style={{textDecoration:'none'}}>log in</Link></Typography>
    </Stack>
    </>
  );
};

export default SignupCard;

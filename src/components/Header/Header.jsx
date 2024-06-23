import {useEffect, useState} from "react";
import { Stack,Box,Typography,IconButton,Menu,MenuItem } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Link,useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch,useSelector } from "react-redux"
import { loginSuccess,logoutSuccess } from "../redux/slices/authSlice"
const Header = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [cookies, setCookie, removeCookie] = useCookies();
  
  useEffect(() => {
    console.log(cookies.uuid)
    let token=cookies.uuid
    console.log("token",token)
    if(token){
      fetch(`${process.env.REACT_APP_URL}user`,{
        method:"Post",
        headers: {
          "Content-Type": "application/json",
          credentials: "include"
        },
        body: JSON.stringify({ token })

      })
      .then(res=>res.json())
      .then(data=>{
        dispatch(loginSuccess({name:data.user,email:data.email}))
        console.log("data",data)
        if(!data.status){
          navigate("/login")
        }
      })
    }
  }, [cookies])
  const handleLogout=()=>{
    dispatch(logoutSuccess())
    removeCookie("uuid")
    // navigate("/login")
    console.log(cookies.uuid)
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const username = useSelector((state) => state.auth.name)
  // const name="de"
  // useSelector((state) => state.auth.name)
  // console.log("name:-",name)
  return (
    <Stack
    color={"#fff"}
    bgcolor={"#2E0052"}
      padding={"10px"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      px={2}
      display={{ xs: "none", sm: "none", md: "flex", lg: "flex" }}
    >
      <Box display={"flex"} gap={"10px"} alignItems={"center"}>
        <PhoneInTalkIcon />
        <Typography>991299129912</Typography>
      </Box>
      <Typography>Get 50% off on selected items | Shop Now</Typography>
      
      {
        username ? 
       <>
      <IconButton
      sx={{
        width: "30px",
        height: "30px",
        bgcolor: '#FFD600',
        color: "black",
        borderRadius: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "15px",
        ":hover": { backgroundColor: "#FFD900", color: "#000" },
      }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       {username.charAt(0).toUpperCase()}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>navigate("/cart")}>My Orders</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      </> 
        :
      <Typography>
        {" "}
        <Link to={"/login"} style={{ textDecoration: "none", color: "white" }}>
          Login
        </Link>{" "}
        |{" "}
        <Link to={"/signin"} style={{ textDecoration: "none", color: "white" }}>
          Signup
        </Link>
      </Typography>
}
    </Stack>
  );
};

export default Header;

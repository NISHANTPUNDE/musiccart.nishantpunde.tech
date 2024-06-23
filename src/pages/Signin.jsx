import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import SigninCard from "../components/SigninCard";
import SignHeader from "../components/SignHeader";
import Footer from "../components/Footer";
const Signin = () => {
  return (
    <>
      <Stack height={"100vh"} width={"100%"}>
        <SignHeader />
        <SigninCard /> 
        <Footer />  
      </Stack>
    </>
  );
};

export default Signin;

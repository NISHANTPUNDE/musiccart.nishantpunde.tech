import React from "react";
import SignHeader from "../components/SignHeader";
import { Stack } from "@mui/material";
import SignupCard from "../components/SignupCard";
import Footer from "../components/Footer";
const Signup = () => {
  return (
    <>
    <Stack height={"100vh"} width={"100%"}>
      <SignHeader />
      <SignupCard />
    </Stack>
      <Footer />
      </>
  );
};

export default Signup;

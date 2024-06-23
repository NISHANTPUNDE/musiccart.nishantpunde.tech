import React from "react";
import { Box,Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      py={"10px"}
      mt={{ xs: "45px", sm: "45px", md: "75px", lg: "20px" }}
      bgcolor={"#2E0052"}
      display="grid"
      placeItems="center"
      position="relative"
      marginTop="auto"
      width={'100%'}
    >
      <Typography
        fontSize={"26px"}
        fontWeight={"500"}
        textAlign={"center"}
        color={"white"}
      >
        Musicart | All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;

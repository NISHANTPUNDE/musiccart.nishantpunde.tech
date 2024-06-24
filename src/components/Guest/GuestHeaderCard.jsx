import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import ladki from "../../assets/images/ladki.png";
const GuestHeaderCard = () => {
  return (
    <>
      <Stack
        // sx={{ margin: "0 5% 0 5%" }}
        mt={{ xs: "5%", sm: "5%", md: "1%", lg: "1%" }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          // 
          sx={{
            background: "linear-gradient(to right, #7286B4, #E794CE)",
            height: "130px",
            borderRadius: "10px",
          }}
          // height={"100%"}
        >
          <Box display={"flex"} flexDirection={"column"} p={{ xs: "10px", sm: "17px", md: "23px", lg: "25px" }} >
            <Typography
              color={"#2E0052"}
              fontSize={{ xs: "22px", sm: "22px", md: "25px", lg: "27px" }}
              sx={{
                fontWeight: "bold",
                width: "300px",
              }}
            >
              Grab upto 50% off on Selected headphones
            </Typography>
            <Box p={{ xs: "5px", sm: "5px"}} >
              <Button
                sx={{
                  display: { xs: "block", sm: "block", md: "none", lg: "none" },
                  bgcolor: "#2E0052",
                  borderRadius: "17px",
                  paddingY: "10px",
                  paddingX: "35px",
                  fontSize: "12px",
                }}
                variant="contained"
                size="small"
              >
                Buy Now
              </Button>
            </Box>
          </Box>

          <Box
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
            justifyContent="center"
          >
            <img
            className="guest-card-img"
              height={'120%'}
              width={"100%"}
              style={{ objectFit: "contain", marginTop:'-12%'}}
              src={ladki}
              alt="ladki"
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default GuestHeaderCard;

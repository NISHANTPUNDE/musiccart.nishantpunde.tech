import React from 'react'
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Typography,Stack,Box,Icon, } from '@mui/material';
const SignHeader = () => {
  return (
    <>
    <Stack>
          <Box
            padding={{
              xs: "15px",
              sm: "15px",
              md: "20px",
              lg: "25px",
            }}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "flex-start",
                md: "center",
                lg: "center",
              },
              alignItems: "center",
              gap: "20px",
              bgcolor: {
                xs: "#2E0052",
                md: "#fff",
                lg: "#fff",
              },
            }}
          >
            <Box
              border={2}
              height={"25px"}
              width={"25px"}
              borderRadius={"50px"}
              padding={"5px"}
              bgcolor={"#fff"}
              borderColor={"purple"}
            >
              <Icon color="primary">
                <MusicNoteIcon />
              </Icon>
            </Box>
            <Typography
              color={{ xs: "#fff", md: "#2E0052", lg: "#2E0052" }}
              fontWeight={"600"}
              fontSize={{
                xs: "20px",
                md: "30px",
                lg: "35px",
              }}
            >
              Musicart
            </Typography>
          </Box>
        </Stack>
    </>
  )
}

export default SignHeader
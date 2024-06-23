import React from 'react'
import {Stack,Box,Icon,Typography} from '@mui/material'
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { useLocation } from 'react-router-dom';
const LogoCard = () => {
  let location = useLocation();
  return (
    <Stack mt={5}>
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={"row"}
                gap={"10px"}
              >
                <Box
                  border={2}
                  height={"20px"}
                  width={"20px"}
                  borderRadius={"50%"}
                  padding={"5px"}
                  bgcolor={"#fff"}
                  borderColor={"purple"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Icon color="primary">
                    <MusicNoteIcon />
                  </Icon>
                </Box>
                <Typography
                  color={"#2E0052"}
                  fontWeight={"600"}
                  fontSize={"30px"}
                >
                  Musicart
                </Typography>
                <Typography ml={"5px"} color={"#2E0052"}>
                  Home / {location.pathname.split("/")[1]}
                </Typography>
              </Box>
            </Stack>
  )
}

export default LogoCard
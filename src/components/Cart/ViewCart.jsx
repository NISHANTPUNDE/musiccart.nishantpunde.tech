import React from 'react'
import Header from '../Header/Header'
import LogoCard from '../Header/LogoCard'
import { Stack,Box,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CartProducts from './CartProducts'

const ViewCart = () => {
  
  let navigate = useNavigate()
  return (
    <>
    {/* <Header/> */}
    <Stack mx={5} >
      <LogoCard/>
      <Box my={2}>
                
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#2E0052",
                      color: "#fff",
                      textTransform: "capitalize",
                      borderRadius: "10px",
                      width: "180px",
                      fontStyle: "Roboto",
                    }}
                    onClick={() => navigate(-1)}
                  >
                    Back to Products
                  </Button>
                
              </Box>
    </Stack>
    <Stack mx={5} display={{ xs: "flex", sm: "flex", md: "block", lg: "block" }}
    flexDirection={{ xs: "column", sm: "column", md: "row", lg: "row" }}
    >
      <CartProducts/>
    </Stack>
    </>
  )
}

export default ViewCart
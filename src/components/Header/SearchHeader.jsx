import React,{useState} from 'react'
import { Stack, Input, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import GuestHeaderCard from '../Guest/GuestHeaderCard';
import { useDispatch } from "react-redux";
import { setSearchValue } from '../../components/redux/slices/searchslice'
const SearchHeader = () => {
  const dispatch=useDispatch();

  return (
    <Stack
          display={{
            xs: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
          }}
        >
          <Stack>
            <Stack
              color={"#fff"}
              bgcolor={"#2E0052"}
              padding={"20px"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Input
                sx={{ bgcolor: "#fff" }}
                fullWidth
                variant="outlined"
                placeholder="Search Musicart"
                onChange={e => dispatch(setSearchValue(e.target.value))}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              ></Input>
            </Stack>
          </Stack>
          <Stack mx={{ xs:3, sm:3, md:4, lg:5 }} >
            <GuestHeaderCard />
          </Stack>
        </Stack>
  )
}

export default SearchHeader
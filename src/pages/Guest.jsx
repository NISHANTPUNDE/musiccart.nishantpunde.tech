import {
  Stack,
  Box,
  InputAdornment,
  TextField,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import GuestHeaderCard from "../components/Guest/GuestHeaderCard";
import Filter from "../components/Guest/Filter";
import Product from "../components/Guest/Product";
import ListProduct from "../components/Guest/ListProduct";
import { useState } from "react";
import SearchHeader from "../components/Header/SearchHeader";
import { useDispatch } from "react-redux";
import { setSearchValue } from '../components/redux/slices/searchslice'
import { useSelector } from "react-redux";
import LogoCard from "../components/Header/LogoCard";
const Guest = () => {
  const search= useSelector((state) => state.search.searchValue);
  const dispatch=useDispatch();
  const [productView, setProductView] = useState(true);
  const [filterData, setFilterData] = useState({
    HeadphoneType: "",
    company: "",
    color: "",
    price: "",
    sortBy: "",
    priceMin: "",
    priceMax: "",
  });
  return (
    <>
      <Stack>
        <Stack
          display={{
            xs: "none",
            md: "flex",
            lg: "flex",
          }} 
        >
          {/* <Header /> */}
          <Box mx={5}>
            <LogoCard />  
            <GuestHeaderCard />
          </Box>
        </Stack>
        <SearchHeader />
        <Stack mx={{ xs:3, sm:3, md:4, lg:5 }}  py={5}>
          <Box display={{ xs: "none", sm: "none", md: "block", lg: "block" }}>
            <TextField
              placeholder="Search by Product Name"
              onChange={e => dispatch(setSearchValue(e.target.value))}
              InputProps={{
                sx: {
                  borderRadius: "25px",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon></SearchIcon>
                  </InputAdornment>
                ),
              }}
              fullWidth
            ></TextField>
          </Box>
          <Box
            sx={{
              overflowX: "scroll",
              scrollbarWidth: "none",
              "-ms-overflow-style": "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Filter productView={productView} setProductView={setProductView} filterData={filterData} setFilterData={setFilterData} />
          </Box>
        </Stack>
        <Stack mx={{ xs:3, sm:3, md:4, lg:5 }} display={productView ? 'block' : 'none' } >
          <Product search={search} filterData={filterData} />
        </Stack>
        <Stack display={productView ? 'none' : 'block' } >
          <ListProduct search={search} filterData={filterData} />
        </Stack>
      </Stack>
    </>
  );
};

export default Guest;

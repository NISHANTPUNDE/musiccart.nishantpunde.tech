import { Box, Select,  } from "@mui/material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import {useState,useEffect,useMemo} from 'react';

const Filter = ({filterData,setFilterData,setProductView,productView}) => {
  const [company,setCompany] = useState([]);
  const [HeadphoneType, setHeadphoneType] = useState([]);
  const [color,setColor]=useState([]);


const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "price") {
    const [min, max] = value.split(" - ");
    setFilterData({ ...filterData, priceMin: min, priceMax: max });
  } else {
    setFilterData({ ...filterData, [name]: value });
  }
}; 


  const fetchComapny = async () => {
    const response = await fetch(`${process.env.REACT_APP_URL}filter/company`);
    const data = await response.json();
    setCompany(data);
  
  }
  // console.log(company);
  const fetchHeadphoneType = async () => {
    const response = await fetch(`${process.env.REACT_APP_URL}filter/headphone_type`);
    const data = await response.json();
    setHeadphoneType(data);
  }
  

  const fetchColor = async () => {
    const response = await fetch(`${process.env.REACT_APP_URL}filter/color`);
    const data = await response.json()
    setColor(data)
  }

  useEffect(() => {
    fetchHeadphoneType();
    fetchComapny();
    fetchColor();
  },[]);
  const headphoneTypeOptions = useMemo(() => {
    return HeadphoneType.map((item, i) => (
      <option key={i} value={item}>
        {item}
      </option>
    ));
  }, [HeadphoneType]);
  const companyOptions = useMemo(() => {
    return company.map((item, i) => (
      <option key={i} value={item}>
        {item}
      </option>
    ));
  }, [company]);
  
  const colorOptions =useMemo(()=>{
    return color.map((item,i)=>(
      <option key={i} value={item}>
        {item}
      </option>
    ))
  }, [color])
 
  const handleProductViewChangeGrid = () => {
    setProductView(true);
  };
  const handleProductViewChangeList = () => {
    setProductView(false);
  };
  return (
    <>
      <Box py={2} display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box width={"80px"} gap={"10px"}>
            <GridViewRoundedIcon  onClick={handleProductViewChangeGrid} fontSize="large" />
            <ViewListRoundedIcon  onClick={handleProductViewChangeList} fontSize="large" />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"500px"}
          >
            <Select
              native
              defaultValue=""
              style={{
                height: "35px",
                backgroundColor: "#D9D9D9",
                borderRadius: "25px",
                width: "170px",
              }}
              name="HeadphoneType"
              onChange={handleChange}          
            >
              <option value="">Headphone type</option>
              {headphoneTypeOptions}
            </Select>
            <Select
              native
              defaultValue=""
              style={{
                height: "35px",
                backgroundColor: "#D9D9D9",
                borderRadius: "25px",
                width: "120px",
              }}
              name="company"
              onChange={handleChange}
            >
              <option value="">Company</option>
              {companyOptions}
            </Select>
            <Select
              native
              defaultValue=""
              style={{
                height: "35px",
                backgroundColor: "#D9D9D9",
                borderRadius: "25px",
                width: "100px",  
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left"
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left"
                },
                getContentAnchorEl: null,
                PaperProps: {
                  style: {
                    maxHeight: 50, // Dropdown menu ki maximum height ko yahaan specify karein
                  },
                },
              }}
              name="color"
              onChange={handleChange}
            >
              <option value="">Colour</option>
              {colorOptions}
            </Select>
            <Select
              native
              defaultValue=""
              style={{
                height: "35px",
                backgroundColor: "#D9D9D9",
                borderRadius: "25px",
                width: "90px",
                
              }}
              name="price"
              onChange={handleChange}
            >
              <option value="">Price</option>
              <option value="0 - 1,000">₹0 - ₹1,000</option>
              <option value="1,000 - 10,000">₹1,000 - ₹10,000</option>
              <option value="10,000 - 20,000">₹10,000 - ₹20,000</option>
            </Select>
          </Box>
        </Box>
        <Box>
          <Select
            native
            defaultValue=""
            style={{
              height: "35px",
              borderRadius: "25px",
              width: "180px",
            }}
            name="sortBy"
            onChange={handleChange}
          >
            <option value="">Sort by : Featured</option>
            <option value="min">Price : Lowest</option>
            <option value="max">Price : Highest</option>
            <option value="Name : (A-Z)">Name : (A-Z)</option>
            <option value="Name : (Z-A)">Name : (Z-A)</option>
          </Select>
        </Box>
      </Box>
    </>
  );
};

export default Filter;

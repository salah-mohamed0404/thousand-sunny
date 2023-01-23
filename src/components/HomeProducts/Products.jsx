import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import FeaturedProducts from "./FeaturedProducts";
import LatestProducts from "./LatestProducts";

const Products = () => {
  const [value, setValue] = useState("1");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Products list">
            <Tab label="Featured" value="1" />
            <Tab label="Latest products" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <FeaturedProducts />
        </TabPanel>
        <TabPanel value="2">
          <LatestProducts />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Products;

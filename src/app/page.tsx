"use client";

import AppBar from "@/components/AppBar";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [tabChange, setTabChange] = useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newVal: number) => {
    setTabChange(newVal);
  };
  return (
    <AppBar>
      <Box sx={{ border: 1, borderRadius: 0, borderColor: "red" }}>
        <Grid container>
          <Grid size={12}>
            <Typography variant="h4">Hi, Im Amirul Asyraaf </Typography>
          </Grid>
          <Grid size={6}>
            <Typography variant="h4">Full Stack Developer</Typography>
          </Grid>
          <Grid size={6}>
            <Typography variant="h4">Hi, Im Amirul Asyraaf </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ border: 1, borderRadius: 0, borderColor: "red" }}>
        <Typography>Tech Stack</Typography>
        <Tabs
          onChange={handleChangeTab}
          value={tabChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value={0} label="Frontend" {...a11yProps(0)} />
          <Tab value={1} label="Backend" {...a11yProps(1)} />
          <Tab value={2} label="Database" {...a11yProps(2)} />
          <Tab value={3} label="Tools & Others" {...a11yProps(3)} />
        </Tabs>
        <CustomTabPanel value={tabChange} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={tabChange} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={tabChange} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={tabChange} index={3}>
          Item 4
        </CustomTabPanel>
      </Box>
    </AppBar>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

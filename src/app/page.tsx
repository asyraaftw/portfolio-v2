"use client";

import AppBar from "@/components/AppBar";
import Cards from "@/components/Cards";
import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { FaLinkedin, FaGithubSquare, FaLink, FaDev } from "react-icons/fa";
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
            <Typography variant="h2" fontFamily="monospace" fontWeight="bold">
              {"Hi, I'm Amirul Asyraaf"}
            </Typography>
          </Grid>
          <Grid size={9}>
            {/* Main */}
            <Typography variant="h5" fontFamily="monospace" fontWeight="bold">
              A Full Stack Developer from Kuala Lumpur, Malaysia
            </Typography>

            {/* Desc */}
            <Typography variant="caption" fontFamily="monospace">
              I’m a Full Stack Developer and Software Engineer experienced in
              building scalable applications with .NET, Node.js, React, and
              PostgreSQL. I work across the stack to create clean, user-friendly
              frontends, robust APIs, and well-structured databases, while also
              handling DevOps and deployments on Azure. Passionate about
              crafting maintainable, tested, and efficient software with tools
              like Jest, Mocha, Prisma, and TypeORM, I enjoy exploring new
              technologies and developing side projects that solve real-world
              problems.
            </Typography>
          </Grid>
          <Grid size={1} />
          <Grid size={2}>
            <Stack direction={{ xs: "column", sm: "column" }} spacing={1}>
              <Button
                variant="contained"
                size="small"
                sx={{ borderRadius: 2 }}
                startIcon={<FaGithubSquare />}
              >
                <Box
                  display={{ xs: "none", sm: "inline" }}
                  alignItems={{ xs: "center", sm: "center" }}
                  justifyContent={{ xs: "center", sm: "center" }}
                >
                  Github
                </Box>
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{ borderRadius: 2 }}
                startIcon={<FaLinkedin />}
              >
                <Box
                  display={{ xs: "none", sm: "inline" }}
                  alignItems={{ xs: "none", sm: "center" }}
                  justifyContent={{ xs: "none", sm: "center" }}
                >
                  LinkedIn
                </Box>
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{ borderRadius: 2 }}
                startIcon={<FaLink />}
              >
                <Box
                  display={{ xs: "none", sm: "inline" }}
                  alignItems={{ xs: "none", sm: "center" }}
                  justifyContent={{ xs: "none", sm: "center" }}
                >
                  Resume
                </Box>
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{ borderRadius: 2 }}
                startIcon={<FaDev />}
              >
                <Box
                  display={{ xs: "none", sm: "inline" }}
                  alignItems={{ xs: "none", sm: "center" }}
                  justifyContent={{ xs: "none", sm: "center" }}
                >
                  Services
                </Box>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ border: 1, borderRadius: 0, borderColor: "red" }}>
        <Typography variant="h5" fontWeight="bold">
          Tech Stack
        </Typography>
        <Tabs
          onChange={handleChangeTab}
          value={tabChange}
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab
            value={0}
            label="Frontend"
            icon={<GridViewRoundedIcon />}
            iconPosition="start"
            {...a11yProps(0)}
          />
          <Tab
            value={1}
            label="Backend"
            icon={<GridViewRoundedIcon />}
            iconPosition="start"
            {...a11yProps(1)}
          />
          <Tab
            value={2}
            label="Database"
            icon={<GridViewRoundedIcon />}
            iconPosition="start"
            {...a11yProps(2)}
          />
          <Tab
            value={3}
            label="Tools & Others"
            icon={<GridViewRoundedIcon />}
            iconPosition="start"
            {...a11yProps(3)}
          />
        </Tabs>
        <CustomTabPanel value={tabChange} index={0}>
          <Cards langType="frontend" />
        </CustomTabPanel>
        <CustomTabPanel value={tabChange} index={1}>
          <Cards langType="backend" />
        </CustomTabPanel>
        <CustomTabPanel value={tabChange} index={2}>
          <Cards langType="tools" />
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

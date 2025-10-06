"use client";

import AppBar from "@/components/AppBar";
import Cards from "@/components/Cards";
import {
  Box,
  Button,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  Paper,
} from "@mui/material";
import { useState } from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { FaLinkedin, FaGithubSquare, FaLink, FaDev } from "react-icons/fa";

export default function Home() {
  const [tabChange, setTabChange] = useState(0);

  const handleChangeTab = (_event: React.SyntheticEvent, newVal: number) => {
    setTabChange(newVal);
  };

  return (
    <AppBar>
      <Box
        sx={{
          py: 8,
          px: { xs: 2, md: 6 },
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 9 }}>
            <Typography
              variant="h3"
              fontFamily="monospace"
              fontWeight="bold"
              gutterBottom
            >
              Hi, Im Amirul Asyraaf
            </Typography>

            <Typography
              variant="h6"
              fontFamily="monospace"
              fontWeight="bold"
              color="text.secondary"
              gutterBottom
            >
              Full Stack Developer @ Kuala Lumpur, Malaysia
            </Typography>

            <Typography
              variant="body1"
              fontFamily="monospace"
              color="text.secondary"
              sx={{ maxWidth: 800, lineHeight: 1.7 }}
            >
              I’m a Full Stack Developer and Software Engineer experienced in
              building scalable applications with .NET, Node.js, React, and
              PostgreSQL. I create clean, user-friendly frontends, robust APIs,
              and well-structured databases while managing deployments on Azure.
              Passionate about maintainable, efficient software and exploring
              new technologies through side projects.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Stack direction="column" spacing={1}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: 2,
                  fontFamily: "monospace",
                  textTransform: "none",
                }}
                startIcon={<FaGithubSquare />}
                component="a"
                href="https://github.com/asyraaftw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: 2,
                  fontFamily: "monospace",
                  textTransform: "none",
                }}
                startIcon={<FaLinkedin />}
                component="a"
                href="https://www.linkedin.com/in/asyraaftw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: 2,
                  fontFamily: "monospace",
                  textTransform: "none",
                }}
                startIcon={<FaLink />}
                onClick={() => alert("Show resume modal here")}
              >
                Resume
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: 2,
                  fontFamily: "monospace",
                  textTransform: "none",
                }}
                startIcon={<FaDev />}
              >
                Services
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Paper
        elevation={2}
        sx={{
          backgroundColor: "transparent",
          borderRadius: 4,
          mx: { xs: 2, md: 6 },
          my: 6,
          p: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          fontFamily="monospace"
          gutterBottom
        >
          🧠 Tech Stack
        </Typography>

        <Tabs
          onChange={handleChangeTab}
          value={tabChange}
          textColor="inherit"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          sx={{ fontFamily: "monospace", mb: 2 }}
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
          <Cards langType="database" />
        </CustomTabPanel>
        <CustomTabPanel value={tabChange} index={3}>
          <Cards langType="tools" />
        </CustomTabPanel>
      </Paper>
    </AppBar>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel({ children, value, index }: TabPanelProps) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      sx={{ pt: 2 }}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

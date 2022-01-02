import React, { useState } from "react";
import { Link } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import "./Menu.css";
import { a11yProps, TabPanel } from "./utils";
import { ROUTES } from "../../constants";

export function Menu() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={
              <Link to={ROUTES.HOME} className="reactRouterLink">
                Домашняя страница
              </Link>
            }
            {...a11yProps(0)}
            style={{ padding: "0px" }}
          />
          <Tab
            label={
              <Link to={ROUTES.PROFILE} className="reactRouterLink">
                Профиль
              </Link>
            }
            style={{ padding: "0px" }}
            {...a11yProps(1)}
          />
          <Tab
            label={
              <Link to={ROUTES.CHATS} className="reactRouterLink">
                Чаты
              </Link>
            }
            style={{ padding: "0px" }}
            {...a11yProps(2)}
          />

          <Tab
            label={
              <Link to={ROUTES.CATS} className="reactRouterLink">
                Посмотреть на котов
              </Link>
            }
            style={{ padding: "0px" }}
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
    </Box>
  );
}

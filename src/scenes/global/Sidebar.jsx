import { useState } from "react";
import { Sidebar, Menu, sidebarClasses, menuClasses, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutline";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SideBarItem from "../../components/SideBarItem";
import { tokens } from "../../theme";

const menuItems = [
  { title: "Dashboard", to: "/", icon: <HomeOutlinedIcon /> },
  { title: "Manage Team", to: "/team", icon: <PeopleOutlinedIcon /> },
  {
    title: "Contacts Information",
    to: "/contacts",
    icon: <ContactsOutlinedIcon />,
  },
  {
    title: "Invoices Balances",
    to: "/invoices",
    icon: <ReceiptOutlinedIcon />,
  },
  { title: "Profile Form", to: "/form", icon: <PersonOutlinedIcon /> },
  { title: "Calendar", to: "/calendar", icon: <CalendarTodayOutlinedIcon /> },
  { title: "FAQ Page", to: "/faq", icon: <HelpOutlineOutlinedIcon /> },
  { title: "Bar Chart", to: "/bar", icon: <BarChartOutlinedIcon /> },
  { title: "Pie Chart", to: "/pie", icon: <PieChartOutlineOutlinedIcon /> },
  { title: "Line Chart", to: "/line", icon: <TimelineOutlinedIcon /> },
  { title: "Geography Chart", to: "/geography", icon: <MapOutlinedIcon /> },
];

const MySidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Sidebar
      collapsed={isCollapsed}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: `${colors.primary[400]}`,
        },
        [`.${menuClasses.active}`]: {
          color: "#6870fa !important",
        },
        [`.${menuClasses.button}:hover`]: {
          color: "#868dfb !important",
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Menu iconShape="square">
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
          }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                ADMIN
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
            )}
        </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                 Rafael Coper
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Im the supervisor
                </Typography>
              </Box>
            </Box>
          )}
        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          {menuItems.map((item, index) => (
            <SideBarItem
              key={index}
              title={item.title}
              to={item.to}
              icon={item.icon}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </Box>
      </Menu>
    </Sidebar>
  );
};

export default MySidebar;

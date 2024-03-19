import { useState } from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import { Box, useTheme } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import CollapsedMenu from "../../components/CollapsedMenu";
import ExpandedMenu from "../../components/ExpandedMenu";
import SideBarItem from "../../components/SideBarItem";
import { tokens } from "../../theme";

const menuItems = [
  { title: "Dashboard", to: "/", icon: <HomeOutlinedIcon /> },
  { title: "Manage Team", to: "/team", icon: <PeopleOutlinedIcon /> },
  { title: "Contacts Information", to: "/contacts", icon: <ContactsOutlinedIcon /> },
  { title: "Invoices Balances", to: "/invoices", icon: <ReceiptOutlinedIcon /> },
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
        style={{
          backgroundColor: colors.primary[400],
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <Menu iconShape="square">
          <CollapsedMenu setIsCollapsed={setIsCollapsed} />
          {!isCollapsed && <ExpandedMenu />}
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

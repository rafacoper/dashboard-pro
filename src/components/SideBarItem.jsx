import { Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SideBarItem = (props) => {
  const { title, to, icon, selected, setSelected } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const linkStyle = {
    textDecoration: 'none',
    color: colors.grey[100],
    display: 'flex', // flex layout to align icon and text
    alignItems: 'center',
    width: '100%', // full width to increase clickable area
  };

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link to={to} style={linkStyle}>
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  );
};

export default SideBarItem;
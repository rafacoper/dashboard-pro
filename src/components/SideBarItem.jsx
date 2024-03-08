import { Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { title, to, icon, selected, setSelected } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export default Item;
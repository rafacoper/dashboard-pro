import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { MenuOutlinedIcon } from "@mui/icons-material";
import { tokens } from "../theme";

const CollapsedMenu = ({ setIsCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      ml="15px"
    >
      <Typography variant="h3" color={colors.grey[100]}>
        ADM
      </Typography>
      <IconButton onClick={() => setIsCollapsed((prev) => !prev)}>
        <MenuOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default CollapsedMenu;

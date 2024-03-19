import { Box, Typography, useTheme } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { tokens } from "../theme";

const ExpandedMenu = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="25px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Avatar
          alt="profile-user"
          sx={{ width: 40, heigh: 40 }}
          src={`../../public/assets/rfl-sprr.png`}
          style={{ cursor: "pointer", borderRadius: "50%" }}
        />
      </Box>
      <Box textAlign="center">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "10px 0 0 0" }}
        >
          RafaCoper
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
          Im the supervisor
        </Typography>
      </Box>
    </Box>
  );
};

export default ExpandedMenu;

import React, { useState } from "react";
import {
  AppBar,
  Typography,
  styled,
  InputBase,
  Box,
  InputAdornment,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const InputContainer = styled(Box)({
    backgroundColor: "white",
    padding: "5px 10px",
    color: "white",
    fontSize: "28px",
    textDecoration: "none",
    borderRadius: "10px",
  });
  const Input = styled(InputBase)({
    color: "secondary",
    border: "none",
  });
  const IconContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "20px",
  });
  const AvatarComponent = styled(Avatar)({
    objectFit: "cover",
  });

  const UserContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  });
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          Jossy_Social
        </Typography>
        <Diversity3Icon sx={{ display: { xs: "block", sm: "none" } }} />
        <InputContainer
          sx={{ width: { xs: "50%", sm: "50%", md: "50%", xl: "40%" } }}
        >
          <Input
            placeholder="Search..."
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </InputContainer>
        <IconContainer sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={3} color="secondary">
            <ChatIcon color="white" />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon color="white" />
          </Badge>
          <AvatarComponent
            src="/assets/avatar.jpg"
            onClick={() => setOpen(true)}
          />
        </IconContainer>
        <UserContainer
          sx={{ display: { sm: "none" } }}
          onClick={() => setOpen(true)}
        >
          <Typography variant="h5">Joseph</Typography>
          <AvatarComponent src="/assets/avatar.jpg" />
        </UserContainer>
        <Menu
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>profile</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;

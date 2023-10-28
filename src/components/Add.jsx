import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import styled from "@emotion/styled";
const Add = () => {
  const [open, setOpen] = useState(false);
  const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "10px",
  });
  return (
    <>
      <Tooltip
        title="add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", lg: 30 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          padding={2}
          borderRadius={5}
          width={{ xs: "60%", lg: "50%", xl: "30%" }}
          minWidth={200}
        >
          <Typography
            textAlign={"center"}
            variant="h6"
            color={"gray"}
            fontSize={"25px"}
          >
            Create post
          </Typography>
          <UserBox>
            <Avatar src="/assets/avatar.jpg" />
            <Typography variant="h6" fontWeight={400}>
              Joseph Alex
            </Typography>
          </UserBox>
          <TextField
            fullWidth
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What is your mind Joseph"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mb={1} mt={1}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="error" />
            <PersonAddIcon color="success" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ marginTop: "10px" }}
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;

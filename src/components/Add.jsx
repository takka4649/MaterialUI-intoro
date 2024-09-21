import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip onClick={() => setOpen(true)} title="CreatePost" sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30 } }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal open={open} onClose={() => setOpen(false)} aria-labelledby="StyledModal-modal-title" aria-describedby="modal-modal-description">
        <Box width={400} height={320} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center" pt={1}>
            Create post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <Typography fontWeight={500} variant="span">
              Remy Sharp
            </Typography>
          </UserBox>
          <TextField sx={{ width: '100%' }} id="standard-multiline-static" label="What are you up to now?" multiline rows={3} placeholder="input text" variant="standard" />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SettingsIc from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { connect } from 'react-redux';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { logOut } from '../helpers/logout';
import { IAccountsState } from '../types/types';
import DeleteAccount from './DeleteAccount';

const style = {
  position: 'absolute' as 'absolute',
  top: '500px',
  left: '50%',
  width: '60%',
  height: '700px',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const AccountMenu = function () {
  const [userId, setUserId] = useState(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [key, setKey] = useState<boolean>(false);
  const [used, setUsed] = useState<boolean>(false);
  const [openSettings, setOpenSettings] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const makeKey = () => {
    const temporaryKey: string | null = localStorage.getItem('temporaryKey');
    if (!temporaryKey) {
      setUsed(true);
      localStorage.setItem('temporaryKey', JSON.stringify({ temporaryKey: 'xxxxxx' }));
      window.location.reload();
    }
  };

  const temporaryKey: string | null = localStorage.getItem('temporaryKey');
  if (temporaryKey) {
    if (!used) {
      setKey(true);
      setUsed(true);
    }
  }

  const retrievedObject: string | null = localStorage.getItem('selectedAccount');
  if (userId === null) {
    if (retrievedObject) {
      const selectedAccountObj = JSON.parse(retrievedObject);
      const name = selectedAccountObj.id;
      const { length } = name;
      // setUserId(selectedAccountObj.id.substring(13, length));
    }
  }

  return (
    <div>
      <Modal
        hideBackdrop
        open={openSettings}
        onClose={() => setOpenSettings(false)}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2 id="child-modal-title">Settings</h2>
          <Divider />
          <br />
          Delete account
          {' '}
          <DeleteAccount />
          <br />
          <Divider />
          <Button style={{ top: '20px' }} onClick={() => setOpenSettings(false)}>Close</Button>
        </Box>
      </Modal>
      { retrievedObject ? (
        <>
          <Box sx={{
            display: 'flex', alignItems: 'center', textAlign: 'center', fontSize: '15px',
          }}
          >
            {userId}
            <Tooltip title="Account settings">
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }} style={{ right: '15px' }}>
                {userId && <Avatar sx={{ width: 37, height: 37 }}><FingerprintIcon /></Avatar>}
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem style={{ backgroundColor: key ? 'white' : 'orange' }} onClick={makeKey}>
              <Avatar />
              {' '}
              { !key ? 'Add KEY' : 'Key'}
            </MenuItem>
            <MenuItem disabled>
              <Avatar />
              {' '}
              My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => setOpenSettings(true)}>
              <ListItemIcon>
                <SettingsIc fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={() => logOut()}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : '' }
    </div>
  );
};

const mapStateToProps = (state: IAccountsState) => ({
  selectedAccount: state.accounts.selectedAccount,
});

export default connect(mapStateToProps)(AccountMenu);

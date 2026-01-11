import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Avatar as MuiAvatar, IconButton, Menu, MenuItem } from '@mui/material';

import { useAppDispatch } from '@app';
import { GET_AVATAR_MENU_CONFIG } from '@constants';

import { AvatarProps } from './Avatar.types';

const Avatar = ({ intials }: AvatarProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const actions = GET_AVATAR_MENU_CONFIG(navigate, dispatch);

    const handleMenuItemClick = (callback: () => void) => {
        callback();
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <MuiAvatar>{intials}</MuiAvatar>
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {actions.map((item) => (
                    <MenuItem
                        key={item.label}
                        onClick={() => void handleMenuItemClick(item.onClick)}
                    >
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default Avatar;

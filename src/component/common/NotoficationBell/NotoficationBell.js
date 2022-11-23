import Badge from '@mui/material/Badge';
import React, {useState} from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from "../BasicMenu/BasicMenu";


const NotificationBell = ({iconColor }) => {

    const mass = [
        {
            id: 0,
            label: "first notification"
        },
        {
            id: 1,
            label: "second notification",
        },
        {
            id: 2,
            label: "3 notification",
        }
    ]

    const newNotifications = `You have ${mass.length} notifications`
    const noNotifications = `You don't have new notifications`

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null)

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }




    return(
        <>
            <Tooltip title={mass.length ? newNotifications : noNotifications}>
                <IconButton
                    color={iconColor}
                    size="large"
                    onClick={mass.length ? handleOpen : null}
                    anchorEl={anchorEl}
                >
                    <Badge badgeContent={mass.length} color="error">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
            </Tooltip>
            <BasicMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                open={open}
                menuItems={mass}
            />
        </>
    );

}

export default NotificationBell;
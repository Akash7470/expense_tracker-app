import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AddButton from './ButtonContainer';
import OwedButton from './OwedAmount';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [returnData, setReturnData] = React.useState(false);
    const [oweData, setOwedData] = React.useState(false);

    const [totalReturnAmt, setTotalReturnAmt] = React.useState(0);
    const [totalOweAmt, setTotalOwedAmt] = React.useState(0);



    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    const showOweData = () => {
        let sumOfAmt = 0;
        let arrayOfAmtToOweOthers = JSON.parse(localStorage.getItem('arrayOfExpData'));
        arrayOfAmtToOweOthers.map((elem) => {
            return sumOfAmt += Number(elem.amt)
        })

        setTotalOwedAmt(sumOfAmt);
        setOwedData(true);
        setReturnData(false);
    }

    const showReturnsData = () => {
        let sumOfAmt = 0;
        let arrayOfAmtToOweOthers = JSON.parse(localStorage.getItem('arrayOfExpData'));
        arrayOfAmtToOweOthers.map((elem) => {
            return sumOfAmt = sumOfAmt + Number(Number(elem.amt) - Number(elem.amt) / Number(elem.noOfPeople));
        })
        setTotalReturnAmt(Number.parseFloat(sumOfAmt).toFixed(2));
        setReturnData(true);
        setOwedData(true);

    }
    const handleClose = () => {
        setOwedData(false)
    }
    return (
        <AppBar position="static">
            {
                returnData ?
                    <OwedButton open={oweData} handleClose={handleClose} returnData={returnData} totalReturnAmt={totalReturnAmt} />
                    : <OwedButton open={oweData} handleClose={handleClose} returnData={returnData} totalOweAmt={totalOweAmt} />
            }
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            fontSize: '3.5vw',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Expenses
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button onClick={showReturnsData} sx={{ my: 2, color: 'white', display: 'block' }}>
                            Returns
                        </Button>
                        <Button onClick={showOweData} sx={{ my: 2, color: 'white', display: 'block' }}>
                            Owe
                        </Button>
                    </Box>
                    <AddButton />
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;

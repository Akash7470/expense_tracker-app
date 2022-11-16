import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CancelIcon from '@mui/icons-material/Cancel';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};


const ProductModal = ({ open, setOpen, handleClose, handleSubmit, des, amt, noOfPeople }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <AppBar position="static" sx={{ width: '25.75vw', }}>
                    <Toolbar variant="dense" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Add Your Expenses here...
                        </Typography>
                        <a href="/"> <CancelIcon sx={{ color: '#222' }} onClick={() => setOpen(false)} /></a>
                    </Toolbar>
                </AppBar>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <TextField id="filled-basic" label="Description" placeholder='Description of Products..' autoComplete='Off' variant="filled" sx={{ width: '25.75vw', mt: '2vh' }} value={des} />
                </Typography>
                <Typography id="modal-modal-description" >
                    <TextField id="outlined-basic" placeholder='Enter Amount here...' label=<CurrencyRupeeIcon /> sx={{ width: '25.75vw', mt: '3vh' }} value={amt} />
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <TextField id="outlined-number" placeholder='Enter Number Of People' label="NO. Of People" type="number" InputLabelProps={{ shrink: true, }} sx={{ width: '25.75vw', mt: '3vh' }} value={noOfPeople} />
                </Typography>
                <a href="/"> <Button variant="contained" sx={{ m: '2vh', px: '4vh', mt: '3vh' }} onClick={handleSubmit}>Save</Button></a>
            </Box>
        </Modal>
    )
}

export default ProductModal
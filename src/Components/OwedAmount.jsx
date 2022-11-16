import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ open, handleClose, returnData, totalOweAmt, totalReturnAmt }) {



    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >{
                    returnData ? <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Total Returns Amount You have to get from Others: {<span style={{ color: 'brown' }}> <b> ₹ {totalReturnAmt}</b>  </span>}
                        </Typography>

                    </Box>
                        : <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Total Owed Amount You have to pay Others : {<span style={{ color: 'brown' }}> <b> ₹ {totalOweAmt}</b>  </span>}
                            </Typography>

                        </Box>
                }
            </Modal>
        </div>
    );
}
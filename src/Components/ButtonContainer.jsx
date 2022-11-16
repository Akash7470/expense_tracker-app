import * as React from 'react';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ProductModal from './ProductModal';


export default function BasicModal() {

    let arrayOfInpData = JSON.parse(localStorage.getItem("arrayOfExpData"));

    const [openModal, setOpenModal] = React.useState(false);

    const ProductDetails = () => {
        setOpenModal(true);
    }
    const handleModalClose = () => {
        setOpenModal(false)
    }
    const submitHandle = () => {
        let des = document.getElementById("filled-basic").value;
        let amt = document.getElementById("outlined-basic").value;
        let noOfPeople = document.getElementById("outlined-number").value;
        let id = Date.now() * Math.random() * 1000;

        let inpExpData = [des, Number.parseFloat(amt).toFixed(2), noOfPeople, id];

        let readObject = readingDataFromLocalStorage(inpExpData);
        arrayOfInpData.push(readObject);
        localStorage.setItem("arrayOfExpData", JSON.stringify(arrayOfInpData));

        document.getElementById("filled-basic").value = "";
        document.getElementById("outlined-basic").value = "";
        document.getElementById("outlined-number").value = "";
    }

    function readingDataFromLocalStorage(data) {
        let obj = {
            des: data[0],
            amt: data[1],
            noOfPeople: data[2],
            id: data[3]

        };
        return obj;
    }

    return (
        <div>
            <Button onClick={ProductDetails} sx={{ bgcolor: '#ff5722', color: '#fff', mx: '25.5vw', width: '10vw' }}> <AddBoxIcon />Add Expenses</Button>
            {
                openModal &&
                <ProductModal open={openModal} setOpen={setOpenModal} handleClose={handleModalClose} submitHandle={submitHandle} />
            }
        </div>
    );
}

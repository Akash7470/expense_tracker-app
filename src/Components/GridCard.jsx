import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import UpdateProductModal from "./UpdateProductModal";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#90caf9" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [index, setIndex] = useState(0);
  const [openUpdateModal, setUpdateOpenModal] = useState(false);

  const [des, setDes] = useState("");
  const [amt, setAmt] = useState(0);
  const [noOfPeople, setNoOfPeople] = useState(0);

  let arrayOfExpShowData = JSON.parse(localStorage.getItem("arrayOfExpData"));

  const setOpen = (indx) => {
    setIndex(indx);
    setDes(arrayOfExpShowData[indx].des);
    setAmt(arrayOfExpShowData[indx].amt);
    setNoOfPeople(arrayOfExpShowData[indx].noOfPeople);
    setUpdateOpenModal(true);
  };

  const handleUpdateModalClose = (e) => {
    e.preventDefault();
    setUpdateOpenModal(false);
  };

  function handleSubmit(e) {
    let expenseUpdatedData = {
      des: document.getElementById("filled-basic").value,
      amt: document.getElementById("outlined-basic").value,
      noOfPeople: document.getElementById("outlined-number").value,
      id: Date.now() * Math.random() * 1000,
    };
    arrayOfExpShowData[index] = expenseUpdatedData;
    localStorage.setItem("arrayOfExpData", JSON.stringify(arrayOfExpShowData));
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {arrayOfExpShowData?.map((elem, index) => {
          if (isNaN(elem.des) && isNaN(elem.amt)) {
            window.localStorage.removeItem(index);
          }
          return (
            <Grid item xs={3} sx={{ mt: "2vh" }} key={index}>
              <Item sx={{ backgroundColor: "#ffa726", borderRadius: 8 }}>
                <h1>{elem.des} </h1>
                <h3 style={{ marginTop: "2vh", fontSize: "2vw" }}>
                  Amount: <CurrencyRupeeIcon />
                  {Number.parseFloat(elem.amt).toFixed(2)}
                </h3>
                <p style={{ marginTop: "2vh", fontSize: "1.2vw" }}>
                  You Paid :
                  <span style={{ color: "brown" }}>
                    <b> ₹ {Number.parseFloat(elem.amt).toFixed(2)}</b>
                  </span>
                  <br /> it gets split into
                  <span style={{ color: "brown" }}>
                    <b>{elem.noOfPeople} </b>
                  </span>
                  people equally i.e.
                  <span style={{ color: "brown" }}>
                    <b>
                      ₹
                      {Number.parseFloat(elem.amt / elem.noOfPeople).toFixed(2)}
                    </b>
                  </span>
                  Each. <br /> You get from others
                  <span style={{ color: "brown" }}>
                    <b>
                      {Number.parseFloat(
                        elem.amt - elem.amt / elem.noOfPeople
                      ).toFixed(2)}
                    </b>
                  </span>
                </p>
                <Button
                  style={{
                    marginTop: "3vh",
                    backgroundColor: "#e65100",
                    color: "#222",
                    borderTopLeftRadius: 25,
                    borderBottomRightRadius: 24,
                  }}
                  onClick={() => setOpen(index)}
                >
                  Edit & Save
                </Button>
              </Item>
            </Grid>
          );
        })}
      </Grid>
      {openUpdateModal && (
        <UpdateProductModal
          open={openUpdateModal}
          setOpen={setUpdateOpenModal}
          handleClose={handleUpdateModalClose}
          handleSubmit={handleSubmit}
          des={des}
          amt={amt}
          noOfPeople={noOfPeople}
          f={console.log(des, amt, noOfPeople)}
        />
      )}
    </Box>
  );
}

import {
  Container,
  Title,
  FormFancy,
  Input,
  Select,
  Button,
  Result,
} from "./FancyForm.styles";
import React, { useState } from "react";
import { Grid, Paper, Typography, IconButton } from "@mui/material";

import { CompareArrows } from "@mui/icons-material";
import background from "./../assets/bg4.jpg";
import data from "./data.json";

import * as Yup from "yup";

import { Formik, ErrorMessage } from "formik";

export default function FancyForm() {
  // data array
  let currencys = data;
  console.log(currencys);
  // usestate hook

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState(currencys[0].currency);
  const [toCurrency, setToCurrency] = useState(currencys[1].currency);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  // Validation and state for Amount
  const handleChange = (e) => {
    const value = e.target.value;

    if (value.trim() === "") {
      setError("This field is required!");
    } else if (isNaN(value) || Number(value) < 0) {
      setError("Value must be positive");
    } else {
      setError("");
    }

    setInputValue(value);
    // dong thoi dat lai gia tri state cho Amount
    setAmount(e.target.value);
  };

  const handleConvert = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    const fromRate = currencys.find(
      (items) => items.currency === fromCurrency
    ).price;
    const toRate = currencys.find(
      (items) => items.currency === toCurrency
    ).price;
    setConvertedAmount((amount / fromRate) * toRate);
  };

  return (
    <div style={{ backgroundColor: "#333", height: "100vh" }}>
      <Container style={{ backgroundImage: `url(${background})` }}>
        <img src="https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/SWTH.svg" width={50} height={50}/>
        {/* Title */}
        <Title>Fancy Form</Title>

        {/* Form */}
        <Formik
          initialValues={{ inputValue: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <FormFancy onSubmit={handleConvert}>
            {/* error message for input */}
            {error && (
              <p style={{ color: "red", paddingRight: 320 }}>{error}</p>
            )}
            <div style={{ padding: 0 }}>
              <Grid
                container
                spacing={2}
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                }}
              >
                {/* Dòng 1 */}
                <Grid item xs={6}>
                  <Paper
                    style={{
                      padding: 0,
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    <Select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      style={{
                        background: "linear-gradient(45deg, #ffbb00, #ff008c)",
                      }}
                    >
                      {currencys.map((item) => (
                        <option key={item.currency} value={item.currency}>
                          {item.currency}
                        </option>
                      ))}
                    </Select>

                    <Input
                      type="number"
                      value={inputValue}
                      onChange={handleChange}
                      placeholder="Enter amount"
                      id="inputValue"
                      name="inputValue"
                    />
                  </Paper>
                </Grid>

                {/* IconButton */}
                <IconButton
                  color="primary"
                  type="submit"
                  style={{
                    marginLeft: 15,
                  }}
                >
                  <CompareArrows fontSize="large" />
                </IconButton>

                {/* Dòng 2 */}
                <Grid item xs={6}>
                  <Paper
                    style={{
                      padding: 0,
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    <Select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      style={{
                        background: "linear-gradient(45deg, #ffbb00, #ff008c)",
                      }}
                    >
                      {currencys.map((item) => (
                        <option key={item.currency} value={item.currency}>
                          {item.currency}
                        </option>
                      ))}
                    </Select>

                    {convertedAmount !== null && (
                      <Result>{convertedAmount.toFixed(3)}</Result>
                    )}
                  </Paper>
                </Grid>
              </Grid>
              <Paper
                style={{
                  margin: 10,
                  background: "linear-gradient(45deg, #0099ff, #00ff00)",
                  fontWeight: "bold",
                }}
              >
                <Typography>
                  Amount Recive: {convertedAmount.toFixed(3)} {toCurrency}
                </Typography>
              </Paper>
            </div>
          </FormFancy>
        </Formik>
      </Container>
    </div>
  );
}

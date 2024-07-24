
import styled from 'styled-components';
import { Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from 'formik';



export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    
    
    background-size:'cover';
    background-position: 'center';
    
   
    
`;

export const Title = styled.h1`
    text-align: center;
  
    background: linear-gradient(45deg, #ff0000, #00ff00); /* Gradient màu từ đỏ đến xanh lá */
  -webkit-background-clip: text; /* Cắt nền theo chữ (cho Chrome và Safari) */
  -webkit-text-fill-color: transparent; /* Làm cho chữ trở thành trong suốt để hiển thị gradient */
`;

export const FormFancy= styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* background-color: 'rgba(255, 255, 255, 0.8)'; */
`;

export const Input = styled(Field)`
    padding: 0px;
    margin:8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 0.2;
    width: 120px;
`;

export const Select = styled.select`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    
    &:hover {
        background-color: #0056b3;
    }
`;

export const Result = styled.div`
     padding: 0px;
     margin:8px;
     
    text-align: left;
    font-size: 0.1;
    color: rgba(0, 0, 0, 0.9);
    border: 1px solid #ccc;
    border-radius: 5px;
    width:120px;
   
`;
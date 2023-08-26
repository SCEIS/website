import React, { useState } from 'react'
import { Box, Typography, Button, Alert } from '@mui/material'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField';

function EnrollmentForm(){
    const [enrollmentForm, setEnrollmentForm] = useState({
        name: '',
        lastName: '',
        birthDay: undefined,
        email:''
    });
    const [emailError,setEmailError] = useState(false);  

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEnrollmentForm((prevValues) => ({
        ...prevValues,
        [name]: value,
        }));
        if(name=='email'){
            setEmailError(!(value=='' || emailRegex.test(value)))
        }
    };

    const emailRegex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    const invalidEmailAlert = (<Alert severity="error">Introduce una dirección de correo valida</Alert>);
    
    const sxInput = {my:2}
    return (<Box component="form">
        <TextField fullWidth
            sx={sxInput}
            id="name"
            label="Nombre(s)"
            name='name'
            value={enrollmentForm.name}
            onChange={handleChange}
            required
        />
        <TextField fullWidth
            sx={sxInput}
            id="lastName"
            label="Apellido(s)"
            name='lastName'
            value={enrollmentForm.lastName}
            onChange={handleChange}
            required
        />
        <TextField fullWidth
            sx={sxInput}
            id="email"
            label="Email"
            type='email'
            name='email'
            value={enrollmentForm.email}
            onChange={handleChange}
            required
        />
        {emailError ? invalidEmailAlert : null}
        <Button type="submit">Enviar</Button>
    </Box>);
}

function Enrollment(){
    const [showForm,setShowForm]=useState(false);
    let enrollmentForm = <EnrollmentForm/>;
    return (<Container>
        <Typography variant='h4'>Quiero ser parte!</Typography>
        <Button onClick={(e)=>{setShowForm(!showForm)}}>Unirme a la SCEIS</Button>
        {showForm ? enrollmentForm : null}
    </Container>);
}
export {Enrollment}
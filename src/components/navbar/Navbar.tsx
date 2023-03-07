import React, {ChangeEvent, useState} from 'react';
import "./Navbar.scss"
import { Button, TextField} from "@mui/material";
import {Person} from "../types/person";

const Navbar = (props: Person) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleInputFirstName = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }

    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        console.log(firstName)
    }

    return (
        <div className={"wrapper"}>
            <TextField label={"First Name:"} variant={"standard"} onChange={handleInputFirstName}>
            </TextField>
            <TextField label={"Last Name:"} variant={"standard"}>
            </TextField>
            <Button variant={"contained"} onClick={handleSubmit}>Submit</Button>
        </div>
    )
};

export default Navbar;

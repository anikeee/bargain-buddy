import React, { useState } from "react";
import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(inputValue);
    };

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                marginBottom: 2,
            }}
        >
            <InputBase
                value={inputValue}
                onChange={handleChange}
                sx={{
                    marginLeft: 1,
                    flex: 1,
                }}
                placeholder="Search…"
            />
            <SearchIcon />
        </Paper>
    );
};

export default SearchBar;

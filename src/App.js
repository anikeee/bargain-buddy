import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MainContent from './components/MainContent';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <>
            <Navbar />
            <Container maxWidth="lg" sx={{ marginTop: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SearchBar onSearch={handleSearch} />
                        <MainContent searchQuery={searchQuery} />
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}

export default App;

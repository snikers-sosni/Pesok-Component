import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Input from '@mui/material/Input'
import Box from '@mui/material/Box';

const SearchBar = ({placeholder, onChange}) => {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center' }} >
                <SearchIcon sx={{ marginRight: '20px' }} />
                <Input
                    placeholder={placeholder}
                    onChange={onChange}
                    sx={{width: '500px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem'}}
                    disableUnderline
                />
            </Box>
        </div>
    );
};

export default SearchBar;
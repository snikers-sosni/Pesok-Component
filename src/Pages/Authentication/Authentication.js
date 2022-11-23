import React, {useState} from 'react'
import Typography from "@mui/material/Typography";
import BasicCard from "../../component/common/BasicCard/BasicCard";
import SearchBar from "../../component/common/SearchBar/SearchBar";
import RefreshIcon from "@mui/icons-material/Refresh";
import CommonButton from "../../component/common/commonButton";
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import { cardHeaderStyles } from './Styles';
import GridWrapper from "../../component/common/GridWrapper/GridWrapper";
import BasicModal from "../../component/common/BasicModel/BasicModal";
import NewUserModal from "../../component/common/Modals/NewUserModal";

const Authentication = () => {

    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([])
    const [searchResults, setSearchResults] = useState(users)


    const getHeader = () => {

        const handleSearch = (value) => {
            filterData(value);
        };

        const filterData = (value) => {
            const lowercasedValue = value.toLowerCase().trim();
            if (lowercasedValue === '') setUsers(searchResults);
            else {
                const filteredData = searchResults.filter((item) => {
                    return Object.keys(item).some((key) =>
                        item[key].toString().toLowerCase().includes(lowercasedValue)
                    );
                });
                setUsers(filteredData)
            };
        };
        
        const addUser = () => {
            setOpen(true)
        };

        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar
                    placeholder="Search by email address, phone number, or user UID"
                    onChange={(event) => handleSearch(event.target.value)}
                    searchBarWidth='720px'
                />
                <Box>
                    <CommonButton
                        onClick={addUser}
                        variant="contained"

                        size="large"
                        sx={cardHeaderStyles.addUserButton}
                    >
                        add User
                    </CommonButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                </Box>
            </Box>
        )
    };

    const getContent = () => (
        <>
            {
                users.length ?
                    users.map((user) => (
                        <Box sx={{ marginBottom: '20px' }}>
                            <Typography>User ID: {user.userId}</Typography>
                            <Typography>Email: {user.email}</Typography>
                            <Typography>Phone Number: {user.phoneNumber}</Typography>
                        </Box>
                    )) :
                    <Typography
                        align="center"
                        sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
                    >
                        No users for this project yet
                    </Typography>
            }
        </>
    );

    const addNewUser = (data) => {
        users.push({ ...data });
        setOpen(false);
    };

    return (
        <GridWrapper>
            <BasicCard
                header={getHeader()}
                content={getContent()}
            />

            <NewUserModal open={open} onClose={() => setOpen(false)} addNewUser={addNewUser}/>
        </GridWrapper>
    )
}

export default Authentication;
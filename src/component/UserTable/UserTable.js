import React, {useEffect, useState} from 'react';
import DataTable from "../common/DataTable/DataTable";
import UserTableStyles from "./UserTableStyles";

const columns = [
    { field: 'id', headerName: 'ID Users', width: 80 },
    { field: 'name', headerName: 'Name User', width: 150 },
    { field: 'email', headerName: 'E-mail', width: 150 },
    { field: 'phone', headerName: 'Phone Number', width: 150 },
    { field: 'website', headerName: 'Web-Site', width: 150 },

];


const UserTable = ({onError}) => {

    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/')
            .then(response => response.json())
            .then(json => setUsers(json))
            .catch(() => onError())
    }, [])

    return (
        <DataTable
            rows={users}
            columns={columns}
            loading={!users.length}
            sx={UserTableStyles}
        />
    );
};

export default UserTable;
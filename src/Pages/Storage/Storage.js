import React, {useState} from 'react'
import GridWrapper from "../../component/common/GridWrapper/GridWrapper";
import UserTable from "../../component/UserTable/UserTable";
import BasicCard from "../../component/common/BasicCard/BasicCard";
import BasicSnackbar from "../../component/common/BasicSnackbar/BasicSnackbar";

const Storage = () => {

    const [open, setOpen] = useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };




    return (
        <GridWrapper item xs={8}>
            <BasicCard
                content={<UserTable onError={() => setOpen(true)}/>}
            />
            <BasicSnackbar
                open={open}
                severity="error"
                message="This is failed"
                onClose={handleClose}
            />
        </GridWrapper>
    )
}

export default Storage
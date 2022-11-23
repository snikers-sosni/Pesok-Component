import React, {useState} from 'react'
import GridWrapper from "../../component/common/GridWrapper/GridWrapper";
import BasicCard from "../../component/common/BasicCard/BasicCard";
import ProgressStepper from "../../component/common/ProgressStepper/ProgressStepper";


const Database = () => {
    return (
        <GridWrapper item xs={8} >
            <BasicCard content={<ProgressStepper/>}/>
        </GridWrapper>
    );
}

export default Database;
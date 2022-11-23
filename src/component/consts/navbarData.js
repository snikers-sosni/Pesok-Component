import GroupIcon from '@mui/icons-material/Group';
import StorageIcon from '@mui/icons-material/Storage';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import PublicIcon from '@mui/icons-material/Public';
import FunctionsIcon from '@mui/icons-material/Functions';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

export const navbarData = [
    {
        id: 0,
        icon: <GroupIcon/>,
        label: 'Authentication',
        route: 'Authentication'
    },
    {
        id: 1,
        icon: <StorageIcon/>,
        label: 'Database',
        route: 'Database'
    },
    {
        id: 2,
        icon: <SdStorageIcon/>,
        label: 'Storage',
        route: 'Storage'
    },
    {
        id: 3,
        icon: <PublicIcon/>,
        label: 'Hosting',
        route: 'Hosting'
    },
    {
        id: 4,
        icon: <FunctionsIcon/>,
        label: 'Functions',
        route: 'Functions'
    },
    {
        id: 5,
        icon: <PrecisionManufacturingIcon/>,
        label: 'MachineLearning',
        route: 'MachineLearning'
    }
]
export default navbarData;
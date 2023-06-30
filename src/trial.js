import './App.css';
import DeleteIcon from '@mui/icons-material/search';
import {Button, Tooltip} from "@mui/material";
import * as React from 'react';
{/*<Tooltip title="Delete">*/}
{/*    <IconButton id={"osi"}>*/}
{/*         delete<DeleteIcon />*/}
{/*    </IconButton>*/}
{/*</Tooltip>*/}
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';




export function trial() {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);


    }
    return (
        <div className={"container"}>
            <div className="row-sm-4">

                <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Add">
                    <Button>twitter<DeleteIcon /></Button>
                </Tooltip>


            </div>
        </div>
    );
}

export default trial;

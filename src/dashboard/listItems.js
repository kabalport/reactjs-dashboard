import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import {ListItemIcon} from "@mui/material";
import {ListItemText} from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp"

import HomeIcon from "@mui/icons-material/Home";

import {useNavigate} from "react-router-dom";

export default function MainListItems(){
    const navigate = useNavigate();
    const style = {color: "#fff"};
    return (
        <React.Fragment>
            <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                    <HomeIcon sx={style} />
                </ListItemIcon>
                <ListItemText primary="Home" sx={style} />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/google-trend")}>
                <ListItemIcon>
                    <TrendingUpIcon sx={style} />
                </ListItemIcon>
                <ListItemText primary="Trends" sx={style} />
            </ListItemButton>
        </React.Fragment>
    );
}
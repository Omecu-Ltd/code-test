import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import People from "@mui/icons-material/People";

function Header() {
    return (
        <AppBar position="relative">
            <Toolbar>
                <People sx={{mr: 2}}/>
                <Typography variant="h6" color="inherit" noWrap>
                    Omecu Code Test
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

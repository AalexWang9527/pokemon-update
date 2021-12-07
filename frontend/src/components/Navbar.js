import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink as RouterNavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                
                <Typography variant="h6" component={RouterNavLink} to="/" sx={{ flexGrow: 1, color: "primary", textDecoration: "inherit" }}>
                    MInfoTech project - MERN &amp; MUI Template
                </Typography>

                <Button color="secondary" component={RouterNavLink} to="/stuff">My Button</Button>
            </Toolbar>
        </AppBar>
    );
}
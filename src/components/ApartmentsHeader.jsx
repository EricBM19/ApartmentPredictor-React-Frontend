import { AppBar, Button, Toolbar, Box } from "@mui/material";
import reactLogo from '../assets/react.svg'

export default function ApartmentsHeader({view, setView}) {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <img src={reactLogo} alt="Logo" style={{ height: 32, marginRight: 8 }}/>
                    <h2>Apartment Predictor</h2>
                    <Box sx={{ flexGrow: 5 }} />
                    <Button color="inherit" onClick={() => setView("Home")}>Home</Button>
                    <Button color="inherit" onClick={() => setView("Create")}>Create</Button>
                    <Button color="inherit" onClick={() => setView("Update")}>Update</Button>
                    <Button color="inherit" onClick={() => setView("Delete")}>Delete</Button>
                </Toolbar>
            </AppBar>
        </>
    );
}
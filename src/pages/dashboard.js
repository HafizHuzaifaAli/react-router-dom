import { Grid } from "@mui/material"
import Carroussel from "../component/carrousel"
import Header from "../component/header"

function Dashboard(props) {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12}>
            <Header />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
            <Carroussel />
            </Grid>
            

        </Grid>
    )
}
export default Dashboard
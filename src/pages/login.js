import { Grid } from "@mui/material"
import Button from "../component/button"
import Input from "../component/input"

function Login(props) {
    return(
        <div className="mx-md-5">
            <Grid container spacing={2}  className="text-center bg-warning my-4 App border rounded">
    <Grid item xs={12} sm={12} md={12} className="text-center border fw-bold fs-1">LogIn.</Grid>
    
    <Grid item xs={12} sm={12} md={12}>
      <div><Input label="Email" /></div>
    </Grid>
    <Grid item xs={12} sm={12} md={12}>
      <div><Input label="Password" /></div>
    </Grid>
    
    
    <Grid item  xs={12} sm={12} md={12} className="text-center fw-bold fs-1"><Button width="80%" destination="/dashboard" class="btn btn-outline-success" text="LogIn"/></Grid>
    <Grid item  xs={12} sm={12} md={12} className="text-center fw-bold fs-4 py-5">Do not have an account ?  <Button width="120px" destination="/" class="btn btn-outline-primary" text="Sign Up"/></Grid>
</Grid>
        </div>
    )
}
export default Login
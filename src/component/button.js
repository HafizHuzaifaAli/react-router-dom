import { Link } from "react-router-dom";

export default function Button(props) {
    return(
        <Link type="button" style={{width: `${props.width}`}}  className={props.class} to={props.destination}>{props.text}</Link>
    )
    
}
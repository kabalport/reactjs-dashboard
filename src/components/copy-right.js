import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright(props){
    return(
        <Typography variant="body2" color="white" align="center" {...props}>
            {"Copyright C"}
            <Link color="inherit" href="https://www.naver.com">
                csortwareEnginner
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}
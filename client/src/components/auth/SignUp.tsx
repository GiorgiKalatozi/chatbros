import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";

export default function SignUp() {
  return (
    <Auth submitLabel="Sign Up" onSubmit={async () => {}}>
      <Link to={"/signin"} style={{ alignSelf: "center" }}>
        <MUILink>Sign In</MUILink>
      </Link>
    </Auth>
  );
}

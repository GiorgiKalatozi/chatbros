import { Link as MUILink } from "@mui/material";
import { Link } from "react-router-dom";
import useCreateUser from "../../hooks/useCreateUser";
import { User } from "../../models/User";
import Auth from "./Auth";

export default function SignUp() {
  const [createUser] = useCreateUser();

  const handleUserCreate = async ({
    email,
    password,
  }: Pick<User, "email" | "password">) => {
    await createUser({
      variables: {
        createUserInput: {
          email,
          password,
        },
      },
    });
  };

  return (
    <Auth submitLabel='Sign Up' onSubmit={handleUserCreate}>
      <Link to={"/signin"} style={{ alignSelf: "center" }}>
        <MUILink>Sign In</MUILink>
      </Link>
    </Auth>
  );
}

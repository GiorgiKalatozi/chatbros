import { Button, Stack, TextField } from "@mui/material";

export default function Auth() {
  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: {
          xs: "70%",
          md: "30%",
        },
        margin: "0 auto",
        justifyContent: "center",
      }}>
      <TextField type="email" label="Email" variant="outlined" />
      <TextField type="password" label="Password" variant="outlined" />
      <Button variant="contained">Login</Button>
    </Stack>
  );
}

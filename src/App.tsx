import { colors } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ColorPickerInput from "./components/ColorPickerInput";

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: "text.secondary",
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <div className="m-4">
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          GHUI
        </Typography>
      </div>
      <div className="m-4">
        <ColorPickerInput
          className="my-1"
          label="Option 1"
          color={colors.red[500]}
        />
        <ColorPickerInput
          className="my-1"
          label="Option 1"
          color={colors.green[500]}
        />
        <ColorPickerInput
          className="my-1"
          label="Option 1"
          color={colors.blue[500]}
        />
      </div>
      <Copyright />
    </Container>
  );
}

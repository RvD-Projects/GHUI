import { colors } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ColorPickerInput from "./components/ColorPickerInput";

function Copyright() {
  return (
    <div className="flex flex-col items-center mt-4">
      <Typography
        variant="body2"
        align="center"
        sx={{
          color: "text.secondary",
        }}
      >
        {"Copyright © "}
        <Link color="inherit" href="#">
          GHUI
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}

export default function App() {
  return (
    <Container
      maxWidth="sm"
      className="h-full flex flex-col justify-center text-center"
    >
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        GHUI
      </Typography>

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

      <Copyright />
    </Container>
  );
}

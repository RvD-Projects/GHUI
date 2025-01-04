import { FormControlLabel, FormGroup } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ColorPickerInput from "./components/ColorPickerInput";
import MSwitch from "./components/Switch";

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
    <Container>
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 2 }}
        className="text-center"
      >
        GHUI
      </Typography>
      <div className="bg-slate-200 p-4 rounded-lg shadow-md">
        <FormGroup className="gap-4 ">
          <FormControlLabel
            label="Color 1"
            labelPlacement="start"
            className="flex justify-between"
            control={<ColorPickerInput />}
          />

          <FormControlLabel
            label="Switch 1"
            labelPlacement="start"
            className="flex justify-between"
            control={<MSwitch />}
          />
        </FormGroup>
      </div>

      <Copyright />
    </Container>
  );
}

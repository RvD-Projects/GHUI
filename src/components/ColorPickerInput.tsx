import {
  colors,
  InputAdornment,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ColorPicker, { ColorPickerProps } from "./ColorPicker";

const ColorPickerInput: React.FC<ColorPickerProps> = ({
  color = "#fff",
  label = "",
  onChange,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedColor, setSelectedColor] = useState(color);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    if (onChange) {
      onChange(color);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    if (onChange) {
      onChange(newColor);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "color-picker-popover" : undefined;

  return (
    <div {...props}>
      <TextField
        value={selectedColor}
        onChange={handleInputChange}
        style={{ cursor: "pointer" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {label && (
                <Typography variant="subtitle1" color={colors.grey[500]}>
                  {label.concat(": ")}
                </Typography>
              )}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <div
                onClick={handleClick}
                style={{
                  width: 24,
                  height: 24,
                  backgroundColor: selectedColor,
                  marginRight: 8,
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
              />
            </InputAdornment>
          ),
        }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ColorPicker
          label={label}
          color={selectedColor}
          onChange={handleColorChange}
        />
      </Popover>
    </div>
  );
};

export default ColorPickerInput;

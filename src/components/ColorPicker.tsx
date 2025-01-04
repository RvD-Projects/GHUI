import { Typography } from "@mui/material";
import React, { useState } from "react";
import { ColorResult, SketchPicker } from "react-color";

export interface ColorPickerProps {
  color?: string;
  label?: string;
  onChange?: (color: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  color = "#fff",
  label,
  onChange,
  ...props
}) => {
  const [selectedColor, setSelectedColor] = useState(color);

  const handleChange = (color: ColorResult) => {
    setSelectedColor(color.hex);
    if (onChange) {
      onChange(color.hex);
    }
  };

  return (
    <div>
      {label && (
        <Typography variant="subtitle1" className="mb-1 text-center">
          {label}
        </Typography>
      )}
      <SketchPicker color={selectedColor} onChange={handleChange} />
    </div>
  );
};

export default ColorPicker;

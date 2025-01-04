import React, { useState } from "react";
import { ColorResult, SketchPicker } from "react-color";

export interface ColorPickerProps {
  color?: string;
  label?: string;
  onChange?: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  color = "#fff",
  label = "",
  onChange,
}) => {
  const [selectedColor, setSelectedColor] = useState(color);

  const handleChange = (color: ColorResult) => {
    setSelectedColor(color.hex);
    if (onChange) {
      onChange(color.hex);
    }
  };

  return (
    <div className="text-center">
      {/* {label && <Typography variant="subtitle1">{label}</Typography>} */}
      <SketchPicker color={selectedColor} onChange={handleChange} />
    </div>
  );
};

export default ColorPicker;

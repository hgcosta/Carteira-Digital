import React, { useState } from "react";

import { Container, ToggleLabel, ToggleSelector } from "./styles";

const Toggle: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={checked}
        onChange={handleChange}
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={48}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;

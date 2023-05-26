import React, { useState } from "react";

import { Container, ToggleLabel, ToggleSelector } from "./styles";

interface IToggleProps {
  labelLeft: string;
  labelRight: string;
  check: boolean;
  onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({
  labelLeft,
  labelRight,
  check,
  onChange,
}) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <Container>
      <ToggleLabel>{labelLeft}</ToggleLabel>
      <ToggleSelector
        checked={check}
        onChange={onChange}
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={48}
      />
      <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
  );
};

export default Toggle;

import React, { useCallback, useState } from "react";
import { TextInputProps } from "react-native";

import { Container, InputText } from "./input.styles";

interface InputProps extends TextInputProps {}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocus((oldValue) => !oldValue);
  }, []);

  return (
    <Container>
      <InputText
        isFocus={isFocus}
        onBlur={handleFocus}
        onFocus={handleFocus}
        {...rest}
      />
    </Container>
  );
};

export { Input };

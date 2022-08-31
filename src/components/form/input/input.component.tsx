import React, { useCallback, useState } from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

import { Container, InputText } from "./input.styles";

interface InputProps extends TextInputProps {
  name: string;
  control: Control;
  isError?: boolean;
}

const Input: React.FC<InputProps> = ({ control, name, ...rest }) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocus((oldValue) => !oldValue);
  }, []);

  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <InputText
            isFocus={isFocus}
            onBlur={handleFocus}
            onFocus={handleFocus}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
      ></Controller>
    </Container>
  );
};

export { Input };

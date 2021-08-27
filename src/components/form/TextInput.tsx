import { TextField } from "@material-ui/core";
import { useField } from "formik";
import styled from "styled-components";

interface TextInputProps {
  name: string;
  placeholder: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({ name, ...props }) => {
  const [field, { error, touched }] = useField(name);

  return (
    <StyledTextField
      {...field}
      {...props}
      name={name}
      error={!!error && touched}
      helperText={<StyledError>{error}</StyledError>}
      variant="outlined"
    />
  );
};

export default TextInput;

const StyledTextField = styled(TextField)`
  &&& {
    background-color: #fff;
    height: 3.5rem;
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 0.25rem;
    display: flex;
    border-width: 0;
    outline: none;
  }
`;

const StyledError = styled.p`
  color: red;
  text-align: right;
`;

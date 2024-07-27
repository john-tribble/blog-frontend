
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';

export const TextFieldCustom = styled(TextField)({
  margin: 5
});

export const FormCustom = styled('form')({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});
const themeCustom = {
  root: {
    "& .MuiTextField-root": {
      margin: 1 ,
    },
  },
  paper: {
    padding: 5,
  },
  chooseFile: {
    width: "95%",
    margin: "10px 0",
  },
  publishButton: {
    marginTop: 2,
  },
};

export default themeCustom;
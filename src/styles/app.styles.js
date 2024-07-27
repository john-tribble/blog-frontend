import { styled } from '@mui/system';
import { AppBar, Typography } from "@mui/material";


export const Image = styled('img')({
  marginRight: "25px",
});

export const AppBarCustom = styled(AppBar)({
  borderRadius: 10,
  margin: "6px 0px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const Title = styled(Typography)({
  color: "#8661d1",
  fontFamily: "Poppins",
  fontStyle: "bold",
});


// const theme = createTheme({
//   components: {
//     // Name of the component ⚛️
//     MuiAppBar: {
//       defaultProps: {
//         // The default props to change
//         //disableRipple: true, // No more ripple, on the whole application 💣!
//         borderRadius: 10,
//         margin: "6px 0px",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//       },
//     },
//     MuiTypography:{
//       defaultProps:{
//         color: "#8661d1",
//         fontFamily: "Poppins",
//         fontStyle: "bold",
//       }
//     }
//   },
// });
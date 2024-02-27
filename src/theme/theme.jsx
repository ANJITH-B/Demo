import { createTheme } from '@mui/material/styles';

const Theme = ({ mode = 'light', setMode = () => { } }) => {
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const primaryColor = mode === 'light' ? "#3f50b5" : "#757ce8";
  const secondaryColor = mode === 'light' ? '#000' : '#000'
  const secondaryDark = mode === 'light' ? '#ffebee' : 'rgba(140, 45, 45, 0.4)'
  const textColor = mode === "light" ? '#000' : '#fff';
  const lightColor = mode === 'light' ? '#bdbdbd':'#757575'
  const sucessLight = mode === 'light' ? '#c8e6c9':'#c8e6c9'
  const sucessColor = mode === 'light' ? '#2e7d32':'#2e7d32'
  const dangerLight = mode === 'light' ? '#ffcdd2':'#ffcdd2'
  const dangerColor = mode === 'light' ? '#c62828':'#c62828'
  
  const theme = createTheme({
    palette: {
      mode,
      primary: { main: primaryColor },
      secondary: { main: secondaryColor,dark: secondaryDark },
      text: { main: textColor ,light: lightColor},
      success: { main: sucessColor, light: sucessLight},
      danger: { main: dangerColor, light: dangerLight}
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
  });

  return { toggleColorMode, theme };
}
export default Theme;

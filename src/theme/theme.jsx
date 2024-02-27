import { createTheme } from '@mui/material/styles';

const Theme = ({ mode = 'light', setMode = () => { } }) => {
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const primaryColor = mode === 'light' ? "#a31545" : "#000";
  const secondaryColor = mode === 'light' ? '#000' : '#000'
  const secondaryDark = mode === 'light' ? '#ffa199' : '#b26059'
  const textColor = mode === "light" ? '#000' : '#fff';
  const lightColor = mode === 'light' ? '#bdbdbd':'#757575'
  const sucessLight = mode === 'light' ? '#c8e6c9':'#ffcdd2'
  const sucessColor = mode === 'light' ? '#2e7d32':'#c62828'
  
  const theme = createTheme({
    palette: {
      mode,
      primary: { main: primaryColor },
      secondary: { main: secondaryColor,dark: secondaryDark },
      text: { main: textColor ,light: lightColor},
      success: { main: sucessColor, light: sucessLight}
    },
  });

  return { toggleColorMode, theme };
}
export default Theme;

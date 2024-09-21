// 共通化したいデザインを定義する
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1760a5',
      light: 'skyblue',
    },
    secondary: {
      main: '#15c630',
    },
    // 任意のpalette
    otherColor: {
      main: '#999',
    },
  },
});

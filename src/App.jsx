import Button from '@mui/material/Button';
// まとめてアイコンインストールするときは、○○IconのIconは省略してOK
import { Settings, Add } from '@mui/icons-material';
import { styled, Typography } from '@mui/material';
function App() {
  // デザインの共通化const 任意のコンポーネント名 = styled(HTMLのタグ)
  const BlueButton = styled(Button)({
    // theme.jsで任意のpaletteを使用したい場合
    // const CustomButton = styled(Button)(({ theme }) => ({
    // backgroundColor: theme.palette.otherColor.main }
    backgroundColor: 'skyblue',
    color: '#888',
    margin: 5,
    '&:hover': {
      backgroundColor: 'lightblue',
    },
    '&:disabled': {
      backgroundColor: 'gray',
      color: 'white',
    },
  });
  return (
    <>
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} variant="contained" color="primary" size="small">
        Settings
      </Button>
      <Button startIcon={<Add />} variant="contained" color="secondary" size="small">
        Add new post
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      {/* pタグで大きさがh1のテキスト */}
      <Typography variant="h1" component="p">
        It uses h1 style but it's a p tag
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>Another Button</BlueButton>
    </>
  );
}

export default App;

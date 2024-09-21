import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// ThemeProviderコンポーネントと共通化を定義したファイルのインポート
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* デザインを使いたい範囲にThemeProviderを親要素として記述 */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);

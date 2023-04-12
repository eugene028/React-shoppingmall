import ReactDOM from 'react-dom/client'
import App from './App'
import { css, Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { globalStyle, theme } from '@styles/theme'
import { worker} from './mocks/browser';

const pageGlobalStyle = css`
  ${globalStyle}
  body {
    background-color: ${theme.palette.white};
  }
` 
//vite env 설정
if (import.meta.env.DEV) {
  worker.start()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <Global styles = {pageGlobalStyle}/>
      <ThemeProvider theme = {theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
)

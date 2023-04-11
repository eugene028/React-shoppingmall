import ReactDOM from 'react-dom/client'
import App from './App'
import { css, Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { globalStyle, theme } from '@styles/theme'

const pageGlobalStyle = css`
  ${globalStyle}
  body {
    background-color: ${theme.palette.white};
  }
` 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <Global styles = {pageGlobalStyle}/>
      <ThemeProvider theme = {theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
)

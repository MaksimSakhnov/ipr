import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import AppHeaderContainer from 'containers/AppHeaderContainer';
import PageFilms from 'pages/PageFilms';
import PagePeople from 'pages/PagePeople';
import { DarkTheme, LightTheme } from 'shared/themes/Themes.const';
import { useAppStore } from 'store';
import { FILMS, MAIN } from 'routes/routes';

function App() {
  const darkTheme = useAppStore((state) => state.darkTheme);

  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <AppHeaderContainer />

      <div>
        <Routes>
          <Route path={MAIN} element={<PagePeople />} />
          <Route path={FILMS} element={<PageFilms />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

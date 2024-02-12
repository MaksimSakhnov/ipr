import { Route, Routes } from 'react-router-dom';
import AppHeaderContainer from './containers/AppHeaderContainer';
import { FILMS, MAIN } from './routes/routes';
import PagePeople from './pages/PagePeople';
import PageFilms from './pages/PageFilms';
import { useAppStore } from './store';
import { DarkTheme, LightTheme } from './pages/PagePeople/PagePeople.const';
import { ThemeProvider } from '@mui/material';

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

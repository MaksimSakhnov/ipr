import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import AppHeaderContainer from 'containers/AppHeaderContainer';
import { DarkTheme, LightTheme } from 'shared/themes/Themes.const';
import { useAppStore } from 'store';
import { FILMS, MAIN } from 'routes/routes';

const PageFilms = lazy(() => import('pages/PageFilms'));
const PagePeople = lazy(() => import('pages/PagePeople'));

function App() {
  const darkTheme = useAppStore((state) => state.darkTheme);

  return (
    <ThemeProvider theme={darkTheme ? DarkTheme : LightTheme}>
      <AppHeaderContainer />

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={MAIN} element={<PagePeople />} />
            <Route path={FILMS} element={<PageFilms />} />
          </Routes>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;

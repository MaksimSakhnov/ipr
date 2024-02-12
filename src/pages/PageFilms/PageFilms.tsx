import { useEffect } from 'react';
import { Paper } from '@mui/material';
import { useFilms } from 'store/filmsStore';
import { FilmCard } from 'components/FilmCard/FilmCard';
import styles from './PageFilms.module.scss';

export function PageFilms() {
  const films = useFilms((state) => state.films);
  const getFilms = useFilms((state) => state.getFilms);

  useEffect(() => {
    getFilms();
  }, [getFilms]);

  return (
    <Paper elevation={3}>
      <div className={styles.content}>
        {films.map((el) => (
          <FilmCard data={el} />
        ))}
      </div>
    </Paper>
  );
}

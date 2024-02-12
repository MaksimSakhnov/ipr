import { useEffect } from 'react';
import { Paper } from '@mui/material';
import PeopleCard from 'components/PeopleCard';
import { usePeople } from 'store';
import styles from './PagePeople.module.scss';

export function PagePeople() {
  const people = usePeople((state) => state.people);
  const getPeople = usePeople((state) => state.getPeople);

  useEffect(() => {
    getPeople();
  }, [getPeople]);

  return (
    <>
      <Paper elevation={3}>
        <div className={styles.content}>
          {people.map((el) => (
            <PeopleCard data={el} />
          ))}
        </div>
      </Paper>
    </>
  );
}

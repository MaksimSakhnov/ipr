import { Card, CardContent, Typography } from '@mui/material';
import { transformDateToCustomFormat } from 'shared/utils/transformDateToCustomFormat';
import { addOrSubToDate } from 'shared/utils/addOrSubToDate';
import { PeopleCardProps } from './PeopleCard.type';

export function PeopleCard({ data }: PeopleCardProps) {
  return (
    <Card sx={{ width: '20vw' }}>
      <CardContent>
        <Typography variant="h4">{data.name}</Typography>
        <Typography variant={'h6'}>{data.birth_year}</Typography>
        <Typography>
          Создано: {transformDateToCustomFormat(data.created)}
        </Typography>
        <Typography>
          Изменено: {transformDateToCustomFormat(data.edited)}
        </Typography>
        <Typography>
          Дата создания + 10 дней: {addOrSubToDate(data.created, 10, 'add')}
        </Typography>

        <Typography>
          Дата изменения - 22 дня: {addOrSubToDate(data.edited, 22, 'sub')}
        </Typography>
      </CardContent>
    </Card>
  );
}

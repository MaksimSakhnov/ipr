import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { addOrSubToDate } from 'shared/utils/addOrSubToDate';
import { transformDateToCustomFormat } from 'shared/utils/transformDateToCustomFormat';
import { PeopleCardProps } from './PeopleCard.type';

export function PeopleCard({ data }: PeopleCardProps) {
  const { t } = useTranslation();
  return (
    <Card sx={{ width: '20vw' }}>
      <CardContent>
        <Typography variant="h4">{data.name}</Typography>
        <Typography variant={'h6'}>{data.birth_year}</Typography>
        <Typography>
          {t('card.created')}: {transformDateToCustomFormat(data.created)}
        </Typography>
        <Typography>
          {t('card.edited')} {transformDateToCustomFormat(data.edited)}
        </Typography>
        <Typography>
          {t('card.date_created')}: {addOrSubToDate(data.created, 10, 'add')}
        </Typography>

        <Typography>
          {t('card.date_edited')}: {addOrSubToDate(data.edited, 22, 'sub')}
        </Typography>
      </CardContent>
    </Card>
  );
}

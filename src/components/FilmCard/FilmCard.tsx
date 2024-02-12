import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FilmCardProps } from './FilmCard.type';

export function FilmCard({ data }: FilmCardProps) {
  const { t } = useTranslation();

  return (
    <Card sx={{ width: '20vw' }}>
      <CardContent>
        <Typography variant="h4">{data.title}</Typography>
        <Typography variant={'h6'}>
          {t('card.episode')}: {data.episode_id}
        </Typography>
      </CardContent>
    </Card>
  );
}

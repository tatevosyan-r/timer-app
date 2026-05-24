import { memo } from 'react';
import { Title } from './TimerTitle.styles';

const TimerTitle = memo(() => {
    return <Title>Таймер</Title>;
});

export default TimerTitle;
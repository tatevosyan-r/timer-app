import { memo } from 'react';
import { TimeDisplayBox } from './TimeDisplay.styles';

interface TimeDisplayProps {
    formattedTime: string;
}

const TimeDisplay = memo(({ formattedTime }: TimeDisplayProps) => {
    return <TimeDisplayBox>{formattedTime}</TimeDisplayBox>;
});

export default TimeDisplay;
import { memo, useMemo } from 'react';
import { ButtonsWrapper, StyledButton } from './ControlButtons.styles';

interface ControlButtonsProps {
    onStartPauseResume: () => void;
    onReset: () => void;
    isRunning: boolean;
    timeMs: number;
}

const ControlButtons = memo(({ onStartPauseResume, onReset, isRunning, timeMs }: ControlButtonsProps) => {
    const buttonText = useMemo(() => {
        if (isRunning) return 'Пауза';
        return timeMs === 0 ? 'Старт' : 'Возобновить';
    }, [isRunning, timeMs]);

    return (
        <ButtonsWrapper>
            <StyledButton $primary onClick={onStartPauseResume}>
                {buttonText}
            </StyledButton>
            <StyledButton onClick={onReset}>Сброс</StyledButton>
        </ButtonsWrapper>
    );
});

export default ControlButtons;
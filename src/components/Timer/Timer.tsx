import { useState, useCallback, useRef, useEffect, useMemo, memo } from 'react';
import { Container } from './Timer.styles';
import TimerTitle from './TimerTitle';
import TimeDisplay from './TimeDisplay';
import ControlButtons from './ControlButtons';

const Timer = memo(() => {
    const [timeMs, setTimeMs] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef<number>(0);
    const accumulatedRef = useRef<number>(0);

    const stopInterval = useCallback(() => {
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
        }
    }, []);

    const startTimer = useCallback(() => {
        stopInterval();
        const now = Date.now();
        startTimeRef.current = now - accumulatedRef.current;
        intervalIdRef.current = setInterval(() => {
            const elapsed = Date.now() - startTimeRef.current;
            setTimeMs(elapsed);
        }, 10);
        setIsRunning(true);
    }, [stopInterval]);

    const pauseTimer = useCallback(() => {
        stopInterval();
        accumulatedRef.current = timeMs;
        setIsRunning(false);
    }, [stopInterval, timeMs]);

    const resetTimer = useCallback(() => {
        stopInterval();
        accumulatedRef.current = 0;
        startTimeRef.current = 0;
        setTimeMs(0);
        setIsRunning(false);
    }, [stopInterval]);

    const onStartPauseResume = useCallback(() => {
        if (isRunning) {
            pauseTimer();
        } else {
            if (timeMs === 0) {
                accumulatedRef.current = 0;
                startTimer();
            } else {
                startTimer();
            }
        }
    }, [isRunning, timeMs, pauseTimer, startTimer]);

    const onReset = useCallback(() => {
        resetTimer();
    }, [resetTimer]);

    const formattedTime = useMemo(() => {
        const minutes = Math.floor(timeMs / 60000);
        const seconds = Math.floor((timeMs % 60000) / 1000);
        const milliseconds = timeMs % 1000;
        return `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
    }, [timeMs]);

    useEffect(() => {
        return () => {
            stopInterval();
        };
    }, [stopInterval]);

    return (
        <Container>
            <TimerTitle />
            <TimeDisplay formattedTime={formattedTime} />
            <ControlButtons
                onStartPauseResume={onStartPauseResume}
                onReset={onReset}
                isRunning={isRunning}
                timeMs={timeMs}
            />
        </Container>
    );
});

export default Timer;
import {useEffect, useState} from "react";
import {useTransitionSignal} from "./use-transition-signal.ts";
import {effect} from "@preact/signals-react";
import {SwipeDirection} from "./SwipeDirection.ts";

export const useAnimation = () => {
    const [slideDirection, setSlideDirection] = useState<SwipeDirection>(useTransitionSignal.value);

    useEffect(() => {
        effect(() => {
            const value = useTransitionSignal.value;

            if (value === SwipeDirection.Left || value === SwipeDirection.Right) {
                setSlideDirection(value);
                setTimeout(() => {
                    useTransitionSignal.value = SwipeDirection.None;
                    setSlideDirection(SwipeDirection.None);
                }, 1000)
            }
        })

    }, []);

    return slideDirection;
}
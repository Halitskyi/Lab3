import {signal} from "@preact/signals-react";
import {SwipeDirection} from "./SwipeDirection.ts";

export const useTransitionSignal = signal(SwipeDirection.None);
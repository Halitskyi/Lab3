import {useTransitionSignal} from "../../../../../../common-components/Tansition/use-transition-signal.ts";
import {SwipeDirection} from "../../../../../../common-components/Tansition/SwipeDirection.ts";

export const handleButtonClick = (navigate: any) => {
    setTimeout(() => navigate(`/`), 600);
    useTransitionSignal.value = SwipeDirection.Right;
}
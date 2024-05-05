import { useAnimation } from "./useAnimation.ts";
import { SwipeDirection } from "./SwipeDirection.ts";

const TransitionAnimation = () => {
    const animation = useAnimation();

    if (animation === SwipeDirection.None) return null;

    return (
        <div className="fixed inset-0 z-10 overflow-hidden">
            <div className={`absolute w-full h-screen ${animation === SwipeDirection.Left ? 'animate-swipeToLeft' : 'animate-swipeToRight'} bg-animation`}></div>
        </div>
    )
}

export default TransitionAnimation;

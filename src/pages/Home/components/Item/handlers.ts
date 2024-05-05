import {useTransitionSignal} from "../../../../common-components/Tansition/use-transition-signal.ts";
import {PaletteType} from "../../../Palette/PaletteType.ts";
import {SwipeDirection} from "../../../../common-components/Tansition/SwipeDirection.ts";

export const handleItemClick = (navigate: any, palette: PaletteType) => {
    const id = palette.id;

    setTimeout(() => navigate(`/palette/${id}`), 750);
    useTransitionSignal.value = SwipeDirection.Left;
}
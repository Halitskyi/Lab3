import {Dispatch, SetStateAction} from "react";
import {ColorFormatEnum} from "./ColorFormatEnum.ts";
import {colorFormatSignal} from "./color-format-signal.ts";

export const handleElementClick = (setColorFormat: React.Dispatch<React.SetStateAction<ColorFormatEnum>>,
                                   setIsDropdownOpened: React.Dispatch<React.SetStateAction<boolean>>,
                                   element: string) => {
    setColorFormat(element)
    setIsDropdownOpened(false)
    colorFormatSignal.value = element;
}
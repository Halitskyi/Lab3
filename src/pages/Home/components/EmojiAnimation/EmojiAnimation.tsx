import {useState} from "react";
import {useEmojiAnimation} from "./use-emoji-animation.ts";

const EmojiAnimation = () => {
    const emojis = ['🤞', '✌️', '🤟', '🖐', '👍', '👎', '👊', '✊', '🤘', '👌',
        '👈', '👉', '👆', '👇', '☝️', '✋', '🤚', '🖐️', '🖖', '👋',
        '🤙', '💪', '🦾', '🦵', '🦶', '👂', '🦻', '👃', '🦷',
        '🦴', '👀', '👁️', '👅', '👄', '👶', '🧒', '👦', '👧', '🧑',
        '👱', '👨', '🧔', '👩', '🧓', '👴', '👵', '🙍', '🙎', '🙅',
        '🙆', '💁', '🙋', '🧏', '🙇', '🤦', '🤷', '👮', '🕵️', '💂',
        '👷', '🤴', '👸', '👳', '👲', '🧕', '🤵', '👰', '🤰', '🤱',
        '👼', '🎅', '🤶', '🧙', '🧚', '🧛', '🧜', '🧝', '🧞', '🧟',
        '💆', '💇', '🚶', '🧍', '🧎', '🏃', '💃', '🕺', '🕴️', '👯',
        '🧖', '🧘', '🛀', '🛌', '🕐'];
    const [emojiIndex, setEmojiIndex] = useState(Math.floor(Math.random() * emojis.length));
    useEmojiAnimation(setEmojiIndex, emojis);

    return (
        <span>{emojis[emojiIndex]}</span>
    )
}

export default EmojiAnimation;
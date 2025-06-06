import { useState } from "react";
import { useTheme } from "@/lib/context/theme";
import style from "./style.module.scss";
import SvgIcon from "@/elements/icon/svg";

export default function ButtonScroll({ theme, className, onClick }) {
    const { isDark } = useTheme();
    const [clicked, setClicked] = useState(false);

    const handleClick = (e) => {
        setClicked(true);
        setTimeout(() => setClicked(false), 200);
        if (onClick) onClick(e);
    };

    return (
        <button onClick={handleClick} className={`${style.scroll} ${style[theme]} ${className} ${clicked ? style.clicked : ""}`}>
            <SvgIcon url={"/arrow-up.svg"} />
        </button>
    );
}
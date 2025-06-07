import { useState } from "react";
import style from "./style.module.scss";

export default function ButtonPrimary({ children, className, onClick, theme }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = (e) => {
        setClicked(true);
        setTimeout(() => setClicked(false), 200);
        if (onClick) onClick(e);
    };

    return (
        <button onClick={handleClick} className={`${style.primary} ${style[theme]} ${className} ${clicked ? style.clicked : ""}`}>
            {children}
        </button>
    );
}
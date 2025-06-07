import style from "./style.module.scss";
import SvgIcon from "@/elements/icon/svg";

export default function ButtonScroll({ theme, className, onClick }) {
    return (
        <button onClick={onClick} className={`${style.scroll} ${style[theme]} ${className}`}>
            <SvgIcon url={"/arrow-up.svg"} />
        </button>
    );
}
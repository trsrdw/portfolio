import { useTheme } from "@/lib/context/theme";
import style from "./style.module.scss";

export default function ButtonSecondary({ children, className, onClick, theme }) {
    const { isDark } = useTheme();

    return (
        <button onClick={onClick} className={`${style.secondary} ${style[theme]} ${className}`}>
            {children}
        </button>
    );
}
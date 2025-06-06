import { useTheme } from "@/lib/context/theme";
import style from "./style.module.scss";

export default function ButtonSecondary({ children, className, onClick }) {
    const { isDark } = useTheme();

    return (
        <button onClick={onClick} className={`${style.secondary} ${isDark ? style.dark : style.light} ${className}`}>
            {children}
        </button>
    );
}
import { useTheme } from "@/lib/context/theme";
import style from "./style.module.scss";

export default function ButtonPrimary({ children, className, onClick }) {
    const { isDark } = useTheme();

    return (
        <button onClick={onClick} className={`${style.primary} ${isDark ? style.dark : style.light} ${className}`}>
            {children}
        </button>
    );
}
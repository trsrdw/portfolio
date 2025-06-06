
import { useTheme } from "@/lib/context/theme";
import style from "./style.module.scss";

export default function ToggleMode() {
    const { isDark, setIsDark } = useTheme();

    return (
        <div className={`${style.toggleBtn} ${isDark ? style.dark : style.light}`}>
            <input
                type="checkbox"
                id="toggleMode"
                checked={isDark}
                onChange={() => setIsDark(!isDark)}
            />
            <span></span>
        </div>
    );
}

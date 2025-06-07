"use client";
import Image from "next/image";
import style from "./style.module.scss";
import { useTheme } from "@/lib/context/theme";

export default function LoadingScreen() {
    const { isDark } = useTheme();
    const logo = isDark ? "/logo-white.png" : "/logo-transparent.png";
    return (
        <div className={`${style.screen} ${isDark ? style.dark : style.light}`}>
            <div className={style.logo}>
                <Image src={logo} alt={"TRSD"} fill priority />
            </div>
            <div className={style.bar}></div>
        </div>
    );
}
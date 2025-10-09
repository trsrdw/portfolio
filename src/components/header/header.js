import { useState } from "react";
import { navigations } from "@/lib/helper";
import { useTheme } from "@/lib/context/theme";
import { useIsTablet } from "@/lib/hooks/tablet";
import Image from "next/image";
import Container from "@/elements/container/container";
import style from "./style.module.scss";
import ToggleMode from "@/elements/toggle/mode";
import Link from "next/link";
import ButtonScroll from "@/elements/button/scroll/scroll";

export default function Header({ sectionRefs, activeSection }) {
    const { isDark } = useTheme();
    const isTablet = useIsTablet();
    const [isOpen, setIsOpen] = useState(false);
    const logo = isDark ? "/logo-white.png" : "/logo-transparent.png";

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`${style.wrapper} ${isDark ? style.dark : style.light} ${style.bg}`}>
            <Container className={style.content}>
                <ButtonScroll theme={isDark ? "dark" : "light"} className={`${style.up} ${style.show}`} onClick={() => scrollToSection("hero")} />
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}`} className={style.logo}>
                    <Image src={logo} width={500} height={500} alt={"TRSD"} priority />
                </Link>

                <div className={style.right}>
                    {isTablet && (
                        <button
                            className={`${style.menuToggle} ${isDark ? style.dark : ""} ${isOpen ? style.open : ""}`}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                        </button>
                    )}

                    <ul className={`${style.navigation} ${isDark ? style.dark : style.light} ${isOpen || !isTablet ? style.show : ""}`}>
                        {navigations.map(({ label, key }) => (
                            <li key={key}>
                                <button
                                    className={`buttonLink active`}
                                    onClick={() => scrollToSection(key)}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                        <li><ToggleMode /></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
}

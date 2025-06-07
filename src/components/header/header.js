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

    const scrollToSection = (key) => {
        const ref = sectionRefs[key];
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`${style.wrapper} ${isDark ? style.dark : style.light} ${activeSection !== "hero" ? style.bg : ""}`}>
            <Container className={style.content}>
                <ButtonScroll theme={isDark ? "dark" : "light"} className={`${style.up} ${activeSection !== "hero" ? style.show : ""}`} onClick={() => scrollToSection("hero")} />
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}`} className={style.logo}>
                    <Image src={logo} width={500} height={500} alt={"TRSD"} priority />
                </Link>

                <div className={style.right}>
                    {isTablet ? (
                        activeSection === "hero" ? (
                            <ToggleMode />
                        ) : (
                            <button
                                className={`${style.menuToggle} ${isDark ? style.dark : ""} ${isOpen ? style.open : ""}`}
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                            >
                                <span></span>
                                <span></span>
                            </button>
                        )
                    ) : (
                        activeSection === "hero" && (
                            <ToggleMode />
                        )
                    )}

                    {!(activeSection === "hero" && !isTablet) && (
                        <ul className={`${style.navigation} ${isDark ? style.dark : style.light} ${isOpen || !isTablet ? style.show : ""}`}>
                            {(!isTablet || (isTablet && activeSection !== "hero")) &&
                                navigations.map(({ label, key }) => (
                                    <li key={key}>
                                        <button
                                            className={`buttonLink ${activeSection === key ? "active" : ""}`}
                                            onClick={() => scrollToSection(key)}
                                        >
                                            {label}
                                        </button>
                                    </li>
                                ))}
                            {!(isTablet && activeSection === "hero") && (
                                <li><ToggleMode /></li>
                            )}
                        </ul>
                    )}
                </div>
            </Container>
        </nav>
    );
}

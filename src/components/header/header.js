import { useState, useEffect } from "react";
import { navigations } from "@/lib/helper";
import { useTheme } from "@/lib/context/theme";
import Image from "next/image";
import Container from "@/elements/container/container";
import style from "./style.module.scss";
import ToggleMode from "@/elements/toggle/mode";

export default function Header({ sectionRefs, activeSection }) {
    const { isDark } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const logo = isDark ? "/logo-white.png" : "/logo-transparent.png";
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 68); // 50px scroll before effect
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 992);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const scrollToSection = (key) => {
        const ref = sectionRefs[key];
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`${style.wrapper} ${isDark ? style.dark : style.light} ${scrolled ? style.bg : ""}`}>
            <Container className={style.content}>
                <div className={style.logo}>
                    <Image src={logo} width={500} height={500} alt={"TRSD"} priority />
                </div>

                <div className={style.right}>
                    {isMobile ? (
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

                    {!(activeSection === "hero" && !isMobile) && (
                        <ul className={`${style.navigation} ${isDark ? style.dark : style.light} ${isOpen || !isMobile ? style.show : ""}`}>
                            {(!isMobile || (isMobile && activeSection !== "hero")) &&
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
                            {!(isMobile && activeSection === "hero") && (
                                <li><ToggleMode /></li>
                            )}
                        </ul>
                    )}
                </div>
            </Container>
        </nav>
    );
}

import { useState, useEffect } from "react";
import { navigations } from "@/lib/helper";
import { useTheme } from "@/lib/context/theme";
import Image from "next/image";
import Container from "@/elements/container/container";
import style from "./style.module.scss";
import ToggleMode from "@/elements/toggle/mode";
import Link from "next/link";

export default function Header({ sectionRefs, activeSection }) {
    const { isDark } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const logo = isDark ? "/logo-white.png" : "/logo-transparent.png";

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
        <nav className={style.wrapper}>
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
                        <ul className={`${style.navigation} ${isDark ? style.dark : ""} ${isOpen || !isMobile ? style.show : ""}`}>
                            {(!isMobile || (isMobile && activeSection !== "hero")) &&
                                navigations.map(({ label, key }) => (
                                    <li key={key}>
                                        <button
                                            className={`buttonLink ${activeSection === key ? "active" : ""}`}
                                            onClick={() => scrollToSection(key)}
                                        >
                                            {label}
                                        </button>
                                        {/* <Link href={`#${key}`}>{label}</Link> */}
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

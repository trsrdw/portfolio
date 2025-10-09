import { useState, useEffect } from "react";
import { navigations } from "@/lib/helper";
import { useTheme } from "@/lib/context/theme";
import { useIsTablet } from "@/lib/hooks/tablet";
import Image from "next/image";
import Container from "@/elements/container/container";
import style from "./style.module.scss";
import ToggleMode from "@/elements/toggle/mode";
import Link from "next/link";
import ButtonScroll from "@/elements/button/scroll/scroll";

export default function Header() {
    const { isDark } = useTheme();
    const isTablet = useIsTablet();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const logo = isDark ? "/logo-white.png" : "/logo-transparent.png";

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const sectionElements = navigations
            .map(({ key }) => document.getElementById(key))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                } else {
                    const hero = document.getElementById("hero");
                    if (window.scrollY < hero?.offsetHeight / 2) {
                        setActiveSection("hero");
                    }
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        sectionElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className={`${style.wrapper} ${isDark ? style.dark : style.light} ${activeSection !== "hero" || isOpen ? style.bg : ""}`}>
            <Container className={style.content}>
                <ButtonScroll
                    theme={isDark ? "dark" : "light"}
                    className={`${style.up} ${activeSection !== "hero" ? style.show : ""}`}
                    onClick={() => scrollToSection("hero")}
                />

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
                                    className={`buttonLink ${activeSection === key ? "active" : ""}`}
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

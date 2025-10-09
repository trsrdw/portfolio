import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "@/lib/context/theme";
import Image from "next/image";
import ButtonPrimary from "@/elements/button/primary/primary";
import ButtonSecondary from "@/elements/button/secondary/secondary";
import style from "./style.module.scss";

export default function Hero() {
    const { isDark } = useTheme();
    const [loading, setLoading] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const downloadResume = () => {
        setLoading(true);
        const link = document.createElement("a");
        link.href = "https://drive.google.com/uc?export=download&id=1n6oiTkJ_IDo_cVbO9oCKvb7V5vzXHYzE";
        link.download = "CV_TiaraSariDewi.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => setLoading(false), 2000);
    };

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.4 },
        },
    };

    const fadeScale = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const fadeScaleButtons = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                staggerChildren: 0.4,
            },
        },
    };

    const bounceVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 12,
            },
        },
    };

    return (
        <section id="hero" className={style.wrapper}>
            <motion.div
                className={style.framer}
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Photo */}
                <motion.div
                    className={`${style.photo} ${isDark ? style.dark : style.light}`}
                    variants={fadeScale}
                >
                    <Image src={"/tiara.png"} width={295} height={520} alt={"Tiara"} priority />
                </motion.div>

                {/* Heading */}
                <motion.div className={style.heading} variants={fadeScale}>
                    <h1>Tiara Sari Dewi</h1>
                    <p>Hi! I&apos;m a Frontend Developer based in Bandung, Indonesia.</p>
                </motion.div>

                {/* CTA */}
                <motion.div className={style.cta} variants={fadeScaleButtons}>
                    <motion.div variants={bounceVariant}>
                        <ButtonPrimary
                            className={style.dig}
                            theme={isDark ? "dark" : "light"}
                            onClick={() => scrollToSection("about")}
                        >
                            <span>Dig a little deeper</span>
                            <span className={style.emoji}>🕵🏻</span>
                        </ButtonPrimary>
                    </motion.div>

                    <motion.div variants={bounceVariant}>
                        <ButtonSecondary
                            theme={isDark ? "dark" : "light"}
                            onClick={downloadResume}
                            disabled={loading}
                            className={`${style.download} ${isDark ? style.dark : style.light}`}
                        >
                            {loading ? (
                                <span>
                                    Fetching the clues... <span className={style.spinner}></span>
                                </span>
                            ) : (
                                <span>Snoop the résumé 📄</span>
                            )}
                        </ButtonSecondary>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

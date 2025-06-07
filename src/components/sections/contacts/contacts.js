import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useTheme } from "@/lib/context/theme";
import { contacts } from "@/lib/helper";
import Container from "@/elements/container/container";
import style from "./style.module.scss";
import SvgIcon from "@/elements/icon/svg";

export default function Contacts({ sectionRef }) {
    const { isDark } = useTheme();

    // Animation setup
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.8 });

    useEffect(() => {
        if (isInView) controls.start("visible");
        else controls.start("hidden");
    }, [isInView, controls]);

    const containerVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.5,
            },
        },
    };

    const fadeUpVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 90,
                damping: 20,
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
        <section ref={sectionRef} className={style.wrapper}>
            <Container className={style.content}>
                {/* Uncomment if you want a heading */}
                {/* <motion.h2
                    ref={ref}
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate={controls}
                >
                    Contacts
                </motion.h2> */}

                <motion.div

                    className={style.frame}
                    variants={containerVariant}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.div className={style.iconwrapper} variants={containerVariant}>
                        {contacts.map((contact, index) => (
                            <motion.a
                                ref={ref}
                                href={contact.link}
                                target="_blank"
                                rel="noreferrer"
                                className={`${style.icon} ${isDark ? style.dark : style.light
                                    } ${contact.label === "LinkedIn"
                                        ? style.linkedin
                                        : contact.label === "Github"
                                            ? style.github
                                            : contact.label === "Email"
                                                ? style.email
                                                : ""
                                    }`}
                                key={index}
                                variants={bounceVariant}
                            >
                                <SvgIcon url={contact.logo} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className={style.copyright}
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate={controls}
                >
                    <p>&copy; {new Date().getFullYear()} Tiara Sari Dewi. All rights reserved.</p>
                </motion.div>
            </Container>
        </section>
    );
}

import { motion } from "framer-motion";
import { useTheme } from "@/lib/context/theme";
import { contacts } from "@/lib/helper";
import Container from "@/elements/container/container";
import style from "./style.module.scss";
import SvgIcon from "@/elements/icon/svg";

export default function Contacts() {
    const { isDark } = useTheme();

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
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
        <section id="contacts" className={style.wrapper}>
            <Container className={style.content}>
                <h2>Contacts</h2>

                <div className={style.frame}>
                    <motion.div
                        className={style.iconwrapper}
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        {contacts.map((contact, index) => (
                            <motion.a
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
                </div>

                <motion.div
                    className={style.copyright}
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p>&copy; {new Date().getFullYear()} Tiara Sari Dewi. All rights reserved.</p>
                </motion.div>
            </Container>
        </section>
    );
}

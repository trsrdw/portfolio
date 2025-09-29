import { useTheme } from "@/lib/context/theme";
import { contacts } from "@/lib/helper";
import Container from "@/elements/container/container";
import style from "./style.module.scss";
import SvgIcon from "@/elements/icon/svg";

export default function Contacts({ sectionRef }) {
    const { isDark } = useTheme();

    return (
        <section ref={sectionRef} className={style.wrapper}>
            <Container className={style.content}>
                {/* Heading (uncomment if needed) */}
                {/* <h2>Contacts</h2> */}

                <div className={style.frame}>
                    <div className={style.iconwrapper}>
                        {contacts.map((contact, index) => (
                            <a
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
                            >
                                <SvgIcon url={contact.logo} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className={style.copyright}>
                    <p>&copy; {new Date().getFullYear()} Tiara Sari Dewi. All rights reserved.</p>
                </div>
            </Container>
        </section>
    );
}

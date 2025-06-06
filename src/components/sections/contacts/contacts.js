import Container from "@/elements/container/container";
import style from "./style.module.scss";
import { contacts } from "@/lib/helper";
import SvgIcon from "@/elements/icon/svg";
import { useTheme } from "@/lib/context/theme";
import Link from "next/link";

export default function Contacts({ sectionRef }) {
    const { isDark } = useTheme();

    return (
        <section ref={sectionRef} className={style.wrapper}>
            <Container className={style.content}>
                {/* <h2>Contacts</h2> */}

                <div className={style.frame}>
                    <div className={style.iconwrapper}>
                        {contacts.map((contact, index) => (
                            <Link href={contact.link} target={"_blank"} className={`${style.icon} ${isDark ? style.dark : style.light} ${contact.label === 'LinkedIn'
                                ? style.linkedin
                                : contact.label === 'Github'
                                    ? style.github
                                    : contact.label === 'Email'
                                        ? style.email
                                        : ''
                                }`} key={index}>
                                <SvgIcon url={contact.logo} />
                            </Link>
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
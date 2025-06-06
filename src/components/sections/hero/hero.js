import { useState } from "react";
import { useTheme } from "@/lib/context/theme";
import Image from "next/image";
import Container from "@/elements/container/container";
import style from "./style.module.scss";
import ButtonPrimary from "@/elements/button/primary/primary";
import ButtonSecondary from "@/elements/button/secondary/secondary";

export default function Hero({ sectionRefs, sectionRef }) {
    const { isDark } = useTheme();
    const [loading, setLoading] = useState(false);

    const scrollToSection = (key) => {
        const ref = sectionRefs[key];
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const downloadResume = () => {
        setLoading(true);
        const link = document.createElement("a");
        link.href = "https://drive.google.com/uc?export=download&id=1abW_pdwhS3Ny82zxUVdlZbO30qP7I43i";
        link.download = "CV_TiaraSariDewi.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <section ref={sectionRef} className={style.wrapper}>
            <Container className={style.content}>
                <div className={`${style.photo} ${isDark ? style.dark : style.light}`}>
                    <Image src={"/tiara.png"} width={295} height={520} alt={"Tiara"} />
                </div>

                <div className={style.heading}>
                    <h1>Tiara Sari Dewi</h1>
                    <p>Hi! I&apos;m a Frontend Developer based in Bandung, Indonesia.</p>
                </div>

                <div className={style.cta}>
                    <ButtonPrimary className={style.dig} onClick={() => scrollToSection("about")}><span>Dig a little deeper</span><span className={style.emoji}>🕵🏻</span></ButtonPrimary>
                    <ButtonSecondary
                        onClick={downloadResume}
                        disabled={loading}
                        className={`${style.download} ${isDark ? style.dark : style.light}`}
                    >
                        {loading ? (
                            <span>
                                Fetching the clues... <span className={style.spinner}></span>
                            </span>
                        ) : (
                            <>
                                <span>Snoop the résumé 📄</span>
                            </>
                        )}
                    </ButtonSecondary>
                </div>

            </Container>
        </section>
    );
}
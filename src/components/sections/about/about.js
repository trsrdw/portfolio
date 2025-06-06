import { useTheme } from "@/lib/context/theme";
import { educations, experiences, tools } from "@/lib/helper";
import Container from "@/elements/container/container";
import style from "./style.module.scss";
import Image from "next/image";

export default function About({ sectionRef }) {
    const { isDark } = useTheme();

    return (
        <section ref={sectionRef} className={style.wrapper}>
            <Container className={style.content}>
                <h2>About</h2>
                <div className={style.section}>
                    <h3 className={style.title}>Experiences</h3>
                    <div className={style.experiences}>
                        {experiences.map((exp, index) => (
                            <div className={style.experience} key={index}>
                                <div className={style.logo}>
                                    <Image src={exp.logo.path} width={exp.logo.width} height={exp.logo.height} alt={exp.logo.alt} />
                                </div>
                                <div className={style.info}>
                                    <h3 className={style.company}>{exp.company}</h3>
                                    <div className={style.positions}>
                                        <div className={style.positions}>
                                            {exp.position.map((pos, index) => (
                                                <div className={style.position} key={index}>
                                                    <h4 className={style.as}>{pos.title}</h4>
                                                    <p>{pos.year}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={style.section}>
                    <h3 className={style.title}>Education</h3>
                    <div className={style.educations}>
                        {educations.map((edu, index) => (
                            <div className={style.education} key={index}>
                                <div className={style.logo}>
                                    <Image src={"/exp/widyatama-logo.png"} width={400} height={367} alt={"Logo Widyatama"} />
                                </div>
                                <div className={style.desc}>
                                    <h3>{edu.school}</h3>
                                    <p>
                                        <span>{edu.major}</span>
                                        <span className={style.year}>{edu.year}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={style.techs}>
                    <h3>Current Technologies</h3>
                    <div className={style.iconwrapper}>
                        {tools.map((tool, index) => (
                            <div className={`${style.block} ${isDark ? style.dark : style.light}`} key={index}>
                                <div className={style.icon}>
                                    <Image src={tool.logo} alt={`Logo ${tool.label}`} fill />
                                </div>
                                <p>{tool.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
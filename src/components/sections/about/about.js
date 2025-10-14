import { useTheme } from "@/lib/context/theme";
import { educations, experiences, tools } from "@/lib/helper";
import Container from "@/elements/container/container";
import style from "./style.module.scss";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function About() {
    const { isDark } = useTheme();

    // Refs and animation controls
    // const expRef = useRef(null);
    // const expControls = useAnimation();
    // const expInView = useInView(expRef, { threshold: 0.2 });

    // const eduRef = useRef(null);
    // const eduControls = useAnimation();
    // const eduInView = useInView(eduRef, { threshold: 0.2 });

    // const techRef = useRef(null);
    // const techControls = useAnimation();
    // const techInView = useInView(techRef, { threshold: 0.2 });

    // useEffect(() => {
    //     if (expInView) expControls.start("visible");
    //     else expControls.start("hidden");
    // }, [expInView, expControls]);

    // useEffect(() => {
    //     if (eduInView) eduControls.start("visible");
    //     else eduControls.start("hidden");
    // }, [eduInView, eduControls]);

    // useEffect(() => {
    //     if (techInView) techControls.start("visible");
    //     else techControls.start("hidden");
    // }, [techInView, techControls]);

    // Variants
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

    const flipUpVariant = {
        hidden: { opacity: 0, rotateX: 90 },
        visible: {
            opacity: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 140,
                damping: 14,
            },
        },
    };

    return (
        <section id="about" className={style.wrapper}>
            <Container className={style.content}>
                <h2>About</h2>

                {/* Experiences */}
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className={style.section}
                >
                    <motion.h3 className={style.title} variants={fadeUpVariant}>
                        Experiences
                    </motion.h3>
                    <div className={style.experiences}>
                        {experiences.map((exp, index) => (
                            <motion.div
                                className={style.experience}
                                key={index}
                                variants={fadeUpVariant}
                            >
                                <div className={style.logo}>
                                    <Image
                                        src={exp.logo.path}
                                        width={exp.logo.width}
                                        height={exp.logo.height}
                                        alt={exp.logo.alt}
                                    />
                                </div>
                                <div className={style.info}>
                                    <h3 className={style.company}>{exp.company}</h3>
                                    <div className={style.positions}>
                                        {exp.position.map((pos, index) => (
                                            <div className={style.position} key={index}>
                                                <h4 className={style.as}>{pos.title}</h4>
                                                <p>{pos.year}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className={style.section}
                >
                    <motion.h3 className={style.title} variants={fadeUpVariant}>
                        Education
                    </motion.h3>
                    <div className={style.educations}>
                        {educations.map((edu, index) => (
                            <motion.div
                                className={style.education}
                                key={index}
                                variants={fadeUpVariant}
                            >
                                <div className={style.logo}>
                                    <Image
                                        src={"/exp/widyatama-logo.png"}
                                        width={400}
                                        height={367}
                                        alt={"Logo Widyatama"}
                                    />
                                </div>
                                <div className={style.desc}>
                                    <h3>{edu.school}</h3>
                                    <p>
                                        <span>{edu.major}</span>
                                        <span className={style.year}>{edu.year}</span>
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technologies */}
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className={style.techs}
                >
                    <motion.h3 variants={fadeUpVariant}>Current Technologies</motion.h3>
                    <div className={style.iconwrapper}>
                        {tools.map((tool, index) => (
                            <motion.a
                                href={tool.link}
                                target="_blank"
                                rel="noreferrer"
                                className={`${style.block} ${isDark ? style.dark : style.light}`}
                                key={index}
                                variants={flipUpVariant}
                            >
                                <div className={style.icon}>
                                    <Image src={tool.logo} alt={`Logo ${tool.label}`} fill />
                                </div>
                                <p>{tool.label}</p>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}

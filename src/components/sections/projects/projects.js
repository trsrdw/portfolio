import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/context/theme";
import { projects } from "@/lib/helper";
import Link from "next/link";
import Container from "@/elements/container/container";
import style from "./style.module.scss";
import Modal from "@/elements/modal/modal";
import ButtonPrimary from "@/elements/button/primary/primary";
import SvgIcon from "@/elements/icon/svg";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Projects({ sectionRef }) {
    const { isDark } = useTheme();
    const personals = projects.find((p) => p.type === "personal");
    const features = projects.find((p) => p.type === "featured");

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    // Animation controls and refs for featured and personal sections
    const featuredControls = useAnimation();
    const featuredRef = useRef(null);
    const featuredInView = useInView(featuredRef, { threshold: 0.2 });

    const personalControls = useAnimation();
    const personalRef = useRef(null);
    const personalInView = useInView(personalRef, { threshold: 0.2 });

    useEffect(() => {
        if (featuredInView) {
            featuredControls.start("visible");
        } else {
            featuredControls.start("hidden");
        }
    }, [featuredInView, featuredControls]);

    useEffect(() => {
        if (personalInView) {
            personalControls.start("visible");
        } else {
            personalControls.start("hidden");
        }
    }, [personalInView, personalControls]);

    // Variants
    const containerVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20,
            },
        },
    };

    return (
        <section ref={sectionRef} className={style.wrapper}>
            <Container className={style.content}>
                <h2>Projects</h2>

                <div className={style.section}>
                    <h3>Featured</h3>
                    <motion.div
                        ref={featuredRef}
                        className={style.projects}
                        variants={containerVariant}
                        initial="hidden"
                        animate={featuredControls}
                    >
                        {features.items.map((project, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariant}
                                className={`${style.projectItem} ${isDark ? style.dark : style.light}`}
                            >
                                <div className={style.banner}>
                                    <Image src={project.banner} alt={`Banner ${project.title}`} fill priority />
                                </div>
                                <h4>{project.title}</h4>
                                <div className={style.labels}>
                                    {project.tools.map((tool, i) => (
                                        <div className={style.label} key={i}>
                                            <div className={style.logo}>
                                                <Image src={tool.logo} alt={`Logo ${tool.label}`} fill />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <ButtonPrimary
                                    onClick={() => handleProjectClick(project)}
                                    className={style.learn}
                                    theme={isDark ? "dark" : "light"}
                                >
                                    <span>Learn More</span>
                                    <SvgIcon url={"/arrow-right.svg"} />
                                </ButtonPrimary>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className={style.section}>
                    <h3>Personal</h3>
                    <motion.div
                        ref={personalRef}
                        className={style.projects}
                        variants={containerVariant}
                        initial="hidden"
                        animate={personalControls}
                    >
                        {personals.items.map((project, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariant}
                                className={`${style.projectItem} ${isDark ? style.dark : style.light}`}
                            >
                                <div className={style.banner}>
                                    <Image src={project.banner} alt={`Banner ${project.title}`} fill priority />
                                </div>
                                <h4>{project.title}</h4>
                                <div className={style.labels}>
                                    {project.tools.map((tool, i) => (
                                        <div className={style.label} key={i}>
                                            <div className={style.logo}>
                                                <Image src={tool.logo} alt={`Logo ${tool.label}`} fill />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <ButtonPrimary
                                    onClick={() => handleProjectClick(project)}
                                    className={style.learn}
                                    theme={isDark ? "dark" : "light"}
                                >
                                    <span>Learn More</span>
                                    <SvgIcon url={"/arrow-right.svg"} />
                                </ButtonPrimary>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={selectedProject?.title || ""}
                theme={isDark ? "dark" : "light"}
            >
                {selectedProject && (
                    <div className={`${style.custommodal} ${isDark ? style.dark : style.light}`}>
                        <div className={style.modalTools}>
                            <div className={style.labels}>
                                {selectedProject.tools.map((tool, i) => (
                                    <div className={style.label} key={i}>
                                        <div className={style.logo}>
                                            <Image src={tool.logo} alt={`Logo ${tool.label}`} fill />
                                        </div>
                                        <p>{tool.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={style.modalBanner}>
                            <Image src={selectedProject.banner} alt={`Banner ${selectedProject.title}`} fill />
                        </div>

                        <p>{selectedProject.description}</p>

                        <div className={style.etc}>
                            <div
                                className={`${style.status} ${selectedProject.status === "Live"
                                    ? style.info
                                    : selectedProject.status === "Development"
                                        ? style.positive
                                        : selectedProject.status === "Archived"
                                            ? style.disabled
                                            : selectedProject.status === "Down"
                                                ? style.negative
                                                : ""
                                    }`}
                            >
                                {selectedProject.status}
                            </div>

                            {selectedProject.link && (
                                <Link href={selectedProject.link} target={"_blank"} className={style.link}>
                                    <span>Site</span>
                                    <SvgIcon url={"/external.svg"} />
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
}

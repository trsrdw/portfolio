import { useState } from "react";
import Container from "@/elements/container/container";
import style from "./style.module.scss";
import { projects } from "@/lib/helper";
import { useTheme } from "@/lib/context/theme";
import ScrollableModal from "@/elements/modal/modal";
import Link from "next/link";

export default function Projects({ sectionRef }) {
    const { isDark } = useTheme();
    const personals = projects.find(p => p.type === "personal");
    const features = projects.find(p => p.type === "featured");

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

    return (
        <section ref={sectionRef} className={style.wrapper}>
            <Container className={style.content}>
                <h2>Projects</h2>

                <div className={style.section}>
                    <h3>Personal</h3>
                    <div className={style.projects}>
                        {personals.items.map((project, i) => (
                            <div
                                key={i}
                                className={`${style.projectItem} ${isDark ? style.dark : style.light}`}
                                onClick={() => handleProjectClick(project)}
                            >
                                <div className={style.banner}>
                                    <img src={project.banner} alt={`Banner ${project.title}`} />
                                </div>
                                <h4>{project.title}</h4>
                                <div className={style.labels}>
                                    {project.tools.map((tool, i) => (
                                        <div className={style.label} key={i}>
                                            <div className={style.logo}><img src={tool.logo} alt={`Logo ${tool.label}`} /></div>
                                            <p>{tool.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={style.section}>
                    <h3>Featured</h3>
                    <div className={style.projects}>
                        {features.items.map((project, i) => (
                            <div
                                key={i}
                                className={`${style.projectItem} ${isDark ? style.dark : style.light}`}
                                onClick={() => handleProjectClick(project)}
                            >
                                <div className={style.banner}>
                                    <img src={project.banner} alt={`Banner ${project.title}`} />
                                </div>
                                <h4>{project.title}</h4>
                                <div className={style.labels}>
                                    {project.tools.map((tool, i) => (
                                        <div className={style.label} key={i}>
                                            <div className={style.logo}><img src={tool.logo} alt={`Logo ${tool.label}`} /></div>
                                            <p>{tool.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            <ScrollableModal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={selectedProject?.title || ""}
            >
                {selectedProject && (
                    <div className={`${style.custommodal} ${isDark ? style.dark : style.light}`}>
                        <img className={style.modalBanner} src={selectedProject.banner} alt={`Banner ${selectedProject.title}`} style={{ width: '100%', borderRadius: 8 }} />
                        <p>{selectedProject.description}</p>
                        <div className={style.modalTools}>
                            {/* <p><strong>Tools</strong></p> */}
                            <div className={style.labels}>
                                {selectedProject.tools.map((tool, i) => (
                                    <div className={style.label} key={i}>
                                        <div className={style.logo}><img src={tool.logo} alt={`Logo ${tool.label}`} /></div>
                                        <p>{tool.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={style.etc}>
                            <div
                                className={`${style.status} ${selectedProject.status === 'Live'
                                    ? style.info
                                    : selectedProject.status === 'Development'
                                        ? style.positive
                                        : selectedProject.status === 'Archived'
                                            ? style.disabled
                                            : selectedProject.status === 'Down'
                                                ? style.negative
                                                : ''
                                    }`}
                            >
                                {selectedProject.status}
                            </div>

                            {selectedProject.link && (
                                <Link href={selectedProject.link} target={"_blank"} className={style.link}><span>Site</span><svg width="24" height="24" viewBox="0 0 24 24"><polygon fill="black" points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
                                </svg></Link>
                            )}
                        </div>
                    </div>
                )}
            </ScrollableModal>
        </section>
    );
}

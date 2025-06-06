"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import About from "@/components/sections/about/about";
import Hero from "@/components/sections/hero/hero";
import Header from "@/components/header/header";
import Projects from "@/components/sections/projects/projects";
import Contacts from "@/components/sections/contacts/contacts";

export default function Landing() {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactsRef = useRef(null);

    const [activeSection, setActiveSection] = useState("hero");

    const sectionRefs = useMemo(() => ({
        hero: heroRef,
        about: aboutRef,
        projects: projectsRef,
        contacts: contactsRef,
    }), []);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "-30% 0px -70% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // console.log(entry.target.getAttribute("data-section"), entry.intersectionRatio);
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute("data-section");
                    if (sectionId) setActiveSection(sectionId);
                }
            });
        }, options);

        Object.entries(sectionRefs).forEach(([key, ref]) => {
            if (ref.current) {
                ref.current.setAttribute("data-section", key);
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, [sectionRefs]);

    return (
        <div className={"scroll-container"}>
            <Header sectionRefs={sectionRefs} activeSection={activeSection} />
            <Hero sectionRefs={sectionRefs} sectionRef={heroRef} />
            <About sectionRef={aboutRef} />
            <Projects sectionRef={projectsRef} />
            <Contacts sectionRef={contactsRef} />
        </div>
    );
}

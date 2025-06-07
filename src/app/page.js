"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import About from "@/components/sections/about/about";
import Hero from "@/components/sections/hero/hero";
import Header from "@/components/header/header";
import Projects from "@/components/sections/projects/projects";
import Contacts from "@/components/sections/contacts/contacts";
import LoadingScreen from "@/elements/loading/screen";

export default function Landing() {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactsRef = useRef(null);

    const [activeSection, setActiveSection] = useState("hero");

    const [showLoading, setShowLoading] = useState(null);

    const sectionRefs = useMemo(() => ({
        hero: heroRef,
        about: aboutRef,
        projects: projectsRef,
        contacts: contactsRef,
    }), []);

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem("hasLoaded");

        if (hasLoaded) {
            setShowLoading(false);
        } else {
            setShowLoading(true);
            const timer = setTimeout(() => {
                sessionStorage.setItem("hasLoaded", "true");
                setShowLoading(false);
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        if (showLoading) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute("data-section");
                    if (sectionId) setActiveSection(sectionId);
                }
            });
        }, {
            root: null,
            rootMargin: "-30% 0px -70% 0px",
            threshold: 0,
        });

        Object.entries(sectionRefs).forEach(([key, ref]) => {
            if (ref.current) {
                ref.current.setAttribute("data-section", key);
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, [sectionRefs, showLoading]);

    if (showLoading === null) {
        return null;
    }

    if (showLoading) {
        return (
            <LoadingScreen />
        );
    }

    return (
        <div className="scroll-container">
            <Header sectionRefs={sectionRefs} activeSection={activeSection} />
            <Hero sectionRefs={sectionRefs} sectionRef={heroRef} />
            <About sectionRef={aboutRef} />
            <Projects sectionRef={projectsRef} />
            <Contacts sectionRef={contactsRef} />
        </div>
    );
}

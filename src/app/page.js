"use client";
import { useState, useEffect } from "react";
import About from "@/components/sections/about/about";
import Hero from "@/components/sections/hero/hero";
import Header from "@/components/header/header";
import Projects from "@/components/sections/projects/projects";
import Contacts from "@/components/sections/contacts/contacts";
import LoadingScreen from "@/elements/loading/screen";

export default function Landing() {

    const [showLoading, setShowLoading] = useState(null);

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

    if (showLoading === null) {
        return null;
    }

    if (showLoading) {
        return (
            <LoadingScreen />
        );
    }

    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Contacts />
        </div>
    );
}

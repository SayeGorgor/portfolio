'use client';

import { useState, useEffect, useRef } from "react";

export function useActiveSection(sectionIDs) {

    const [activeSection, setActiveSection] = useState('');
    const [previousSection, setPreviousSection] = useState('hero');
    const sectionRatios = useRef({});

    useEffect(() => {
        if(!sectionIDs) return;

        const sections = sectionIDs
            .map(id => document.getElementById(id))
            .filter(Boolean);
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    sectionRatios.current[entry.target.id] = entry.intersectionRatio;
                });

                 const mostVisible = Object.entries(sectionRatios.current)
                    .reduce((prev, curr) => (curr[1] > prev[1] ? curr : prev))[0];

                setActiveSection(prev => {
                    if (prev !== mostVisible) {
                        setPreviousSection(prev);
                    }
                    return mostVisible;
                });
                // console.log('Sections: ', activeSection, previousSection);
            },
            {
                rootMargin: '-80px 0px 0px 0px',
                threshold: .1
            }
        )

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, [sectionIDs]);

    return {previousSection, activeSection};
}
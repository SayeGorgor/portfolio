'use client';
import { useState, useEffect } from "react";

export function useActiveSection(sectionIDs) {

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        if(!sectionIDs) return;

        const sections = sectionIDs
            .map(id => document.getElementById(id))
            .filter(Boolean);
        
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries.filter(entry => entry.isIntersecting);
                if(!visibleSections.length) return;

                const mostVisble = visibleSections.reduce((prev, curr) => 
                    curr.intersectionRatio > prev.intersectionRatio ? curr : prev
                );
                setActiveSection(mostVisble.target.id);
                console.log('Active Section: ', activeSection);
            },
            {
                rootMargin: '-80px 0px 0px 0px',
                threshold: .1
            }
        )

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, [sectionIDs]);

    return activeSection;
}
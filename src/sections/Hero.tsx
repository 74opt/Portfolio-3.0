import React from 'react';
import HeroExperience from '../components/HeroModels/HeroExperience.tsx';

const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                {/* Background image (would want a gradient sky bg here) */}
            </div>

            <div className="hero-layout">
                {/* LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Title</h1>
                        </div>
                    </div>
                </header>
                {/* 3D Model */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>

        </section>
    )
}

export default Hero;
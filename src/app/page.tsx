'use client';

import About from "@/app/components/about";
import Menu from "@/app/components/menu";
import Banner from "@/app/components/banner";
import Event from "@/app/components/event";
import {useRef} from "react";
import Gallery from "@/app/components/gallery";
import Story from "@/app/components/story";
import MusicPlayer from "@/app/components/music-player";

export default function Home() {
    const bannerRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const storyRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const eventRef = useRef<HTMLDivElement>(null);

    const scrollToBanner = () => {
        if (bannerRef.current) {
            bannerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const scrollToStory = () => {
        if (storyRef.current) {
            storyRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const scrollToGallery = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const scrollToEvent = () => {
        if (eventRef.current) {
            eventRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <main className="relative flex min-h-screen flex-col items-center justify-between">
            <div ref={bannerRef}>
                <Banner/>
            </div>

            <Menu scrollToBanner={scrollToBanner} scrollToGallery={scrollToGallery} scrollToAbout={scrollToAbout}
                  scrollToStory={scrollToStory}
                  scrollToEvent={scrollToEvent}/>

            <div className='fixed bottom-2 left-2 z-50'>
                <MusicPlayer src='/sound.mp3'/>
            </div>

            <div ref={aboutRef}>
                <About/>
            </div>

            <div ref={storyRef}>
                <Story/>
            </div>

            <div ref={galleryRef}>
                <Gallery/>
            </div>

            <div ref={eventRef}>
                <Event/>
            </div>

            <div
                className='mt-36 h-[90px] text-5xl text-[#703B2B] bg-gradient-to-b from-zinc-200 w-screen text-center items-center justify-center flex'>
                𝒯𝒽𝒶𝓃𝓀 𝒴ℴ𝓊
            </div>
        </main>
    )
}

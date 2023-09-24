import { SelectedPage } from '../../shared/type';
import React from 'react'
import ActionButton from '../navbar/ActionButton';
import useMediaQuery from '../../hooks/useMediaQuery';
import HomePageText from "@/assets/HomePageText.png" 
import HomePageGraphic from "@/assets/HomePageGraphic.png" 
import SponsorRedBull from "@/assets/SponsorRedBull.png" 
import SponsorForbes from "@/assets/SponsorForbes.png" 
import SponsorFortune from "@/assets/SponsorFortune.png" 
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {motion} from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")



    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
        >
        {/** Image and main header */}
        <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 md:mt-20">
            {/** MAIN HEADER */}
            <div className="z-10 mt-32 md:basis-3/5">
            {/** HEADINGS */}
            
                <motion.div 
                className="md:-mt-20"
                initial = "hidden"
                whileInView = "visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.75}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0},
                }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-2] md:before:content-evolvetext">
                            <img alt="home-page-text" src={HomePageText} />
                        </div>
                    </div>
                    <p className="mt-8 text-sm md:text-start">Welcome to "Fitness Hub," where your journey to a healthier, stronger you begins! Our gym is more than just a place to work out; 
                    it's a community of fitness enthusiasts, trainers, and professionals dedicated to helping you achieve your fitness goals. 
                    Whether you're a seasoned athlete or just starting your fitness journey, our state-of-the-art facilities, expert trainers, 
                    and diverse range of classes are designed to cater to all fitness levels.
                    </p> 
                </motion.div>

                {/** ACTIONS */}
                <motion.div
                initial = "hidden"
                whileInView = "visible"
                viewport={{once:true, amount:0.5}}
                transition={{delay:0.2, duration:0.75}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0},
                }}
                 className="mt-8 flex items-center gap-8">
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now </ActionButton>
                    <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-400"
                    onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    > 
                    <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>
            {/** IMAGE */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img alt="home-pageGraphic" src={HomePageGraphic} />
            </div>
        </motion.div>

        {/** SPONSORS */}
        {isAboveMediumScreens && (
        <div className="h-[150px] bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
                <div className="flex w-3/5 gap-8 justify-between items-center">
                    <img alt="redbull-sponsor" src={SponsorRedBull} />
                    <img alt="forbes-sponsor" src={SponsorForbes} />
                    <img alt="forture-sponsor" src={SponsorFortune} />
                </div>
            </div>
        </div>
        )}
        </section>
    )
}

export default Home
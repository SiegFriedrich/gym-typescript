import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';
import { SelectedPage, BenefitType } from '@/shared/type';
import Benefit from '@/scenes/benefits/Benefit';
import HText from '@/shared/HText';
import ActionButton from '../navbar/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const container = {
    hidden:{},
    visible:{
        transition: {staggerChildren:0.2}
    },
}
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
    const benefits : Array<BenefitType> = [
        {
            icon: <HomeModernIcon className="h-6 w-6" />,
            title: "State of the Art Facilities",
            description: "So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. "
        },
        {
            icon: <UserGroupIcon className="h-6 w-6" />,
            title: "100's of Diverse Classes",
            description: "So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. "
        },
        {
            icon: <AcademicCapIcon className="h-6 w-6" />,
            title: "Expert and Pro Trainers",
            description: "So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. "
        },
    ]

  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
        >
        <div className="md:my-5 md:w-3/5">
            <HText>MORE THAN JUST GYM</HText>
            <p className="my-5 text-sm">
                So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, 
                and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or 
                the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
            </p>
        </div>

        {/** BENEFITS */}
        <motion.div 
            initial = "hidden"
            whileInView = "visible"
            viewport={{once:true, amount:0.3}}
            variants = {container}
            className="mt-5 items-center justify-between gap-8 md:flex">
                {benefits.map((benefit : BenefitType)=> (
                    <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage}/>
                ))}
        </motion.div>
        {/** GRAPHICS AND DESCRIPTION */}
            <div  className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/**  GRAPHIC */}
                <img 
                    className="mx-auto"
                    alt="benefit-page-graphic"
                    src={BenefitsPageGraphic}
                />
        {/** DESCRIPTION */}
                <div>
        {/** TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                            initial = "hidden"
                            whileInView = "visible"
                            viewport={{once:true, amount:0.5}}
                            transition={{duration:0.75}}
                            variants={{
                                hidden:{opacity:0, x:50},
                                visible:{opacity:1, x:0},
                            }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
        {/* DESCRIPT */}
                    <motion.div
                    initial = "hidden"
                    whileInView = "visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.75}}
                    variants={{
                        hidden:{opacity:0, x:-50},
                        visible:{opacity:1, x:0},
                    }}
                    >
                        <p className="my-5">Le Tour de France a réussi à survivre pendant la guerre, bien qu’il ait connu des difficultés et des interruptions pendant cette période. Pendant la Première Guerre mondiale, le Tour de France a été suspendu de 1915 à 1918 en raison de l’occupation allemande et de la mobilisation des coureurs. Certains ont perdu la vie à la guerre, comme François Faber, Octave Lapize ou encore Lucien Petit-Breton.</p>
                        <p className="mb-5">Pendant la Seconde Guerre mondiale, le Tour de France a également été interrompu entre 1940 et 1946. Les Allemands ont voulu continue l’organisation de l’épreuve pour rallier le peuple français. Mais le directeur du Tour, Jacques Goddet, refuse. L’organisation est donc remise au journal collaborationniste La France socialiste et Jean Leulliot, journaliste et directeur de l’équipe de France pendant le Tour 1937. Le « Circuit de France » n’a eu lieu qu’en 1942.</p>
                    </motion.div>
                    {/** BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits
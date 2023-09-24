import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';
import { SelectedPage, BenefitType } from '../../shared/type';
import Benefit from '@/scenes/benefits/Benefit';
import HText from '../../shared/HText';

const container = {
    hidden:{},
    visible:{
        transition: {staggerChildren:0.2}
    },
}
type Props = {
    setSeletedPage: (value: SelectedPage) => void;
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
                    <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description}/>
                ))}
        </motion.div>

        </motion.div>
    </section>
  )
}

export default Benefits
import { SelectedPage } from '@/shared/type';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from '@/shared/HText';
import Class from '@/scenes/ourClasses/Class';
import { ClassType } from '../../shared/type';
import { motion } from 'framer-motion';


const classes: Array<ClassType> =[
    {
        name:"Weight Training Classes",
        description:"En plus de cent ans d’existence, le Tour de France s’est forgé une histoire au fil des éditions. Voici quelques moments clés de la Grande Boucle. Quelle est l’histoire du Tour de France",
        image: image1,
    },
    {
        name:"Yoga Classes",
        description:"En plus de cent ans d’existence, le Tour de France s’est forgé une histoire au fil des éditions. Voici quelques moments clés de la Grande Boucle. Quelle est l’histoire du Tour de France",
        image: image2,
    },
    {
        name:"Weight Training Classes",
        image: image3,
    },
    {
        name:"Weight Training Classes",
        description:"En plus de cent ans d’existence, le Tour de France s’est forgé une histoire au fil des éditions. Voici quelques moments clés de la Grande Boucle. Quelle est l’histoire du Tour de France",
        image: image4,
    },
    {
        name:"Weight Training Classes",
        image: image5,
    },
    {
        name:"Weight Training Classes",
        description:"En plus de cent ans d’existence, le Tour de France s’est forgé une histoire au fil des éditions. Voici quelques moments clés de la Grande Boucle. Quelle est l’histoire du Tour de France",
        image: image6,
    },
]

type Props = {
    setSelectedPage:(value: SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
            className="mx-auto w-5/6"
                initial = "hidden"
                whileInView = "visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.75}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0},
                }}
            >
            <div className="md:w-3/5">
                <HText>OUR CLASSES</HText>
                <p className="py-5">
                    En 1947, le Tour de France a repris officiellement après la fin de la guerre. La course a été un symbole 
                    de la reprise de la vie normale après les années difficiles de la guerre et a contribué à redonner espoir et optimisme aux Français.
                </p>
            </div>
            </motion.div>

            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden ">
                <ul className="w-[2800px] whitespace-nowrap">
                    {
                        classes.map((item, index)=>(
                                <Class
                                    key={`${item.name}-${index}`}
                                    name={item.name}
                                    description={item.description}
                                    image={item.image}
                                />
                        ))
                    }
                </ul>
            </div>
        
        </motion.div>
    </section>
  )
}

export default OurClasses
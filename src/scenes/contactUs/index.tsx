import { useForm} from "react-hook-form"
import { SelectedPage } from '../../shared/type';
import { motion } from 'framer-motion';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import HText from '@/shared/HText';

type Props = {
    setSelectedPage:(value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }


  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}>
            {/** HEADER  */}
            <motion.div
                initial = "hidden"
                whileInView = "visible"
                viewport={{once:true, amount:0.5}}
                transition={{delay:0.2, duration:0.75}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0},
                }}
            >
            <HText> 
                <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
            </HText>
            <p className="my-5">
            Because Tailwind is a framework for building bespoke user interfaces, it has been designed from the ground up with customization in mind.
            By default, Tailwind will look for an optional tailwind.config.js file at the root of your project where you can define any customizations.
            </p>
            </motion.div>

            {/** FORM AND IMAGE */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                initial = "hidden"
                whileInView = "visible"
                viewport={{once:true, amount:0.5}}
                transition={{delay:0.2, duration:0.75}}
                variants={{
                    hidden:{opacity:0, y:50},
                    visible:{opacity:1, y:0},
                }}
                >

                    <form target="_blank" onSubmit={onSubmit} method="POST"
                        action="https://formsubmit.co/your@email.com"
                    >
                    <input className={inputStyles} type="text" placeholder="NAME" 
                    {...register("name",{ required: true, maxLength: 100})}/>
                    { errors.name && (
                        <p className="mt-1 text-primary-500">
                            {errors.name.type === "required" && "This field is required"}
                            {errors.name.type === "maxLength" && "Maxlength is 100 Character"}
                        </p>
                    )}

                    <input className={inputStyles} type="email" placeholder="EMAIL" 
                    {...register("email",{ required: true, pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i})}/>
                    { errors.email && (
                        <p className="mt-1 text-primary-500">
                            {errors.email.type === "required" && "This field is required"}
                            {errors.email.type === "pattern" && "Invalid email address"}
                        </p>
                    )}

                    <textarea className={inputStyles} rows={4} cols={50} placeholder="MESSAGE" 
                    {...register("message",{ required: true, maxLength: 2000})}/>
                    { errors.message && (
                        <p className="mt-1 text-primary-500">
                            {errors.message.type === "required" && "This field is required"}
                            {errors.message.type === "maxLength" && "Maxlength is 100 Character"}
                        </p>
                    )}

                    <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition durantion-500 hover:text-white">
                        SUBMIT
                    </button>
                    </form>

                </motion.div>
                <motion.div
                initial = "hidden"
                whileInView = "visible"
                viewport={{once:true, amount:0.5}}
                transition={{delay:0.2, duration:0.75}}
                variants={{
                    hidden:{opacity:0, y:50},
                    visible:{opacity:1, y:0},
                }}
                className="relative mt-16 basis-2/5 md:mt-0">
                    <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                        <img className="w-full" alt="contact-us-page-graphic" src={ContactUsPageGraphic}/>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs
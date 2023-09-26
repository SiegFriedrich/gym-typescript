import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} />
                <p className="my-5">
                Die Zentrale Studienberatung bietet Studieninteressierten und Studierenden Beratung und Information 
                zu allen Themen rund um das Studium. Unser Ziel ist, kompetente und professionelle Unterstützung 
                bei der Verwirklichung individuell passender Studien- und Berufsziele zu leisten.
                </p>
                <p>© Evogym All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Zentrale Studienberatung</p>
                <p className="my-5">heiSKILLS Kompetenz- und Sprachenzentrum</p>
                <p>Graduiertenakademie</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact</h4>
                <p className="my-5">Photo credits:Anne Bormann #1Marc Oliver Schulz #2© Michael Miethe #3, #4Universitätsmedizin Mannheim #5 </p>
                <p>(080)1234-5678</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
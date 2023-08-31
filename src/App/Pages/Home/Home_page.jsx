import s from './Home_page.module.css'
import Footer from '../../Components/Footer/Footer'
import profilepicture from '../../assets/dp.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HomePage() {
    return (
        <><div className={s.main}>
            <div className={s.intro}>
                <p>Hello World!</p>
                <p>I'm Surya Sonar</p>
            </div>
            <div className={s.profilepicture}>
                <img src={profilepicture} alt="a picture of Surya Sonar" />
            </div>
            <div className={s['contact-icons']}>
                <a className={s.iconcontact} href="linkedin">
                    <FontAwesomeIcon className={s.icon} icon='fab fa-linkedin' />
                </a>
                <a className={s.iconcontact} href="instagram">
                    <FontAwesomeIcon className={s.icon} icon='fab fa-instagram' />
                </a>
                <a className={s.iconcontact} href="github">
                    <FontAwesomeIcon className={s.icon} icon='fab fa-github' />
                </a >
            </div >
            <div className={s.aboutme}>
                <p>
                    I'm a dedicated software developer with a passion for crafting elegant and efficient solutions. My journey in the world of code began with a curiosity to build and innovate. As a developer, I thrive on challenges and believe in continuous learning. I am currently focused on honing my data structure and algorithm skills, aiming to create even smarter and more optimized software.
                </p>
            </div>
        </div >
            <Footer> </Footer>
        </>
    )
}

export default HomePage;
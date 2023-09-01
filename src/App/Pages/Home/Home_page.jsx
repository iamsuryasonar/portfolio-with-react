import s from './Home_page.module.css'
import Footer from '../../Components/Footer/Footer'
import profilepicture from '../../assets/dp.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import social_media from '../../Data/social_media'
import text from '../../Data/text'


function HomePage() {
    return (
        <><div className={s.main}>
            <div className={s.intro}>
                <p>{text.greeting}</p>
                <p>{text.introduction}</p>
            </div>
            <div className={s.profilepicture}>
                <img src={profilepicture} alt="a picture of Surya Sonar" />
            </div>
            <div className={s['contact-icons']}>
                {social_media.map((data) => {
                    return (
                        <a target='_blank' rel='noopener noreferrer' href={data.url} key={data.id} className={s.iconcontact}>
                            <FontAwesomeIcon className={s.icon} icon={data.icon} />
                        </a>
                    )
                })}
            </div >
            <div className={s.aboutme}>
                <p>{text.about_me}</p>
            </div>
        </div >
            <Footer> </Footer>
        </>
    )
}

export default HomePage;
import s from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import social_media from '../../Data/social_media'

function Footer() {
    return (
            <div className={s.footer_main}>
                <p>Made with ReactJS</p>
                <p>Surya Sonar</p>
                <p>2023©</p>
                <div className={s.contact_icons}>
                    {social_media.map((data) => {
                        return (
                            <a target='_blank' rel='noopener noreferrer' href={data.url} key={data.id} >
                                <FontAwesomeIcon className={s.icon} icon={data.icon} />
                            </a>
                        )
                    })}
                </div >
            </div >
    )
}
export default Footer;
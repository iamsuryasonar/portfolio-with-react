import s from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <>
            <div className={s.footer_main}>
                <p>Made with ReactJS</p>
                <p>Surya Sonar</p>
                <p>2023©</p>
                <div className={s.contact_icons}>
                    <a href="linkedin">
                        <FontAwesomeIcon className={s.icon} icon='fab fa-linkedin' />
                    </a>
                    <a href="instagram">
                        <FontAwesomeIcon className={s.icon} icon='fab fa-instagram' />
                    </a>
                    <a href="github">
                        <FontAwesomeIcon className={s.icon} icon='fab fa-github' />
                    </a >
                </div >
            </div >
        </>
    )
}
export default Footer;
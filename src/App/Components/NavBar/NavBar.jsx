import React, { useState } from 'react';
import s from './NavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import social_media from '../../Data/social_media'
import text from '../../Data/text'
import { Link } from 'react-router-dom'
function NavBar() {
    const [menu, setMenu] = useState(false);
    function menuHandler() {
        setMenu(!menu);
    }
    return (
        <>
            <nav id={s.navbar}>
                <div className={s['nav-wrapper']}>
                    <div className={s.namediv}>
                        <Link to="/">
                            <p className={s.name}>{text.name}</p>
                        </Link>
                    </div>

                    <div className={s['about-project-contact']}>
                        <Link to="/">
                            <p className={s.about}>About Me</p>
                        </Link>
                        <Link to="/projects">
                            <p className={s.projects}>Projects</p>
                        </Link>
                        <Link to="/skills">
                            <p className={s.skills}>Skills</p>
                        </Link>
                        <Link to="/links">
                            <p className={s.links}>Links</p>
                        </Link>
                    </div>
                    <div className={s.menuiconwrapper} onClick={menuHandler}>
                        {!menu ? <div className={s.barsicon}>
                            <FontAwesomeIcon className={s.menuopenbutton} icon='fas fa-bars' />
                        </div> : null}
                        {menu ? <div className={s.barsicon}>
                            <FontAwesomeIcon className={s.menuclosebutton} icon='fas fa-times' />
                        </div> : null}
                    </div>
                </div >
            </nav >
            {menu ?
                <div className={s.menuoverlay}>
                    <div className={s.menuoverlaywrapper}>
                        <div className={s.menucontents}>
                            <Link to="/">
                                <p onClick={menuHandler} id="about">About Me</p>
                            </Link>
                            <Link to="/projects">
                                <p onClick={menuHandler}>Projects</p>
                            </Link>
                            <Link to="/skills">
                                <p onClick={menuHandler}>Skills</p>
                            </Link>
                            <Link to="/links">
                                <p onClick={menuHandler}>Links</p>
                            </Link>
                        </div >
                        <div className={s.menusocialicons}>
                            {social_media.map((data) => {
                                return (
                                    <a target='_blank' rel='noopener noreferrer' href={data.url} key={data.id}>
                                        <FontAwesomeIcon className={s.icon} onClick={menuHandler} icon={data.icon} />
                                    </a>
                                )
                            })}
                        </div >
                    </div >
                </div > : null
            }
        </>
    )
}

export default NavBar;
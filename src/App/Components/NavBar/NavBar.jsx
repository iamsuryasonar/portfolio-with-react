import React, { useState } from 'react';
import s from './NavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                        <a href="/">
                            <p onClick={menuHandler} className={s.name}>Surya Sonar</p>
                        </a>
                    </div>

                    <div className={s['about-project-contact']}>
                        <a href="/"><p className={s.about}>About Me</p></a>
                        <a href="/projects">
                            <p className={s.projects}>Projects</p>
                        </a>
                        <a href="/skills">
                            <p className={s.skills}>Skills</p>
                        </a>
                        <a href="/links">
                            <p className={s.links}>Links</p>
                        </a>
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
                            <a href="/">
                                <p onClick={menuHandler} id="about">About Me</p>
                            </a>
                            <a href="/projects">
                                <p onClick={menuHandler}>Projects</p>
                            </a>
                            <a href="/skills">
                                <p onClick={menuHandler}>Skills</p>
                            </a>
                            <a href="/links">
                                <p onClick={menuHandler}>Links</p>
                            </a >
                        </div >
                        <div className={s.menusocialicons}>
                            <a href="linkedin">
                                <FontAwesomeIcon className={s.icon} onClick={menuHandler} icon='fab fa-linkedin' />
                            </a>
                            <a href="instagram" >
                                <FontAwesomeIcon className={s.icon} onClick={menuHandler} icon='fab fa-instagram' />
                            </a >
                            <a href="github" >
                                <FontAwesomeIcon className={s.icon} onClick={menuHandler} icon='fab fa-github' />
                            </a >
                        </div >
                    </div >
                </div > : null
            }
        </>
    )
}

export default NavBar;
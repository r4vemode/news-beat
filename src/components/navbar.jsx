import React, { useState, useEffect } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsOpen(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={isOpen ? 'nav__list open' : 'nav__list'}>
                <li className="nav__item">
                    <a href="#LifeStyle" className="nav__link">
                        Стиль жизни
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#Society" className="nav__link">
                        Общество
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#HomeAndGarden" className="nav__link">
                        Дом и сад
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#Health" className="nav__link">
                        Здоровье
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#Technic" className="nav__link">
                        Техника
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#ShowBusiness" className="nav__link">
                        Шоу-бизнесс
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
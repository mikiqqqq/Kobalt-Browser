import React, { useEffect, useState } from 'react';
import SearchForm from './search_form/SearchForm';
import { SearchOptions } from '../MainContainerData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
import mini_logo from '../../../images/mini_logo.png';
import logo from '../../../images/logo.png';
import style from './Navigation.module.css';

interface Props {
    showHome: boolean;

    setShowHome(showHome: boolean): void;
    onSubmit(searchOptions: SearchOptions): void;
    onClickBookmarks(show: boolean): void;
    onToggleTheme(theme: boolean): void;
}

const Navigation:React.FunctionComponent<Props> = props => {

    const [toggleTheme, setToggleTheme] = useState<boolean>(false);
    
    useEffect(() => {
        props.onToggleTheme(toggleTheme);
    }, [toggleTheme]);

    return (
        <>
        <div className={style.navigation_bookmarks_container}>
            <button className={style.navigation_bookmarks_button} title='Home'
            onClick={() => props.setShowHome(true)}>
                
                <FontAwesomeIcon 
                className={style.navigation_bookmarks_button_icon} 
                icon={faHouse} />
            </button>

            <button className={style.navigation_bookmarks_button} 
            onClick={() => props.onClickBookmarks(true)} title='Show Bookmarks'>
                
                <FontAwesomeIcon 
                className={style.navigation_bookmarks_button_icon} 
                icon={faBars} />
            </button>
        </div>

        <div className={style.navigation_theme_container}>
            <span className={toggleTheme ? style.span_dark : style.span_light}>
                {toggleTheme ? 'Dark' : 'Light'}&nbsp;&nbsp;
            </span>
            
            <label className={style.switch}
            title='Toggle Theme'>
                <input type='checkbox' onClick={() => setToggleTheme(!toggleTheme)}/>
                <span className={`${style.slider} ${style.round}`}></span>
            </label>
        </div>

        <div className={`${toggleTheme ? style.navigation_container_dark : style.navigation_container_light}
            ${props.showHome ? style.navigation_container_home : style.navigation_container}`}>
            
            <div className={`${props.showHome ? style.search_form_home : style.search_form}`}>
                
                <img src={props.showHome ? logo : mini_logo} 
                className={props.showHome ? style.logo : style.mini_logo}/>
                
                <SearchForm onSubmit={props.onSubmit} showHome={props.showHome} theme={toggleTheme}/>
            </div>
        </div>
        </>
    );
}

export default Navigation;
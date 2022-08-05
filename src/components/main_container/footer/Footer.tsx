import React from 'react';
import style from './Footer.module.css';

interface Props {
    theme: boolean;
}

const Footer:React.FunctionComponent<Props> = props => {
    return (
        <footer className={`${style.footer} ${props.theme ? style.footer_dark : style.footer_light}`}>
            <div className={style.footer_div}>
                <h3>Kobalt Browser</h3>
            </div>
            
            <div className={style.footer_div}>
                <p className={props.theme ? style.p_dark : style.p_light}>
                    Made by 
                    <span className={style.name}> Filip Miloš </span>
                    with 
                    <span className={style.lang}> React TypeScript</span>
                </p>
            </div>
        </footer>
    )
};

export default Footer;
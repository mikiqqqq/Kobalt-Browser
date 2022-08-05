import React from 'react';
import style from './Loader.module.css';

interface Props {
    show: boolean;
    children: JSX.Element;
    theme: boolean;
}

const Loader:React.FunctionComponent<Props> = props => {
    return (

        props.show ? 
            <div className={`${style.loader_container} 
                ${props.theme ? style.loader_container_dark : style.loader_container_light}`}>

                <h3 className={style.loader_text}>Loading...</h3>
                <div className={style.loader_spinner}></div>
            </div> :
            props.children
    );
    
}

export default Loader;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SearchOptions } from '../../MainContainerData';
import style from './SearchForm.module.css';

interface Props {
    theme: boolean;
    showHome: boolean;

    onSubmit: (searchOptions: SearchOptions) => void;
}

const SearchForm:React.FunctionComponent<Props> = props => {
    
    const [inputTerm, setInputTerm] = React.useState<string>('');
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const onClickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        props.onSubmit({
            search: inputTerm,
            page: 0
        });    

        e.preventDefault();
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputTerm((e.target as HTMLInputElement).value);
    }

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className={`${style.search_form_container}
        ${props.showHome ? style.search_form_container_home : style.search_form_container}`}
         id='search_container'>
            
            <form onSubmit={onClickSubmit} 
            className={`${props.showHome ? style.search_form_home : style.search_form}`}>
                
                <input type='text'id='search_value' placeholder='Search'
                className={`
                ${props.showHome ? style.search_form_input_home : style.search_form_input}
                ${props.theme ? style.input_dark : style.input_light}`} 
                onChange={handleChange} ref={inputRef} />
                
                <button type='submit' id='search_submit' 
                className={props.theme ? style.search_form_submit_dark : style.search_form_submit} disabled={!inputTerm}>
                    
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={style.icon}/>
                </button>
            </form>
        </div>
    )
}

export default SearchForm;
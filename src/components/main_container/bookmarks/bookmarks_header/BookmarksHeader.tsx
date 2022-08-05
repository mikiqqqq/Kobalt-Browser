import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import style from './BookmarksHeader.module.css';

interface Props {
    onClickClose(show: boolean): void;
}

const BookmarksHeader:React.FunctionComponent<Props> = props => {
    return (
        <div className={style.bookmarks_header_container}>
            <div className={style.bookmarks_header_title_container}>
                <span>
                    <FontAwesomeIcon icon={faBars} className={style.bookmark_icon}/>
                    Bookmarks
                </span>
            </div>

            <div className={style.bookmarks_header_close_container}>
                <button className={style.bookmarks_header_close_button} 
                onClick={() => props.onClickClose(false)} title='Close Bookmarks'>
                    
                    <FontAwesomeIcon icon={faClose} />
                </button>
            </div>
        </div>
    );
}

export default BookmarksHeader;
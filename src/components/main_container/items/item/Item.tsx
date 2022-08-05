import React from 'react';
import { Hit } from '../../ReponseHackerNewsData';
import { Data } from '../../useLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import style from './Item.module.css';

interface Props {
    item: Hit;
    bookmarkItems: Data[];
    theme: boolean;

    onBookamark(data: Data): void;
    onRemoveBookmarkItem(objectId: string): void;
}


const Item:React.FunctionComponent<Props> = props => {
    
    const handleBookmark = () => {
        props.onBookamark({
            objectId: props.item.objectID,
            title: props.item.title,
            url: props.item.url
        });
    };

    const getBookmarkIconColor = (objectId: string) => {
        return props.bookmarkItems.some(i => i.objectId === objectId);
    }

    return (
        <div className={`${style.item_container} ${props.theme && style.item_container_dark}`}>
            
            <a href={props.item.url} target='_blank noopener noreferrer'
            className={`${style.article_link} 
                ${props.theme ? style.article_link_hover_dark : style.article_link_hover_light}`}>
                
                <div className={style.item_header}>
                    <h4>{props.item.title}</h4>
                </div>
                
                <div className={style.item_details}>
                    <h6>Author:</h6>
                    <small>{props.item.author}</small>
                    <h6>Comments:</h6>
                    <small>{props.item.num_comments}</small>
                    <h6>Story points:</h6>
                    <small>{props.item.points}</small>
                    <h6>Created:</h6>
                    <small>{new Date(props.item.created_at_i*1000).toLocaleDateString('hr-HR')}</small>
                </div>
            </a>
            
            <div title='Bookmark' className={`${style.item_bookmark} 
                ${getBookmarkIconColor(props.item.objectID) ? style.item_bookmark_red : style.item_bookmark_pink}`} 
                onClick={getBookmarkIconColor(props.item.objectID) ? () => props.onRemoveBookmarkItem(props.item.objectID) : handleBookmark}>
                    <FontAwesomeIcon icon={faBookmark} />
            </div>
        </div>
    );
}

export default Item;
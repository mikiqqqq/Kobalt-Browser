import React from 'react';
import Item from './item/Item';
import { ResponseHackerNews } from '../ReponseHackerNewsData';
import { Data } from '../useLocalStorage';
import style from './Items.module.css';

interface Props {
    data: ResponseHackerNews | undefined;
    bookmarkItems: Data[];
    theme: boolean;

    onBookamark(data: Data): void;
    onRemoveBookmarkItem(objectId: string): void;
}

const Items:React.FunctionComponent<Props> = props => {
    return (
        <div className={style.items_container}>
            <h2 className={style.results}>&nbsp; Search results: &nbsp;</h2>
            {
                props.data?.hits.map((item, index) => {
                    return <Item key={index} theme={props.theme} bookmarkItems={props.bookmarkItems} 
                    onRemoveBookmarkItem={props.onRemoveBookmarkItem} onBookamark={props.onBookamark} item={item} />
                })
            }
        </div>
    )
};

export default Items;
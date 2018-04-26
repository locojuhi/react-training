import React from 'react';
import GiftItem from './GifItem';

const GifList = (props) => {
    const gifItems = props.gifs.map((image) => {
        return <GiftItem key={image.id} gif={image} />
    });
    return (
        <div className="gif-list">{gifItems}</div>
    );
};
export default GifList;
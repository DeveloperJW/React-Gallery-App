import React from 'react';
import NotFound from "./NotFound";
import Picture from './Picture';

//url={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`}

const PictureList = props => {
    const results = props.photo;
    let resultTitle='';
    let pictures;
    if (results.length > 0) {
        resultTitle=props.searchTerm+" pictures";
        pictures = results.map(picture =>
            <Picture
                url={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`}
                key={picture.id}
            />);

    } else {
        resultTitle='';
        pictures = <NotFound/>
    }

    return (
        <div className="photo-container">
            <h2>{resultTitle}</h2>
            <ul>
                {pictures}
            </ul>
        </div>
    );
};

export default PictureList;
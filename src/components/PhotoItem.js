import React, { Component } from 'react';
import Home from './Home';
import PHOTOS from './photos';

class PhotoItem extends Component {
    state = {
        photos: PHOTOS,
    };

    render() {
        const photoItems = this.state.photos.map((item) => {
            console.log('Rendering photo:', item);

            return (<div key={item.id} className="col-md-3 mb-3 ">
                <Home image={item.image} />
            </div>);
        });

        return (
            <>
                <h1 style={{ textAlign: 'center' }}>Gallery</h1>
                <hr />
                <div className="row">{photoItems}</div>;
            </>)
    }
}

export default PhotoItem;

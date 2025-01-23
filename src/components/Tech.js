import React, { Component } from 'react';
import Home from './Home';
import PHOTOS from './photos';

class Tech extends Component {
    state = {
        photos: PHOTOS,
    };

    render() {
        const photoItems = this.state.photos
            .filter((item) => item.category === 'Tech') // Filter photos with category 'Space'
            .map((item) => (
                <div key={item.id} className="col-md-3 mb-3">
                    <Home image={item.image} />
                </div>
            ));

        return (
            <>
                <h1 style={{ textAlign: 'center' }}>Technology</h1>
                <hr />
                <div className="row">{photoItems}</div>
            </>
        );
    }
}

export default Tech;

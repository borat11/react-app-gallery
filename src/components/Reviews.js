
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
const Reviews = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetch('reviews.json')
        .then(res =>res.json())
        .then(data =>setReviews(data))
    },[])

    return (
       <div>
            <section className='w-50 mx-auto'>
            

                {/* swiper start */}
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div>
                                <Rating
                                className='w-25 start-50'
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                            

                                <p>{review.details}</p>
                                <h3>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
                {/* swiper End */}



            </section>


        </div>
    );
};

export default Reviews;
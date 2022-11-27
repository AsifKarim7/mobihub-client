import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import MobileCategories from '../MobileCategories/MobileCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExtraSection></ExtraSection>
            <MobileCategories></MobileCategories>
            <AdvertisedItems></AdvertisedItems>
        </div>
    );
};

export default Home;
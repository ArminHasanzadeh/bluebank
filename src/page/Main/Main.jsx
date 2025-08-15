import React from 'react';
import TopMain from './Topmain/TopMain';
import ContentMain from './ContentMain/ContentMain';
import BlueCart from './BlueCart/BlueCart';
import CardBox from './CardBox/CardBox';
import BlueLine from './BlueLine/BlueLine';

import PhoneBox from './PhoneBox/PhoneBox';

function Main(props) {
    return (
        <main>
            <TopMain />
            <ContentMain />
            <BlueCart />
            <CardBox />
            <BlueLine />
            <PhoneBox />
        </main>
    );
}

export default Main;
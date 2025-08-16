import React from 'react';
import TopMain from './Topmain/TopMain';
import ContentMain from './ContentMain/ContentMain';
import BlueCart from './BlueCart/BlueCart';
import CardBox from './CardBox/CardBox';
import BlueLine from './BlueLine/BlueLine';

import PhoneBox from './PhoneBox/PhoneBox';
import Question from './component/Question';

function Main(props) {
    return (
        <main>
            <div id="#Top"></div>
            <TopMain />
            <ContentMain />
            <BlueCart />
            <CardBox />
            <BlueLine />
            <PhoneBox />
            <Question />
        </main>
    );
}

export default Main;
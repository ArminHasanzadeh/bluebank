import React from 'react';
import TopMain from './Topmain/TopMain';
import ContentMain from './ContentMain/ContentMain';
import BlueCart from './BlueCart/BlueCart';
import CardBox from './CardBox/CardBox';

function Main(props) {
    return (
        <main>
            <TopMain />
            <ContentMain />
            <BlueCart />
            <CardBox />
        </main>
    );
}

export default Main;
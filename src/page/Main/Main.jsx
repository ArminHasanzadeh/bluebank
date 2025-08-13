import React from 'react';
import TopMain from './Topmain/TopMain';
import ContentMain from './ContentMain/ContentMain';
import BlueCart from './BlueCart/BlueCart';

function Main(props) {
    return (
        <main>
            <TopMain />
            <ContentMain />
            <BlueCart />
        </main>
    );
}

export default Main;
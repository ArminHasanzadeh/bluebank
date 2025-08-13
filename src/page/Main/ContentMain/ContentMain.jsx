import React from 'react';
import Content from './content/Content';
import ButtonBlueTop from '../../../component/common/ButtonBlue/ButtonBlueTop';

function ContentMain(props) {
    return (
        <section className='flex justify-center items-center w-full h-auto mt-20 flex-col'>
            <Content />
           
        </section>
    );
}

export default ContentMain;
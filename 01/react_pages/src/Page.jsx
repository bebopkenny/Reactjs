import React from 'react'
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

const Page = () => {
    function OrderedList() {
        const excitedRecat = 
        <section>
            <ol>
                <li>Build projects</li>
                <li>Google</li>
                <li>Work with others</li>
            </ol>
        </section>
        return excitedRecat;
    }
    return (
        <OrderedList />
    )
}

export default Page;
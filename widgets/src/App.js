import React from 'react';
import { Accordion } from './components/Accordion';

const items = [
    {
        title: 'What is React ?',
        content: 'It\'s a front end library'
    },
    {
        title: 'Why use React ?',
        content: 'It\'s a favorite front end library'
    },
    {
        title: 'How do you use React ?',
        content: 'you use react by creating components'
    },
];

export default () => {
    return (
        <div>
            <br />
            <Accordion  items= {items}/>
        </div>
    )
};
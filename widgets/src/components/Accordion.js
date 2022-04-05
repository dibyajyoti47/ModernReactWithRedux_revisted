import React, { Fragment, useState } from "react";



export const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = idx => {
        setActiveIndex (idx);
    }

    const renderedItems = items.map( (item, idx) => {

        const active = idx === activeIndex ? "active" : "";

        return (
            <Fragment key= {item.title}>
                <div className={ `title ${active}` }
                        onClick={ ()=> onTitleClick(idx) }            >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={ `content ${active}` }>
                    <p>{item.content}</p>
                </div>
            </Fragment>
        );
    } );
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>);
}
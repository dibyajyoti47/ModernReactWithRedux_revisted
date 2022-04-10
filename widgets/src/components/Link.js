import React from "react";

const Link = ({className, href, children}) => {
    const onClick = (event) => {
        debugger;
        if(event.metaKey || event.ctrlKey) {
            debugger;
            console.log("yes yes");
            return;
        }

        event.preventDefault();
        window.history.pushState({}, "", href);

        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    }
    return (<a onClick={onClick} className={className} href={href}>{children}</a>);
}

export default Link;
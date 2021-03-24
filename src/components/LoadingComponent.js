//This is a React component to show a loading spinner while page is loading//
import React from 'react';

//simple functional component called loading, will reutrn column div with font-awesome icon//
//spinner icon, fa-pulse makes it rotate, fa-3x increases size, fa-sw keeps witch, text-primary = blue//
//text loading//
export const Loading = () => {
    return (
        <div className="col">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
            <p>Loading...</p>
        </div>
    );
};
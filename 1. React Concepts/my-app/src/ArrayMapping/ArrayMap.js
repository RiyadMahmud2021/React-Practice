// Codevolution 

import React, { Fragment } from 'react';

const ArrayMap = () => {

    const names = ['Rmr', 'RPM', 'RJS']

    return (
        <Fragment>
            {
                names.map(name => <h1>{name}</h1>) // not names , will be name
                // Here we put this line, but if we want to keep its value in a variable,we can
                // put this line here.To see this plz see ArrayMap1.js
            }
        </Fragment>
    );
}

export default ArrayMap;     
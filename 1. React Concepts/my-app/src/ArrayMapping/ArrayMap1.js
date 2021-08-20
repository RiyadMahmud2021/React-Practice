// Codevolution 

import React, { Fragment } from 'react';

const ArrayMap1 = () => {
    const names = ['Rmr1', 'RPM2', 'RJS3']
    const nameList = names.map(name => <h1>{name}</h1>)

    return (
        
        <Fragment>
            { nameList } 
        </Fragment>
    );
}

export default ArrayMap1;

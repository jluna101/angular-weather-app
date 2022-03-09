import React from 'react';
import PropTypes from 'prop-types';

HelloWorld.propTypes = {
    
};

function HelloWorld(props) {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    );
}

export default HelloWorld;
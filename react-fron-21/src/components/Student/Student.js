import React from 'react';

export const Student = ({ id,name }) => {
    return (
        <div id={id} className="student">
            <h3>{name}</h3>
            <input />
        </div>
    );
};

import React from 'react';

function Alert({ messages = [] }) {
    return (
        <div className='Alert'>
            <h3>Oh no! There was an error!</h3>
                {messages.map(err => (
                    <p key={err}>{err}</p>
                ))}
        </div>
    );
}

export default Alert;
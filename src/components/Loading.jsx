import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loading = ({ changeload }) => {
    changeload()
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh',backgroundColor:'#343C4A' }}>
            {/* <Spinner animation="border" role="status" >
                <span className="visually-hidden">Loading...</span>
            </Spinner> */}

            <div className="spinner">
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </div>
        </div>
    );
};

export default Loading;
import React from 'react';
import batman from '../../images/batman.png'

const Error = () => {

const centerH2 ={
    textAlign:"center",
    marginTop:"50px"
}
    

    return (
        <div className='quiz-bg'>
            <div className='container'>
                <h2 style={centerH2}>Oups !!! page not found 404</h2>
                <img src={batman} alt="Error image" />
            </div>
        </div>
    );
};

export default Error;
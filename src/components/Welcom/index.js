import React, { Fragment } from 'react';
import Logout from '../Logout';
import Quiz from '../Quiz';
import { useState,useContext} from 'react';
import FirebaseContext from '../Firebase/contexts';


const Welcom = () => {
    const firebase=useContext(FirebaseContext)
    const [usersession,setUsersession] = useState(null)

    

    return usersession===null ? (
        <Fragment>
            <div className='loader'>
            </div>
            <p style={{textAlign:"center",color:"white"}}>
            Loading...
            </p>
        </Fragment>
    ):(
        <div className='quiz-bg'>
            <div className='container'>
               <Logout/>
               <Quiz/>
            </div>
        </div>
    )
};

export default Welcom;
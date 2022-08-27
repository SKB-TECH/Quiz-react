import React, { Fragment } from 'react';
import Logout from '../Logout';
import Quiz from '../Quiz';
import { useState, useContext, useEffect } from 'react';
import FirebaseContext from '../Firebase/contexts';
import { useNavigate } from 'react-router-dom';


const Welcom = () => {
    let listner='';
    const firebase=useContext(FirebaseContext)
    const [usersession,setUsersession] = useState(null)
    const navigate=useNavigate(null)

    

    useEffect(() => {
       let listner=firebase.auth.onAuthStateChanged(user=>{
            user ? setUsersession(user):navigate('/')
        })
      
    }, [listner,firebase])
    

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
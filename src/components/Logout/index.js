import React from 'react';
import { useState,useEffect,useContext} from 'react';
import FirebaseContext from '../Firebase/contexts';

const Logout = () => {
    const [checked,setchecked] = useState(false)
    const firebase=useContext(FirebaseContext)

    useEffect(() => {
      if(checked){
        console.log("deconnexion");
        firebase.SignOut()
      }
    }, [checked])
    
    const handlChange=(e)=>{
        setchecked(e.target.checked)
    }
    return (
        <div className='logoutContainer'>
           <label className='switch'>
                <input type="checkbox" name="" id="" 
                    onChange={handlChange}
                    checked={checked}
                />

                <span className='slider round'></span>
           </label>
           
        </div>
    );
};

export default Logout;
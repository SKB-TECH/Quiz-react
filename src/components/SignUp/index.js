import React from 'react';
import { useState,useContext} from 'react';
import { FirebaseContext } from '../Firebase';

const SignUp = () => {
const data= {
    pseudo:"",
    email:"",
    password:"",
    confirme:""
}

const context=useContext(FirebaseContext)


const [logineData,setloginData]= useState(data)
const {pseudo,email,password,confirme}=logineData
const btn= pseudo ===''|| email==='' || password==='' || password !==confirme ?
<button disabled>Inscription</button>:<button>Inscription</button>

const handlChange=(e)=>{
    setloginData({...logineData,[e.target.id]:e.target.value})
}

    return (
        <div className='signUpLoginBox'>
           <div className='slContainer'>
                <div className='formBoxLeftSignup'>

                </div>
                {/* formulaire */}
               
                <div className='formBoxRight'>
                    <div className='formContent'>
                    <h2>Inscription</h2>
                        <form>
                            <div className='inputBox'>
                                <input type="text" id='pseudo' onChange={handlChange} value={pseudo}  autoComplete='off' required />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>

                            <div className='inputBox'>
                                <input  type="email" id='email' onChange={handlChange} value={email} autoComplete='off' required />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className='inputBox'>
                                <input type="password" id='password' onChange={handlChange} value={password}  autoComplete='off' required />
                                <label htmlFor="password">Mot de Passe</label>
                            </div>

                            <div className='inputBox'>
                                <input type="password" id='confirme' onChange={handlChange} value={confirme} autoComplete='off' required />
                                <label htmlFor="confirme">Confirme Mot de Passe</label>
                            </div>
                            {btn}
                        </form>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default SignUp;
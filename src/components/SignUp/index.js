import React from 'react';
import { useState,useContext} from 'react';
import { FirebaseContext } from '../Firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
const data= {
    pseudo:"",
    email:"",
    password:"",
    confirme:""
}

//creation du context 
const firebase=useContext(FirebaseContext)
const [error,seterror]= useState("")
const navigate=useNavigate()
const [logineData,setloginData]= useState(data)
const {pseudo,email,password,confirme}=logineData

const btn= pseudo ===''|| email==='' || password==='' || password !==confirme ?
<button disabled>Inscription</button>:<button>Inscription</button>

const handlChange=(e)=>{
    setloginData({...logineData,[e.target.id]:e.target.value})
}

const verication =()=>{
    setloginData({...data})
    navigate("/Welcom");
}

const invalidation=()=>{
    seterror(error)
    setloginData({...data})
}

//fonction pour enregistrer dans la base des donnees
const handlsubmit=(e)=>{
    e.preventDefault()
    const {email,password,pseudo}=logineData;
    firebase.SignupUser(email,password,pseudo,verication,invalidation)
    
}

const errorMsg= error !=='' && <span>{error.message}</span>
    return (
        <div className='signUpLoginBox'>
           <div className='slContainer'>
                <div className='formBoxLeftSignup'>
                </div>
                <div className='formBoxRight'>
                    <div className='formContent'>
                    {errorMsg}
                    <h2>Inscription</h2>
                        <form onSubmit={handlsubmit}>
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
                        <div className='linkContainer'>
                            <Link className='simpleLink' to="/login" style={{fontSize:"18px"}}>Déja Inscrit ?   Connectez-vous</Link>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default SignUp;
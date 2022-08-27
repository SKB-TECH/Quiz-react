import React ,{useState,useContext}from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../Firebase/contexts';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const [email,setEmail] = useState('')
    const [success,setSuccess]=useState("")
    const [faild,setFaild]=useState('')

    const firebase=useContext(FirebaseContext)
    const navigate=useNavigate()
    const disabled= email===''

    const reussi=()=>{
        setFaild(null)
        setSuccess("Veillez consulter votre adresse email pour initialiser le mot de passe")
    }

    const echec=()=>{
        setFaild(faild)
        setSuccess("")
    }


    const handlsubmit=(e)=>{
        e.preventDefault()
        firebase.passwordReset(email,reussi,echec);

        setInterval(()=>{
            navigate('/login')
        },5000)
    }

    return (
        <div className='signUpLoginBox'>
        <div className="slContainer">
        <div className='formBoxLeftForget'>
            </div>
            <div className='formBoxRight'>
                <div className='formContent'>
                {
                    success && <span style={
                        {
                            border:"1px solid green",
                            background:"green",
                            color:"#ffffff"
                        }
                    }>{success}</span>
                }

                <h2>Initialisation mot de passe</h2>
                    <form onSubmit={handlsubmit}>
                        < div className='inputBox'>
                            <input  type="email" id='email' onChange={e=>setEmail(e.target.value)} autoComplete='off' required value={email} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <button disabled={disabled}>Recupere</button>
                    </form>
                    <div className='linkContainer'>
                        <Link className='simpleLink' to="/login" style={{fontSize:"18px"}}>Déjà inscrit Connectez-vous</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ForgetPassword;
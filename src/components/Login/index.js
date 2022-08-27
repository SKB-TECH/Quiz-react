import React,{useState,useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../Firebase/contexts';
import { useNavigate } from 'react-router-dom';



const Login = (props) => {
    const [error, seterror] = useState('')
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [btn, setbtn] = useState(false)
    const firebase=useContext(FirebaseContext)
    const navigate=useNavigate()


    useEffect(() => {
        if(password.length>5 && email !==""){
            setbtn(true)
        }
        else if(btn){
            setbtn(false)
        }
    }, [email,password])
    

    //validation
    const validation =()=>{
        setEmail('')
        setPassword('')
        navigate("/Welcom");
    }

    const invalidation=()=>{
        seterror(error)
        setEmail('')
        setPassword('')
    }
    //pour la connexion a la plat-form
    const handlsubmit=(e)=>{
        e.preventDefault()
        firebase.logineUser(email,password,validation,invalidation)
    }


    return (
        <div className='signUpLoginBox'>
            <div className="slContainer">
            <div className='formBoxLeftLogin'>
                </div>
                <div className='formBoxRight'>
                    <div className='formContent'>
                    {
                        error !=="" && <span>{error.message}</span>
                    }

                    <h2>Connexion</h2>
                        <form onSubmit={handlsubmit}>
                            <div className='inputBox'>
                                <input  type="email" id='email' onChange={e=>setEmail(e.target.value)} autoComplete='off' required value={email} />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className='inputBox'>
                                <input type="password" id='password' onChange={e=>setPassword(e.target.value)} autoComplete='off' required value={password} />
                                <label htmlFor="password">Mot de Passe</label>
                            </div>
                            {
                                btn ? <button>Connexion</button>:<button disabled>Connexion</button>
                            }
                        </form>
                        <div className='linkContainer'>
                            <Link className='simpleLink' to="/Signup" style={{fontSize:"18px"}}>Cree un nouveau compte</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
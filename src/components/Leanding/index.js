import React ,{useRef,useEffect,useState,Fragment} from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    const refWolverine=useRef(null)
    const [btn,setBtn]=useState(false)


    useEffect(() => {
        refWolverine.current.classList.add("startingImg")

      setInterval(()=>{
        refWolverine.current.classList.remove("startingImg")
        setBtn(true)
      },1000)

    }, [])
    
    const setleftImg=()=>{
        refWolverine.current.classList.add("leftImg")
    }
    
    const setrightImg=()=>{
        refWolverine.current.classList.add("rightImg")
    }

    const clean=()=>{
        if(refWolverine.current.classList.contains("leftImg")){
            refWolverine.current.classList.remove("leftImg")
        }
        else if(refWolverine.current.classList.contains("rightImg"))
        {
            refWolverine.current.classList.remove("rightImg")
        }
    }


    const displayBtn= btn &&(
        <Fragment>
             <div onMouseOver={setleftImg} onMouseOut={clean} className='leftBox'>
                <Link className='btn-welcome' to="/signup">
                    Inscription
                </Link>
            </div>
            <div onMouseOver={setrightImg}  onMouseOut={clean} className='rightBox'>
            <Link className='btn-welcome' to="/login">
                    Connexion
                </Link>
            </div>
        </Fragment>
    )

    return (
        <main ref={refWolverine} className='welcomePage'>
           {displayBtn}
        </main>
    );
};

export default Landing;
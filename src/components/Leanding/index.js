import React ,{useRef,useEffect,useState,Fragment} from 'react';

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
                <button className='btn-welcome'>
                    Inscription
                </button>
            </div>
            <div onMouseOver={setrightImg}  onMouseOut={clean} className='rightBox'>
                <button className='btn-welcome'>
                    Connexion
                </button>
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
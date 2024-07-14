import reactLogo from "../../img/react-motion.gif";


function Home()
{
    return <>
        <div className="bg-dark">
            <div className="row min-vh-100 align-items-center justify-content-center m-0">
                <div className="col text-center text-muted">
                    <img src={reactLogo} alt="react logo" className="img-fluid mb-5" width={300}/>
                    <h3> Welcome to Dashboard </h3>
                </div>
            </div>
        </div>
    </>
}

export default Home;
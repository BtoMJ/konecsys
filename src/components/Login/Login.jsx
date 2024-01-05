import waveL from '../../assets/waveL.png';
import waveR from '../../assets/waveR.png';
import './Login.css'

export function Login (){
    return(
        <div className="login-container">


            <div className="wave-container-left">
                {/* <img src={waveL} /> */}
                <div className="wave wave1"></div>
                
            </div>

            <div className="form-container centered-v">
                <div className="form">
                    {/* <div className="logo">
                    </div>
                    <div className="inputs">

                    </div> */}
                </div>
                
               
                <footer className="centered-v">Todos los Derechos Reservados © IDTECNOLOGY 2024</footer>
            </div>

            <div className="wave-container-right">
                <img src={waveR} />
            </div>


        </div>
    )
}
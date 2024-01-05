import logo from '../../assets/IDLogo2Bco.png';
import { 
    IoCallSharp, 
    IoCalendarSharp, 
    IoChatbubblesSharp,
    IoLogoWhatsapp,
    IoMoon,
    IoBarChart,
    IoMail 
   } from "react-icons/io5";
import { ImExit } from "react-icons/im";

import './Dashboard.css';

export function Dashboard (){
    return(
        <div className="dashboard-container centered-v">

            <nav>
                <div className='logo-dasboard'>
                    <img src={logo} alt='Logo'/>
                </div>
                <div className='user-container'>
                    <div className='select-autopista'>
                        <select>
                            <option value="0">Seleccione Autopista</option>
                            <option value="1">Autopista 1</option>
                            <option value="2">Autopista 2</option>
                            <option value="3">Autopista 3</option>
                            <option value="4">Autopista 4</option>
                            <option value="5">Autopista 5</option>
                            <option value="6">Autopista 6</option>
                        </select>
                    </div>
                    <div className='info-user'>
                        <div className='photo-user'></div>
                        <div>
                            <h2>Daniel Valencia Yañez</h2>
                            <span>administrador</span>
                        </div>
                    </div>
                    <div className='sesion-container centered-v'>
                        <ImExit />
                    </div>
                </div>
            </nav>

            <section>
                <div className='left-navbar'>
                    <IoChatbubblesSharp className='icon'/>
                    <IoCallSharp className='icon'/>
                    <IoCalendarSharp className='icon'/>
                    <IoLogoWhatsapp className='icon'/>
                    <IoMail className='icon'/>
                    <IoBarChart className='icon'/>
                </div>
                <div className='client-info'>

                </div>
                <div className='call-history'>
                    
                </div>
            </section>

            <footer className='centered-v'>
                Todos los Derechos Reservados © IDTECNOLOGY 2024
            </footer>

        </div>
    )
}
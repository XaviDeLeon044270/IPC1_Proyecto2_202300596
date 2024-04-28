import { useState } from 'react';
import usocialLogo from './usociallogo.png'; // Importa la imagen
import { Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const AdministratorModule = () => {
    let Links =[
        {name:"Administrador", link: "/admin"},
        {name:"Carga Masiva", link: "/carga-masiva"},
        {name:"Visualización de datos", link: "/visualizacion-de-datos"},
        {name:"Reporte", link: "/reporte"},
    ]

    let [isOpen, setisOpen] = useState(false);

    // Mueve la lógica de la plantilla de cadena de texto aquí
    let ulClasses = `md:flex md:items-center md:pb-0 pb-12 absolute md:static 
    bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
    transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`;

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:px-10 py-4 px-7 md:flex justify-between items-center 
            bg-white" >
                <div className='flex text-2xl cursor-pointer items-center gap-2'> 
                {/*logo here*/}
                    <img 
                        src={usocialLogo} 
                        className="w-15 h-10 mr-3" 
                        alt="Logo" 
                    /> 
                    <span className='font-bold'>USocial</span>
                </div>
                {/* Menu icon*/}
                <div onClick={() => setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 
                cursor-pointer md:hidden'>
                    {
                        isOpen ? <XMarkIcon/> : <Bars3BottomRightIcon/>
                    }
                </div>
                {/* nav links heres*/}
                <ul className={ulClasses}>
                    {
                        Links.map((link, index) => (
                            <li key={index} className='font-semibold my-7 md:my-0 md:ml-8'>
                                <Link to={link.link}>{link.name}</Link>
                            </li>
                        ))
                    }
                    <Link to="/signup">
                        <button className='btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static'>Sign Up</button>
                    </Link>
                    <Link to="/login">
                        <button className='btn bg-white text-blue-600 py-1 px-3 md:ml-8 rounded md:static'>Login</button>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default AdministratorModule;
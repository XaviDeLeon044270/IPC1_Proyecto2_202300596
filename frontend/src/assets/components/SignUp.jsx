import React from 'react';

const SignUp = () => {
    return (
        <div>
             <div style={{ 
            backgroundImage: `url(${fondologin})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            height: '100vh' 
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
                    <h1 className='text-4x1 text-black font-bold text-center mb-6'>Iniciar sesión</h1>
                    <form action="">
                        <div className='relative my-4'>
                            <input type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
                            <label htmlFor="" className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Carnet/Código USAC</label>
                        </div>
                        <div className='relative my-4'>
                            <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/> 
                            <label htmlFor="" className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Contraseña</label> {/* Cambia el texto a Your Password */}
                        </div>
                        <button type="Submit">Iniciar Sesión</button>
                        <div>
                            <span>¿No tienes una cuenta?<Link to='/signup'>Registrate</Link></span> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignUp;
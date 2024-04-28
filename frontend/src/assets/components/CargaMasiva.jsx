import React from 'react';
import { Link } from 'react-router-dom';
import fondologin from './fondologin.jpg';

function CargaMasiva() {
    return (
        <div style={{ 
            backgroundImage: `url(${fondologin})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            height: '100vh' 
        }}>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
                    <main className="container">
                        <div className="cargaMasiva-header">
                            <h1 className='text-4x1 text-black font-bold text-center mb-6'>Cargar Datos</h1>
                            <label htmlFor="file" className="file-button">
                                <input type="file" id="file" accept=".jason"/>
                            </label>
                            <button type="button" className="ligth-button">
                                Cargar Datos
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default CargaMasiva;
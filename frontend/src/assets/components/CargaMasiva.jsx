import React from 'react';
import { Await, Link } from 'react-router-dom';
import fondologin from './fondologin.jpg';
import { useState } from 'react';

function CargaMasiva() {
    const [data, setData] = useState([null])

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const _data = JSON.parse(e.target.result);
                console.log(_data);
                setData(_data);
            };
            reader.readAsText(file);
        }
    }

    const handleUpload = async () => {
        if (!data){
            alert('No hay datos para cargar');
            return;
        }
        try {
            const respones = await fetch('http://localhost:3000/addCustomers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        if (response.ok) {
            alert('Datos cargados correctamente');
        } else {
            alert('Error al cargar los datos');
        }
        } catch (error) {
            alert('Error al cargar los datos');
        }
    }

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
                                Selecciona un archivo JSON.<br/>
                                <input type="file" id="file" accept=".jason" onChange={handleFileChange}/>
                            </label>
                            <button type="button" className="ligth-button" onClick={handleUpload}>
                                Cargar Datos
                            </button>
                        </div>
                        <div className='cargaMasiva-content pt-20 mt-20'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Carnet</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Genero</th>
                                        <th>Facultad</th>
                                        <th>Carrera</th>
                                        <th>Correo</th>
                                        <th>Contraseña</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data.map((item, index) => {
                                    if (item) {
                                        return (
                                            <tr key={index+1}>
                                                <td>{index+1}</td>
                                                <td>{item.carnet}</td>
                                                <td>{item.nombres}</td>
                                                <td>{item.apellidos}</td>
                                                <td>{item.genero}</td>
                                                <td>{item.facultad}</td>
                                                <td>{item.carrera}</td>
                                                <td>{item.correo}</td>
                                                <td>{item.contraseña}</td>
                                            </tr>
                                        );
                                    }
                                })}
                                </tbody>
                            </table>
                            <Link to="/visualizacion-de-datos">
                                <button>Ir a Visualizar Datos</button>
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default CargaMasiva;
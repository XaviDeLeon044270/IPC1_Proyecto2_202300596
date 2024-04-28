import React from 'react';
import { Await, Link } from 'react-router-dom';
import fondologin from './fondologin.jpg';
import { useState } from 'react';
import { useEffect } from 'react';

function VisualizarDatos() {
    const [customers, setCustomers] = useState(null);

    const getCustomers = async () => {
        try {
            const response = await fetch('http://localhost:3000/getCustomers', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (response.ok) {
                const data = await response.json();
                setCustomers(data);
            }

        } catch (error) {
            alert('Error al solicitar los clientes');
        }
    }

    useEffect(() => {
        getCustomers();
    } , []);

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
                        <h1 className='text-4x1 text-black font-bold text-center mb-6'>Visualizar Datos</h1>
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
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            {customers && customers.map((customer) => {
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.carnet}</td>
                                    <td>{customer.nombres}</td>
                                    <td>{customer.apellidos}</td>
                                    <td>{customer.genero}</td>
                                    <td>{customer.facultad}</td>
                                    <td>{customer.carrera}</td>
                                    <td>{customer.correo}</td>
                                    <td>{customer.contraseña}</td>
                                    <td>
                                        <Link to= {`${customer.id}`} className='light-button' style={{ textDecoration: 'none'}}>
                                            Update
                                        </Link>
                                    </td>
                                    <td>
                                        <button className='primary-button' type="button" onClick={() => handleDelete(customer.id)}>
                                            Delete  
                                        </button>
                                    </td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default VisualizarDatos;
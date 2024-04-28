
import { motion } from 'framer-motion';
import estudiantefoto from './estudiantefoto.jpeg'; // Importa la imagen

const Estudiante = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-indigo-500'>
            <motion.div
                className='p-10 border-4 border-indigo-600 rounded-md mb-4 shadow-lg bg-white'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className='text-4xl text-center mt-10 font-semibold'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Estudiante
                </motion.h1>
                <motion.p
                    className='text-center mt-10 mb-10 mx-10 text-gray-700'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Conoce al estudiante detrás de USocial. Descubre su inspiración, sus objetivos y su pasión por crear una comunidad en línea vibrante y en constante evolución para la Universidad de San Carlos de Guatemala.
                </motion.p>
            </motion.div>
            <div className='flex justify-center w-full'>
                <motion.div
                    className='flex flex-col items-center justify-center p-10 border-4 border-indigo-600 rounded-md mb-4 mr-2 flex-1 shadow-lg bg-white'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <motion.h1
                        className='text-4xl text-center mt-10 font-semibold'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Estudiante
                    </motion.h1>
                    <motion.p
                        className='text-center mt-10 mb-10 mx-10 text-gray-700'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        Estudiante de tercer semestre de ingeniería en Ciencias y Sistemas en la Universidad San Carlos de Guatemala.
                        Página Web creada por: Xavi Alexander De León Perdomo , Carnet: 202300596
                    </motion.p>
                </motion.div>
                <motion.div
                    className='p-10 border-4 border-indigo-600 rounded-md flex-1 shadow-lg bg-white'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <motion.img
                        src={estudiantefoto}
                        alt="Estudiante"
                        className='w-45 h-45 object-cover rounded-full mx-auto'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Estudiante;
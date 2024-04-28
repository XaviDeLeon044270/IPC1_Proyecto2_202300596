
import { motion } from 'framer-motion';

const Contacto = () => {
    return (
        <motion.div
            className='p-10 border-4 border-indigo-600 rounded-md mb-4 shadow-lg'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                className='text-4xl text-center mt-10 font-bold'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Contacto de Soporte
            </motion.h1>
            <motion.p
                className='text-center mt-10 mb-10 mx-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                ¿Necesitas ayuda o tienes alguna pregunta? Nuestro equipo de soporte está aquí para ayudarte. Contáctanos a través de xdeleon1acss@gmail.com o +502 4967-5480.
            </motion.p>
        </motion.div>
    );
};

export default Contacto;

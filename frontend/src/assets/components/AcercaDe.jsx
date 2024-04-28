import { motion } from 'framer-motion';

const AcercaDe = () => {
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
                Acerca de
            </motion.h1>
            <motion.p
                className='text-center mt-10 mb-10 mx-10'
                initial={{ opacity: 0 }} // Inicia con opacidad 0 (invisible)
                animate={{ opacity: 1 }} // Anima a opacidad 1 (visible)
                transition={{ delay: 0.5, duration: 0.5 }} // Duración de la animación y retraso
            >
                Descubre más sobre USocial y cómo esta plataforma está transformando la forma en que los estudiantes y catedráticos se conectan e interactúan en la universidad. Conoce nuestro compromiso con la transparencia, la diversidad de opiniones y la creación de un ambiente colaborativo y enriquecedor.
            </motion.p>
        </motion.div>
    );
};

export default AcercaDe;
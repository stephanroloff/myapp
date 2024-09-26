import { motion } from 'framer-motion';

type PageTransitionProps = {
    children: React.ReactNode;
}

const PageTransition = ({children}: PageTransitionProps) => {
    const pageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
        >
            {children}

        </motion.div>
    );
  };
  
  export default PageTransition;
  
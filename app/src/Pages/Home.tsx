import reactLogo from '../assets/img/react.svg'
import Button from '../components/Button';
import viteLogo from '/vite.svg'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Home() {
  const { t } = useTranslation();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return <>
            <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
            >
                  <h2 className="text-center pb-8 blackToWhiteText">Home Page</h2>
                  <div className="flex justify-center py-4">
                  <Button>Click me!</Button>
                  </div>
                  <div className='flex justify-center gap-2'>
                    <a href="https://vitejs.dev" target="_blank" className="logo w-full max-w-[245px]">
                      <img src={viteLogo} className="logo w-full" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank"className="logo w-full max-w-[245px] animate-spin-react">
                      <img src={reactLogo} className="logo react w-full" alt="React logo" />
                    </a>
                  </div>
                  <h1 className='text-center py-6 text-[42px] blackToWhiteText'>Vite + React</h1>
                  <p className='pb-10 text-center blackToWhiteText'>{t('greeting')}</p>
            </motion.div>
          </>
}

export default Home;

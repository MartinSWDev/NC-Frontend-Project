import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="landing"
      initial="hidden"
      animate="visible"
      exit="pageExit"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
        pageExit: {
          y: '-100vh',
          transition: { ease: 'easeIn' },
        },
      }}
    >
      <button className="landing-btn" onClick={() => navigate('./reviews')}>
        Login
      </button>
    </motion.div>
  );
};

export default Landing;

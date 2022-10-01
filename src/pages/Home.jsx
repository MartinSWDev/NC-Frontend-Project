import DisplayAll from '../components/Displays/DisplayAll';
import Header from '../components/Headers/Header';
import Hamburger from '../components/Nav/Hamburger';
import { motion } from 'framer-motion';
import User from '../components/Nav/User';

const Home = () => {
  return (
    <motion.div
      className="review-body"
      initial="hidden"
      animate="visible"
      exit="pageExit"
      variants={{
        hidden: {
          height: '100vh',
          bottom: 0,
          opacity: 0,
        },
        visible: {
          height: 0,
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: [0.87, 0, 0.13, 1],
          },
        },
        pageExit: {
          opacity: 0,
        },
      }}
    >
      <Header />
      <Hamburger />
      <User />
      <DisplayAll />
    </motion.div>
  );
};

export default Home;

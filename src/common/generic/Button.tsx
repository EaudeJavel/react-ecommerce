import { motion } from 'framer-motion';

type ButtonProps = {
  children: string;
};

const Button = ({ children, ...props }: ButtonProps) => {
  const buttonVariants = {
    rest: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
    },
    pressed: {
      scale: 0.95,
      boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    },
  };

  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="pressed"
      className="bg-white px-4 py-2 text-black outline outline-1"
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

import React from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import './hero.scss'
import { Box, Heading, Text } from "@chakra-ui/react";
import { headingVariant, itemVariants } from "utils/theme/muitheme";
import { FaCircleArrowRight } from "react-icons/fa6";

const Hero = (): React.JSX.Element => {

    return (
      <Box className="hero-container">
        <motion.article
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          className="hero-container_wrapper"
        >
          <motion.h1 variants={headingVariant(0.8)}>
            <Heading as="h1" noOfLines={0}>
              Invest with <br /> ZeniFinance.
            </Heading>
          </motion.h1>

          <motion.h5 variants={itemVariants(1.1)}>
            explore our range of profitable investment opportunities with
            ZeniFinance.
          </motion.h5>

          <motion.div
            variants={itemVariants(1.5)}
            className="hero-container_wrapper_buttons"
          >
            <Link to={"/register"} className="link-btn-filled">
              <Text>Get Started</Text>
              <FaCircleArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.article>
      </Box>
    );
};

export default Hero;

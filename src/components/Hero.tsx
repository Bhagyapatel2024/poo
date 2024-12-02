import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';
import SpinningCube from './SpinningCube';


  const Hero = () => {
    const fullText =
      "I am an enthusiastic Computer Science Engineering student with a strong foundation in programming languages like Java and Python. I have hands-on experience in web development technologies such as React.js to build real-time applications. My background in machine learning includes developing predictive models using frameworks like scikit-learn and TensorFlow. Additionally, I have solved over 500 problems on LeetCode. I also secured an All India Rank of 553 in the National Level Science Talent Search Examination.";
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < fullText.length) {
        const timer = setTimeout(() => {
          setDisplayText((prev) => prev + fullText[index]);
          setIndex((prev) => prev + 1);
        }, 50); // Set a fixed delay for typing effect (50ms per character)
        return () => clearTimeout(timer); // Clear the timeout to avoid overlapping
      }
    }, [index, fullText]);
  return (
    <div className="relative h-screen flex items-center bg-black">
{/*       <div className="absolute inset-0 z-0">
        <SpinningCube />
      </div> */}
      <div className="container mx-auto px-4 z-10">
{/*         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        > */}
          <h3 className="text-4xl font-bold text-white mb-6">I'm Bhagya Patel</h3>
          <h2 className="text-2xl text-gray-300 mb-8">Software Engineer</h2>
          <p className="text-xl text-gray-400 mb-12">Crafting elegant solutions to complex problems</p>

          {/* Typewriter effect */}
          <p className="text-xl text-gray-400 mb-12">{displayText}</p>

          <div className="flex justify-center space-x-6">
            {/* <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <Github size={32} />
            </motion.a> */}
           
              <Linkedin size={32} />
{/*             </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://leetcode.com/u/Bhagya_patel_01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            > */}
              <Code2 size={32} />
{/*             </motion.a> */}
          </div>
{/*         </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;

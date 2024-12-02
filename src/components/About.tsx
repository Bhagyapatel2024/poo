import React from 'react';
// import { motion } from 'framer-motion';

export default function About() {
  // bg-gray-900
  return (
    <section id="about" className="py-20 bg-black ">
      <div className="container mx-auto px-4">
{/*         <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        > */}
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
         
{/*             <div>
  <img
    src="t2.jpg"
    alt="Profile"
    className="rounded-lg shadow-xxl"
  />
</div> */}

          
            <div>
              <p className="text-gray-300 mb-6">
              Hello! My name is Bhagya Patel, and I am an enthusiastic Computer Science Engineering student with a passion for solving complex problems and building innovative solutions. I have a strong foundation in programming languages such as Java and Python and hands-on experience in web development using React.js to create responsive, real-time applications. My background in machine learning includes developing predictive models with frameworks like scikit-learn and TensorFlow. I have demonstrated my problem-solving skills by solving over 500 problems on LeetCode and earned an All India Rank of 553 in the National Level Science Talent Search Examination.
              </p>
              <div className="space-y-4">
                
                <div className="flex flex-wrap gap-3">
                  {['Java', 'Python'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <br/>
              <div className="space-y-4">
               
                <div className="flex flex-wrap gap-3">
                  {['HTML','CSS','JavaScript','React.js','Angular.js','Typescript','Sass(CSS)'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
          
              <br/>
              <div className="space-y-4">
              
                <div className="flex flex-wrap gap-3">
                  {['Machine Learning','Deep Learning'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
{/*         </motion.div> */}
      </div>
    </section>
  );
}

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';

const techStack = [
  { icon: <FaHtml5 />, name: 'HTML5', color: 'text-orange-500' },
  { icon: <FaCss3Alt />, name: 'CSS3', color: 'text-blue-500' },
  { icon: <FaJs />, name: 'JavaScript', color: 'text-yellow-400' },
  { icon: <FaReact />, name: 'React', color: 'text-cyan-400' },
  { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-500' },
  { icon: <SiExpress />, name: 'Express', color: 'text-gray-300' },
  { icon: <SiNextdotjs />, name: 'Next.js', color: 'text-white' },
  { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-400' },
];

const Experience = () => {
  return (
    <section className="min-h-screen bg-[#1b1e32] text-white flex flex-col items-center justify-center px-6 py-20">
      <h2 className="text-5xl font-bold mb-14 text-center">Tech Stack</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-12 w-full max-w-6xl">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.2,
              rotate: 3,
              boxShadow: '0px 0px 20px rgba(255,255,255,0.3)',
            }}
            className="flex flex-col items-center justify-center cursor-pointer hover:animate-pulse"
            title={tech.name}
          >
            <div className={`text-7xl md:text-8xl ${tech.color} transition-all duration-300`}>
              {tech.icon}
            </div>
            <p className="mt-3 text-lg md:text-xl font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

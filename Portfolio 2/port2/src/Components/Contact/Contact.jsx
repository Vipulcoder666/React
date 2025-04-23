import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaRegHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const contactDetails = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91-7897516265",
    link: "tel:+919876543210",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "vipulmpgi@gmail.com",
    link: "mailto:yourname@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "linkedin.com/in/vipul",
    link: "https://linkedin.com/in/yourprofile",
  },
  {
    icon: <FaTwitter />,
    title: "Twitter",
    value: "@vipul",
    link: "https://twitter.com/yourhandle",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Kanpur, India",
    link: "https://maps.google.com",
  },
];

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#1b1e32] text-white px-6 py-20 flex flex-col items-center">
      {/* Heading with optional icon */}
      <div className="flex items-center gap-3 justify-center text-white text-5xl mb-16">
        <FaRegHandshake className="text-4xl animate-bounce text-white" />
        <motion.h2
          className="font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Connect
        </motion.h2>
      </div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {contactDetails.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#262a45] hover:bg-[#2b2f4d] border border-cyan-600/20 rounded-2xl p-6 text-center flex flex-col items-center shadow-md hover:shadow-cyan-400/30 transition duration-300 hover:scale-105"
          >
            <div className="text-cyan-400 text-4xl mb-3 animate-pulse">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-1 text-cyan-200">{item.title}</h4>
            <p className="text-sm text-gray-300">{item.value}</p>
          </motion.a>
        ))}
      </div>

      {/* Optional footer quote */}
      <motion.p
        className="text-center text-gray-400 mt-16 max-w-xl text-sm italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        “I’m always open to connect. Let’s build something amazing together.”
      </motion.p>
    </section>
  );
};

export default Contact;

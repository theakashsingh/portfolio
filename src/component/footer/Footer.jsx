import * as Icons from "lucide-react";
import { motion } from "framer-motion";
const Footer = () => {
  const socialIcons = {
    github: <Icons.GithubIcon className="w-6 h-6" />,
    linkedin: <Icons.LinkedinIcon className="w-6 h-6" />,
    twitter: <Icons.TwitterIcon className="w-6 h-6" />,
  };

  const social = {
    "github": "https://github.com/theakashsingh",
      "linkedin": "https://www.linkedin.com/in/mrakashsingh/",
    "twitter": "https://x.com/mr_aksh_",
  };
  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          {Object.entries(social).map(([platform, url]) => (
            <motion.a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-slate-700 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {socialIcons[platform]}
            </motion.a>
          ))}
        </div>
        <p className="text-slate-400">
          Made with 💜 by Akash Dev © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

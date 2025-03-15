import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMediaComponent = () => {
  return (
    <div
      className="hidden fixed top-1/2 -translate-y-1/2 right-6 border border-primary/20 bg-background-lighten p-3 gap-3
                  rounded-full md:flex flex-col items-center-justify-center"
    >
      <a
        href="https://github.com/emericriv"
        target="_blank"
        rel="noreferrer"
        className="w-8 h-8 flex items-center justify-center border border-white rounded-full bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-background ml-auto"
      >
        <FaGithub size={16} />
      </a>
      <a
        href="https://www.linkedin.com/in/riviere-emeric/"
        target="_blank"
        rel="noreferrer"
        className="w-8 h-8 flex items-center justify-center border border-white rounded-full bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-background ml-auto"
      >
        <FaLinkedin size={16} />
      </a>
    </div>
  );
};

export default SocialMediaComponent;

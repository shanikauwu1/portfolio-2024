import { FaGithub, FaLink } from "react-icons/fa";
import Project_1_img from "../assets/project -1.png";
import Project_2_img from "../assets/project -2.png";
import Project_3_img from "../assets/project -3.jpg";
import Project_4_img from "../assets/project -4.png";

// Card component
const Card = ({ image, title, description, link, github }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img
      className="w-full h-64 object-contain bg-gray-100" // Tailwind classes for consistent size
      src={image}
      alt="Card"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="flex justify-evenly items-center text-3xl mt-6 hover:text-green-900">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub title="GitHub" className=" hover:text-green-900" />
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FaLink title="Website" className=" hover:text-green-900" />
        </a>
      </div>
    </div>
  </div>
);

// Card Grid component
const CardGrid = () => {
  const cardsData = [
    {
      id: 1,
      image: Project_1_img,
      title: "React portfolio",
      description: `A modern and dynamic portfolio website built with React, 
      featuring responsive design, engaging motion animations using Framer Motion,
       and a dark mode toggle and json data and elivering a
       polished and interactive user experience across all devices.`,
      link: "https://shanikae.netlify.app",
      github: "https://github.com/shanikauwu1/portfolio-2024",
    },
    {
      id: 2,
      image: Project_2_img,
      title: "Sass Landing page",
      description: `A responsive and visually appealing website 
      crafted with HTML, enhanced styling using Sass, and interactivity powered by JavaScript. 
      `,
      link: "https://growthapp-tute.netlify.app/",
      github: "https://github.com/shanikauwu1/SASS-web",
    },
    {
      id: 3,
      image: Project_3_img,
      title: "React E-commerce",
      description: `Developed a modern, responsive e-commerce website using React for the front end. 
      The products fetch  from fake API. Tailwind CSS for efficient styling`,
      link: "https://rayeli-fashions.netlify.app/",
      github: "https://github.com/shanikauwu1/react-ecommerce-site/",
    },

    {
      id: 4,
      image: Project_4_img,
      title: "Javascript Maching game",
      description: `An engaging JavaScript-based matching game featuring two levels of difficulty.
       Players match pairs of cards with increasing complexity as they progress`,
      link: "https://shanikauwu1.github.io/web-scripting-project/",
      github: "https://github.com/shanikauwu1/web-scripting-project",
    },
    // Add more cards as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-8 p-4">
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;

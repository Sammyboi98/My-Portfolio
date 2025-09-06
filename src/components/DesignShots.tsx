import { Link } from "react-router-dom"; 

interface ProjectProps {
    title: string;
    subtitle: string;
    image: string;
    link: string;
    label?: string;
}

const DesignShots: React.FC<ProjectProps> = ({ title, subtitle, image: image, link}) => {
  return (
    <Link
      key={title}
      to={link}
      className="group block rounded-2xl overflow-hidden text-center"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl"
      />
      <div className="mt-4 sm:mt-6">
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </Link>
  );
};

export default DesignShots;

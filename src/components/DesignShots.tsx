import { Link } from "react-router-dom";

interface ProjectProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  label?: string;
}

const DesignShots: React.FC<ProjectProps> = ({
  title,
  subtitle,
  image: image,
  link,
}) => {
  return (
    <Link
      to={link}
      className="group block bg-whit rounded-2xl overflow-hidden transition-all duration-300"
    >
      <div className="aspect-[4/3] w-full flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      <div className="p-4 sm:p-6 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600">{subtitle}</p>
      </div>
    </Link>
  );
};

export default DesignShots;

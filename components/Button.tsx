import { FC } from "react";

interface ButtonProps {
  title: React.ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white hover:bg-white-700 text-black font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
    >
      {title}
    </button>
  );
};

export default Button;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center py-4 mt-8">
      <Link to="/" className="text-pink-600 text-xl font-bold">
        MediBook
      </Link>
      <p>Your trusted medical appointment platform</p>
      <p>MediBook © 2024</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-gray-600">
          Help
        </a>
        <a href="#" className="text-gray-600">
          Faq
        </a>
        <a href="#" className="text-gray-600">
          Support
        </a>
        <a href="#" className="text-gray-600">
          T&C
        </a>
        <a href="#" className="text-gray-600">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;

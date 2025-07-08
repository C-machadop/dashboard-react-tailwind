export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200  px-6 py-4">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        <p className="text-sm text-gray-600 ">
          © 2024 AdminGrid. All rights reserved.
        </p>
        <div className="flex space-x-4 text-sm text-gray-600 ">
          <a href="#" className="hover:text-gray-900  transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

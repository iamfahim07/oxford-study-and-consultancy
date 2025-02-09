export const Footer = () => {
  return (
    <footer className="py-4" style={{ backgroundColor: "rgba(37, 38, 65, 1)" }}>
      <div className="max-w-lg mx-auto">
        <div className="flex items-center text-gray-400 text-sm justify-center">
          <span className="border-gray-400 px-3">Privacy</span>
          <span className="border-l border-gray-400 pl-3">
            Terms & Conditions
          </span>
        </div>
        <div className="text-center text-white">
          <p className="text-gray-400 text-sm">&copy; 2025. </p>
        </div>
      </div>
    </footer>
  );
};

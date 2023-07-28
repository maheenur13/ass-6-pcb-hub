const FooterSection = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} YourWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

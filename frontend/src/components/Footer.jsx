import React from "react";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-black via-gray-800 to-black p-8 text-white mt-12 border-t border-b border-gray-600">
      {/* Background animation */}
      <div className="absolute inset-0 animate-gradient-bg opacity-30"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Name */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Suraj Yadav.</h1>
          <p className="text-sm text-gray-400">© 2024. All Rights Reserved.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-medium mb-3">Explore</h3>
          <ul className="space-y-1 text-gray-300">
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/project"
                className="hover:text-white transition-colors"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-medium mb-3">Let's Connect</h3>
          <ul className="space-y-1 text-gray-300">
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ysuraj1191@gmail.com&su=Hello%20Suraj"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/suraj-yadav-3449a62ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/surajyadav1975"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/suraj_yadav_1975tk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";

function LeftSider() {
  return (
    <div>
      <div className="flex flex-col items-left items-start fixed left-2 bottom-0">
        <div className="flex flex-col gap-2 items-center">
          <a
            href="https://www.linkedin.com/in/radha-kumari-55106021b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-box-line text-xl text-icon hover:text-white"></i>
          </a>
          <a
            href="https://github.com/Radha27112021"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-line text-xl text-icon hover:text-white"></i>
          </a>
          <a
            href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=radha.050903@gmail.com&tf=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-mail-line text-xl text-icon hover:text-white"></i>
          </a>
          <a
            href="https://www.facebook.com/facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-facebook-circle-line text-xl text-icon hover:text-white"></i>
          </a>
          <a
            href="https://www.instagram.com/techt_alk10/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-line text-xl text-icon hover:text-white"></i>
          </a>
        </div>

        <div className="w-[2px] h-52 bg-icon ml-2"></div>
      </div>
    </div>
  );
}

export default LeftSider;

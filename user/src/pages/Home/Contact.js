import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  const { name, email, mobile, city, country } = contact[0];
  return (
    <div>
      <SectionTitle title="Contact" />
      <div className="flex sm:flex-col items-center ">
        <div className="flex flex-col w-3/4 m-5 p-5 bg-secondary rounded-lg shadow-lg text-white">
          <ul className="text-lg space-y-2 ">
            <li className="font-bold text-tertiary text-2xl hover:text-yellow-300 transition duration-300">
              {name}
            </li>
            <li className="text-tertiary hover:text-white transition duration-300">
              Email Address:{" "}
              <span className="text-blue-40">
                <a
                  href={`mailto:${email}`}
                  className="text-blue-400 hover:underline"
                >
                  {email}
                </a>
              </span>
            </li>
            <li className="text-tertiary hover:text-white transition duration-300">
              Mobile Number: <span className="text-blue-400">{mobile}</span>
            </li>
            <li className="text-tertiary hover:text-white transition duration-300">
              Location:{" "}
              <span className="text-blue-400">
                {city}, {country}
              </span>
            </li>
          </ul>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFlgnTMDJDcLqSpkdwmqTjnKkdRwkSpTZbzrfrGXbFPclcbtSBbqwjNcFwvtVHnmRphHg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-3xl p-3 mt-5 rounded-lg hover:bg-blue-600 transition duration-300 text-center block"
          >
            Contact Me
          </a>
        </div>
        <div className="h-50 w-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            width="250"
            height="250"
            className="text-gray-600"
          >
            {/* Envelope Icon */}
            <rect
              x="8"
              y="28"
              width="64"
              height="40"
              rx="4"
              ry="4"
              className="fill-blue-500"
            />
            <path
              d="M12 32l28 18L68 32"
              className="stroke-white stroke-2 fill-none"
            />
            <path d="M68 68H12V32l28 18 28-18v36z" className="fill-blue-400" />

            {/* Person Icon */}
            <circle cx="60" cy="16" r="8" className="fill-yellow-400" />
            <circle cx="60" cy="14" r="3" className="fill-white" />
            <path
              d="M56 20c1.5-1.5 5-1.5 8 0 2 1 2 3 2 3v1H54v-1s0-2 2-3z"
              className="fill-yellow-400"
            />

            {/* Developer Icon - Laptop */}
            <rect
              x="16"
              y="8"
              width="32"
              height="20"
              rx="2"
              ry="2"
              className="fill-green-500"
            />
            <path d="M18 10h28v12H18z" className="fill-white" />
            <rect
              x="22"
              y="14"
              width="20"
              height="4"
              rx="1"
              ry="1"
              className="fill-green-500"
            />
            <rect
              x="24"
              y="20"
              width="16"
              height="2"
              rx="1"
              ry="1"
              className="fill-green-500"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Contact;

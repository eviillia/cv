import React from "react";
import "./index.css";
import profileImage from './ph/ph1.jpg'; // Путь к изображению профиля
import apiGif from './ph/api.gif'; // Путь к API GIF
import notionsGif from './ph/notions.gif'; // Путь к Notion GIF
import todoGif from './ph/todo.gif'; // Путь к TodoList GIF

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <header className="flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-lg p-6 mb-10">
        <img
          src={profileImage} // Использование импортированного изображения
          alt="Profile"
          className="w-24 h-24 sm:w-48 sm:h-48 rounded-full border-4 border-gray-300 mb-4 sm:mb-0 sm:mr-6"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900">Gribuleva Daria</h1>
          <p className="text-md sm:text-lg text-gray-600">Frontend Developer</p>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="w-full lg:w-1/3 bg-white rounded-xl shadow-lg p-6">
          <section className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Contact</h2>
            <a href="mailto:sefalooo31@gmail.com" className="text-gray-700 block hover:underline">
              Gmail
            </a>
            <a href="https://t.me/oaoaoaoahh" className="text-gray-700 block hover:underline">
              Telegram
            </a>
            <a href="https://github.com/eviillia" className="text-gray-700 block hover:underline">
              GitHub
            </a>
          </section>

          <section className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Skills</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>C++</li>
              <li>MySQL</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Languages</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>English - B2</li>
              <li>Russian - Native</li>
            </ul>
          </section>
        </aside>

        <main className="w-full lg:w-2/3 bg-white rounded-xl shadow-lg p-6">
          <section className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Education</h2>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-600">BSU 2023 - now</p>
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-700">
              I am a second-year student at the Belarusian State University, Faculty of Mechanics and Mathematics. My major is Mathematics and software for mobile devices. I am passionate about frontend development and am actively developing my skills in this area. I like creating user-friendly interfaces and learning new technologies to improve my projects. My goal is to combine my mathematical knowledge with programming to develop innovative solutions.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Experience</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold text-gray-900">Self-employment</h3>
                <p className="text-gray-700">
                  At the moment, I am improving my qualifications, completing projects in my interests, improving my knowledge in my specialty, and doing laboratory work.
                </p>
              </li>
            </ul>
          </section>
        </main>
      </div>

      <section className="w-full bg-white rounded-xl shadow-lg p-6 mt-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Projects</h2>
        <ul className="space-y-16">
          <li className="flex flex-col lg:flex-row items-start gap-6">
            <div>
              <a
                href="https://github.com/eviillia/api"
                className="font-semibold text-gray-900 text-xl sm:text-2xl hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                API & SPA
              </a>
              <p className="text-gray-700">
                The React app leverages Axios for API calls and CSS Modules for styling. The react-router-dom library provides navigation between pages, and createBrowserRouter supports a multi-page approach. As a result, the app is user-friendly and quickly interacts with external APIs.
              </p>
              <div className="mt-4">
                <span className="text-sm font-bold text-gray-600">Technologies:</span>
                <p className="text-gray-700 flex flex-wrap gap-2 mt-2">
                  {[
                    "React",
                    "JavaScript",
                    "CSS Modules",
                    "react-router-dom",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md border border-blue-200 shadow-sm text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <img
              src={apiGif} // Использование импортированного GIF
              alt="Portfolio GIF"
              className="w-48 h-48 sm:w-72 sm:h-72 object-cover rounded shadow-lg"
            />
          </li>

          <hr className="my-8 border-t border-gray-300" />

          <li className="flex flex-col lg:flex-row items-start gap-6">
            <div>
              <a
                href="https://github.com/eviillia/notion"
                className="font-semibold text-gray-900 text-xl sm:text-2xl hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notion
              </a>
              <p className="text-gray-700">
                The note-taking app supports multi-user mode, allowing each user to create, delete and edit their notes. The Tailwind library is used for styling, which provides a modern and responsive interface. In addition, the app has a registration function, which allows users to save their notes and access them from any device.
              </p>
              <div className="mt-4">
                <span className="text-sm font-bold text-gray-600">Technologies:</span>
                <p className="text-gray-700 flex flex-wrap gap-2 mt-2">
                  {[
                    "React",
                    "JavaScript",
                    "Tailwind CSS",
                    "react-router-dom",
                    "react-context",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md border border-blue-200 shadow-sm text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <img
              src={notionsGif} // Использование импортированного GIF
              alt="E-commerce Platform GIF"
              className="w-48 h-48 sm:w-72 sm:h-72 object-cover rounded shadow-lg"
            />
          </li>

          <hr className="my-8 border-t border-gray-300" />

          <li className="flex flex-col lg:flex-row items-start gap-6">
            <div>
              <a
                href="https://github.com/eviillia/todo"
                className="font-semibold text-gray-900 text-xl sm:text-2xl hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                TodoList
              </a>
              <p className="text-gray-700">
                The TODO list app allows users to easily organize their tasks. It includes an input field for the title, an input field for the description, and an "Add" button that allows you to create a new task. Each task has a checkbox to indicate its status - whether it is completed or not. Tasks can be deleted, and completed ones are displayed after uncompleted ones, which helps to maintain order. In addition, the app provides a filter "Only uncompleted" that hides completed tasks.
              </p>
              <div className="mt-4">
                <span className="text-sm font-bold text-gray-600">Technologies:</span>
                <p className="text-gray-700 flex flex-wrap gap-2 mt-2">
                  {[
                    "React",
                    "JavaScript",
                    "CSS Modules",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md border border-blue-200 shadow-sm text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <img
              src={todoGif} // Использование импортированного GIF
              alt="Weather App GIF"
              className="w-48 h-48 sm:w-72 sm:h-72 object-cover rounded shadow-lg"
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default App;

import { EducationAndProgrammingCertificates } from "./components/EducationAndProgrammingCertificates/EducationAndProgrammingCertificates";
import { Header } from "./Header/Header";
import "normalize.css";



import styles from "./App.module.css";

function App() {
  return (
    <section className={styles["resume"]}>
      <div className={styles["content"]}>
        <Header/>
        <section className={styles["project"]}>Project</section>
        {/* <EducationAndProgrammingCertificates /> */}
        {/* <footer section className={styles["footer"]}>
          <img
            alt="React"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />
          <img
            alt="Jest"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
          />
          <img
            alt="GithubActions"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"
          />
          <img
            alt="AWS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          />
          <img
            alt="Docker"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          />
          <img
            alt="JavaScript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />
          <img
            alt="Express"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
          />
          <img
            alt="NodeJS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          />
          <img
            alt="MongoDB"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          />
          <img
            alt="Mongoose"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg"
          />
          <img
            alt="Handlebars"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/handlebars/handlebars-line.svg"
          />
          <img
            alt="Python"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          />
          <img
            alt="Django"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg"
          />
          <img
            alt="PostgreSQL"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
          />
          <img
            alt="HTML"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <img
            alt="CSS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <img
            alt="Pycharm"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg"
          />
          <img
            alt="Visual Studio Code"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          />
        </footer> */}
      </div>
    </section>
  );
}

export default App;

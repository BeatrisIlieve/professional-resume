import { EducationAndProgrammingCertificates } from "./components/EducationAndProgrammingCertificates/EducationAndProgrammingCertificates";
import { Header } from "./Header/Header";
import { Main } from "./components/Main/Main";
import { SectionSeparator } from "./SectionSeparator/SectionSeparator";
import "normalize.css";

import styles from "./App.module.css";

function App() {
  return (
    <section className={styles["resume"]}>
      <div className={styles["content"]}>
        <Header />
        <SectionSeparator
          text={"MERNGems - MERN Stack Single Page Application"}
        />
        <Main />
      </div>
    </section>
  );
}

export default App;

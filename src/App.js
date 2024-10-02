import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { SectionSeparator } from "./components/SectionSeparator/SectionSeparator";

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
        <SectionSeparator text={"Education and Programming Certificates"} />
        <Footer />
      </div>
    </section>
  );
}

export default App;

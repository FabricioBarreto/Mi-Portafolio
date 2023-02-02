import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Separator } from "./components/Separator/Separator";
import { Tools } from "./components/Tools/Tools";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";
import { ContactMe } from "./components/ContactMe/ContactMe";
import style from "./App.module.css"

function App() {
  return (
    <div className={style.app + " container"}>
      <Header />
      <Home />
      <Separator />
      <Tools />
      <Separator />
      <Projects />
      <Separator />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;


import Hero from "./components/hero/hero";
import LanguageSwitcher from "./components/language-switcher/LanguageSwitcher";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <Hero />
    </LanguageProvider>
  );
}

export default App;
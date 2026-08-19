
import Countdown from "./components/countdown/countdown";
import Events from "./components/events/events";
import Hero from "./components/hero/hero";
import LanguageSwitcher from "./components/language-switcher/LanguageSwitcher";
import RSVP from "./components/rsvp/rsvp";
import Venue from "./components/venue/venue";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <Hero />
      <Countdown />
      <Events />
      <Venue />
      <RSVP />
    </LanguageProvider>
  );
}

export default App;
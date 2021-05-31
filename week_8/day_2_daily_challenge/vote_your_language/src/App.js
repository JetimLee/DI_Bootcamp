import VoteLanguage from "./components/VoteLanguage";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <VoteLanguage
        languagename="Python"
        languagename2="PHP"
        languagename3="JavaScript"
        languagename4="C"
      />
    </div>
  );
}

export default App;

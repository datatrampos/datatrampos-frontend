import JobSearch from "./components/JobSearch";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import ExtraSection from "./components/ExtraSection";
import Companies from "./pages/Companies";
import Jobs from "./pages/Jobs";
import "./index.css";
import FooterInfo from "./components/FooterInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Presentation />
              <JobSearch />
              <ExtraSection />
            </Route>
            <Route path="/companies">
              <Companies/>
            </Route>
            <Route path="/jobs">
              <Jobs/>
            </Route>
          </Switch>
        </div>
        <FooterInfo />
      </div>
    </Router>
  );
}

export default App;

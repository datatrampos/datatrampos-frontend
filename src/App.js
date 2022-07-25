import JobSearch from "./components/JobSearch/JobSearch";
import ExtraSection from "./components/ExtraSection";
import Companies from "./pages/Companies";
import Jobs from "./pages/Jobs";
import Presentation from "./sections/Presentation/Presentation";
import "./index.css";
import FooterInfo from "./components/FooterInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Navbar from "./components/Navbar/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Presentation />
              <QueryClientProvider client={queryClient}>
                <JobSearch />
              </QueryClientProvider>
              <ExtraSection />
            </Route>
            <Route path="/companies">
              <Companies />
            </Route>
            <Route path="/jobs">
              <Jobs />
            </Route>
          </Switch>
        </div>
        <FooterInfo />
      </div>
    </Router>
  );
}

export default App;

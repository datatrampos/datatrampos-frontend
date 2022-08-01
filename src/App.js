import JobSearch from "./components/JobSearch/JobSearch";
import ExtraSection from "./components/ExtraSection";
import Presentation from "./sections/Presentation/Presentation";
import "./index.css";
import FooterInfo from "./components/FooterInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Navbar from "./components/Navbar/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Presentation />
                  <QueryClientProvider client={queryClient}>
                    <JobSearch />
                  </QueryClientProvider>
                </>
              }
            ></Route>
          </Routes>
        </div>
        <FooterInfo />
      </div>
    </Router>
  );
}

export default App;

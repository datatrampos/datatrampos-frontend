import FooterInfo from "../components/Footer/FooterInfo";
import Navbar from "../components/Navbar/Navbar";
import Presentation from "../components/Presentation/Presentation";
import JobSearch from "../components/JobSearch/JobSearch";

export default function Home() {
    return (
      <div className="App">
        <div className="content">
          <Navbar />
          <Presentation />
          <JobSearch />
        </div>
        <FooterInfo />
      </div>
    );
}

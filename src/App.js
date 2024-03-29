import { Container } from "react-bootstrap";
import "./App.css";
import Aboutme from "./Components/Aboutme";
import Navbar from "./Components/Navbar";
import MainAboutme from "./Components/mainAboutme";

function App() {
  return (
    <>
      <Container fluid>
      <Navbar />
      <Aboutme />
      <MainAboutme />
      </Container>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import Content from "./views/content/Content";
import Booking from "./views/bookingform/Booking";
import TopAdvertisement from "./components/TopAdvertisement";
function App() {
  return (
    <div className="App">
      <TopAdvertisement />
      <Header />
      <Content />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;

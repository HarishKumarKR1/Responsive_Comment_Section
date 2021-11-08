import "./styles.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

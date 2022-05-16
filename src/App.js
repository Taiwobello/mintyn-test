import Body from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";
import SIdeBar from "./components/side-bar/SideBar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="flex">
        <SIdeBar />
        <Body />
      </div>
    </div>
  );
}

export default App;

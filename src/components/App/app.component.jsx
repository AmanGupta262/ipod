import Menu from "../menu";
import "./app.component.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="ipod-container">
        <Menu onMenuClick={() => console.log("menu")} onCenterClick={() => console.log("center")} />
      </div>
    </div>
  );
};

export default App;

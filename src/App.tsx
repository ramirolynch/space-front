import "./App.css";
import { LogIn } from "./components/Log-in";
import { MarsTrip } from "./components/MarsTrip";
import { PhotoCaption } from "./components/PhotoCaption";
import { PhotoOfDay } from "./components/PhotoOfDay";
function App() {


  return (
    <div>
      <LogIn></LogIn>
      <PhotoOfDay></PhotoOfDay>
      <PhotoCaption></PhotoCaption>
    </div>
  );
}

export default App;

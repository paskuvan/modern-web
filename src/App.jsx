import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        {/* Your main content goes here */}
      </div>
    </>
  );
}

export default App;
import "./App.css";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { Navbar } from "./components/navbar";
const API_KEY = import.meta.env.VITE_API_KEY;
const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3/playlistItems";
const playlistId = "PLhqQblXS9-ETQ6uxIXL_FB4T4XSp3x44S";

function App() {
  // https://retool.com/blog/the-react-lifecycle-methods-and-hooks-explained/
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${YOUTUBE_URL}?part=snippet&playlistId=${playlistId}&key=${API_KEY}`
      );
      const data = await res.json();
      console.log(data);
    })();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="main-app">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=qcO8rmo1VEo"
          controls
        />
      </main>
    </div>
  );
}

export default App;

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((er) => {
        console.log(er);
      });
  });
  return (
    <div className="yt flex h-screen justify-center items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
        alt="YouTube Logo"
        className="h-10 pr-2"
      />
      <h1 className="text-5xl text-red-600 font-semibold">YouTube Clone</h1>
    </div>
  );
};

export default App;

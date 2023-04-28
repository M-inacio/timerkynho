import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);
  
  function play() {
    setActive(true);
  }
  function Stop() {
    setActive(false);
  }
  function Reset() {
    setActive(false);
    setTime(0);
  }

  useEffect(()=>{
    let timer
    if (active){
      timer=setInterval(()=>{
        setTime(velue=> velue+1)
        
      }, 1000)
    }
    return ()=>clearInterval(timer)
  },[active])


  return (
    <div className="flex flex-col w-screen h-screen text-center items-center">
      <h1 className="text-4xl text-blue-700">Timer Marquinho</h1>
      <div className="mt-4 gap-2 flex">
        <span className="text-2xl p-1 bg-slate-600 text-white rounded">
        {Math.floor(time/60).toString().padStart(2,"0")}
        </span> <span className="text-black text-2xl">:</span>
        <span className=" text-2xl p-1 bg-slate-600 text-white rounded">
          {(time%60).toString().padStart(2,"0")}
          </span>
      </div>
      <div className="gap-4 flex mt-4">
        <button onClick={play} className="bg-green-700 text-white rounded">
          Play
        </button>
        <button onClick={Stop} className="bg-red-600 text-white rounded">
          Pause
        </button>
        <button onClick={Reset} className="bg-orange-500 text-white rounded">
          Reset
        </button>
      </div>
    </div>
  );
}
export default App;

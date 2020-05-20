import React from 'react';
import './App.css';
import './output.css'
import CanvasFreeDrawing from "canvas-free-drawing";
import axios from 'axios';

let cfd = "asd";
const initState = { int: "init" };
function App() {

  const sendImg = () => {
    // console.log(state.cfd.save());
    setLoading(true);
    axios.post('https://ckuacu4bee.execute-api.us-east-1.amazonaws.com/dev/image', cfd.save(), {
      headers: {
        'content-type': 'text/plain'
      }
    })
      .then(data => {
        setState({ notInitState: true, apiAns: data.data.text });
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const undo = () => {
    cfd.undo();
  }

  const clear = () => {
    cfd.clear();
  }
  const [state, setState] = React.useState(initState);
  const [loading, setLoading] = React.useState(false);

  if (state === initState) {
    setTimeout(() => {
      cfd = new CanvasFreeDrawing({
        elementId: 'cfd',
        width: 700,
        height: 500,
      });

      // set properties
      cfd.setLineWidth(7); // in px
      cfd.setStrokeColor([0, 0, 0]); // in RGB

      // listen to events
      cfd.on({ event: 'redraw' }, () => {
        // code...
      });
      setState({ notInitState: true });
    }, 1000);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className="text-xl px-40">For best results write your numbers and symbols in a font like this (the AI is very picky)</p>
        <img src="./font.png" alt="fonts" className="mt-1" style={{width: "30rem"}}/>
        {state.apiAns ? state.apiAns : "No input yet"}
        <div className="m-1">
          <button className="inline-block mx-2 text-xl p-1 rounded bg-blue-800 border border-blue-600" onClick={clear}>Clear</button>
          <button className="inline-block mx-2 text-xl p-1 rounded bg-blue-800 border border-blue-600" onClick={undo}>Undo</button>
        </div>
        <div className="border-2 border-green-100-500 rounded-lg">
          <canvas id="cfd"></canvas>
        </div>
        <button onClick={sendImg} className="p-2 border-2 w-48 mt-2 border-gray-100 rounded-md bg-gray-700 hover:border-gray-300">{loading ? "Loading" : "Get img"}</button>
      </header>
    </div>
  );
}

export default App;

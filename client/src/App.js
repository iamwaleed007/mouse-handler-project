import { useEffect, useRef, useState } from "react";
import socketIO from "socket.io-client";
import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = socketIO(process.env.REACT_APP_BACKEND_URL);
    setSocket(newSocket);
    return () => newSocket.disconnect();
  }, []);

  const sendRequest = () => {
    socket?.emit("moveMouse", "click");
  };

  useEffect(() => {
    socket?.on("doSomething", async (data) => {});

    return () => {
      socket?.off("doSomething");
    };
  }, [socket]);

  return (
    <div className="App">
      <button onClick={sendRequest}>Move Mouse</button>
    </div>
  );
}

export default App;

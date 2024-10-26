// import { Button } from '@chakra-ui/react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/chatPage";
import ChatProvider from "./context/ChatProvider";

function App() {
  return (
    <>
      <div className="App">
        <ChatProvider>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/chats" Component={ChatPage} />
          </Routes>
        </ChatProvider>
      </div>
    </>
  );
}

export default App;

import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';
function Chat() {
  const{backendUrl,token,setToken}=useContext(AppContext);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [userToken, setUserToken] = useState(null);

  const fetchChatHistory = async () => {
    try {
      if (userToken) {
        const response = await axios.get(backendUrl+'api/chat/get', {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setMessages(response.data); // Set chat history
      }
    } catch (error) {
      console.error("Error fetching chat history:", error);
      toast.error("Failed to fetch chat history.");
    }
  };

  const fetchBotResponse = async (UserMessage)=>{
    try{
      const response=await axios.get(`https://cure-crafter.onrender.com/ask?query=${UserMessage}`);
    const botMessage =response.data;
    const newMessages = [
      ...messages,
      { sender: 'user', message: UserMessage },
      { sender: 'bot', message: botMessage },
    ];
    setMessages(newMessages);
    if (userToken) {
      await saveChatToDatabase(newMessages); // Save new chat messages
    }
  }
  catch(error){
    toast.error(error);
  }
};

const saveChatToDatabase = async (chatMessages) => {
  try {
    await axios.post(
      backendUrl+'/api/chat/post',
      { messages: chatMessages },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
  } catch (error) {
    console.error("Error saving chat to the database:", error);
    toast.error("Failed to save chat.");
  }
};
  const sendMessage=()=>{
    const UserMessage = inputMessage;
    fetchBotResponse(UserMessage);
    setInputMessage('');
  };
  useEffect(() => {
    const token = localStorage.getItem("userToken"); // Replace with your token storage mechanism
    if (token) {
      setUserToken(token);
      fetchChatHistory(); // Fetch chat history for the logged-in user
    }
  }, []);
  return (
    <div className="flex flex-col sm:h-screen md:h-[90vh] min-h-[90vh] p-6 bg-green-50">
    <div className='text-center'>
      <h1 className='text-xl font-bold'>CureCrafter: A Home-Remedy ChatBot</h1>
    </div>
    <div className="flex-1 items-center overflow-y-auto mb-4 space-y-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${msg.sender === 'user' ? 'items-center justify-end' : 'items-center justify-start'}`}
        >
          <span className={`text-sm m-2 hidden md:block ${msg.sender === 'user' ? 'text-gray-500' : 'text-green-700'}`}>
          {msg.sender === 'user' ? 'You' : 'CureCrafter'}
        </span>
          <div
            className={`w-auto p-3 rounded-full shadow-lg ${
              msg.sender === 'user' ? 'bg-gray-300 text-black' : 'bg-green-500 text-white'
            }`}
          >
            <p className="text-sm">{msg.message}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="flex items-center gap-4">
      <input
        className="border border-green-300 shadow-md rounded-full w-full h-10 p-4"
        type="text"
        value={inputMessage}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            sendMessage();
          }
        }}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Enter message here..."
      />
      <button
        onClick={sendMessage}
        className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 hover:translate-y-[-5px] transition-all duration-300"
      >
        Send
      </button>
    </div>
  </div>
  );
}

export default Chat

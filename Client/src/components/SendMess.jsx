import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const SendMess = () => {
  const { id: id } = useParams();
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(id);
  }, []);

  const sendMessage = async (username, message) => {
    await axios.post(`http://localhost:7000/api/send/${username}`, {
      message,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      toast.success("Message sent anonymously!");
      setMessage("");
    }
    sendMessage(userName, message);
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80 z-0"></div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20 z-0"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/featured/?dark,forest")',
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 p-8 text-center w-full max-w-lg">
        <h1 className="text-5xl font-bold mb-4 text-red-600 drop-shadow-md animate-pulse">
          Send Message Anonymously
        </h1>
        <p className="text-lg font-light text-gray-300 italic mb-6">
          Feel Free For Messaging, No one knows you
        </p>

        {/* Message Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <textarea
            className="w-full p-4 text-lg bg-black text-white border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            rows="5"
            placeholder="Write your anonymous message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-red-700 hover:bg-red-600 text-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105 w-full"
          >
            Send Anonymously
          </button>
        </form>
      </div>

      {/* Additional Effects */}
      <div className="absolute w-full h-full flex justify-center items-center z-0">
        <div className="absolute w-24 h-24 bg-red-600 opacity-40 rounded-full blur-xl animate-ping"></div>
      </div>
    </div>
  );
};

export default SendMess;

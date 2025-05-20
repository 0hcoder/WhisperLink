import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loaduserMessData } from "../../Actions/loaduserMessges";

// Dashboard.jsx
const Dashboard = () => {
  const [messages, setmessages] = useState();


  const getUser = async () => {
    const userMess = await useSelector(
      (state) => state.userMessgesSlice.userMessgesVal
    );
    setmessages(userMess);
  };
  const data = useSelector((state) => state.userName.userNameVal.user);

  const dispatch = useDispatch();
  useEffect(() => {
    loaduserMessData(dispatch);

  }, []);
  getUser();
  if (data === undefined || messages === undefined) {
    console.log("loading Dashboard")
    return <h2>Loading...</h2>;
  }

  const { username, uniqueLink } = data;

  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
      {/* Profile Section */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6 max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-2">Profile</h2>
        <p>
          <strong>
            Username: {username.charAt(0).toUpperCase() + username.slice(1)}
          </strong>
        </p>
        <p>
          <strong>Unique Link:</strong>{" "}
          <a href={uniqueLink} className="text-blue-400 underline">
            {uniqueLink}
          </a>
        </p>
      </div>

      {/* Messages Section */}
      <div className="bg-gray-800 p-6 rounded-lg w-[80%] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Messages</h2>
        <ul className="space-y-4">
          {messages.map((myMes) => {
            return (
              <li key={myMes._id} className="bg-gray-700 p-4 rounded-lg">
                <p>
                  <strong>From:</strong> {"Unknown"}
                </p>
                <p>
                  <strong>Message: {myMes.message}</strong>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

import axios from "axios";

function App() {
  const handleCam1Click = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/start-camera", {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        // Server responded with an error status (e.g., 404, 500)
        console.error("Server Error:", error.response.status, error.response.data);
      } else if (error.request) {
        // Request was made, but no response was received
        console.error("Network Error: No response from server.");
      } else {
        // Something else went wrong while setting up the request
        console.error("Error:", error.message);
      }
    }
  };
  
  return (
    <div className="btns flex flex-wrap justify-center">
      <button
       onClick={handleCam1Click}

        className="m-20 mb-5 bg-gray-300 w-1/4 flex justify-center items-center h-52 rounded-2xl text-3xl font-bold shadow-md shadow-white transition-all duration-300 hover:w-[28%] hover:rounded-3xl"
      >
        CAM1
      </button>

      <button className="m-20 mb-5 bg-gray-300 w-1/4 flex justify-center items-center h-52 rounded-2xl text-3xl font-bold shadow-md shadow-white transition-all duration-300 hover:w-[28%] hover:rounded-3xl">
        Cam 2
      </button>
      <button className="m-20 mt-16 bg-gray-300 w-1/4 flex justify-center items-center h-52 rounded-2xl text-3xl font-bold shadow-md shadow-white transition-all duration-300 hover:w-[28%] hover:rounded-3xl">
        Cam 3
      </button>
      <button className="m-20 mt-16 bg-gray-300 w-1/4 flex justify-center items-center h-52 rounded-2xl text-3xl font-bold shadow-md shadow-white transition-all duration-300 hover:w-[28%] hover:rounded-3xl">
        Cam 4
      </button>
    </div>
  );
}

export default App;

import Header from "./Components/Header/Header";
import { useState } from "react";
import AvatarDashboard from "./Components/Avtar/DashboardAvatar/AvatarDashboard";
import "./App.css";
import SideSelectAvatar from "./Components/Avtar/SelectAvatar/SideSelectAvatar";
import { MyContext } from "./MyContext";

function App() {
  const [first, setfirst] = useState(false);
  return (
    <>
      <Header />
      <MyContext.Provider value={{ setfirst }}>
        <AvatarDashboard />
      

      {/* Conditinal Components When User Will Click on Select It will trigger */}
      {first ? <SideSelectAvatar /> : console.log("Now Side Bar will")}
      </MyContext.Provider>
    </>
  );
}

export default App;

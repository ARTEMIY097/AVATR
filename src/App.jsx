import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import About from "./pages/About.jsx";
import AppointmentPage from "./pages/AppointmentPage.jsx";
import AddressesPages from "./pages/AddressesPages.jsx";
import FormPage from "./pages/FormPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://testingnil1.ru/assets/output.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 60000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='relative w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Routes>
        <Route
          path='/'
          element={<StartPage />}
        />
        <Route
          path='/faq'
          element={<InfoPage jsonData={data} />}
        />
        <Route
          path='/support'
          element={<SupportPage />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='appointment'
          element={<AppointmentPage jsonData={data} />}
        />
        <Route
          path='appointment/:cityName'
          element={<AddressesPages jsonData={data} />}
        />
        <Route
          path={"appointment/:cityName/form"}
          element={<FormPage jsonData={data} />}
        />
        <Route
          path={"faq/:quest"}
          element={<SearchPage jsonData={data} />}
        />
      </Routes>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Title from "../UI/Title";
import Button from "../UI/button/Button";

export default function AppointmentPage({ jsonData }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const uniqueTowns = [...new Set(jsonData.services.map((service) => service.town))];
    setData(uniqueTowns);
  }, []);

  return (
    <div className='relative flex flex-col place-items-center w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-7'>Запись на обслуживание</Title>
      <Button back></Button>
      <>
        {data.length > 0 &&
          data.map((item, k) => {
            return (
              <Button
                key={k}
                big
                link={item}
                className='mb-5'>
                {item}
              </Button>
            );
          })}
      </>
    </div>
  );
}

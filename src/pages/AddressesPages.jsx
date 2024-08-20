import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../UI/Card/Card";
import Button from "../UI/button/Button";
import Title from "../UI/Title";
export default function AddressesPages({ jsonData }) {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const filteredServices = jsonData.services.filter(
      (service) => service.town.toLowerCase().trim() === cityName.toLowerCase().trim(),
    );
    setServices(filteredServices);
  }, [cityName, jsonData.services]);

  const handleNavigate = (serviceName) => {
    navigate("form", { state: { serviceName } });
  };

  return (
    <div className='relative flex items-center flex-col w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-5'>Запись на обслуживание в городе {cityName}</Title>

      {services.map((service, i) => (
        <Card
          onclick={() => handleNavigate(service.servicename)}
          className='mb-5'
          title={service.servicename}
          text={service.description}
          address={service.address}
          key={i}
        />
      ))}
      <Button back></Button>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import Button from "../UI/button/Button";
import Title from "../UI/Title";
import { useLocation, useParams } from "react-router-dom";
import Input from "../UI/input/Input";

export default function FormPage({ jsonData }) {
  const [isFilled, setIsFilled] = useState(false);
  const { cityName } = useParams();
  const location = useLocation();
  const { serviceName } = location.state || {};
  const [address, setAddress] = useState('');
  const [chatId, setChatId] = useState('');

  const nameRef = useRef();
  const phoneRef = useRef();
  const carModelRef = useRef();
  const dateRef = useRef();
  const commentsRef = useRef();

  useEffect(() => {
    const serviceData = jsonData.services.find(service => service.town.trim() === cityName.trim());
    console.log(serviceData);
    console.log(cityName);
    if (serviceData) {
      setAddress(serviceData.address.trim());
      setChatId(serviceData.chaturl.trim());
    }
  }, [cityName]);

  const validateForm = () => {
    const name = nameRef.current.querySelector("input").value.trim();
    const phone = phoneRef.current.querySelector("input").value.trim();
    const carModel = carModelRef.current.querySelector("input").value.trim();
    const date = dateRef.current.querySelector("input").value.trim();
    return name && phone && carModel && date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = {
        city: cityName,
        service: serviceName,
        address: address,
        client_name: nameRef.current.querySelector("input").value.trim(),
        phone: phoneRef.current.querySelector("input").value.trim(),
        car_model: carModelRef.current.querySelector("input").value.trim(),
        comments: commentsRef.current.querySelector("textarea") ? commentsRef.current.querySelector("textarea").value.trim() : "",
        date_time: dateRef.current.querySelector("input").value.trim(),
        chat_id: chatId,
      };

      fetch('https://testingnil1.ru:9000/send_message.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.text())
        .then((responseData) => {
          console.log(responseData);
          setIsFilled(true);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      alert("Пожалуйста, заполните все обязательные поля");
    }
  };

  return (
    <div className='relative flex flex-col place-items-center w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-12'>
        Запись на обслуживание в городе {cityName} в {serviceName}
      </Title>

      {isFilled ? (
        <div className='w-[270px] h-auto text-[28px] font-bold bg-[#FEF6E4] text-center pt-8 pb-11 mb-12 rounded-2xl flex flex-col justify-center'>
        <p className='text-[40px]'>☺️</p>
        В ближайшее время с Вами свяжется администратор для уточнения деталей
    </div>
      ) : (
        <form
          action='#'
          className='bg-[#FEF6E4] px-[21px] pt-7 pb-4 max-w-270px rounded-2xl mb-12 flex items-center flex-col'
          onSubmit={handleSubmit}>
          <div ref={nameRef}>
            <Input label={"Ваше имя"} />
          </div>
          <div ref={phoneRef}>
            <Input
              label={"Номер телефона"}
              type={"tel"}
            />
          </div>
          <div ref={carModelRef}>
            <Input label={"Модель автомобиля"} />
          </div>
          <div ref={dateRef}>
            <Input
              label={"Дата и время"}
              subInf={"01.12.24 13.00"}
            />
          </div>
          <div ref={commentsRef}>
            <Input
              type={"com"}
              label={"Комментарии"}
            />
          </div>
          <Button
            type='submit'
            form>
            Отправить
          </Button>
        </form>
      )}

      <Button
        back
        home={isFilled}></Button>
    </div>
  );
}
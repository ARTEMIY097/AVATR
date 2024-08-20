import Logo from "../assets/logo2.svg";
import Button from "../UI/button/Button";
import Title from "../UI/Title";
import { useNavigate } from 'react-router-dom';

export default function About() {
  const handleChatClick = () => {
    window.open('https://t.me/lixiang_chat', '_blank'); 
  };

  const handleQuestionClick = () => {
    window.open('https://t.me/nnek4ik', '_blank'); 
  };

  return (
    <div className='relative flex place-items-center flex-col w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-14'>О нас 🚀</Title>
      <div className='w-[155px] h-[155px] bg-[#ffffff] flex justify-center items-center mb-14 rounded-2xl'
      style={{
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
      >
        <img
          className='w-[75%] flex justify-center items-center'
          src={Logo}
          alt=''
        />
      </div>
      <div className='mb-[70px]'>
        <button
          onClick={handleChatClick}
          className='flex justify-center items-center font-bold rounded-2xl text-center py-[10px] mb-5 h-[42px] w-[270px]'
          style={{
            background: "linear-gradient(to bottom right, #32363A, #4A4D50)",
            boxShadow: "0px 4px 11.9px rgba(0, 0, 0, 0.25)",
            border: 'none',
            cursor: 'pointer' 
          }}
        >
          Наш чат 💬
        </button>
        <button
          onClick={handleQuestionClick}
          className='flex justify-center items-center font-bold rounded-2xl text-center py-[10px] mb-5 h-[42px] w-[270px]'
          style={{
            background: "linear-gradient(to bottom right, #32363A, #4A4D50)",
            boxShadow: "0px 4px 11.9px rgba(0, 0, 0, 0.25)",
            border: 'none', 
            cursor: 'pointer' 
          }}
        >
          Задать вопрос❓
        </button>
      </div>
      <Button back></Button>
    </div>
  );
}

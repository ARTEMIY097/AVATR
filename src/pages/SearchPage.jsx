import { useEffect, useState } from "react";
import Button from "../UI/button/Button";
import { useParams } from "react-router-dom";
import Title from "../UI/Title";
import Input from "../UI/input/Input";

export default function SearchPage({ jsonData }) {
  const { quest } = useParams();
  const [searchText, setSearchText] = useState("");
  const [problems, setProblems] = useState([]);
  useEffect(() => {
    const keys = Object.keys(jsonData).filter((key) => key.startsWith(quest));
    setProblems(jsonData[keys]);
  }, []);
  const filteredQuestions = problems
    ? problems.filter((question) => question.buttonName.toLowerCase().includes(searchText.toLowerCase()))
    : [];
  return (
    <div className='relative flex items-center flex-col w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-6'>{quest}</Title>
      <div className='mb-7'>
        <Input
          search
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className='mb-12'>
        {filteredQuestions.length > 0
          ? filteredQuestions.map((question, index) => {
              return (
                <a
                  href={question.url}
                  key={index}
                  className='h-[54px] text-[14px] text-[#D9D9D9] mb-6 px-4 flex justify-center items-center font-bold  rounded-2xl text-center py-[10px]  w-[270px] min-h-[90px] '
                  style={{
                    background: "linear-gradient(to bottom right, #32363A, #4A4D50);",
                    boxShadow: "0px 4px 11.9px rgba(0, 0, 0, 0.25)",
                  }}>
                  {question.buttonName}
                </a>
              );
            })
          : "Ничего не нашли"}
      </div>

      <Button back></Button>
    </div>
  );
}

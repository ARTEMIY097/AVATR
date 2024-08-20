import Button from "../UI/button/Button";
import Logo from "../assets/logo.svg";
export default function StartPage() {
  return (
    <div className="relative pt-11 flex flex-col place-items-center w-[100vw] max-w-[320px] min-h-[100vh]">
      <Button big link={"appointment"} className="mb-5">
        Запись на обслуживание
      </Button>
      <div className="flex pb-5">
        <Button className="mr-5" link={"support"} mini>
          Поддержать проект💰
        </Button>
        <Button link="about" mini>
          О нас 🚀
        </Button>
      </div>
      <Button link="faq" big>
        FAQ
      </Button>
      <img
        className="mt-32 mb-11 pl-4"
        src={Logo}
        alt="Company Logo"
        style={{ height: "25px" }}
      />
    </div>
  );
}

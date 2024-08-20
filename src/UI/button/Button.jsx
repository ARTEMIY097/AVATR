import { Link, useNavigate } from "react-router-dom";
export default function Button({ children, mini, back, className, link, onclick, big, home, form }) {
  const navigate = useNavigate();
  const switchBack = () => {
    home ? navigate("/") : navigate(-1);
  };
  return link ? (
    <Link to={link}>
      <button
        onClick={back ? switchBack : onclick}
        className={`text-wrap flex justify-center items-center font-bold  rounded-2xl text-center min-h-[100px] px-4 h-full ${
          mini ? "w-[124px] text-[16px] " : "w-[270px]"
        } ${!big ? className : "text-[26px]"} ${className ? className : ""}`}
        style={{
          background: "linear-gradient(to bottom right, #32363A, #4A4D50);",
          boxShadow: "0px 4px 11.9px rgba(0, 0, 0, 0.25)",
        }}>
        {children}
      </button>
    </Link>
  ) : (
    <button
      onClick={back ? switchBack : onclick}
      className={`${
        className ? className : ""
      } flex justify-center items-center font-bold  rounded-2xl text-center py-[10px]  ${
        mini
          ? "w-[124px] text-[16px] "
          : back
          ? "h-[38px] w-[35px] fixed top-[15px] left-[10px] pl-4 shadow-none bg-[#191919]"
          : form
          ? "w-[145px] h-[36px] text-[16px]"
          : "w-[270px] min-h-[90px] h-full"
      } `}
      style={{
        background: `${!back && "linear-gradient(to bottom right, #32363A, #4A4D50);"} `,
        boxShadow: "0px 4px 11.9px rgba(0, 0, 0, 0.25)",
      }}>
      {back && (
        <svg
          className='absolute left-[12px] top-[12px]'
          width='9'
          height='15'
          viewBox='0 0 9 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M6.6566 14.435L0.292641 8.07105C-0.0978832 7.68053 -0.0978832 7.04736 0.292641 6.65684L6.6566 0.292876C7.04713 -0.0976486 7.68029 -0.0976486 8.07082 0.292876C8.46134 0.683401 8.46134 1.31657 8.07082 1.70709L2.41396 7.36394L8.07082 13.0208C8.46134 13.4113 8.46134 14.0445 8.07082 14.435C7.68029 14.8255 7.04713 14.8255 6.6566 14.435Z'
            fill='#EFEFEF'
          />
        </svg>
      )}
      {children}
    </button>
  );
}

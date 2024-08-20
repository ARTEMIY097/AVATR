export default function Card({ title, text, address, className, onclick }) {
  return (
    <div
      onClick={onclick}
      className={`max-w-[270px] w-full rounded-2xl py-3 px-3 cursor-pointer font-bold ${className}`}
      style={{
        background: "linear-gradient(to bottom right, #32363A, #4A4D50);",
        boxShadow: "box-shadow: 0px 4px 11.9px rgba(0, 0, 0, 0.25)",
      }}>
      <div className={`text-[#efefef] text-xl pb-3 text-wrap`}>{title}</div>
      <div className={`bg-[#191919] rounded-2xl   text-[#efefef] py-2 px-3 `}>
        <div className='font-normal text-[14px] leading-[15px]'>{text}</div>
        <div className='pt-3 font-medium text-[16px] leading-[18px]'>📍{address}</div>
      </div>
    </div>
  );
}

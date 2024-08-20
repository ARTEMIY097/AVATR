export default function Title({ children, className }) {
  return (
    <div className={`${className} max-w-[270px] font-bold text-[28px] text-[#32363A] text-center mt-6`} >{children}</div>
  );
}

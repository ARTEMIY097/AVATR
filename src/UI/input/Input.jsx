import MaskedInput from "react-text-mask";
export default function Input({ label, type, search, subInf, value, onChange }) {
  return (
    <div className={"flex flex-col w-[228px] mb-5"}>
      {!search ? (
        <>
          <label
            htmlFor='#'
            className={"font-bold text-[16px] leading-5 text-[#efefef] pb-2"}>
            {label} <br /> {subInf}
          </label>
        </>
      ) : (
        <></>
      )}
      {type === "tel" ? (
        <MaskedInput
          required
          className={"bg-[#1a1a1a] rounded-2xl h-[31px] px-[10px] outline-none"}
          style={{
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
          }}
          mask={["+", "7", "(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
          type='tel'
        />
      ) : type === "com" ? (
        <textarea
          rows='10'
          cols='45'
          className={"rounded-2xl max-h-[127px] p-[10px] outline-none"}
          style={{
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
          }}
        />
      ) : search ? (
        <div className={`relative text-[#1a1a1a]`}>
          <p className={`absolute text-5 z-[1] top-[5.5px] left-1 select-none`}>🔍</p>
          <input
            className={`rounded-2xl h-8 outlinen-none relative bg-[#d9d9d9] pl-9 outline-none`}
            style={{
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
            }}
            type={type}
            value={value}
            onChange={onChange}
          />
        </div>
      ) : (
        <input
          required
          className={"bg-[#1a1a1a] rounded-2xl h-[31px] px-[10px] outline-none"}
          style={{
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
          }}
          type={type}
        />
      )}
    </div>
  );
}

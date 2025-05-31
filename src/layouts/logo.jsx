export default function Logo() {
  return (
    <div className="relative w-[106px] h-[106px] rounded-[24px] bg-[#EAF2FC] flex items-center justify-center">
      <div className="w-[86px] h-[86px] rounded-[20px] bg-[#307FE2] relative flex items-center justify-center">
        <span className="text-white text-[48px] font-fredoka font-semibold absolute top-[2.5px] left-[19.6px]">
          P
        </span>
        <img
          src={'/src/assets/R.svg'}
          alt="R"
          className="absolute bottom-[10.5px] left-[44.5px]"
        />
      </div>
    </div>
  );
}

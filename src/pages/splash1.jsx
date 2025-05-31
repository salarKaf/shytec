import React from "react";
import Logo from "../layouts/logo";
import { useNavigate } from "react-router-dom";


export default function Splash1() {
  const navigate = useNavigate();

  const goToSplash2 = () => {
    navigate("/splash2");
  };
  return (
    <div className="flex flex-col items-center h-screen bg-white px-6">
      <div className="flex flex-col items-center justify-center flex-grow max-w-xs w-full text-center">
        <Logo />

        <h1 className="text-[32px] font-modam font-extrabold mb-2 mt-4">وامــــینوتی</h1>

        {/* برای یک خط شدن متن */}
        <p className="text-sm text-gray-700 font-modam text-[16px] whitespace-nowrap overflow-x-auto">
          پلتفرم جامع خرید و فروش <strong>امتیاز وام</strong> و انواع <strong>سهام آن</strong>
        </p>
      </div>

      {/* دکمه همیشه پایین صفحه */}
      <button
        onClick={goToSplash2}
        className="bg-[#307FE2] font-modam font-semibold text-[16px] text-white py-2 rounded-2xl w-full max-w-xs hover:bg-blue-700 transition mt-4 mb-6">
        !خوش آمدید
      </button>
    </div>
  );
}

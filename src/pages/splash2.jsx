import React from "react";

const users = [
    { id: 1, name: "احسان امانیان", desc: "فروش وام ۱۰ میلیاردی بانک رسالت", avatar: "/src/assets/Images/image(1).png" },
    { id: 2, name: "شایان هاشمی", desc: "فروش وام ۱۳ میلیاردی بانک رسالت", avatar: "/src/assets/Images/image(2).png" },
    { id: 3, name: "زهرا راغنی پور", desc: "خرید وام ۲۰ میلیاردی بانک مهر", avatar: "/src/assets/Images/image.png", highlight: true },
    { id: 4, name: "شهربانو رضوی", desc: "خرید وام ۱۰ میلیاردی بانک رسالت", avatar: "/src/assets/Images/image(3).png" },
];

export default function Splash2() {
    return (
        <div className="flex flex-col items-center bg-white h-screen px-6 py-8 relative">
            {/* Header */}
            <div dir="rtl" className="w-full max-w-md flex items-center mb-4">
                <div
                    className="bg-[#307FE2] rounded-[12px] w-10 h-10 flex items-center justify-center text-white font-bold font-modam"
                    style={{
                        boxShadow:
                            "0px 4px 12px 0px rgba(48, 127, 226, 0.24), 2px 2px 12px 0px rgba(255, 255, 255, 0.16) inset",
                    }}
                >
                    PR
                </div>
                <div className="mr-3">
                    <h1 className="text-xl font-bold font-modam">وامینوتی</h1>
                    <p className="text-xs text-gray-600 font-modam">لذت خرید و فروش آسان وام</p>
                </div>
            </div>
            <div dir="rtl" className="flex justify-center w-full flex-grow">
                <div className="bg-[#EAF7FF] rounded-[32px] flex flex-col items-center px-4 py-6 space-y-4 max-w-[350px] w-full">
                    {users.map(({ id, name, desc, avatar, highlight }) => (
                        <div
                            key={id}
                            className={`relative w-[310px] h-[64px] rounded-[24px] ${highlight ? "bg-[#307FE2] text-white shadow-lg" : "bg-[#F3FBFF] text-gray-800"
                                }`}
                            style={highlight ? { transform: 'rotate(5deg)' } : {}}
                        >
                            {/* کانتینر داخلی که محتویات رو صاف نگه می‌داره */}
                            <div
                                className="flex items-center w-full h-full rounded-[24px] absolute top-0 left-0"

                            >
                                <img
                                    src={avatar}
                                    alt={name}
                                    className="rounded-2xl object-cover mx-3"
                                    style={{
                                        width: highlight ? '80px' : '48px',
                                        height: highlight ? '80px' : '48px',
                                        transform: highlight ? 'rotate(-3deg)' : 'none',
                                        transformOrigin: highlight ? 'center' : 'initial',
                                        marginTop: highlight ? '8px' : 0,
                                        marginRight: highlight ? '0px' : '8px',
                                    }}


                                />
                                <div className="flex flex-col justify-center">
                                    <span className="font-medium font-modam">{name}</span>
                                    <span className="text-xs font-modam">{desc}</span>
                                </div>
                                {highlight && (
                                    <div className="ml-0 mb-16">
                                        <img
                                            src={'/src/assets/Images/vivid-3d-flame-icon-bright-orange-yellow-hot-burning-design 1.png'}
                                            aria-label="fire"
                                            className="text-xl "
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            {/* متن زیر مستطیل */}
            {/* متن زیر مستطیل */}
            <div dir="rtl" className="w-full max-w-md text-center mt-4 mb-6 h-[342px]">
                <div className="relative inline-flex items-center justify-center h-9 px-6 bg-blue-100 rounded-xl text-blue-600 font-modam text-[13px] select-none mx-auto mb-4">
                    {/* دایره سمت چپ */}
                    <span
                        className="absolute left-2 w-2 h-2 rounded-full bg-blue-500"
                        style={{ top: '50%', transform: 'translateY(-50%)' }}
                    ></span>

                    {/* متن */}
                    هر وامی بخوای اینجا هست

                    {/* دایره سمت راست */}
                    <span
                        className="absolute right-2 w-2 h-2 rounded-full bg-blue-500"
                        style={{ top: '50%', transform: 'translateY(-50%)' }}
                    ></span>
                </div>

                <p className="font-modam text-xl font-semibold leading-none relative inline-block">
                    خرید و فروش <span className="decoration-blue-500">وام</span> در{' '}
                    <span className="text-[#307FE2] text-2xl relative">کمترین زمان ممکن</span>
                    <img
                        src="/src/assets/Images/Vector 1.svg"
                        alt="line"
                        className="absolute left-1"
                        style={{ width: '176px', height: '25px', objectFit: 'contain' }}
                    />
                </p>

                <p className="text-xs text-gray-600 font-modam mt-7">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک اختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
                </p>
            </div>




            {/* Footer */}
            <div className="w-full max-w-md flex justify-between items-center absolute bottom-[25px]">
                <button className="text-xs px-4 py-1 border border-gray-300 rounded-lg font-modam">
                    رد کردن
                </button>

                <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>

                <button className="bg-blue-500 text-white px-4 py-1 rounded-lg font-modam text-xs hover:bg-blue-600 transition">
                    بعدی &gt;
                </button>
            </div>


            {/* Footer buttons */}
            <div className="w-full max-w-md flex justify-between items-center absolute bottom-[25px]">
                <button className="text-xs px-4 py-1 border border-gray-300 rounded-lg font-modam">
                    رد کردن
                </button>

                <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>

                <button className="bg-blue-500 text-white px-4 py-1 rounded-lg font-modam text-xs hover:bg-blue-600 transition">
                    بعدی &gt;
                </button>
            </div>
        </div>
    );
}















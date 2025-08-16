import React, { useState } from "react";

const CATEGORIES = [
  { id: "general", title: "عمومی" },
  { id: "open-account", title: "باز کردن حساب" },
  { id: "card", title: "کارت بانکی" },
  { id: "loan", title: "وام" },
  { id: "profile", title: "حساب کاربری" },
  { id: "transactions", title: "تراکنش‌ها" },
  { id: "junior", title: "بلوجونیور" },
];

const FAQ_DATA = {
  general: [
    { q: "بلو چیست و چه‌کار می‌کند؟" },
    { q: "پشتیبانی بلو به چه صورت است؟" },
    { q: "آیا بلو زیر نظر بانک سامان فعالیت می‌کند؟" },
    
  ],
  "open-account": [
    { q: "چطور در بلو حساب باز کنم؟" },
    { q: "هزینه باز کردن حساب و دریافت بلوکارت چقدر است؟" },
    { q: "برای افتتاح حساب چه مدارکی لازم است؟" },
    { q: "آیا می‌توان بیش از یک حساب در بلو داشت؟" },
  ],
  card: [
    { q: "کارت‌های بلو عضو شتاب هستند؟" },
    { q: "چطور می‌توانم کارت جدید سفارش بدهم؟" },
    { q: "چطور رمز کارت را تغییر دهم؟" },
  ],
  loan: [
    { q: "شرایط دریافت وام بلو به چه صورت است؟" },
    { q: "حداکثر مبلغ وام بلو چقدر است؟" },
    { q: "آیا برای دریافت وام نیاز به ضامن است؟" },
  ],
  profile: [
    { q: "اگر حساب داشته‌ام و خطا می‌گیرم چه کنم؟" },
    { q: "چطور می‌توانم اطلاعات کاربری‌ام را ویرایش کنم؟" },
    { q: "چطور رمز اپلیکیشن را تغییر دهم؟" },
  ],
  transactions: [
    { q: "سود حساب کوتاه‌مدت بلو چگونه محاسبه می‌شود؟" },
    { q: "چطور می‌توانم گردش حسابم را ببینم؟" },
    { q: "آیا سقف تراکنش‌ها در بلو محدودیت دارد؟" },
  ],
  junior: [
    { q: "بلوجونیور چیست؟" },
    { q: "چطور برای فرزندم حساب بلوجونیور باز کنم؟" },
    { q: "آیا بلوجونیور محدودیت تراکنش دارد؟" },
  ],
};

export default function FaqSection() {
  const [active, setActive] = useState("general");
  const items = FAQ_DATA[active] || [];

  return (
    <section dir="rtl" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* عنوان */}
        <div className="text-center space-y-3 flex flex-col justify-center items-center gap-4">
          <span className="rounded-3xl bg-[#00AB84] h-max w-max p-1 text-[14px]  text-white ">
            سوالات متداول
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            سوالی برات پیش اومده؟
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            پاسخ سوال‌هات رو از دسته‌بندی‌های زیر پیدا کن.
          </p>
        </div>

        {/* تب‌های دسته‌بندی */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((val) => (
            <button
              key={val.id}
              onClick={() => setActive(val.id)}
              className={`px-4 py-2 rounded-2xl text-sm sm:text-base transition shadow-sm ${
                active === val.id
                  ? "bg-[var(--blueb)] text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {val.title}
            </button>
          ))}
        </div>

        {/* لیست فقط سوال‌ها */}
        <div className="mt-8 flex gap-1 flex-col max-sm:gap-6">
          {items.map((item, idx) => (
            <article
              key={idx}
              className="rounded-2xl border flex justify-start items-center gap-3 border-gray-200 p-5 sm:p-6 bg-white  hover:bg-blue-50 transition"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="var(--blueb)"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
              </span>
              <h3 className="text-base sm:text-lg font-bold leading-7">
                {item.q}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

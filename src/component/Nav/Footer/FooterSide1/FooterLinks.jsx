import React, { useState } from "react";

const FOOTER_LINKS = [
  {
    title: "خدمات",
    items: ["خدمات بانکی", "پرداخت قبض", "انتقال وجه", "کارت اعتباری"],
  },
  {
    title: "وام",
    items: ["وام فوری بدون ضامن", "وام ازدواج", "وام‌های تکلیفی بلو"],
  },
  {
    title: "بلو",
    items: ["درباره ما", "تماس با ما", "سؤالات متداول", "حریم خصوصی"],
  },
];

export default function FooterLinks() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" py-12 flex justify-center items-center w-full h-full">
      <div className="flex justify-center items-center">
        {/* دسکتاپ: سه ستون */}
        <div className="flex justify-center items-start gap-5">
          {FOOTER_LINKS.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* موبایل: Dropdown */}
        <div className="hidden space-y-4 flex justify-center items-center gap-5 w-full h-full">
          {FOOTER_LINKS.map((section, idx) => (
            <div key={idx}>
              <button
                onClick={() => toggleDropdown(idx)}
                className="w-full text-right px-4 py-2 bg-gray-100 rounded-2xl text-gray-800 font-semibold flex justify-between items-center focus:outline-none"
              >
                {section.title}
                <span className={`transform transition-transform duration-200 ${openIndex === idx ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              {openIndex === idx && (
                <ul className="mt-2 px-4 space-y-2 text-gray-700 bg-gray-50 rounded-2xl">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

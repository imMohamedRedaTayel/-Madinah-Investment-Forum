import React from "react";
import "./style.scss";

export default function CounNumber() {
  const data = [
    {
      id: 1,
      number: "+200",
      title: "الفرص المطروحة",
      description: "فرصة",
    },
    {
      id: 2,
      number: "+57",
      title: "قيمة الاستثمار",
      description: "مليار ريال سعودي",
    },
    {
      id: 3,
      number: "24",
      title: "الجهات المشاركة",
      description: "جهة",
    },
    {
      id: 4,
      number: "15",
      title: "عدد المتحدثين",
      description: "متحدث",
    },
  ];

  return (
    <div className="counters">
      {data.map((item) => (
        <div className="counter-item" key={item.id}>
                <div className="counter-title">{item.title}</div>
          <div className="counter-header">
            <div className="counter-number">{item.number}</div>
            <div className="counter-desc">{item.description}</div>
          </div>
   
        </div>
      ))}
    </div>
  );
}

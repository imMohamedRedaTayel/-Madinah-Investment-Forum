import React, { useEffect, useState, useRef } from "react";
import "./style.scss";

export default function CounNumber() {
  const data = [
    {
      id: 1,
      number: 200,
      title: "الفرص المطروحة",
      description: "فرصة",
    },
    {
      id: 2,
      number: 57,
      title: "قيمة الاستثمار",
      description: "مليار ريال سعودي",
    },
    {
      id: 3,
      number: 40,
      title: "الجهات المشاركة",
      description: "جهة",
    },
    {
      id: 4,
      number: 18,
      title: "عدد المتحدثين",
      description: "متحدث",
    },
  ];

  const [counts, setCounts] = useState(data.map(() => 0)); 
  const [animate, setAnimate] = useState(false); 

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true); 
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (animate) {
      const duration = 2000; 
      const interval = 20;
      const steps = duration / interval;

      data.forEach((item, index) => {
        let currentStep = 0;
        const increment = Math.ceil(item.number / steps);

        const timer = setInterval(() => {
          currentStep += 1;
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.min(newCounts[index] + increment, item.number);
            return newCounts;
          });

          if (currentStep >= steps) clearInterval(timer);
        }, interval);
      });
    }
  }, [animate]); 

  return (
    <div ref={sectionRef} className="counters">
      {data.map((item, index) => (
        <div className="counter-item" key={item.id}>
          <div className="counter-title">{item.title}</div>
          <div className="counter-header">
            <div className="counter-number">+{counts[index]}</div>
            <div className="counter-desc">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

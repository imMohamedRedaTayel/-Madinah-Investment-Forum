import img1 from "../../../../assets/images/speacker.svg";
import img2 from "../../../../assets/images/speacker2.svg";
import img3 from "../../../../assets/images/speacker3.svg";

import img4 from "../../../../assets/images/speacker4.svg";


import "./style.scss"
export default function Speakers() {
  const listMain = [
    {
      title: "معالي المهندس فهد بن محمد البلهيشي",
      parg: "أمين منطقة المدينة المنورة والرئيس التنفيذي لهيئة تطوير منطقة المدينة المنورة",
      imaf_url: img1,
    },
    {
      title: "معالي المهندس فهد بن محمد البلهيشي",
      parg: "أمين منطقة المدينة المنورة والرئيس التنفيذي لهيئة تطوير منطقة المدينة المنورة",
      imaf_url: img2,
    },
    {
      title: "معالي المهندس فهد بن محمد البلهيشي",
      parg: "أمين منطقة المدينة المنورة والرئيس التنفيذي لهيئة تطوير منطقة المدينة المنورة",
      imaf_url: img3,
    },
    {
      title: "معالي المهندس فهد بن محمد البلهيشي",
      parg: "أمين منطقة المدينة المنورة والرئيس التنفيذي لهيئة تطوير منطقة المدينة المنورة",
      imaf_url: img4,
    },
  ];
  return (
    <div className="Speakers" id="Speakers">
      <div className="container">
        {" "}
        <h5>استمتع بمعرفة تجارب وخبرات كبار المتحدثين في مجال الاستثمار</h5>
        <h2 className="mb-4">
          المتحدثون في المنتدى: قادة الفكر والخبرة في عالم الاستثمار والتطوير
        </h2>
        <p>
          يشارك في منتدى المدينة للاستثمار نخبة من المتحدثين المميزين، من كبار
          المستثمرين، ورواد الأعمال، والخبراء الماليين، وصناع القرار. سيستعرض
          هؤلاء الخبراء تجاربهم الناجحة في عالم الاستثمار، ويوجهون المشاركين إلى
          الفرص الواعدة والتوجهات المستقبلية. يعتبر المنتدى فرصة فريدة للاستفادة
          من المعرفة والخبرة الواسعة التي سيتبادلها هؤلاء المتحدثون، ما يسهم في
          تحفيز الاستثمارات وتطوير الاقتصاد المحلي.
        </p>
        <div className="list row">
          {listMain.map((item) => (
            <div className="col-md-3" key={item}>
              <div className="content">
                <img src={item.imaf_url} />
                <div className="content-text">
                  {" "}
                  <h5>{item.title}</h5>
                  <p>{item.parg}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
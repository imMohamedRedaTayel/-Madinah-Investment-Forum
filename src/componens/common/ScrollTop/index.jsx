import "./style.scss"
import arrowUpw from "../../../assets/images/arrowUpw.svg";
export default function ScrollTopPages () {

let handelscroll=()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
}
return (
  <>
    <button className="ScrollTopPages" onClick={() => handelscroll()}>
     <img src={arrowUpw}/>
    </button>
  </>
);
};

import './style.scss';
export default function PopUp({title, message, clickdone }) {
  return (
    <div className="popUp">
      <div className="content">
        <h2>{title}</h2>
        <p>{message}</p>
        <button className="btn" onClick={clickdone}>
          حسنًا
        </button>
      </div>
    </div>
  );
}
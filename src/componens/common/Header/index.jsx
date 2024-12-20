import { Container } from "react-bootstrap";
import "./style.scss";
import logoWhite from "../../../assets/images/logo-white.png";
export default function HeaderGlobule({title,name}) {
  return (
    <div className="header-pages">
      <div className="shap"></div>
      <Container>
        <img src={logoWhite} className="logoWhite" />
      </Container>
    </div>
  );
}
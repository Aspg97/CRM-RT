import MenuHead from "../components/MenuHead.jsx";
import Footer from "../components/Footer";
import BarraOpciones from "./BarraOpciones.jsx";
function BodyPageGen({ title, content, options, setOptions }) {
  return (
    <>
      <div className="container-page">
        <MenuHead title={title} />
        <div className="body-item">
          <div className="container-options">
            <BarraOpciones options={options} setOptions={setOptions} />
          </div>
          <main>{content}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BodyPageGen;

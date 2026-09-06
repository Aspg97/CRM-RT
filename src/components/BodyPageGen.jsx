import MenuHead from "../components/MenuHead.jsx";
import Footer from "../components/Footer";
function BodyPageGen(props) {
  const { title, content, opciones } = props;
  return (
    <>
      <div className="container-page">
        <MenuHead title={title} />
        <div className="body-item">
          <div className="container-options">
            <p>opciones</p>
          </div>
          <main>{content}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BodyPageGen;

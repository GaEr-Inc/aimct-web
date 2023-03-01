import { Header } from "./Components/Header";
import "./App.css";
import secretaryImage from "./assets/secretary.jpg";

function App() {
  return (
    <div className="App h-screen w-fit overflow-auto">
      <Header />
      <div>
        <img
          src={secretaryImage}
          alt=""
          className="top-[90px] h-[609px] w-[1920px] object-cover"
        />
      </div>
      <div className="items-center px-40 mx-40 mt-20">
        <h1
          style={{
            fontWeight: 500,
            fontSize: "48px",
            fontStyle: "normal",
            color: "#A7060C",
          }}
        >
          Contabilidad al alcance de todos
        </h1>
        <h3 className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus
          luctus mauris, in viverra purus blandit id. Etiam in eros urna.
          Integer pulvinar lectus vel dui ullamcorper, at sollicitudin lorem
          commodo. Donec vel libero posuere lacus consequat mollis vitae vel
          justo. Morbi id placerat lacus. Nullam congue tortor sit amet tellus
          molestie lacinia. Integer fringilla mollis ornare. Sed eu diam vel
          enim cursus vulputate. Proin ac vulputate sapien. Cras non nibh est.
          Fusce ac ex elit. Aenean est tellus, viverra eu fermentum vitae,
          egestas vel odio. Suspendisse pretium vehicula tellus, facilisis
          efficitur nisl fringilla sit amet. Phasellus a rhoncus libero, in
          feugiat quam. Fusce ligula nulla, ultricies nec justo eget, gravida
          posuere ex. Proin quis rhoncus est.
        </h3>
      </div>
    </div>
  );
}

export default App;

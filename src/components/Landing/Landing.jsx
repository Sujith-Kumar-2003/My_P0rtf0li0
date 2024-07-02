/* eslint-disable react/prop-types */
import Nav from "../Nav/Nav";
import Intro from "../Intro/Intro";

const Landing = ({ mode, changeMode }) => {
  return (
    <section id="Home" className={`${!mode && "text-black"}`}>
      <Nav changeMode={changeMode} />
      <Intro />
    </section>
  );
};

export default Landing;

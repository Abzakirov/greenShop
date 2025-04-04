// components
import SectionFree from "../posts/SectionFree";
import SectionFour from "../sections/sectionFour/SectionFour";
import SectionOne from "../sections/sectionOne/SectionOne";
import SectionTwo from "../sections/sectionTwo/SectionTwo";
import Store from "../store/Store";

const Main = () => {
  return (
    <div className="container2">
      <SectionOne />
      <Store />
      <SectionTwo />
      <SectionFree />
      <SectionFour />
      
    </div>
  );
};

export default Main;

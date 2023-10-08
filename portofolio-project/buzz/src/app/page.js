import Footer from "../../components/group/footer";
import Header from "../../components/group/header";
import Aside from "../../components/group/aside";
import SectionOne from "../../components/group/sectionone";
import SectionTwo from "../../components/group/sectiontwo";

export default function Home() {
  return (
    <div>
      <Header />
      <Aside />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}

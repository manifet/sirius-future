import PagesWrapper from "../components/utils/PagesWrapper";
import ContentWrapper from "../components/utils/ContentWrapper";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Main: React.FC = () => {
  return (
    <PagesWrapper>
      <Sidebar />
      <ContentWrapper>
        <Header />
      </ContentWrapper>
    </PagesWrapper>
  );
};
export default Main;

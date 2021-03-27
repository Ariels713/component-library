import Footer from "./Footer";
import Navigation from "./Navigation";
import SiteColumnLayout from "./SiteColumnLayout";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Navigation />
        {/* <SiteColumnLayout /> */}
        {children}
        <Footer />
      </div>
    </>
  );
}

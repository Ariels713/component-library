import Footer from "./Footer";
import Navigation from "./Navigation";
import SiteColumnLayout from "./SiteColumnLayout";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Navigation />
        <div className="flex max-w-7xl mx-auto">
          <div className="w-1/6">
            <SiteColumnLayout />
          </div>
          <div className="w-full">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}

import Footer from "./Footer";
import SiteColumnLayout from "./SiteColumnLayout";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <SiteColumnLayout />
        {children}
      </div>
    </>
  );
}

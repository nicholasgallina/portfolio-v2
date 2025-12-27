import Header from "./Header";
import Footer from "./Footer";
import BackgroundCanvas from "./BackgroundCanvas";

export default function Layout({ children }) {
  return (
    <>
        <main className="flex-1 pt-16 w-full flex flex-col">{children}</main>
    </>
  );
}
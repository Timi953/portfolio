import Footer from "@/components/Footer";

export const metadata = {
  title: "Timi Olumcev | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

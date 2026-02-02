import Home from "@/components/home";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navBar";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

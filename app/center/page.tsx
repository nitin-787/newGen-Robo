import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function LearnAtCenter() {
  return (
    <div>
      {/* Navigation */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Navigation />
              </div>
            </header>
      <section>
              <Footer />
            </section>
    </div>
  );
}

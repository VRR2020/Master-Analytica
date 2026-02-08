import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 text-center">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <h2 className="mb-6 text-2xl font-semibold text-foreground">
            Página não encontrada
          </h2>
          <p className="mb-8 text-lg text-foreground/70 max-w-2xl mx-auto">
            A página que você está procurando não existe. Por favor, volte à página inicial ou entre em contato conosco para mais informações.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3 text-accent-foreground hover:opacity-90 transition-opacity font-semibold"
          >
            <ArrowLeft size={18} />
            Voltar ao início
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold flex items-center gap-2">
              <span>🦉</span> Master Analytica
            </h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Consultoria especializada em Business Intelligence, Inteligência
              Artificial e Integração de Sistemas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold">Serviços</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Business Intelligence</li>
              <li>Inteligência Artificial</li>
              <li>Integração de Sistemas</li>
              <li>Dashboards & Relatórios</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold">Contato</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>
                <a
                  href="mailto:victor.have@gmail.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  victor.have@gmail.com
                </a>
              </p>
              <p>Rio de Janeiro, Brasil</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20"></div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row text-sm text-primary-foreground/70">
          <p>
            &copy; {currentYear} Master Analytica Ltda. Todos os direitos
            reservados.
          </p>
          <p>
            <a
              href="https://analytica.tec.br"
              className="hover:text-primary-foreground transition-colors"
            >
              analytica.tec.br
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

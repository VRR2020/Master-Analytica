import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";
import {
  BarChart3,
  Brain,
  Zap,
  TrendingUp,
  Users,
  Database,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Index() {
  useVisitorTracking();
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/90 text-primary-foreground pt-20 pb-28 md:pt-32 md:pb-40">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <div className="mb-6 inline-block rounded-full bg-accent/20 px-4 py-2 text-sm font-semibold text-accent">
                Transforme seus dados em inteligência
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Master Analytica
              </h1>

              <p className="mb-8 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
                Consultoria especializada em Business Intelligence, Inteligência
                Artificial e Integração de Sistemas. Transformamos dados em
                decisões estratégicas.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3 text-accent-foreground hover:opacity-90 transition-opacity font-semibold"
                >
                  Solicitar Consultoria
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="mt-12 grid gap-6 grid-cols-2 sm:grid-cols-3">
                <div>
                  <div className="text-3xl font-bold">10+</div>
                  <p className="text-sm text-primary-foreground/70">
                    Anos de experiência
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <p className="text-sm text-primary-foreground/70">
                    Projetos entregues
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold">20+</div>
                  <p className="text-sm text-primary-foreground/70">
                    Ferramentas dominadas
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl blur-3xl"></div>
                <div className="relative text-9xl">🦉</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-foreground/2">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
              Nossos Serviços
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Soluções completas em BI, IA e integração de sistemas para
              impulsionar seu negócio
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Service Card 1 */}
            <div className="rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-accent/30">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary">
                Business Intelligence
              </h3>
              <p className="mb-6 text-foreground/70">
                Dashboards interativos, análise de dados e visualizações com
                Power BI, Tableau e Metabase.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <span>Power BI & Tableau</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <span>Data Modeling</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <span>ETL Development</span>
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-accent/30">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Brain className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary">
                Inteligência Artificial
              </h3>
              <p className="mb-6 text-foreground/70">
                Soluções de IA, machine learning e automação para otimizar
                processos e criar novos produtos.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <span>Machine Learning</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <span>Python & Data Science</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <span>Automação de Processos</span>
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-accent/30">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary">
                Integração de Sistemas
              </h3>
              <p className="mb-6 text-foreground/70">
                Conecte seus sistemas, APIs e pipelines de dados para uma visão
                unificada do seu negócio.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <span>API Integration</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <span>Data Pipelines</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <span>Cloud & DW</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
              Competências Técnicas
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              10+ anos de experiência com as principais ferramentas e
              tecnologias do mercado
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* BI Tools */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="mb-4 font-bold text-primary flex items-center gap-2">
                <BarChart3 size={20} className="text-accent" />
                BI & Analytics
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Power BI", "Tableau", "Metabase", "DAX", "Power Query"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm text-accent font-medium"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* ETL & Data Engineering */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="mb-4 font-bold text-primary flex items-center gap-2">
                <Database size={20} className="text-accent" />
                ETL & Data Engineering
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "SQL",
                  "Apache Airflow",
                  "Azure Data Factory",
                  "Talend",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm text-accent font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="mb-4 font-bold text-primary flex items-center gap-2">
                <TrendingUp size={20} className="text-accent" />
                Bancos de Dados
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "PostgreSQL",
                  "SQL Server",
                  "MySQL",
                  "Oracle",
                  "Data Lake",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm text-accent font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Web & Cloud */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="mb-4 font-bold text-primary flex items-center gap-2">
                <Zap size={20} className="text-accent" />
                Web & Cloud
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Laravel", "Angular", "ASP.NET", "AWS", "Azure"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm text-accent font-medium"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Languages & Tools */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="mb-4 font-bold text-primary flex items-center gap-2">
                <Users size={20} className="text-accent" />
                Idiomas
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Português", "English", "Español"].map((lang) => (
                  <span
                    key={lang}
                    className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm text-accent font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Management */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="mb-4 font-bold text-primary flex items-center gap-2">
                <TrendingUp size={20} className="text-accent" />
                Metodologias
              </h4>
              <div className="flex flex-wrap gap-2">
                {["SCRUM", "Agile", "JIRA", "Redmine", "Power Automate"].map(
                  (method) => (
                    <span
                      key={method}
                      className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm text-accent font-medium"
                    >
                      {method}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Pronto para transformar seus dados?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Entre em contato conosco para discutir como podemos ajudá-lo a
            alcançar seus objetivos de negócio.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3 text-accent-foreground hover:opacity-90 transition-opacity font-semibold"
          >
            Começar Agora
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </>
  );
}

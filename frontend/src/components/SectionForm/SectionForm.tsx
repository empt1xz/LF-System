import style from "./section.module.css";
import { FolderClosed, Users, SignalHigh, type LucideIcon } from "lucide-react";

type Card = {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

export default function SectionForm() {
  const cards: Card[] = [
    {
      id: 1,
      title: "Seus projetos",
      subtitle: "Mantenha tudo organizado",
      icon: FolderClosed,
    },
    {
      id: 2,
      title: "Colaboração",
      subtitle: "Trabalhe com seu time em tempo real",
      icon: Users,
    },
    {
      id: 3,
      title: "Produtividade",
      subtitle: "Acompanhe o progresso com relatórios simples.",
      icon: SignalHigh,
    },
  ];

  return (
    <>
      <main className={style.container}>
        <section className={style.section}>
          <h1>
            Organize seus <br /> projetos em um só lugar
          </h1>
          <p>
            Gerencie colabore e acompanhe o progresso do seu time com mais
            produtividade.
          </p>
        </section>

        <section className={style.flashcards}>
          {cards.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.id} className={style.itemflash}>
                <div className={style.icon}>
                  <Icon size={32} color="#82c7ff" />
                </div>

                <div className={style.content}>
                  <h1>{item.title}</h1>
                  <p>{item.subtitle}</p>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}

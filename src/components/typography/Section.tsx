import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="mb-7 pb-[90px]">
      {children}
    </section>
  );
};

export default Section;

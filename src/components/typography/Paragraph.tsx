import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className="mb-3 text-gray-700 leading-relaxed" style={{ fontSize: 15 }}>
      {children}
    </p>
  );
};

export default Paragraph;

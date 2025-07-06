import { ReactNode } from "react";

interface PrefaceProps {
  children: ReactNode;
}

const Preface = ({ children }: PrefaceProps) => {
  return (
    <div
      className="bg-amber-50 border-l-4 border-amber-400 rounded px-4 py-2 mb-3 text-gray-700 text-sm"
      style={{ letterSpacing: "0.02em" }}
    >
      {children}
    </div>
  );
};

export default Preface;

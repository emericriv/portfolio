import { ReactNode } from "react";

const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <span className="bg-secondary/30 text-custom-green py-1 px-3 rounded-full text-sm">
      {children}
    </span>
  );
};

export default Tag;

import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  bgColor?: string; // optional background color
}

const SectionWrapper = ({ id, children, bgColor = "bg-white" }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`${bgColor} w-full py-20 px-6 md:px-16`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

export default SectionWrapper;

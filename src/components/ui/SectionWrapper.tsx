import { motion } from "framer-motion";
import "./Ui.css";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  bgColor?: string;
  bgImage?: string;
  title?: string;
  subtitle?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  bgColor = "bg-gray-900",
  bgImage,
  title,
  subtitle,
}) => {
  return (
    <section
      id={id}
      className={`section-wrapper ${bgColor}`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
      }}
    >
      <div className="section-content">
        {title && (
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
        )}
        {subtitle && (
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

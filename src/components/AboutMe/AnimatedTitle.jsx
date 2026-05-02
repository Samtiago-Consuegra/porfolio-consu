import { motion } from "framer-motion";

export default function AnimatedTitle({ title }) {
  const words = title.split(" ");

  return (
    <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl uppercase text-white">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="mr-2 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
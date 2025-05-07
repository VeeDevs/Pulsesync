
import { useState } from "react";
import { motion } from "framer-motion";
import { smartHomeData } from "@/data/smartHomeData";

const InteractiveShowcase = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Experience Smart Living</h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            See our solutions in action through these interactive demonstrations of real-world applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {smartHomeData.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-48">
                {activeVideo === index ? (
                  <iframe
                    src={`${item.video}?autoplay=1&loop=1&background=1`}
                    className="w-full h-full absolute inset-0 border-0"
                    allow="autoplay; fullscreen"
                    loading="lazy"
                    title={`Smart Home Demo ${index + 1}`}
                  />
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setActiveVideo(index)}
                    loading="lazy"
                  />
                )}
                {activeVideo !== index && (
                  <div 
                    className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors"
                    onClick={() => setActiveVideo(index)}
                  >
                    <svg 
                      className="w-12 h-12 text-white" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-sm text-primary/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveShowcase;

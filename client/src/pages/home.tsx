import ImageClassifier from "@/components/ImageClassifier";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Github, Info } from "lucide-react";

// Import images (assuming they were generated successfully in Batch 1)
import dayImage from "@assets/generated_images/sunny_college_campus_day_scene.png";
import nightImage from "@assets/generated_images/modern_city_skyline_night_scene.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-primary/20">
      {/* Header */}
      <header className="border-b border-white/20 bg-white/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">Lumina</span>
            <Badge variant="secondary" className="ml-2 font-mono text-[10px] tracking-wider">BETA 1.0</Badge>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#demo" className="hover:text-primary transition-colors">Demo</a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
            <a href="#" className="flex items-center gap-2 text-slate-900 hover:text-primary transition-colors">
              <Github size={18} />
              <span className="hidden sm:inline">Source</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 tracking-tight mb-6">
                Lighting classification <br />
                <span className="text-primary">simplified by AI</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                An intelligent computer vision model designed to instantly classify environmental lighting conditions from any image. Perfect for automated tagging and sorting.
              </p>
            </motion.div>

            {/* Example Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <Badge variant="outline" className="px-4 py-2 text-sm bg-white/50 backdrop-blur-sm">
                ⚡ Real-time Processing
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm bg-white/50 backdrop-blur-sm">
                🔒 100% Client-side Privacy
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm bg-white/50 backdrop-blur-sm">
                🎯 High Accuracy Heuristics
              </Badge>
            </motion.div>
          </div>

          {/* Abstract Background Decorations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-100/50 rounded-full blur-3xl -z-10 opacity-50 mix-blend-multiply" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-3xl -z-10 opacity-50 mix-blend-multiply" />
        </section>

        {/* Main App Section */}
        <section id="demo" className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-2 md:p-8">
              <ImageClassifier />
            </div>
          </div>
        </section>

        {/* Examples Grid */}
        <section id="how-it-works" className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-medium px-3 py-1 rounded-full bg-primary/5">
                  <Info size={16} />
                  <span>Classification Logic</span>
                </div>
                <h2 className="text-4xl font-display font-bold text-slate-900">How it understands light</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our algorithm analyzes pixel luminance distribution and color temperature histograms. 
                  Daylight images typically exhibit higher brightness values and balanced white points, 
                  while night scenes show compressed histograms in the shadow range with specific color spikes from artificial lighting.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
                    <div className="font-bold text-amber-900 mb-1">Day Class</div>
                    <div className="text-sm text-amber-700">High luminance, natural spectrums, blue sky dominance.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                    <div className="font-bold text-indigo-900 mb-1">Night Class</div>
                    <div className="text-sm text-indigo-700">Low luminance, high contrast, artificial light points.</div>
                  </div>
                </div>
              </div>

              {/* Visual Examples */}
              <div className="grid grid-cols-2 gap-4 relative">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="space-y-3 group"
                >
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-slate-100 relative">
                    <img 
                      src={dayImage} 
                      alt="Day Example" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 text-xs font-bold shadow-sm text-amber-600 backdrop-blur-sm">
                      DAY (98%)
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="space-y-3 group mt-8"
                >
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-slate-100 relative">
                    <img 
                      src={nightImage} 
                      alt="Night Example" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 text-xs font-bold shadow-sm text-indigo-600 backdrop-blur-sm">
                      NIGHT (95%)
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="mb-4 text-lg font-display text-white">Lumina Project</p>
          <p className="text-sm">
            Build by Srija Bauri. Running purely in-browser.
          </p>
        </div>
      </footer>
    </div>
  );
}
import { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail,
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  ChevronRight, 
  Download,
  Menu,
  X,
  ArrowUpRight,
  Phone,
  Instagram,
  MessageSquare
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
}

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  pdfLink: string;
}

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

// --- Data ---
// --- Constants ---
const PROFILE_IMAGE_URL = "https://i.ibb.co.com/4nMBN24v/ijok.jpg";

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Media Downloader",
    description: "Website untuk mendownload media dari berbagai platform sosial media.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: `https://s0.wp.com/mshots/v1/${encodeURIComponent("https://app.adibrijal.my.id")}?w=800&h=600`,
    link: "https://app.adibrijal.my.id",
    github: "https://github.com/rijalunns"
  },
  {
    id: 2,
    title: "Website Company Profile",
    description: "Website yang di buat untuk UMKM",
    tags: ["Next.js", "Tailwind"],
    image: `https://s0.wp.com/mshots/v1/${encodeURIComponent("https://karyajayautama.biz.id")}?w=800&h=600`,
    link: "https://karyajayautama.biz.id",
    github: "https://github.com/rijalunns"
  },
  {
    id: 3,
    title: "Website Personal Portofolio",
    description: "Website untuk Portofolio Pribadi.",
    tags: ["React", "Tailwind"],
    image: `https://s0.wp.com/mshots/v1/${encodeURIComponent("https://game.adibrijal.my.id")}?w=800&h=600`,
    link: "https://game.adibrijal.my.id",
    github: "https://github.com/rijalunns"
  }
];

const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: "Pelatihan Data Analytics untuk Siswa SMA/Sederajat",
    issuer: "Thematic Academy Digital Talent Scholarship",
    date: "2024",
    pdfLink: "https://drive.google.com/file/d/1xBCtMS5liFJp5t2HFrFY9Iye0CPN81Fu/view"
  },
  {
    id: 2,
    title: "Sertifikat Kelas Industri Tahap 1 PT ITHO INDOSTOCK",
    issuer: "PT Itho Indostock",
    date: "2025",
    pdfLink: "https://drive.google.com/file/d/18Y8ezJJeVZAMeE6-4o-HN6yZVF3U1FCd/view"
  },
  {
    id: 3,
    title: "Sertifikat Kelas Industri Tahap 2 PT ITHO INDOSTOCK",
    issuer: "PT Itho Indostock",
    date: "2025",
    pdfLink: "https://drive.google.com/file/d/1ffBy9qsK9PH04qm2egyce1tpUwHqeJA3/view"
  },
  {
    id: 4,
    title: "SERTIFIKAT TELKOM DIGIUP CYBER SECURITY",
    issuer: "Telkom Indonesia",
    date: "2025",
    pdfLink: "https://drive.google.com/file/d/1PyLhMUgflEGoLGSR8dhM0BgbY2DCNeJ9/view"
  }
];

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Student",
    company: "SMKN 01 CIBINONG",
    period: "2023 - NOW",
    description: "Majoring in System Information Network and Aplication."
  },
  {
    id: 2,
    role: "Student",
    company: "MTSN 03 BOGOR",
    period: "2020 - 2023",
    description: "Completed junior high school education with active participation in academic and extracurricular activities."
  },
  {
    id: 3,
    role: "Student",
    company: "SDN 06 BOJONGGEDE",
    period: "2014 - 2020",
    description: "Elementary school education foundation."
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Education', href: '#experience' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-3xl font-display font-black tracking-tighter text-black"
          whileHover={{ scale: 1.05 }}
        >
          ARS<span className="text-black">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest text-black hover:underline decoration-4 underline-offset-8 transition-all"
            >
              {link.name}
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="manga-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-black border-2 border-black p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b-4 border-black p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl font-display text-black"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute inset-0 speed-lines opacity-20 -z-10" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-black/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block px-4 py-2 border-2 border-black bg-white text-black text-xs font-black uppercase tracking-widest mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Status: Active
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 text-black">
            Adib Rijalun <br />
            <motion.span 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-black text-white px-4 py-2 inline-block mt-2"
            >
              Sholahudin
            </motion.span>
          </h1>
          <p className="text-xl text-black font-medium max-w-2xl mb-10 leading-relaxed border-l-8 border-black pl-6">
            I am a student of Information Systems, Networking, and Applications (SIJA) with a profound interest in Information Technology. I am passionate about exploring the fields of DevOps, Web Development, and Network Infrastructure.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="manga-button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="relative w-full max-w-[450px] aspect-[450/550] mx-auto group">
            {/* Decorative Frame */}
            <motion.div 
              animate={{ x: [24, 28, 24], y: [24, 20, 24] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 border-4 border-black translate-x-6 translate-y-6 -z-10" 
            />
            
            {/* Main Image */}
            <div className="w-full h-full overflow-hidden border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] relative">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Adib Rijalun Sholahudin Profile" 
                className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 halftone pointer-events-none" />
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 manga-float"
            >
              <div className="w-10 h-10 bg-black rounded-none flex items-center justify-center text-white">
                <Code2 size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-black uppercase">Specialty</p>
                <p className="text-sm font-black">SIJA Student</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 manga-float"
            >
              <div className="w-10 h-10 bg-black rounded-none flex items-center justify-center text-white">
                <Globe size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-black uppercase">Focus</p>
                <p className="text-sm font-black">DevOps & Networking</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding bg-white border-t-8 border-black relative">
      <div className="absolute inset-0 halftone opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-8 border-black pl-6"
          >
            <h2 className="text-5xl font-black mb-4 text-black">Selected Works</h2>
            <p className="text-black font-bold max-w-md">A collection of projects where I've combined design thinking with technical implementation.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
              className="group manga-card overflow-hidden manga-pop"
            >
              <div className="aspect-[4/3] overflow-hidden relative border-b-4 border-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setPreviewProject(project)}
                      className="manga-button"
                    >
                      <Globe size={16} /> Preview
                    </button>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-black border-2 border-black px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-black mb-2 text-black group-hover:underline decoration-4 underline-offset-4">{project.title}</h3>
                <p className="text-black font-medium text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Preview Modal */}
      <AnimatePresence>
        {previewProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] flex flex-col"
            >
              <div className="p-4 border-b-4 border-black flex justify-between items-center bg-white">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-4 h-4 border-2 border-black bg-black" />
                    <div className="w-4 h-4 border-2 border-black bg-white" />
                    <div className="w-4 h-4 border-2 border-black bg-black" />
                  </div>
                  <span className="text-sm font-black text-black ml-4 truncate max-w-[200px] md:max-w-md uppercase tracking-widest">
                    {previewProject.link}
                  </span>
                </div>
                <button 
                  onClick={() => setPreviewProject(null)}
                  className="p-2 hover:bg-black hover:text-white border-2 border-black transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 bg-white relative">
                <iframe 
                  src={previewProject.link} 
                  className="w-full h-full border-none grayscale"
                  title={`Preview of ${previewProject.title}`}
                />
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/5 opacity-0 hover:opacity-100 transition-opacity">
                   <div className="bg-white p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-center pointer-events-auto">
                      <p className="text-black font-black text-2xl mb-6 uppercase tracking-tighter">Previewing {previewProject.title}</p>
                      <a 
                        href={previewProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="manga-button inline-flex items-center gap-2"
                      >
                        Open Live Site <ExternalLink size={18} />
                      </a>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding bg-white border-t-8 border-black relative">
      <div className="absolute inset-0 speed-lines opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-8 border-black pl-6"
        >
          <h2 className="text-5xl font-black mb-4 text-black">Certifications</h2>
          <p className="text-black font-bold max-w-md">Professional recognition and specialized training in modern technologies.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CERTIFICATES.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -2 : 2 }}
              className="group manga-card cursor-pointer manga-pop"
              onClick={() => window.open(cert.pdfLink, '_blank')}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layers size={24} />
                </div>
                <p className="text-[10px] font-black text-black uppercase tracking-widest mb-2 border-b-2 border-black inline-block w-fit">{cert.issuer}</p>
                <h3 className="text-2xl font-black mb-4 leading-tight text-black flex-grow uppercase">{cert.title}</h3>
                <div className="flex justify-between items-center pt-4 border-t-2 border-black">
                  <p className="text-black font-bold text-sm">{cert.date}</p>
                  <span className="text-[10px] font-black text-black border-2 border-black px-2 py-1 uppercase group-hover:bg-black group-hover:text-white transition-colors">View PDF</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationHistory = () => {
  return (
    <section id="experience" className="section-padding bg-white border-t-8 border-black relative">
      <div className="absolute inset-0 halftone opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16 border-l-8 border-black pl-6"
          >
            <h2 className="text-5xl font-black mb-4 text-black">Education History</h2>
            <p className="text-black font-bold max-w-md">My academic journey and milestones.</p>
          </motion.div>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 border-l-8 border-black"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute left-[-16px] top-0 w-8 h-8 bg-black border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
                />
                <span className="text-lg font-black text-black mb-2 block uppercase tracking-tighter">{exp.period}</span>
                <h3 className="text-3xl font-black mb-1 text-black uppercase">{exp.role}</h3>
                <p className="text-black font-black mb-4 bg-black text-white px-2 py-1 inline-block">{exp.company}</p>
                <p className="text-black font-medium leading-relaxed max-w-2xl">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappNumber = "6285714608280";
    const text = `Halo, saya ${name} (${email}).\n\nPesan: ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-white text-black overflow-hidden relative border-t-8 border-black">
      <div className="absolute inset-0 speed-lines opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black mb-8 leading-[0.85] text-black uppercase"
            >
              Let's build <br />
              something <br />
              <motion.span 
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-black text-white px-4 py-2 inline-block mt-4"
              >
                extraordinary.
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-black font-bold text-xl mb-12 max-w-md border-l-8 border-black pl-6"
            >
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </motion.p>
            
            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email Me", value: "dibrijal@gmail.com", color: "bg-black", text: "text-white" },
                { icon: Phone, label: "Phone", value: "+6285714608280", color: "bg-white", text: "text-black" },
                { icon: Instagram, label: "Instagram", value: "adibrijal", color: "bg-black", text: "text-white" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex items-center gap-6"
                >
                  <div className={`w-16 h-16 ${item.color} flex items-center justify-center ${item.text} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-black text-xs uppercase tracking-widest font-black">{item.label}</p>
                    <p className="text-2xl font-black text-black">{item.value}</p>
                  </div>
                </motion.div>
              ))}

              <div className="pt-8 flex items-center gap-8 text-black">
                <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="https://github.com/rijalunns" target="_blank" rel="noopener noreferrer" className="transition-transform"><Github size={32} /></motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: -5 }} href="#" className="transition-transform"><Linkedin size={32} /></motion.a>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="manga-card p-10"
          >
            <form className="space-y-8" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-black">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border-4 border-black px-6 py-4 focus:outline-none focus:bg-black focus:text-white transition-all text-black font-bold" 
                    placeholder="Your Name" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-black">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border-4 border-black px-6 py-4 focus:outline-none focus:bg-black focus:text-white transition-all text-black font-bold" 
                    placeholder="your@email.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-black">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white border-4 border-black px-6 py-4 focus:outline-none focus:bg-black focus:text-white transition-all resize-none text-black font-bold" 
                  placeholder="Tell me about your project..." 
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full manga-button py-6 text-2xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <footer className="mt-24 pt-12 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-black font-black text-sm uppercase tracking-widest">© 2026 Adib Rijalun Sholahudin. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="selection:bg-black selection:text-white">
      <div className="fixed inset-0 halftone opacity-[0.03] pointer-events-none z-[9999]" />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Certificates />
        <EducationHistory />
        <Contact />
      </main>
    </div>
  );
}

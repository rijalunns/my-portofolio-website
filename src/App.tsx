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
    title: "Web-Based Game",
    description: "Game seru-seruan berbasis website yang interaktif.",
    tags: ["JavaScript", "HTML5 Canvas", "CSS3"],
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
          className="text-2xl font-display font-bold tracking-tighter text-white"
          whileHover={{ scale: 1.05 }}
        >
          ARS<span className="text-accent">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-400 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-5 py-2 rounded-full text-sm font-medium"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
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
            className="absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-slate-400"
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
    <section id="about" className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-white">
            Adib Rijalun <br />
            <span className="text-accent">Sholahudin</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
            I am a student of Information Systems, Networking, and Applications (SIJA) with a profound interest in Information Technology. I am passionate about exploring the fields of DevOps, Web Development, and Network Infrastructure.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 shadow-lg shadow-accent/20"
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
            <div className="absolute inset-0 border-2 border-accent/20 rounded-[40px] translate-x-6 translate-y-6 -z-10" />
            <div className="absolute inset-0 bg-accent/5 rounded-[40px] -z-20 scale-95 translate-x-12 translate-y-12 blur-2xl opacity-50" />
            
            {/* Main Image */}
            <div className="w-full h-full rounded-[40px] overflow-hidden border-8 border-slate-900 shadow-2xl relative">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt="Adib Rijalun Sholahudin Profile" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                <Code2 size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Specialty</p>
                <p className="text-sm font-bold">SIJA Student</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                <Globe size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Focus</p>
                <p className="text-sm font-bold">DevOps & Networking</p>
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
    <section id="projects" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-white">Selected Works</h2>
            <p className="text-slate-400 max-w-md">A collection of projects where I've combined design thinking with technical implementation.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900 rounded-3xl overflow-hidden border border-white/5 hover:border-accent/30 hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setPreviewProject(project)}
                      className="px-4 py-2 bg-accent text-white rounded-full text-sm font-bold hover:bg-accent/80 transition-colors flex items-center gap-2"
                    >
                      <Globe size={16} /> Preview
                    </button>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-primary hover:bg-accent hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-primary hover:bg-accent hover:text-white transition-colors"
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
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-white/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-slate-900 rounded-[32px] overflow-hidden border border-white/10 shadow-2xl flex flex-col"
            >
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-slate-900">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm font-medium text-slate-400 ml-4 truncate max-w-[200px] md:max-w-md">
                    {previewProject.link}
                  </span>
                </div>
                <button 
                  onClick={() => setPreviewProject(null)}
                  className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 bg-white relative">
                {/* Iframe Preview - Note: many sites block iframes via X-Frame-Options */}
                <iframe 
                  src={previewProject.link} 
                  className="w-full h-full border-none"
                  title={`Preview of ${previewProject.title}`}
                />
                {/* Fallback Overlay if iframe is blocked or just to provide a better UX */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-slate-950/5 opacity-0 hover:opacity-100 transition-opacity">
                   <div className="bg-white p-6 rounded-2xl shadow-xl text-center pointer-events-auto">
                      <p className="text-slate-900 font-bold mb-4">Previewing {previewProject.title}</p>
                      <a 
                        href={previewProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-bold"
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
    <section id="certificates" className="section-padding bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Certifications</h2>
          <p className="text-slate-400 max-w-md">Professional recognition and specialized training in modern technologies.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all cursor-pointer"
              onClick={() => window.open(cert.pdfLink, '_blank')}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Layers size={24} />
                </div>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">{cert.issuer}</p>
                <h3 className="text-lg font-bold mb-4 leading-tight text-white flex-grow">{cert.title}</h3>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <p className="text-slate-500 text-sm">{cert.date}</p>
                  <span className="text-[10px] font-bold text-slate-400 border border-white/10 px-2 py-1 rounded uppercase group-hover:border-accent/50 group-hover:text-accent transition-colors">View PDF</span>
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
    <section id="experience" className="section-padding bg-slate-900/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-8 text-white">Education History</h2>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-white/10"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-slate-950 shadow-sm" />
                <span className="text-sm font-bold text-accent mb-1 block">{exp.period}</span>
                <h3 className="text-xl font-bold mb-1 text-white">{exp.role}</h3>
                <p className="text-slate-400 font-medium mb-3">{exp.company}</p>
                <p className="text-slate-500 leading-relaxed">{exp.description}</p>
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
    <section id="contact" className="section-padding bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
              Let's build <br />
              something <br />
              <span className="text-accent">extraordinary.</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-md">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Email Me</p>
                  <p className="text-xl font-medium text-white">dibrijal@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Phone</p>
                  <p className="text-xl font-medium text-white">+6285714608280</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Instagram</p>
                  <p className="text-xl font-medium text-white">adibrijal</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Location</p>
                  <p className="text-xl font-medium text-white">Bojonggede, Bogor, Jawa Barat, Indonesia</p>
                </div>
              </div>

              <div className="pt-8 flex items-center gap-6 text-slate-400">
                <a href="https://github.com/rijalunns" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Github size={28} /></a>
                <a href="#" className="hover:text-accent transition-colors"><Linkedin size={28} /></a>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl p-10 rounded-[40px] border border-white/10"
          >
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-white" 
                    placeholder="Your Name" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors text-white" 
                    placeholder="your@email.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none text-white" 
                  placeholder="Tell me about your project..." 
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-accent text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-accent/20"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© 2026 Adib Rijalun Sholahudin. All rights reserved.</p>
          
        </footer>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="selection:bg-accent/30">
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

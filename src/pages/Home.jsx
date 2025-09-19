import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Star,
  Zap,
  Award,
  Shield
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock-Daten für GitHub/Vercel (temporär bis Laravel-Backend bereit ist)
import { 
  mockSportTypes,
  mockTrainers, 
  mockCourses, 
  mockPrices, 
  mockTestimonials,
  mockAuth
} from "@/components/MockData";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";

// Admin-Zugang Komponente
function AdminAccess() {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = React.useState(false);

  React.useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await mockAuth.me();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    }
  };

  const handleAdminClick = () => {
    if (user) {
      // User ist eingeloggt - navigieren statt neuladen
      // navigate(createPageUrl("Admin")); // Funktioniert nur innerhalb einer Router-Komponente
      window.location.href = createPageUrl("Admin"); // Einfacher für den Anfang
    } else {
      setShowLoginPrompt(true);
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // Für Entwicklung: Mock-Login
      await mockAuth.login();
      const currentUser = await mockAuth.me();
      setUser(currentUser);
      setShowLoginPrompt(false);
      // Nach Login zum Admin weiterleiten
      setTimeout(() => {
        window.location.href = createPageUrl("Admin");
      }, 500);
    } catch (error) {
      console.error("Login-Fehler:", error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={handleAdminClick}
        className="text-gray-600 hover:text-gray-400 transition-colors p-1 rounded"
        title={user ? "Admin-Bereich" : "Admin Login"}
      >
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
      </button>

      {showLoginPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 rounded-lg max-w-md w-full p-6 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">YOU Can <span className="text-red-500">Admin</span></h3>
            <p className="text-gray-300 mb-6">Demo-Login für GitHub/Vercel Version</p>
            <div className="space-y-3">
              <Button onClick={handleLogin} disabled={isLoading} className="w-full bg-red-600 hover:bg-red-700 text-white" size="lg">
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Anmeldung...
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4 mr-2" />
                    Demo Login
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={() => setShowLoginPrompt(false)} className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">Abbrechen</Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">Temporäres Demo-System für Entwicklung</p>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  const [activeKampfsport, setActiveKampfsport] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Mock-Daten verwenden
  const [sportTypes] = useState(mockSportTypes);
  const [trainers] = useState(mockTrainers);
  const [courses] = useState(mockCourses);
  const [prices] = useState(mockPrices);
  const [testimonials] = useState(mockTestimonials);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div className="text-2xl font-black text-white" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              YOU <span className="text-red-500">Can</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Kampfsport", "Trainer", "Kurse", "Preise", "Kontakt"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-red-500 transition-colors font-medium">{item}</a>
              ))}
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">Probetraining</Button>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.6)' }}/>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            ENTDECKE DEINE<br /><span className="text-red-500">STÄRKE</span>
          </motion.h1>
          <motion.p className="text-xl md:text-2xl mb-8 font-light leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            Professionelles Kampfsport-Training in Lüdenscheid<br />Für Kinder, Jugendliche und Erwachsene
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">Kostenloses Probetraining</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">Mehr erfahren</Button>
          </motion.div>
          <motion.div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <div className="text-center"><div className="text-3xl font-bold text-red-500">15+</div><div className="text-sm font-medium">Jahre Erfahrung</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-red-500">200+</div><div className="text-sm font-medium">Aktive Mitglieder</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-red-500">4</div><div className="text-sm font-medium">Kampfsportarten</div></div>
          </motion.div>
        </div>
      </section>

      <section id="kampfsport" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black mb-4">UNSERE <span className="text-red-500">KAMPFSPORTARTEN</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Vom traditionellen Karate bis zum modernen MMA - finde deine perfekte Disziplin</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {sportTypes.map((sport, index) => (
                <motion.div key={sport.id} className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${activeKampfsport === index ? 'bg-red-600 text-white shadow-2xl scale-105' : 'bg-white hover:bg-gray-100'}`} onClick={() => setActiveKampfsport(index)} whileHover={{ x: 10 }}>
                  <h3 className="text-2xl font-bold mb-2">{sport.name}</h3>
                  <p className={`mb-4 ${activeKampfsport === index ? 'text-red-100' : 'text-gray-600'}`}>{sport.beschreibung}</p>
                  <div className="flex flex-wrap gap-2">
                    {sport.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant={activeKampfsport === index ? "secondary" : "outline"} className={activeKampfsport === index ? "bg-red-700 text-white" : ""}>
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="relative">
              <AnimatePresence mode="wait">
                {sportTypes.length > 0 && (<motion.img key={activeKampfsport} src={sportTypes[activeKampfsport].bild} alt={sportTypes[activeKampfsport].name} className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.5 }}/>)}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section id="trainer" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black mb-4">UNSERE <span className="text-red-500">TRAINER</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Erfahrene Profis, die dich zu deinen Zielen begleiten</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((person, index) => (
              <motion.div key={person.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} whileHover={{ y: -10 }}>
                <div className="relative">
                  <img src={person.bild} alt={person.name} className="w-full h-64 object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{person.name}</h3>
                    <p className="text-red-300">{person.position}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{person.beschreibung}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Qualifikationen:</h4>
                    {person.qualifikationen.map((qual, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-gray-600">{qual}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="kurse" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black mb-4">UNSER <span className="text-red-500">STUNDENPLAN</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Flexible Trainingszeiten für jeden Terminkalender</p>
          </motion.div>
          <div className="grid gap-4 max-w-5xl mx-auto">
            {courses.map((stunde, index) => (
              <motion.div key={index} className="bg-gray-900 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-red-600 transition-all duration-300 group" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <Badge variant="outline" className="text-red-400 border-red-400 group-hover:text-white group-hover:border-white">{stunde.tag}</Badge>
                    <div className="flex items-center gap-2 text-gray-300 group-hover:text-white"><Clock className="w-4 h-4" /><span className="font-mono">{stunde.zeit}</span></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-white">{stunde.kurs}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-red-100">Trainer: {stunde.trainer}</p>
                </div>
                <Button variant="outline" size="sm" className="mt-4 md:mt-0 group-hover:bg-white group-hover:text-red-600 group-hover:border-white">Anmelden</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="preise" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black mb-4">UNSERE <span className="text-red-500">PREISE</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Faire Preise für professionelles Training</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((paket, index) => (
              <motion.div key={paket.titel} className={`relative rounded-2xl p-8 ${paket.highlight ? 'bg-red-600 text-white shadow-2xl scale-105' : 'bg-white shadow-lg hover:shadow-xl'} transition-all duration-300`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}>
                {paket.highlight && (<div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><Badge className="bg-orange-500 text-white px-4 py-2">BELIEBT</Badge></div>)}
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${paket.highlight ? 'text-white' : 'text-gray-900'}`}>{paket.titel}</h3>
                  <p className={`text-sm mb-4 ${paket.highlight ? 'text-red-100' : 'text-gray-600'}`}>{paket.beschreibung}</p>
                  <div className={`text-4xl font-black mb-2 ${paket.highlight ? 'text-white' : 'text-red-600'}`}>{paket.preis}<span className="text-lg font-normal">/Monat</span></div>
                </div>
                <ul className="space-y-3 mb-8">
                  {paket.leistungen.map((leistung) => (<li key={leistung} className="flex items-center gap-3"><Zap className={`w-5 h-5 ${paket.highlight ? 'text-red-200' : 'text-red-500'}`} /><span className={`${paket.highlight ? 'text-red-50' : 'text-gray-700'}`}>{leistung}</span></li>))}
                </ul>
                <Button className={`w-full ${paket.highlight ? 'bg-white text-red-600 hover:bg-gray-100' : 'bg-red-600 text-white hover:bg-red-700'}`} size="lg">{paket.titel === 'Schnuppermonat' ? 'Jetzt starten' : 'Mitglied werden'}</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black mb-4">WAS UNSERE <span className="text-red-500">MITGLIEDER</span> SAGEN</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Echte Erfahrungen von echten Menschen</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} className="bg-gray-50 rounded-2xl p-8 relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}>
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />))}</div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-red-600">{testimonial.kurs}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black mb-4">STARTE DEINE <span className="text-red-500">KAMPFSPORT-REISE</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Kontaktiere uns für ein kostenloses Probetraining</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-8" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center"><MapPin className="w-6 h-6 text-white" /></div>
                <div><h3 className="text-xl font-semibold">YOU Can Kampfsportschule</h3><p className="text-gray-300">Wilhelmstraße 123<br />58511 Lüdenscheid</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center"><Phone className="w-6 h-6 text-white" /></div>
                <div><h3 className="text-xl font-semibold">Telefon</h3><p className="text-gray-300">+49 2351 123456</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center"><Mail className="w-6 h-6 text-white" /></div>
                <div><h3 className="text-xl font-semibold">E-Mail</h3><p className="text-gray-300">info@youcan-kampfsport.de</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center"><Clock className="w-6 h-6 text-white" /></div>
                <div><h3 className="text-xl font-semibold">Öffnungszeiten</h3><p className="text-gray-300">Mo-Fr: 16:00 - 22:00<br />Sa: 10:00 - 16:00<br />So: Ruhetag</p></div>
              </div>
            </motion.div>
            <motion.div className="bg-gray-900 rounded-2xl p-8" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold mb-6">Kostenloses Probetraining vereinbaren</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4"><input type="text" placeholder="Vorname" className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"/><input type="text" placeholder="Nachname" className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"/></div>
                <input type="email" placeholder="E-Mail Adresse" className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"/>
                <input type="tel" placeholder="Telefonnummer" className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"/>
                <select className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-red-500 focus:outline-none"><option>Welcher Kampfsport interessiert dich?</option><option>Kickboxen</option><option>Karate</option><option>Mixed Martial Arts</option><option>Muay Thai</option><option>Ich bin noch unentschlossen</option></select>
                <textarea placeholder="Nachricht (optional)" rows={4} className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none resize-none"></textarea>
                <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">Probetraining anfragen</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-black mb-4">YOU <span className="text-red-500">Can</span></div>
            <p className="text-gray-400 mb-6">Lüdenscheids führende Kampfsportschule seit 2009</p>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="#kampfsport" className="text-gray-400 hover:text-white">Kampfsport</a>
              <a href="#trainer" className="text-gray-400 hover:text-white">Trainer</a>
              <a href="#kurse" className="text-gray-400 hover:text-white">Kurse</a>
              <a href="#preise" className="text-gray-400 hover:text-white">Preise</a>
              <a href="#kontakt" className="text-gray-400 hover:text-white">Kontakt</a>
            </div>
            <Separator className="bg-gray-800 mb-6" />
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">© 2024 YOU Can Kampfsportschule Lüdenscheid. Alle Rechte vorbehalten.</p>
              <AdminAccess />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
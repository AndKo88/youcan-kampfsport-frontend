// Temporäre Mock-Daten für den Übergang zu GitHub/Vercel
// Diese werden später durch echte API-Aufrufe an dein Laravel-Backend ersetzt

export const mockSportTypes = [
  {
    id: 1,
    name: "Kickboxen",
    beschreibung: "Moderner Kampfsport mit Schlag- und Tritttechniken",
    bild: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&auto=format&fit=crop",
    highlights: ["Fitness", "Selbstverteidigung", "Koordination"]
  },
  {
    id: 2,
    name: "Karate",
    beschreibung: "Traditionelle japanische Kampfkunst",
    bild: "https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?w=400&auto=format&fit=crop",
    highlights: ["Disziplin", "Tradition", "Charakterbildung"]
  },
  {
    id: 3,
    name: "Mixed Martial Arts",
    beschreibung: "Vollkontakt-Kampfsport mit verschiedenen Techniken",
    bild: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop",
    highlights: ["Vielseitigkeit", "Kondition", "Wettkampf"]
  },
  {
    id: 4,
    name: "Muay Thai",
    beschreibung: "Thailändischer Kampfsport mit Ellenbogen und Knien",
    bild: "https://images.unsplash.com/photo-1540569876947-b7094ce33e9c?w=400&auto=format&fit=crop",
    highlights: ["Härte", "Tradition", "Technik"]
  }
];

export const mockTrainers = [
  {
    id: 1,
    name: "Michael Schmidt",
    position: "Headcoach & Gründer",
    beschreibung: "Über 15 Jahre Erfahrung im Kampfsport. Ehemaliger deutscher Meister im Kickboxen.",
    bild: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    qualifikationen: ["Kickbox-Trainer A-Lizenz", "Karate 3. Dan", "Fitness-Trainer B-Lizenz"]
  },
  {
    id: 2,
    name: "Sarah Weber",
    position: "Karate & Kinder-Training",
    beschreibung: "Spezialisiert auf traditionelles Karate und die Arbeit mit Kindern und Jugendlichen.",
    bild: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&auto=format&fit=crop",
    qualifikationen: ["Karate 2. Dan", "Kinder-Trainer-Lizenz", "Konfliktdeeskalation"]
  },
  {
    id: 3,
    name: "Alex Müller",
    position: "MMA & Grappling",
    beschreibung: "Profi-Fighter mit internationaler Wettkampferfahrung in MMA und Brazilian Jiu-Jitsu.",
    bild: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
    qualifikationen: ["BJJ Brown Belt", "MMA Pro-License", "Strength & Conditioning"]
  }
];

export const mockCourses = [
  {
    id: 1,
    tag: "Montag",
    zeit: "18:00 - 19:30",
    kurs: "Kickboxen Anfänger",
    trainer: "Michael Schmidt"
  },
  {
    id: 2,
    tag: "Montag",
    zeit: "19:30 - 21:00",
    kurs: "Kickboxen Fortgeschrittene",
    trainer: "Michael Schmidt"
  },
  {
    id: 3,
    tag: "Dienstag",
    zeit: "17:00 - 18:00",
    kurs: "Kinder Karate (6-10 Jahre)",
    trainer: "Sarah Weber"
  },
  {
    id: 4,
    tag: "Dienstag",
    zeit: "18:00 - 19:30",
    kurs: "Karate Erwachsene",
    trainer: "Sarah Weber"
  },
  {
    id: 5,
    tag: "Mittwoch",
    zeit: "19:00 - 20:30",
    kurs: "MMA Training",
    trainer: "Alex Müller"
  },
  {
    id: 6,
    tag: "Donnerstag",
    zeit: "18:00 - 19:30",
    kurs: "Muay Thai",
    trainer: "Michael Schmidt"
  },
  {
    id: 7,
    tag: "Freitag",
    zeit: "18:30 - 20:00",
    kurs: "Grappling & BJJ",
    trainer: "Alex Müller"
  },
  {
    id: 8,
    tag: "Samstag",
    zeit: "10:00 - 11:30",
    kurs: "Open Training",
    trainer: "Alle Trainer"
  }
];

export const mockPrices = [
  {
    id: 1,
    titel: "Schnuppermonat",
    preis: "49€",
    beschreibung: "Perfect zum Ausprobieren",
    leistungen: ["Alle Kurse", "Leihausrüstung", "Probetraining", "Keine Laufzeit"],
    highlight: false
  },
  {
    id: 2,
    titel: "Standard Mitgliedschaft",
    preis: "79€",
    beschreibung: "Für regelmäßige Teilnahme",
    leistungen: ["Alle Kurse", "12 Monate Laufzeit", "10% Rabatt auf Equipment", "Gäste mitbringen"],
    highlight: true
  },
  {
    id: 3,
    titel: "Premium Mitgliedschaft",
    preis: "119€",
    beschreibung: "All-Inclusive Paket",
    leistungen: ["Alle Kurse", "Personal Training", "Ernährungsberatung", "Equipment inklusive", "Wettkampfbetreuung"],
    highlight: false
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Thomas K.",
    text: "Seit 2 Jahren trainiere ich hier Kickboxen. Die Trainer sind top und die Atmosphäre ist familiär. Ich fühle mich fitter und selbstbewusster.",
    rating: 5,
    kurs: "Kickboxen"
  },
  {
    id: 2,
    name: "Lisa M.",
    text: "Meine Tochter liebt das Karate-Training! Sarah ist eine geduldige und motivierende Trainerin. Top Schule!",
    rating: 5,
    kurs: "Kinder Karate"
  },
  {
    id: 3,
    name: "Marco R.",
    text: "Das MMA-Training ist anspruchsvoll aber macht riesig Spaß. Alex bringt uns professionelle Techniken bei. Sehr zu empfehlen!",
    rating: 5,
    kurs: "MMA"
  }
];

// Mock Authentication für Entwicklung
export const mockAuth = {
  isAuthenticated: false,
  user: null,
  
  login: () => {
    mockAuth.isAuthenticated = true;
    mockAuth.user = { 
      id: 1, 
      full_name: "Admin User", 
      email: "admin@youcan-kampfsport.de",
      role: "admin" 
    };
    return Promise.resolve(mockAuth.user);
  },
  
  logout: () => {
    mockAuth.isAuthenticated = false;
    mockAuth.user = null;
    return Promise.resolve();
  },
  
  me: () => {
    if (mockAuth.isAuthenticated) {
      return Promise.resolve(mockAuth.user);
    } else {
      return Promise.reject(new Error("Not authenticated"));
    }
  }
};
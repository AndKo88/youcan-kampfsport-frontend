import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Edit, 
  X, 
  Settings,
  Users,
  Calendar,
  Euro,
  Target,
  ArrowLeft
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

// Mock-Daten für GitHub/Vercel (temporär bis Laravel-Backend bereit ist)
import { 
  mockSportTypes,
  mockTrainers, 
  mockCourses, 
  mockPrices, 
  mockTestimonials,
  mockAuth
} from "@/components/MockData";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Mock-Daten States
  const [sportTypes] = useState(mockSportTypes);
  const [trainers] = useState(mockTrainers);
  const [courses] = useState(mockCourses);
  const [prices] = useState(mockPrices);
  const [testimonials] = useState(mockTestimonials);
  
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    checkAuthAndLoad();
  }, []);

  const checkAuthAndLoad = async () => {
    setIsLoading(true);
    try {
      // Prüfe Mock-Authentication
      const currentUser = await mockAuth.me();
      setUser(currentUser);
    } catch (error) {
      // Nicht eingeloggt - zurück zur Startseite
      window.location.href = createPageUrl("Home");
      return;
    }
    setIsLoading(false);
  };

  const handleLogout = async () => {
    await mockAuth.logout();
    window.location.href = createPageUrl("Home");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Lade Admin-Bereich...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    // Diese Ansicht sollte kaum erreicht werden, da checkAuthAndLoad umleitet.
    // Sie ist ein Fallback.
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="text-center p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Zugriff verweigert</h2>
            <p className="text-gray-600 mb-6">Du musst angemeldet sein, um den Admin-Bereich zu nutzen.</p>
            <Link to={createPageUrl("Home")}>
                <Button className="bg-red-600 hover:bg-red-700">
                Zurück zur Startseite
                </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
                <Link to={createPageUrl("Home")}>
                  <Button 
                    variant="ghost" 
                    className="mr-4"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Zurück zur Website
                  </Button>
                </Link>
              <h1 className="text-2xl font-bold text-gray-900">
                YOU Can <span className="text-red-500">Admin</span>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Willkommen, {user.full_name}
              </span>
              <Button variant="outline" onClick={handleLogout}>
                Abmelden
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo-Hinweis */}
      {!showDemo && (
        <div className="bg-blue-50 border-b border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Settings className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Demo-Modus:</strong> Dies ist die GitHub/Vercel Version mit Mock-Daten. 
                    Echte Admin-Funktionen kommen mit dem Laravel-Backend.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowDemo(true)}
                className="text-blue-400 hover:text-blue-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Übersicht</TabsTrigger>
            <TabsTrigger value="sportarten">Kampfsportarten</TabsTrigger>
            <TabsTrigger value="trainer">Trainer</TabsTrigger>
            <TabsTrigger value="kurse">Kurse</TabsTrigger>
            <TabsTrigger value="preise">Preise</TabsTrigger>
            <TabsTrigger value="bewertungen">Bewertungen</TabsTrigger>
          </TabsList>

          {/* Übersicht */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Kampfsportarten</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{sportTypes.length}</div>
                  <p className="text-xs text-muted-foreground">Aktive Sportarten</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Trainer</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{trainers.length}</div>
                  <p className="text-xs text-muted-foreground">Qualifizierte Trainer</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Kurse</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{courses.length}</div>
                  <p className="text-xs text-muted-foreground">Wöchentliche Kurse</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pakete</CardTitle>
                  <Euro className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{prices.length}</div>
                  <p className="text-xs text-muted-foreground">Preispakete</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Nächste Schritte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">🚧 In Entwicklung</h4>
                  <p className="text-yellow-700 text-sm mb-3">
                    Dieser Admin-Bereich zeigt aktuell nur Demo-Daten. 
                    Die echten Admin-Funktionen werden mit dem Laravel-Backend implementiert.
                  </p>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Echte Datenbearbeitung</li>
                    <li>• Bildupload für Trainer und Kurse</li>
                    <li>• Buchungsverwaltung</li>
                    <li>• Mitgliederverwaltung</li>
                    <li>• Automatische Backups</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Kampfsportarten */}
          <TabsContent value="sportarten" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Kampfsportarten verwalten</h2>
              <Button disabled className="bg-gray-400">
                <Plus className="w-4 h-4 mr-2" />
                Neue Sportart (Laravel)
              </Button>
            </div>
            <div className="grid gap-6">
              {sportTypes.map((sport) => (
                <Card key={sport.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <img 
                        src={sport.bild} 
                        alt={sport.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{sport.name}</h3>
                        <p className="text-gray-600 mb-3">{sport.beschreibung}</p>
                        <div className="flex gap-2">
                          {sport.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="outline">{highlight}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm" disabled>
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Weitere Tabs mit ähnlicher Demo-Struktur */}
          <TabsContent value="trainer" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Trainer verwalten</h2>
              <Button disabled className="bg-gray-400">
                <Plus className="w-4 h-4 mr-2" />
                Neuer Trainer (Laravel)
              </Button>
            </div>
            <div className="grid gap-4">
              {trainers.map((trainer) => (
                <Card key={trainer.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <img 
                        src={trainer.bild} 
                        alt={trainer.name}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{trainer.name}</h3>
                        <p className="text-red-600 font-medium">{trainer.position}</p>
                        <p className="text-gray-600 text-sm mt-1">{trainer.beschreibung}</p>
                      </div>
                      <Button variant="outline" size="sm" disabled>
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Weitere Demo-Tabs */}
          <TabsContent value="kurse">
            <Card>
              <CardHeader>
                <CardTitle>Kursplan verwalten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Kommt mit dem Laravel-Backend: Kurse hinzufügen, bearbeiten und Zeiten verwalten.
                </p>
                <div className="space-y-2">
                  {courses.map((course) => (
                    <div key={course.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <span className="font-medium">{course.kurs}</span>
                        <span className="text-gray-500 ml-2">({course.tag}, {course.zeit})</span>
                      </div>
                      <Badge variant="outline">{course.trainer}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preise">
            <Card>
              <CardHeader>
                <CardTitle>Preispakete verwalten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Kommt mit dem Laravel-Backend: Preise anpassen und neue Pakete erstellen.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {prices.map((price) => (
                    <div key={price.id} className="border rounded-lg p-4">
                      <h4 className="font-semibold">{price.titel}</h4>
                      <p className="text-2xl font-bold text-red-600">{price.preis}</p>
                      <p className="text-sm text-gray-600">{price.beschreibung}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bewertungen">
            <Card>
              <CardHeader>
                <CardTitle>Kundenbewertungen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="border-l-4 border-red-500 pl-4 py-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{testimonial.name}</span>
                        <Badge variant="outline">{testimonial.kurs}</Badge>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400">⭐</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 italic">"{testimonial.text}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
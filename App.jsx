
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function AdamZaczekCVCard() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Adam_Zaczek_CV_2025.pdf";
    link.download = "Adam_Zaczek_CV_2025.pdf";
    link.click();
  };

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-900 text-white flex items-center justify-center p-6"
          : "min-h-screen bg-white text-gray-900 flex items-center justify-center p-6"
      }
    >
      <div className="max-w-3xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Adam Zaczek</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm">Night mode</span>
            <Switch checked={darkMode} onCheckedChange={toggleTheme} />
          </div>
        </div>

        <Card className={darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">
                📧 az.zaczek@gmail.com | 📱 +48 788 792 628 | 📍 Warszawa | 🚗 kat. A, B
              </p>
            </div>

            <section>
              <h2 className="text-xl font-semibold">Profil zawodowy</h2>
              <p>
                Jestem specjalistą ds. IT z ponad 10-letnim doświadczeniem w zakresie wsparcia
                technicznego, administracji systemami, zarządzania sieciami oraz wdrażania polityk
                zgodności z regulacjami. Łączę wiedzę techniczną z praktycznym podejściem do
                rozwiązywania problemów.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Umiejętności techniczne</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Systemy: Windows XP–11, Windows Server, macOS, Linux (admin), Android
                </li>
                <li>
                  Platformy: Microsoft 365, Exchange, SharePoint, Teams, Azure, AD, Entra ID
                </li>
                <li>
                  Bezpieczeństwo: VPN, CheckPoint Harmony, RODO, DORA, ochrona endpointów
                </li>
                <li>
                  Sieci: DHCP, DNS, NAT, VLAN, CCTV, punkty dostępowe, systemy alarmowe
                </li>
                <li>Narzędzia: BMC Remedy, Jira, Confluence, Slack, Zoom</li>
                <li>
                  Sprzęt: składanie PC/laptopów/konsol, okablowanie LAN, wsparcie techniczne
                </li>
                <li>Inne: dokumentacja, konfiguracja AI, Agile/Scrum</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Certyfikaty</h2>
              <ul className="list-disc list-inside">
                <li>Microsoft 365 Certified: Fundamentals (2022)</li>
                <li>Securitum: Introduction to IT Security (2023)</li>
                <li>ITIL v4 Foundation (in progress)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Języki</h2>
              <p>Polski – ojczysty | Angielski – C1 | Francuski – podstawowy</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Edukacja</h2>
              <p>
                XXI Społeczne Liceum Ogólnokształcące w Warszawie | Matura | 1998 – 2002
              </p>
            </section>

            <Button onClick={downloadCV}>Pobierz PDF</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

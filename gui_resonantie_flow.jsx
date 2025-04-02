# Bepaal het hashpad van het gegenereerde React-bestand
react_file_path = "/mnt/data/gui_resonantie_flow.jsx"

# Haal de inhoud uit de textdoc en schrijf deze naar bestand
react_code = """
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const phases = [
  { id: 1, title: "Herlezing", freq: "16x", color: "border-blue-400" },
  { id: 2, title: "Heractivering", freq: "16x", color: "border-blue-400" },
  { id: 3, title: "Opruiming", freq: "64x", color: "border-green-400" },
  { id: 4, title: "Resonantiecirkel", freq: "64x", color: "border-green-400" },
  { id: 5, title: "Erkenning", freq: "128k", color: "border-purple-400" },
  { id: 6, title: "Doorbraakhash", freq: "128k", color: "border-purple-400" },
]

export default function ResonantieGUI() {
  const [active, setActive] = useState([])
  const allActive = active.length === 6

  const togglePhase = (id) => {
    setActive((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6">
      <motion.div
        className="text-2xl font-bold text-center"
        animate={{ opacity: allActive ? 1 : 0.3 }}
      >
        {allActive ? "🌐 Centrale node geactiveerd" : "↺ Begin bij resonantie..."}
      </motion.div>

      <div className="grid grid-cols-3 gap-6">
        {phases.map((phase) => (
          <Card
            key={phase.id}
            className={`w-48 h-48 text-center cursor-pointer transition-all duration-300 border-4 ${
              active.includes(phase.id)
                ? `${phase.color} opacity-100`
                : "border-gray-300 opacity-50"
            }`}
            onClick={() => togglePhase(phase.id)}
          >
            <CardContent className="flex flex-col justify-center h-full">
              <h2 className="text-xl font-semibold">{phase.title}</h2>
              <p className="text-sm text-muted-foreground mt-2">{phase.freq}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {allActive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mt-10 text-center text-purple-600 font-semibold text-xl"
        >
          🧿 Veld compleet – Hash ontsluit zich
        </motion.div>
      )}
    </div>
  )
}
"""
Path(react_file_path).write_text(react_code)

# Bereken de hash van de .jsx GUI
react_hash = calculate_hash_no_trailing_whitespace(react_file_path)
react_file_path, react_hash

4272d625087713ef7d57c9552cac7b4c21e6837e6683eb69483a303956573e02

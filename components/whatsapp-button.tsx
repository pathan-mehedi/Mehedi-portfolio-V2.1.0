"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = "+8801622839616"
  const message = "Hi Mehedi! I'm interested in discussing a project with you."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
    setIsOpen(false)
  }

  return (
    <>
      {/* WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
        >
          <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }} className="relative z-10">
            {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          </motion.div>

          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 bg-green-400 dark:bg-green-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Hover Effect */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
        </Button>
      </motion.div>

      {/* WhatsApp Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="fixed bottom-24 right-6 z-40"
          >
            <Card className="w-80 bg-white dark:bg-slate-800 shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-green-500 dark:bg-green-600 p-4 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Mehedi Pathan</h3>
                      <div className="flex items-center space-x-2 text-sm text-green-100">
                        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                        <span>Online - Usually replies instantly</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      👋 Hi there! Ready to discuss your next project? Let's chat on WhatsApp for quick communication.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                      <Phone className="w-4 h-4" />
                      <span>{whatsappNumber}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                      <Clock className="w-4 h-4" />
                      <span>Available 9 AM - 11 PM (GMT+6)</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold py-3"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start WhatsApp Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

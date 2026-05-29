import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    year: string;
    category: string;
    title: string;
    description: string;
    fullDetails?: string;
    significance?: string;
    impact?: string;
  } | null;
}

export default function EventModal({ isOpen, onClose, event }: EventModalProps) {
  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-[#F5EDD6] to-[#E8DCC8] rounded-2xl shadow-2xl border-2 border-[#C9973A]/40 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#3B2314]/10 hover:bg-[#3B2314]/20 flex items-center justify-center transition-colors"
              >
                <X size={20} className="text-[#3B2314]" />
              </button>

              {/* Header */}
              <div className="relative p-8 pb-6 border-b-2 border-[#C9973A]/30">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9973A] to-transparent" />

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9973A] to-[#FCD116] flex items-center justify-center shadow-lg ring-4 ring-[#FCD116]/20">
                    <span className="text-[#3B2314] font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                      {event.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9973A]/20 border border-[#C9973A]/40 mb-2">
                      <span className="text-xs text-[#C9973A]" style={{ fontFamily: 'var(--font-display)' }}>
                        {event.category}
                      </span>
                    </div>
                    <h2 className="text-3xl text-[#3B2314]" style={{ fontFamily: 'var(--font-display)' }}>
                      {event.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Overview */}
                <div>
                  <h3 className="text-xl mb-3 text-[#3B2314] flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
                    <span className="w-2 h-2 rounded-full bg-[#C9973A]" />
                    Overview
                  </h3>
                  <p className="text-[#3B2314]/90 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Full Details */}
                {event.fullDetails && (
                  <div className="bg-white/50 p-6 rounded-xl border border-[#C9973A]/20">
                    <h3 className="text-xl mb-3 text-[#3B2314] flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
                      <span className="w-2 h-2 rounded-full bg-[#C9973A]" />
                      Detailed Account
                    </h3>
                    <p className="text-[#3B2314]/90 leading-relaxed whitespace-pre-line">
                      {event.fullDetails}
                    </p>
                  </div>
                )}

                {/* Significance */}
                {event.significance && (
                  <div className="bg-gradient-to-br from-[#FCD116]/10 to-[#C9973A]/10 p-6 rounded-xl border border-[#C9973A]/30">
                    <h3 className="text-xl mb-3 text-[#3B2314] flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
                      <span className="w-2 h-2 rounded-full bg-[#FCD116]" />
                      Historical Significance
                    </h3>
                    <p className="text-[#3B2314]/90 leading-relaxed">
                      {event.significance}
                    </p>
                  </div>
                )}

                {/* Impact */}
                {event.impact && (
                  <div className="bg-gradient-to-br from-[#0038A8]/10 to-[#0038A8]/5 p-6 rounded-xl border border-[#0038A8]/20">
                    <h3 className="text-xl mb-3 text-[#3B2314] flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
                      <span className="w-2 h-2 rounded-full bg-[#0038A8]" />
                      Impact & Legacy
                    </h3>
                    <p className="text-[#3B2314]/90 leading-relaxed">
                      {event.impact}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 bg-[#3B2314]/5 border-t border-[#C9973A]/30 rounded-b-2xl">
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#3B2314] to-[#5a4030] text-[#F5EDD6] rounded-lg hover:shadow-lg transition-all duration-300"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

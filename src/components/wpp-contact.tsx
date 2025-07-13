import { MessageCircle } from 'lucide-react'

export function WppContact() {
  return (
    <a
      href="https://wa.me/55DDNNNNNNNNN"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  )
}

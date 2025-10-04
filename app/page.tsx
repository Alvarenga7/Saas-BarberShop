import { Input } from "@/app/components/ui/input"
import Header from "./components/ui/header"
import { Button } from "./components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Henrique!</h2>
        <p>Sabao, 04 de outubro</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />

          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home

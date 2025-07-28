"use client"

import type React from "react"
import { useState } from "react"
import { Cross, X, MapPin, Calendar, Briefcase, Church, Heart, Star, Smile, Quote, Info } from "lucide-react"
// Remover a linha do import QRCode

// Tipos para os dados do memorial
interface MemorialData {
  name: string
  birthDate: string
  deathDate: string
  age: number
  restingPlace?: string
  importantDates?: string
  profession?: string
  religion?: string
  hobbies?: string
  qualities?: string
  personality?: string
  quotes?: string
  otherDetails?: string
  biography?: string
  galleryImages?: string[]
  siteUrl: string
}

// Dados fictícios para demonstração
const memorialData: MemorialData = {
  name: "Geralda Leão de Carvalho (Lalae)",
  birthDate: "13/06/1918",
  deathDate: "15/03/2008",
  age: 90,
  restingPlace: "Cemitério Municipal de Iguatama, Iguatama - MG",
  importantDates:"",
  profession: "",
  religion: "Católica",
  hobbies: "",
  qualities: "",
  personality: "",
  quotes: '',
  otherDetails: 'Filha de:\nManoel Bibiano de Carvalho (Neca Bibiano) e Edwiges Leão de Carvalho.\nTeve 6 irmãos. \nCasada com João  Victor de Carvalho (Joca)\n Teve 13 filhos ',
  biography:
    "De uma inteligência invejável, leitora voraz, desde cedo demonstrou ter uma personalidade própria. Enquanto suas irmãs faziam magistério, ela queria fazer contabilidade. Como na época era proibido para mulheres, preferiu largar a escola e se casar. Uma esposa que soube estar ao lado do marido conduzindo com sabedoria e inteligência toda a família. Sempre colocou a educação dos filhos em primeiro lugar. Era uma mulher de silêncio e extremamente  perspicaz em suas falas, firme em suas decisões e conselhos. Uma peculiaridade era seu  sorriso fácil. Por isso, muito  respeitada pelos familiares, amigos e comunidade...Lalae foi referência como mulher de fé, que conduziu filhos nesse caminho espiritual. O terço era sua arma maior. Reunia os filhos desde pequenos em torno dela à noite para rezar o terço. Além de seu amor incondicional pelo Sagrado Coração de Jesus e Maria, era muito devota de São José e Santo Antônio, que era seu padrinho, já que nasceu no seu dia. Deixou esse lindo legado também aos netos e próximas gerações.",
  galleryImages: ["foto-lalae.jpeg"],
  siteUrl: "https://remember-lalae.vercel.app/", // URL de teste para o QR Code
}

// Componente para o cabeçalho
const Header: React.FC<{ data: MemorialData }> = ({ data }) => (
  <div className="text-center mb-8 bg-white rounded-lg shadow-sm p-8">
    <div className="mb-4">
      <Cross className="w-8 h-8 text-blue-500 mx-auto mb-4" />
    </div>
    <h1 className="text-4xl font-bold text-gray-800 mb-4">{data.name}</h1>
    <div className="text-gray-600 space-y-1">
      <p>Data de Nasc. {data.birthDate}</p>
      <p>Data de Fal. {data.deathDate}</p>
      <p className="text-sm">{data.age} anos</p>
    </div>
  </div>
)

// Componente para cards de seção com ícones
const SectionCard: React.FC<{ title: string; content: string; icon: React.ReactNode }> = ({ title, content, icon }) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="flex items-center gap-2 mb-3">
      <div className="text-blue-500">{icon}</div>
      <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
    </div>
    <div className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">{content}</div>
  </div>
)

// Componente para a seção de biografia com ícone
const BiographySection: React.FC<{ content: string }> = ({ content }) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="flex items-center gap-2 mb-3">
      <div className="text-blue-500">
        <Info className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold text-blue-600">Biografia</h3>
    </div>
    <div className="text-gray-700 text-sm leading-relaxed">{content}</div>
  </div>
)

// Componente para a galeria com ícone
const GallerySection: React.FC<{ images: string[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="text-blue-500">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-blue-600">Galeria de Memórias</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image || "/placeholder.svg"}
              alt={`Memória ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Modal para imagem expandida */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Imagem expandida"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}

// E no componente QRCodeSection, substitua por:
const QRCodeSection: React.FC<{ url: string }> = ({ url }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 text-center">
    <h3 className="text-lg font-semibold text-blue-600 mb-4">Acesse o Memorial</h3>
    <div className="flex justify-center mb-4">
      <div className="w-32 h-32 bg-gray-200 border-2 border-gray-300 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div
            className="w-24 h-24 bg-black mx-auto mb-2 rounded"
            style={{
              backgroundImage: `url("https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=${encodeURIComponent(url)}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
    <p className="text-gray-600 text-sm">Escaneie para acessar o memorial</p>
    <p className="text-xs text-gray-500 mt-2 break-all">{url}</p>
  </div>
)

// Componente principal do memorial
const Memorial: React.FC = () => {
  // Função para renderizar seções condicionalmente com ícone
  const renderSectionWithIcon = (title: string, content: string | undefined, icon: React.ReactNode) => {
    if (!content || content.trim() === "") return null
    return <SectionCard title={title} content={content} icon={icon} />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Header data={memorialData} />

        {/* Primeiros 4 cards em grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {renderSectionWithIcon("Local de Descanso", memorialData.restingPlace, <MapPin className="w-5 h-5" />)}
          {renderSectionWithIcon("Datas Importantes", memorialData.importantDates, <Calendar className="w-5 h-5" />)}
          {renderSectionWithIcon("Profissão", memorialData.profession, <Briefcase className="w-5 h-5" />)}
          {renderSectionWithIcon("Religião", memorialData.religion, <Church className="w-5 h-5" />)}
        </div>

        {/* Cards que ocupam toda a largura, um sobre o outro */}
        <div className="space-y-6 mb-6">
          {renderSectionWithIcon("Hobbies e Interesses", memorialData.hobbies, <Heart className="w-5 h-5" />)}
          {renderSectionWithIcon("Qualidades Marcantes", memorialData.qualities, <Star className="w-5 h-5" />)}
          {renderSectionWithIcon("Jeito de Ser", memorialData.personality, <Smile className="w-5 h-5" />)}
          {renderSectionWithIcon("Frases Marcantes", memorialData.quotes, <Quote className="w-5 h-5" />)}
          {renderSectionWithIcon("Outros Detalhes", memorialData.otherDetails, <Info className="w-5 h-5" />)}
        </div>

        {memorialData.biography && (
          <div className="mb-6">
            <BiographySection content={memorialData.biography} />
          </div>
        )}

        {memorialData.galleryImages && memorialData.galleryImages.length > 0 && (
          <div className="mb-6">
            <GallerySection images={memorialData.galleryImages} />
          </div>
        )}

        <div className="mb-6">
          <QRCodeSection url={memorialData.siteUrl} />
        </div>
      </div>
    </div>
  )
}

export default Memorial

"use client"

import React from "react"

interface QRCodeProps {
  value: string
  size?: number
  level?: "L" | "M" | "Q" | "H"
  includeMargin?: boolean
  bgColor?: string
  fgColor?: string
}

// Componente QR Code simples usando canvas
const QRCode: React.FC<QRCodeProps> = ({ value, size = 128, bgColor = "#FFFFFF", fgColor = "#000000" }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Desenha um QR code simples (placeholder)
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, size, size)

        ctx.fillStyle = fgColor
        const cellSize = size / 21 // QR code padrão 21x21

        // Desenha um padrão simples que lembra um QR code
        for (let i = 0; i < 21; i++) {
          for (let j = 0; j < 21; j++) {
            if ((i + j) % 3 === 0 || i === 0 || i === 20 || j === 0 || j === 20) {
              ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize)
            }
          }
        }

        // Adiciona os quadrados de posicionamento
        const drawPositionSquare = (x: number, y: number) => {
          ctx.fillRect(x * cellSize, y * cellSize, 7 * cellSize, 7 * cellSize)
          ctx.fillStyle = bgColor
          ctx.fillRect((x + 1) * cellSize, (y + 1) * cellSize, 5 * cellSize, 5 * cellSize)
          ctx.fillStyle = fgColor
          ctx.fillRect((x + 2) * cellSize, (y + 2) * cellSize, 3 * cellSize, 3 * cellSize)
        }

        drawPositionSquare(0, 0)
        drawPositionSquare(14, 0)
        drawPositionSquare(0, 14)
      }
    }
  }, [value, size, bgColor, fgColor])

  return <canvas ref={canvasRef} width={size} height={size} className="border border-gray-200 rounded" />
}

export default QRCode

import { Inter as FontSans } from "next/font/google"
import { Inter } from "next/font/google"
import { Lusitana } from "next/font/google"

export const inter = Inter({ subsets: ["latin"] })
export const lusitana = Lusitana({ weight: ["400", "700"], subsets: ["latin"] })

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})
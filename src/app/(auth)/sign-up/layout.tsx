import { ClerkProvider } from "@clerk/clerk-react"
import '../globals.css'
export const metadata ={
    title :"Threads",
    description:'A Next.js Project'
}
const inter=Inter({subsets:["latin"]})
export default function RootLayout({
}:{

}){
    return (
        <ClerkProvider >
            <html lang='eng'>
                <body className={`${inter.className}`}>

                     
                </body>
            </html>
        </ClerkProvider>
    )

}
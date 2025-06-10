import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Head } from '@inertiajs/react'

export function DefaultLayout({ children, title }: { children: React.ReactNode; title: string }) {
    return (
        <>
            <Head title={title} />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

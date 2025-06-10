import { Card, CardContent } from '@/components/ui/card'
import { Head } from '@inertiajs/react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export function StaticLayout({
    title,
    description,
    children,
}: {
    title: string
    description: string
    children: React.ReactNode
}) {
    return (
        <>
            <Head title={title} />
            <Navbar />
            <div className="min-h-screen px-6 py-20 md:px-12 lg:px-24 bg-background text-foreground">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6 text-primary">{title}</h1>
                    <p className="text-muted-foreground mb-12 text-lg">{description}</p>

                    <Card className="shadow-xl rounded-3xl">
                        <CardContent className="space-y-8 py-10 px-6 md:px-10">
                            {children}
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    )
}

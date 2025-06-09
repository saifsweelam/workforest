import { ShieldCheck, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function PrivacySection() {
    return (
        <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-background to-muted/40 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="text-5xl font-bold tracking-tight text-primary mb-6"
                >
                    Privacy & Open Source First
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed"
                >
                    We fiercely protect your privacy. <strong>No ads. No tracking.</strong><br />
                    Our code is entirely open source — inspect, fork, or contribute freely.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-10">
                    {[{
                        icon: ShieldCheck,
                        title: "Zero Data Exploitation",
                        desc: "We don’t store your data unless absolutely necessary — and when we do, it’s encrypted with industry standards.",
                    }, {
                        icon: Github,
                        title: "100% Open Source",
                        desc: (
                            <>
                                Auditable, forkable, and forever open.&nbsp;
                                <a
                                    href="https://github.com/saifsweelam"
                                    className="text-primary underline underline-offset-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    See the code
                                </a>{" "}
                                — nothing is hidden.
                            </>
                        ),
                    }].map(({ icon: Icon, title, desc }, i) => (
                        <Card
                            key={i}
                            className="relative group p-8 border border-border bg-card shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden"
                        >
                            <CardContent className="flex flex-col items-center text-center space-y-6">
                                <div className="bg-primary/10 text-primary p-4 rounded-full transition-transform duration-300 group-hover:scale-110">
                                    <Icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-semibold text-accent-foreground">
                                    {title}
                                </h3>
                                <p className="text-muted-foreground text-base leading-relaxed">
                                    {desc}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

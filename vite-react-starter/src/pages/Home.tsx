import { Box, Compass, Cpu, Layers, ShieldCheck, Sparkles } from 'lucide-react'
import { useIntl } from 'react-intl'
import { LanguageToggle } from '/@/components/language-toggle'
import { ModeToggle } from '/@/components/mode-toggle'
import { Card, CardContent, CardHeader, CardTitle } from '/@/components/ui/card'

export default function Home() {
  const intl = useIntl()

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-x-hidden transition-colors duration-300">

      {/* Header Bar */}
      <header className="sticky top-0 z-50 h-14 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 flex items-center justify-between px-6">
        <div className="flex items-center gap-2 font-bold text-foreground">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-base tracking-tight">{intl.formatMessage({ id: 'logoTitle' })}</span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ModeToggle />
        </div>
      </header>

      {/* Background gradients */}
      <div className="absolute top-14 left-0 w-full h-125 bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 text-center space-y-6 flex-1 flex flex-col justify-center items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted text-xs text-muted-foreground font-medium tracking-wide uppercase">
          <Cpu className="w-3.5 h-3.5 text-primary" />
          {intl.formatMessage({ id: 'badgeText' })}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight lg:text-7xl bg-gradient-to-b from-foreground to-foreground/75 bg-clip-text text-transparent">
          {intl.formatMessage({ id: 'heroTitle' })}
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed font-light">
          {intl.formatMessage({ id: 'heroDescription' })}
        </p>
      </section>

      {/* Feature Cards Section */}
      <section className="relative z-10 bg-muted/40 border-t border-border py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">{intl.formatMessage({ id: 'sectionTitle' })}</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              {intl.formatMessage({ id: 'sectionSub' })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="hover:border-primary/50 transition-colors duration-300">
              <CardHeader className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Compass className="w-5 h-5" />
                </div>
                <CardTitle className="text-base font-bold tracking-tight text-card-foreground">
                  {intl.formatMessage({ id: 'card1Title' })}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                {intl.formatMessage({ id: 'card1Desc' })}
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="hover:border-primary/50 transition-colors duration-300">
              <CardHeader className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Layers className="w-5 h-5" />
                </div>
                <CardTitle className="text-base font-bold tracking-tight text-card-foreground">
                  {intl.formatMessage({ id: 'card2Title' })}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                {intl.formatMessage({ id: 'card2Desc' })}
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="hover:border-primary/50 transition-colors duration-300">
              <CardHeader className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Box className="w-5 h-5" />
                </div>
                <CardTitle className="text-base font-bold tracking-tight text-card-foreground">
                  {intl.formatMessage({ id: 'card3Title' })}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                {intl.formatMessage({ id: 'card3Desc' })}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Banner / CTA Section */}
      <section className="bg-muted/20 border-t border-border py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              {intl.formatMessage({ id: 'ctaTitle' })}
            </h3>
            <p className="text-muted-foreground text-sm">
              {intl.formatMessage({ id: 'ctaDesc' })}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

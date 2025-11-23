"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { KawaiiButterfly } from "@/components/kawaii-butterfly"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { personalInfo, projects, skills, certificates, languages } from "@/lib/portfolio-data"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Sparkles,
  Heart,
  Star,
  Copy,
  Check,
  Phone,
} from "lucide-react"

export default function PortfolioPage() {
  const [showContact, setShowContact] = useState(false)
  const [copied, setCopied] = useState<"email" | "phone" | null>(null)

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const featuredProjects = projects.filter((p) => p.featured)
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>,
  )

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute top-20 right-10 w-48 h-48 hidden lg:block">
          <KawaiiButterfly />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <Image
                  src={personalInfo.avatar || "/placeholder.svg"}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground rounded-full p-2">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">{personalInfo.title}</p>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">{personalInfo.bio}</p>
            </div>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                <Link href={personalInfo.github} target="_blank">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                <Link href={personalInfo.linkedin} target="_blank">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                <Link href={personalInfo.twitter} target="_blank">
                  <Twitter className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                <Link href={`mailto:${personalInfo.email}`}>
                  <Mail className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="pt-4">
              <Button size="lg" className="rounded-full px-8 group">
                View My Work
                <Heart className="w-4 h-4 ml-2 group-hover:fill-current transition-all" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            </div>

            <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/50 border-2">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground/90">
                  A Computer Systems Engineering student specializing in Embedded Systems and the Internet of Things (IoT). Passionate about new technologies and creating intelligent solutions, I have completed four academic and personal projects, combining innovation and technical rigor.
                </p>
                <p className="text-foreground/90">
                  Serious, independent, and comfortable working in a team, I fully commit to each project to design reliable and high-performing systems. I am actively involved in university clubs to strengthen my teamwork, innovation, and communication skills.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Skills & Expertise
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <Card
                  key={category}
                  className="p-6 backdrop-blur-sm bg-card/50 border-2 hover:border-primary/50 transition-all"
                >
                  <h3 className="font-serif text-2xl font-bold mb-6 capitalize text-primary">{category}</h3>
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Languages
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {languages.map((language) => (
                <Card
                  key={language.name}
                  className="p-6 backdrop-blur-sm bg-card/50 border-2 hover:border-accent/50 transition-all text-center hover:shadow-lg"
                >
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{language.name}</h3>
                  <Badge variant="secondary" className="rounded-full">
                    {language.level}
                  </Badge>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
              <p className="text-muted-foreground mt-4 text-lg">A collection of my favorite work</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Star className="w-5 h-5 text-accent fill-accent" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      {project.link && (
                        <Button variant="outline" size="sm" className="rounded-full bg-transparent" asChild>
                          <Link href={project.link} target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      {project.github && (
                        <Button variant="outline" size="sm" className="rounded-full bg-transparent" asChild>
                          <Link href={project.github} target="_blank">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Certificates
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
              <p className="text-muted-foreground mt-4 text-lg">My achievements and professional certifications</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert) => (
                <Card
                  key={cert.id}
                  className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3 text-center">
                    <h3 className="font-serif text-xl font-bold text-foreground">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <p className="text-muted-foreground">{cert.date}</p>
                    <Button variant="outline" size="sm" className="mt-2 w-full rounded-full" asChild>
                      <Link href={cert.link} target="_blank">
                        View Certificate
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
              <p className="text-muted-foreground mt-4 text-lg">Feel free to reach out to me anytime</p>
            </div>

            <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/50 border-2 space-y-6">
              <Button onClick={() => setShowContact(!showContact)} size="lg" className="w-full rounded-full py-6">
                {showContact ? "Hide Contact Info" : "Contact Me"}
              </Button>

              {showContact && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  {/* Email */}
                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium text-foreground">{personalInfo.email}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(personalInfo.email, "email")}
                      className="rounded-full"
                    >
                      {copied === "email" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-secondary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium text-foreground">{personalInfo.phone}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                      className="rounded-full"
                    >
                      {copied === "phone" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>

                  {/* Social Links */}
                  <div className="pt-4 space-y-3">
                    <p className="text-sm text-muted-foreground font-medium">Or connect on social media:</p>
                    <div className="flex gap-3 flex-wrap">
                      <Button variant="outline" size="sm" className="rounded-full bg-transparent" asChild>
                        <Link href={personalInfo.github} target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full bg-transparent" asChild>
                        <Link href={personalInfo.linkedin} target="_blank">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full bg-transparent" asChild>
                        <Link href={personalInfo.twitter} target="_blank">
                          <Twitter className="w-4 h-4 mr-2" />
                          Twitter
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-card/50 border-t-2 border-border py-12 mt-24">
        <div className="container mx-auto px-4 text-center space-y-4">
        <div className="text-center my-8">
  <Link href="/" className="inline-flex items-center gap-2 group justify-center">
    <Sparkles className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
    <span className="font-serif text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      Portfolio
    </span>
  </Link>
  <p className="text-muted-foreground">
            Made with love and creativity ✨
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Tasnim Nakbi. All rights reserved.
          </p>
</div>


          
        </div>
      </footer>
    </div>
  )
}

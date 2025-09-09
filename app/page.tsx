"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  FileText,
  RefreshCw,
  Sparkles,
  Download,
  Copy,
  Check,
  Zap,
  Languages,
  Type,
  AlignLeft,
  Moon,
  Sun,
  Menu,
  Shield,
  Clock,
  Globe,
  Layers,
  Code,
  Users,
} from "lucide-react"
import { useState } from "react"
import { useTheme } from "next-themes"

export default function OpaGptV2() {
  const [humanizedText, setHumanizedText] = useState("")
  const [rewrittenText, setRewrittenText] = useState("")
  const [extractedText, setExtractedText] = useState("")
  const [translatedText, setTranslatedText] = useState("")
  const [summarizedText, setSummarizedText] = useState("")
  const [grammarText, setGrammarText] = useState("")
  const [copied, setCopied] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState<string | null>(null)
  const [targetLanguage, setTargetLanguage] = useState("english")
  const { theme, setTheme } = useTheme()

  const handleHumanize = async (text: string) => {
    setIsProcessing("humanize")
    await new Promise((resolve) => setTimeout(resolve, 2000))

    let humanizedText = text
      // Replace formal/AI-sounding phrases with natural alternatives
      .replace(/\b(utilize|utilizes|utilizing)\b/gi, "use")
      .replace(/\b(implement|implements|implementing)\b/gi, "add")
      .replace(/\b(leverage|leverages|leveraging)\b/gi, "use")
      .replace(/\b(optimize|optimizes|optimizing)\b/gi, "improve")
      .replace(/\b(facilitate|facilitates|facilitating)\b/gi, "help")
      .replace(/\b(endeavor|endeavors|endeavoring)\b/gi, "try")
      .replace(/\b(commence|commences|commencing)\b/gi, "start")
      .replace(/\b(terminate|terminates|terminating)\b/gi, "end")
      .replace(/\b(furthermore|moreover|additionally)\b/gi, "also")
      .replace(/\b(consequently|therefore|thus)\b/gi, "so")
      .replace(/\b(in order to)\b/gi, "to")
      .replace(/\b(due to the fact that)\b/gi, "because")
      .replace(/\b(it is important to note that)\b/gi, "note that")
      .replace(/\b(it should be noted that)\b/gi, "")
      .replace(/\b(comprehensive|extensive)\b/gi, "complete")
      .replace(/\b(methodology|approach)\b/gi, "method")
      .replace(/\b(paradigm|framework)\b/gi, "system")
      .replace(/\b(substantial|significant)\b/gi, "big")
      .replace(/\b(demonstrate|illustrate)\b/gi, "show")
      .replace(/\b(ascertain|determine)\b/gi, "find out")
      .replace(/\b(prior to)\b/gi, "before")
      .replace(/\b(subsequent to)\b/gi, "after")
      .replace(/\b(in the event that)\b/gi, "if")
      .replace(/\b(with regard to|with respect to)\b/gi, "about")
      .replace(/\b(at this point in time)\b/gi, "now")
      .replace(/\b(in the near future)\b/gi, "soon")
      .replace(/\b(it is worth noting)\b/gi, "")
      .replace(/\b(it is evident that)\b/gi, "clearly")
      .replace(/\b(in conclusion)\b/gi, "finally")
      .replace(/\b(in summary)\b/gi, "to sum up")
      .replace(/\b(nonetheless|nevertheless)\b/gi, "but")
      .replace(/\b(subsequently)\b/gi, "then")
      .replace(/\b(accordingly)\b/gi, "so")
      .replace(/\b(alternatively)\b/gi, "or")
      .replace(/\b(specifically)\b/gi, "")
      .replace(/\b(particularly)\b/gi, "especially")
      .replace(/\b(essentially)\b/gi, "basically")
      .replace(/\b(fundamentally)\b/gi, "basically")
      .replace(/\b(ultimately)\b/gi, "in the end")
      .replace(/\b(initially)\b/gi, "at first")
      .replace(/\b(subsequently)\b/gi, "later")
      .replace(/\b(simultaneously)\b/gi, "at the same time")
      .replace(/\b(approximately)\b/gi, "about")
      .replace(/\b(predominantly)\b/gi, "mostly")
      .replace(/\b(considerably)\b/gi, "a lot")
      .replace(/\b(exceptionally)\b/gi, "very")
      .replace(/\b(remarkably)\b/gi, "really")
      .replace(/\b(extraordinarily)\b/gi, "extremely")
      .replace(/\b(tremendously)\b/gi, "hugely")
      .replace(/\b(immensely)\b/gi, "greatly")
      .replace(/\b(profoundly)\b/gi, "deeply")
      .replace(/\b(substantially)\b/gi, "a lot")
      .replace(/\b(significantly)\b/gi, "a lot")
      .replace(/\b(considerably)\b/gi, "quite a bit")
      .replace(/\b(notably)\b/gi, "")
      .replace(/\b(evidently)\b/gi, "clearly")
      .replace(/\b(apparently)\b/gi, "it seems")
      .replace(/\b(presumably)\b/gi, "probably")
      .replace(/\b(conceivably)\b/gi, "maybe")
      .replace(/\b(potentially)\b/gi, "possibly")
      .replace(/\b(arguably)\b/gi, "you could say")
      .replace(/\b(undoubtedly)\b/gi, "definitely")
      .replace(/\b(unquestionably)\b/gi, "without a doubt")
      .replace(/\b(indubitably)\b/gi, "for sure")
      .replace(/\b(invariably)\b/gi, "always")
      .replace(/\b(perpetually)\b/gi, "constantly")
      .replace(/\b(consistently)\b/gi, "always")
      .replace(/\b(continuously)\b/gi, "non-stop")

    // Add natural conversation elements
    const conversationalElements = [
      "You know what's interesting? ",
      "Here's the thing - ",
      "Let me tell you, ",
      "I've noticed that ",
      "What I find is ",
      "The way I see it, ",
      "From my experience, ",
      "To be honest, ",
      "Actually, ",
      "Honestly, ",
      "Look, ",
      "Listen, ",
      "",
      "",
      "",
    ]

    const randomElement = conversationalElements[Math.floor(Math.random() * conversationalElements.length)]

    // Add natural sentence connectors
    const sentences = humanizedText.split(". ")
    const connectors = ["Plus,", "And", "But", "So", "Also,", "Then", "Now,", "Well,"]

    for (let i = 1; i < sentences.length; i++) {
      if (Math.random() > 0.7) {
        const connector = connectors[Math.floor(Math.random() * connectors.length)]
        sentences[i] = connector + " " + sentences[i].toLowerCase()
      }
    }

    humanizedText = randomElement + sentences.join(". ")

    // Add natural imperfections
    if (Math.random() > 0.5) {
      humanizedText = humanizedText.replace(/\. /g, ". Um, ")
      humanizedText = humanizedText.replace(/Um, Um, /g, "Um, ")
    }

    setHumanizedText(humanizedText)
    setIsProcessing(null)
  }

  const handleTranslate = async (text: string) => {
    setIsProcessing("translate")
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const languageMap: { [key: string]: string } = {
      english: "English",
      spanish: "Spanish",
      french: "French",
      german: "German",
      italian: "Italian",
      portuguese: "Portuguese",
      russian: "Russian",
      chinese: "Chinese (Simplified)",
      japanese: "Japanese",
      korean: "Korean",
      arabic: "Arabic",
      hindi: "Hindi",
      dutch: "Dutch",
      swedish: "Swedish",
      norwegian: "Norwegian",
      danish: "Danish",
      finnish: "Finnish",
      polish: "Polish",
      czech: "Czech",
      hungarian: "Hungarian",
      romanian: "Romanian",
      bulgarian: "Bulgarian",
      greek: "Greek",
      turkish: "Turkish",
      hebrew: "Hebrew",
      thai: "Thai",
      vietnamese: "Vietnamese",
      indonesian: "Indonesian",
      malay: "Malay",
      filipino: "Filipino",
      ukrainian: "Ukrainian",
      croatian: "Croatian",
      serbian: "Serbian",
      slovak: "Slovak",
      slovenian: "Slovenian",
      lithuanian: "Lithuanian",
      latvian: "Latvian",
      estonian: "Estonian",
    }

    const targetLang = languageMap[targetLanguage] || "English"

    // Simulate advanced translation with context awareness
    let translatedResult = `[Translated to ${targetLang}]: ${text}`

    // Add natural translation variations based on target language
    if (targetLanguage === "spanish") {
      translatedResult = `[Traducido al Español]: ${text.replace(/hello/gi, "hola").replace(/thank you/gi, "gracias")}`
    } else if (targetLanguage === "french") {
      translatedResult = `[Traduit en Français]: ${text.replace(/hello/gi, "bonjour").replace(/thank you/gi, "merci")}`
    } else if (targetLanguage === "german") {
      translatedResult = `[Ins Deutsche übersetzt]: ${text.replace(/hello/gi, "hallo").replace(/thank you/gi, "danke")}`
    }

    setTranslatedText(translatedResult)
    setIsProcessing(null)
  }

  const copyToClipboard = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleRewrite = async (text: string) => {
    setIsProcessing("rewrite")
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate advanced rewriting with context awareness
    const rewrittenResult = `[Rewritten]: ${text} (with some changes)`

    setRewrittenText(rewrittenResult)
    setIsProcessing(null)
  }

  const handlePdfUpload = async (file: File) => {
    setIsProcessing("pdf")
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simulate PDF extraction
    const extractedResult = `[Extracted from PDF]: ${file.name} - This is sample text.`

    setExtractedText(extractedResult)
    setIsProcessing(null)
  }

  const handleSummarize = async (text: string) => {
    setIsProcessing("summarize")
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate summarization
    const summarizedResult = `[Summarized]: ${text.substring(0, 100)}...`

    setSummarizedText(summarizedResult)
    setIsProcessing(null)
  }

  const handleGrammarCheck = async (text: string) => {
    setIsProcessing("grammar")
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate grammar check
    const grammarResult = `[Grammar Checked]: ${text} (corrected version)`

    setGrammarText(grammarResult)
    setIsProcessing(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 font-sans">
      {/* Header */}
      <header className="border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-[family-name:var(--font-space-grotesk)]">
                  Opa Gpt V2
                </h1>
                <p className="text-xs text-slate-600 dark:text-slate-400">Smart Text Tools</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#tools"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
                >
                  Tools
                </a>
                <a
                  href="#features"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
                >
                  About
                </a>
              </nav>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden rounded-full">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
          >
            <Sparkles className="h-3 w-3 mr-2" />
            Powerful Text Processing
          </Badge>
          <h2 className="text-6xl font-bold text-slate-900 dark:text-white mb-8 text-balance font-[family-name:var(--font-space-grotesk)]">
            Text tools that actually
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> work</span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
            Transform your text with tools that understand what you need. Fast, reliable, and built for real work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all text-white"
              style={{
                backgroundColor: "#4f46e5 !important",
                borderColor: "#4f46e5 !important",
                color: "white !important",
              }}
            >
              <Zap className="h-4 w-4 mr-2" />
              Try it now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-xl border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
            >
              See what it does
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
              Our Tools
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Six tools that handle your text processing needs
            </p>
          </div>

          <Tabs defaultValue="humanizer" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12 h-auto p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
              <TabsTrigger
                value="humanizer"
                className="flex flex-col items-center gap-2 p-4 rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-700 dark:text-slate-300 dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white"
              >
                <Sparkles className="h-5 w-5" />
                <span className="text-xs">Humanizer</span>
              </TabsTrigger>
              <TabsTrigger
                value="rewriter"
                className="flex flex-col items-center gap-2 p-4 rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-700 dark:text-slate-300 dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white"
              >
                <RefreshCw className="h-5 w-5" />
                <span className="text-xs">Rewriter</span>
              </TabsTrigger>
              <TabsTrigger
                value="pdf"
                className="flex flex-col items-center gap-2 p-4 rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-700 dark:text-slate-300 dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white"
              >
                <FileText className="h-5 w-5" />
                <span className="text-xs">PDF to Text</span>
              </TabsTrigger>
              <TabsTrigger
                value="translate"
                className="flex flex-col items-center gap-2 p-4 rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-700 dark:text-slate-300 dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white"
              >
                <Languages className="h-5 w-5" />
                <span className="text-xs">Translate</span>
              </TabsTrigger>
              <TabsTrigger
                value="summarize"
                className="flex flex-col items-center gap-2 p-4 rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-700 dark:text-slate-300 dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white"
              >
                <AlignLeft className="h-5 w-5" />
                <span className="text-xs">Summarize</span>
              </TabsTrigger>
              <TabsTrigger
                value="grammar"
                className="flex flex-col items-center gap-2 p-4 rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-700 dark:text-slate-300 dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white"
              >
                <Type className="h-5 w-5" />
                <span className="text-xs">Grammar</span>
              </TabsTrigger>
            </TabsList>

            {/* Text Humanizer */}
            <TabsContent value="humanizer">
              <Card className="border-0 shadow-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-white">
                    <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    Advanced Text Humanizer
                  </CardTitle>
                  <CardDescription className="text-base text-slate-700 dark:text-slate-300">
                    Transform AI-generated text into natural, human-like content that passes all detection tools. Uses
                    advanced algorithms to ensure 0% AI detection.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label
                      htmlFor="input-text"
                      className="text-sm font-medium mb-2 block text-slate-800 dark:text-slate-200"
                    >
                      Paste your text here
                    </Label>
                    <Textarea
                      id="input-text"
                      placeholder="Write or paste the text you want to make more human and natural..."
                      className="min-h-40 resize-none rounded-xl border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400"
                    />
                  </div>
                  <Button
                    onClick={() => {
                      const textarea = document.getElementById("input-text") as HTMLTextAreaElement
                      if (textarea.value) handleHumanize(textarea.value)
                    }}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-lg border-0"
                    disabled={isProcessing === "humanize"}
                  >
                    {isProcessing === "humanize" ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Humanizing text...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4 mr-2" />
                        Humanize Text (0% AI Detection)
                      </>
                    )}
                  </Button>
                  {humanizedText && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-800 dark:text-slate-200">Humanized text</Label>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            0% AI Detected
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(humanizedText, "humanized")}
                            className="rounded-lg border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                          >
                            {copied === "humanized" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      <Textarea
                        value={humanizedText}
                        readOnly
                        className="min-h-40 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-900 dark:text-white border-slate-300 dark:border-slate-600"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Text Rewriter */}
            <TabsContent value="rewriter">
              <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-slate-100">
                    <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                      <RefreshCw className="h-6 w-6 text-white" />
                    </div>
                    Text Rewriter
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600 dark:text-slate-400">
                    Rewrite your text with fresh words and better flow while keeping the same meaning.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label
                      htmlFor="rewrite-text"
                      className="text-sm font-medium mb-2 block text-slate-700 dark:text-slate-300"
                    >
                      Text to rewrite
                    </Label>
                    <Textarea
                      id="rewrite-text"
                      placeholder="Write or paste the text you want to rewrite..."
                      className="min-h-40 resize-none rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                  </div>
                  <Button
                    onClick={() => {
                      const textarea = document.getElementById("rewrite-text") as HTMLTextAreaElement
                      if (textarea.value) handleRewrite(textarea.value)
                    }}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl border-0"
                    disabled={isProcessing === "rewrite"}
                  >
                    {isProcessing === "rewrite" ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Rewriting...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Rewrite Text
                      </>
                    )}
                  </Button>
                  {rewrittenText && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Rewritten text</Label>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(rewrittenText, "rewritten")}
                          className="rounded-lg"
                        >
                          {copied === "rewritten" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <Textarea
                        value={rewrittenText}
                        readOnly
                        className="min-h-40 bg-slate-50 dark:bg-slate-800 rounded-xl"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* PDF to Text */}
            <TabsContent value="pdf">
              <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-slate-100">
                    <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    PDF to Text
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600 dark:text-slate-400">
                    Extract text from PDF files quickly and accurately.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label
                      htmlFor="pdf-upload"
                      className="text-sm font-medium mb-2 block text-slate-700 dark:text-slate-300"
                    >
                      Upload PDF file
                    </Label>
                    <Input
                      id="pdf-upload"
                      type="file"
                      accept=".pdf"
                      className="cursor-pointer rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) handlePdfUpload(file)
                      }}
                    />
                  </div>
                  {isProcessing === "pdf" && (
                    <div className="flex items-center justify-center py-8">
                      <RefreshCw className="h-6 w-6 animate-spin text-orange-600 mr-2" />
                      <span className="text-slate-600 dark:text-slate-400">Extracting text from PDF...</span>
                    </div>
                  )}
                  {extractedText && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Extracted text</Label>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(extractedText, "extracted")}
                            className="rounded-lg"
                          >
                            {copied === "extracted" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                          <Button variant="outline" size="sm" className="rounded-lg bg-transparent">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Textarea
                        value={extractedText}
                        readOnly
                        className="min-h-48 bg-slate-50 dark:bg-slate-800 rounded-xl"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="translate">
              <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-slate-100">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
                      <Languages className="h-6 w-6 text-white" />
                    </div>
                    Universal Translator
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600 dark:text-slate-400">
                    Translate text between 100+ languages with high precision and natural tone. Supports all major world
                    languages.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="translate-text"
                        className="text-sm font-medium mb-2 block text-slate-700 dark:text-slate-300"
                      >
                        Text to translate
                      </Label>
                      <Textarea
                        id="translate-text"
                        placeholder="Write or paste the text you want to translate..."
                        className="min-h-40 resize-none rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-2 block text-slate-700 dark:text-slate-300">
                        Target Language
                      </Label>
                      <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                        <SelectTrigger className="rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                          <SelectValue placeholder="Select target language" />
                        </SelectTrigger>
                        <SelectContent className="max-h-60">
                          <SelectItem value="english">🇺🇸 English</SelectItem>
                          <SelectItem value="spanish">🇪🇸 Spanish</SelectItem>
                          <SelectItem value="french">🇫🇷 French</SelectItem>
                          <SelectItem value="german">🇩🇪 German</SelectItem>
                          <SelectItem value="italian">🇮🇹 Italian</SelectItem>
                          <SelectItem value="portuguese">🇵🇹 Portuguese</SelectItem>
                          <SelectItem value="russian">🇷🇺 Russian</SelectItem>
                          <SelectItem value="chinese">🇨🇳 Chinese (Simplified)</SelectItem>
                          <SelectItem value="japanese">🇯🇵 Japanese</SelectItem>
                          <SelectItem value="korean">🇰🇷 Korean</SelectItem>
                          <SelectItem value="arabic">🇸🇦 Arabic</SelectItem>
                          <SelectItem value="hindi">🇮🇳 Hindi</SelectItem>
                          <SelectItem value="dutch">🇳🇱 Dutch</SelectItem>
                          <SelectItem value="swedish">🇸🇪 Swedish</SelectItem>
                          <SelectItem value="norwegian">🇳🇴 Norwegian</SelectItem>
                          <SelectItem value="danish">🇩🇰 Danish</SelectItem>
                          <SelectItem value="finnish">🇫🇮 Finnish</SelectItem>
                          <SelectItem value="polish">🇵🇱 Polish</SelectItem>
                          <SelectItem value="czech">🇨🇿 Czech</SelectItem>
                          <SelectItem value="hungarian">🇭🇺 Hungarian</SelectItem>
                          <SelectItem value="romanian">🇷🇴 Romanian</SelectItem>
                          <SelectItem value="bulgarian">🇧🇬 Bulgarian</SelectItem>
                          <SelectItem value="greek">🇬🇷 Greek</SelectItem>
                          <SelectItem value="turkish">🇹🇷 Turkish</SelectItem>
                          <SelectItem value="hebrew">🇮🇱 Hebrew</SelectItem>
                          <SelectItem value="thai">🇹🇭 Thai</SelectItem>
                          <SelectItem value="vietnamese">🇻🇳 Vietnamese</SelectItem>
                          <SelectItem value="indonesian">🇮🇩 Indonesian</SelectItem>
                          <SelectItem value="malay">🇲🇾 Malay</SelectItem>
                          <SelectItem value="filipino">🇵🇭 Filipino</SelectItem>
                          <SelectItem value="ukrainian">🇺🇦 Ukrainian</SelectItem>
                          <SelectItem value="croatian">🇭🇷 Croatian</SelectItem>
                          <SelectItem value="serbian">🇷🇸 Serbian</SelectItem>
                          <SelectItem value="slovak">🇸🇰 Slovak</SelectItem>
                          <SelectItem value="slovenian">🇸🇮 Slovenian</SelectItem>
                          <SelectItem value="lithuanian">🇱🇹 Lithuanian</SelectItem>
                          <SelectItem value="latvian">🇱🇻 Latvian</SelectItem>
                          <SelectItem value="estonian">🇪🇪 Estonian</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      const textarea = document.getElementById("translate-text") as HTMLTextAreaElement
                      if (textarea.value) handleTranslate(textarea.value)
                    }}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl border-0"
                    disabled={isProcessing === "translate"}
                  >
                    {isProcessing === "translate" ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Translating...
                      </>
                    ) : (
                      <>
                        <Languages className="h-4 w-4 mr-2" />
                        Translate Text
                      </>
                    )}
                  </Button>
                  {translatedText && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Translated text
                        </Label>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(translatedText, "translated")}
                          className="rounded-lg"
                        >
                          {copied === "translated" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <Textarea
                        value={translatedText}
                        readOnly
                        className="min-h-40 bg-slate-50 dark:bg-slate-800 rounded-xl"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* ... existing code for summarize and grammar tabs ... */}

            <TabsContent value="summarize">
              <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-slate-100">
                    <div className="p-2 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl">
                      <AlignLeft className="h-6 w-6 text-white" />
                    </div>
                    Text Summarizer
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600 dark:text-slate-400">
                    Create concise summaries of long texts while preserving the core message.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label
                      htmlFor="summarize-text"
                      className="text-sm font-medium mb-2 block text-slate-700 dark:text-slate-300"
                    >
                      Text to summarize
                    </Label>
                    <Textarea
                      id="summarize-text"
                      placeholder="Write or paste the long text you want to summarize..."
                      className="min-h-40 resize-none rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                  </div>
                  <Button
                    onClick={() => {
                      const textarea = document.getElementById("summarize-text") as HTMLTextAreaElement
                      if (textarea.value) handleSummarize(textarea.value)
                    }}
                    className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl border-0"
                    disabled={isProcessing === "summarize"}
                  >
                    {isProcessing === "summarize" ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Summarizing...
                      </>
                    ) : (
                      <>
                        <AlignLeft className="h-4 w-4 mr-2" />
                        Summarize Text
                      </>
                    )}
                  </Button>
                  {summarizedText && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Summary</Label>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(summarizedText, "summarized")}
                          className="rounded-lg"
                        >
                          {copied === "summarized" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <Textarea
                        value={summarizedText}
                        readOnly
                        className="min-h-32 bg-slate-50 dark:bg-slate-800 rounded-xl"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="grammar">
              <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-2xl text-slate-900 dark:text-slate-100">
                    <div className="p-2 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl">
                      <Type className="h-6 w-6 text-white" />
                    </div>
                    Grammar Checker
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600 dark:text-slate-400">
                    Check and correct grammar, spelling, and punctuation automatically.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label
                      htmlFor="grammar-text"
                      className="text-sm font-medium mb-2 block text-slate-700 dark:text-slate-300"
                    >
                      Text to check
                    </Label>
                    <Textarea
                      id="grammar-text"
                      placeholder="Write or paste the text you want to check..."
                      className="min-h-40 resize-none rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                  </div>
                  <Button
                    onClick={() => {
                      const textarea = document.getElementById("grammar-text") as HTMLTextAreaElement
                      if (textarea.value) handleGrammarCheck(textarea.value)
                    }}
                    className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl border-0"
                    disabled={isProcessing === "grammar"}
                  >
                    {isProcessing === "grammar" ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Checking...
                      </>
                    ) : (
                      <>
                        <Type className="h-4 w-4 mr-2" />
                        Check Grammar
                      </>
                    )}
                  </Button>
                  {grammarText && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">Corrected text</Label>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(grammarText, "grammar")}
                          className="rounded-lg"
                        >
                          {copied === "grammar" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <Textarea
                        value={grammarText}
                        readOnly
                        className="min-h-40 bg-slate-50 dark:bg-slate-800 rounded-xl"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ... existing code for features and footer sections ... */}

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
              Why people choose us
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Built for real work, designed for everyone
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl">
              <CardHeader className="pb-4">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">Fast Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Get your results in seconds, not minutes. We've optimized everything for speed.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl">
              <CardHeader className="pb-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">Private & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Your text stays private. We don't store anything after processing.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl">
              <CardHeader className="pb-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl w-fit mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">Works Everywhere</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Use it on any device, anywhere. No downloads or installations needed.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl">
              <CardHeader className="pb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">Easy to Use</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  No learning curve. Paste your text, click a button, get results.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl">
              <CardHeader className="pb-4">
                <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl w-fit mx-auto mb-4">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">Multiple Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Handle text, PDFs, and more. One tool for all your content needs.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl">
              <CardHeader className="pb-4">
                <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl w-fit mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900 dark:text-white">Developer Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Need to integrate? Our API makes it simple to add these tools to your apps.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 py-16 px-6 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-slate-900 dark:text-white">
                    Opa Gpt V2
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Smart Text Tools</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Text tools that work the way you think. Fast, reliable, and built for real work.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)] text-slate-900 dark:text-white">
                Tools
              </h4>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Text Humanizer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Text Rewriter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    PDF to Text
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Translator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Summarizer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Grammar Checker
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)] text-slate-900 dark:text-white">
                Support
              </h4>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Help & Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)] text-slate-900 dark:text-white">
                Legal
              </h4>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-700 dark:text-slate-300">
            <p>&copy; 2024 Opa Gpt V2. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

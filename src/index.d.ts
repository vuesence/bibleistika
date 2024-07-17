interface VerseToken {
  tr: string
  sc?: StrongsConcordance
  sn?: string
  ow?: string
}

interface Verse {
  data?: string
  vid: string
  tokens: Token[]
  text: string
  sourceLang?: string
  translationTitle?: string
}

interface StrongsConcordance {
  sn: string
  lemma: string
  tr: string
  pr: string
  desc: string
  f: number
}

interface Settings {
  fontSize: string
  darkMode: boolean
  showStrongsNumber: boolean
  showStrongsLemma: boolean
  highlightSearch: boolean
  showTooltipInList: boolean
  showMasoreticRTL: boolean
}

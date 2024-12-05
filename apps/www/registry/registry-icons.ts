export const iconLibraries = {
  lucide: {
    name: "lucide-react",
    package: "lucide-react",
    import: "lucide-react",
  },
  radix: {
    name: "@radix-ui/react-icons",
    package: "@radix-ui/react-icons",
    import: "@radix-ui/react-icons",
  },
  eva: {
    name: "eva-icons",
    package: "eva-icons",
    import: "eva-icons",
  },
} as const

export const icons: Record<
  string,
  Record<keyof typeof iconLibraries, string>
> = {
  AlertCircle: {
    lucide: "AlertCircle",
    radix: "ExclamationTriangleIcon",
    eva: "AlertTriangle",
  },
  ArrowLeft: {
    lucide: "ArrowLeft",
    radix: "ArrowLeftIcon",
    eva: "ArrowLeft",
  },
  ArrowRight: {
    lucide: "ArrowRight",
    radix: "ArrowRightIcon",
    eva: "ArrowRight",
  },
  ArrowUpDown: {
    lucide: "ArrowUpDown",
    radix: "CaretSortIcon",
    eva: "ArrowDown",
  },
  BellRing: {
    lucide: "BellRing",
    radix: "BellIcon",
    eva: "Bell",
  },
  Bold: {
    lucide: "Bold",
    radix: "FontBoldIcon",
    eva: "QuestionMarkCircle",
  },
  Calculator: {
    lucide: "Calculator",
    radix: "ComponentPlaceholderIcon",
    eva: "QuestionMarkCircle",
  },
  Calendar: {
    lucide: "Calendar",
    radix: "CalendarIcon",
    eva: "Calendar",
  },
  Check: {
    lucide: "Check",
    radix: "CheckIcon",
    eva: "CheckMarkCircle2",
  },
  ChevronDown: {
    lucide: "ChevronDown",
    radix: "ChevronDownIcon",
    eva: "ChevronDown",
  },
  ChevronLeft: {
    lucide: "ChevronLeft",
    radix: "ChevronLeftIcon",
    eva: "ChevronLeft",
  },
  ChevronRight: {
    lucide: "ChevronRight",
    radix: "ChevronRightIcon",
    eva: "ChevronRight",
  },
  ChevronUp: {
    lucide: "ChevronUp",
    radix: "ChevronUpIcon",
    eva: "ChevronUp",
  },
  ChevronsUpDown: {
    lucide: "ChevronsUpDown",
    radix: "CaretSortIcon",
    eva: "QuestionMarkCircle",
  },
  Circle: {
    lucide: "Circle",
    radix: "DotFilledIcon",
    eva: "QuestionMarkCircle",
  },
  Copy: {
    lucide: "Copy",
    radix: "CopyIcon",
    eva: "Copy",
  },
  CreditCard: {
    lucide: "CreditCard",
    radix: "ComponentPlaceholderIcon",
    eva: "CreditCard",
  },
  GripVertical: {
    lucide: "GripVertical",
    radix: "DragHandleDots2Icon",
    eva: "QuestionMarkCircle",
  },
  Italic: {
    lucide: "Italic",
    radix: "FontItalicIcon",
    eva: "QuestionMarkCircle",
  },
  Loader2: {
    lucide: "Loader2",
    radix: "ReloadIcon",
    eva: "Refresh",
  },
  Mail: {
    lucide: "Mail",
    radix: "EnvelopeClosedIcon",
    eva: "Email",
  },
  MailOpen: {
    lucide: "MailOpen",
    radix: "EnvelopeOpenIcon",
    eva: "QuestionMarkCircle",
  },
  Minus: {
    lucide: "Minus",
    radix: "MinusIcon",
    eva: "Minus",
  },
  Moon: {
    lucide: "Moon",
    radix: "MoonIcon",
    eva: "Moon",
  },
  MoreHorizontal: {
    lucide: "MoreHorizontal",
    radix: "DotsHorizontalIcon",
    eva: "MoreHorizontal",
  },
  PanelLeft: {
    lucide: "PanelLeft",
    radix: "ViewVerticalIcon",
    eva: "QuestionMarkCircle",
  },
  Plus: {
    lucide: "Plus",
    radix: "PlusIcon",
    eva: "Plus",
  },
  Search: {
    lucide: "Search",
    radix: "MagnifyingGlassIcon",
    eva: "Search",
  },
  Send: {
    lucide: "Send",
    radix: "PaperPlaneIcon",
    eva: "PaperPlane",
  },
  Settings: {
    lucide: "Settings",
    radix: "GearIcon",
    eva: "Settings",
  },
  Slash: {
    lucide: "Slash",
    radix: "SlashIcon",
    eva: "Slash",
  },
  Smile: {
    lucide: "Smile",
    radix: "FaceIcon",
    eva: "QuestionMarkCircle",
  },
  Sun: {
    lucide: "Sun",
    radix: "SunIcon",
    eva: "Sun",
  },
  Terminal: {
    lucide: "Terminal",
    radix: "RocketIcon",
    eva: "QuestionMarkCircle",
  },
  Underline: {
    lucide: "Underline",
    radix: "UnderlineIcon",
    eva: "QuestionMarkCircle",
  },
  User: {
    lucide: "User",
    radix: "PersonIcon",
    eva: "Person",
  },
  X: {
    lucide: "X",
    radix: "Cross2Icon",
    eva: "CrossCircle",
  },
} as const

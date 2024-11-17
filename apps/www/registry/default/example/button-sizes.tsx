import { Mail } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function ButtonSizes() {
  return (
    <div className="flex gap-2">
      <Button size="icon">
        <Mail />
      </Button>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button>Normal</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}

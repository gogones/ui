import { useState } from "react"

import { Label } from "@/registry/default/ui/label"
import { Switch } from "@/registry/default/ui/switch"

export default function SwitchDemo() {
  const [active, setActive] = useState(false)

  return (
    <div className="flex items-center space-x-2">
      <Switch id="active-mode" checked={active} onCheckedChange={setActive} />
      <Label htmlFor="active-mode">{active ? "Yes" : "No"}</Label>
    </div>
  )
}

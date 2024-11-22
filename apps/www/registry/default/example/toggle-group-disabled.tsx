import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "@untr/icons"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group"

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup disabled type="single">
      <ToggleGroupItem value="left" aria-label="Toggle align item">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Toggle align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Toggle align right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

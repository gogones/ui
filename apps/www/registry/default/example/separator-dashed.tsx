import { Separator } from "@/registry/default/ui/separator"

export default function SeparatorDashed() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" variant="dashed" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" variant="dashed" />
        <div>Docs</div>
        <Separator orientation="vertical" variant="dashed" />
        <div>Source</div>
      </div>
    </div>
  )
}

"use client"

import React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

interface SeparatorProps {
  orientation?: "horizontal" | "vertical"
  variant?: "default" | "dashed"
  className?: string
}

const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  variant = "default",
  className,
}) => {
  return (
    <SeparatorPrimitive.Root
      orientation={orientation}
      className={cn(
        "shrink-0", // Prevent flexbox from collapsing
        {
          // Orientation styles
          "w-full h-[1px]": orientation === "horizontal",
          "h-full w-[1px]": orientation === "vertical",

          // Variant styles
          "bg-gray-200": variant === "default",
          "border-none": variant === "default",
          "border-dashed border-[0.5px] border-gray-300": variant === "dashed",
        },
        className
      )}
    />
  )
}

Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

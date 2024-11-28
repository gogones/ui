import * as React from "react"

import { cn } from "@/lib/utils"

const TableGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full text-sm", className)} {...props} />
))
TableGrid.displayName = "TableGrid"

const TableGridHead = React.forwardRef<
  HTMLDivElement,
  React.ThHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-primary mb-1 grid h-12 content-center rounded-lg px-4",
      className
    )}
    {...props}
  />
))
TableGridHead.displayName = "TableGridHead"

const TableGridHeadCell = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("font-semibold text-gray-900", className)}
      {...props}
    />
  )
})
TableGridHeadCell.displayName = "TableGridHeadCell"

const TableGridBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-1", className)} {...props} />
))
TableGridBody.displayName = "TableGridBody"

const TableGridRow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "light:bg-white grid rounded-lg p-4 shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:border-2 dark:border-gray-900",
      className
    )}
    {...props}
  />
))
TableGridRow.displayName = "TableGridRow"

const TableGridCell = React.forwardRef<
  HTMLDivElement,
  React.TdHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-0 font-semibold", className)} {...props} />
))
TableGridCell.displayName = "TableGridCell"

export {
  TableGrid,
  TableGridBody,
  TableGridHead,
  TableGridHeadCell,
  TableGridRow,
  TableGridCell,
}

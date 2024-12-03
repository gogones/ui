import { Column } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/registry/default/ui/button"

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return (
      <div
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "hover:bg-[unset]",
          "px-[unset]",
          "h-8",
          className
        )}
      >
        {title}
      </div>
    )
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 px-4"
        onClick={column.getToggleSortingHandler()}
      >
        <span>{title}</span>
        {column.getIsSorted() === "desc" ? (
          <ArrowDown />
        ) : column.getIsSorted() === "asc" ? (
          <ArrowUp />
        ) : (
          <ChevronsUpDown />
        )}
      </Button>
    </div>
  )
}

import { useRef } from "react"
import { Table } from "@tanstack/react-table"
import { Search } from "lucide-react"

import { usePagination } from "@/registry/default/hooks/use-pagination"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationNumber,
  PaginationPrevious,
} from "@/registry/default/ui/pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const inputRef = useRef<HTMLInputElement>(null)
  const pagination = usePagination({
    count: table.getFilteredRowModel().rows.length,
    page: table.getState().pagination.pageIndex + 1,
  })

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Show</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-full w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm font-medium">Entries</p>
        </div>
      </div>

      <div className="flex items-center space-x-6 lg:space-x-8">
        <Pagination>
          <PaginationContent>
            {pagination.items.map((item, index) => {
              const paginationItems = {
                page: (
                  <PaginationNumber
                    key={index}
                    onClick={() => table.setPageIndex((item.page ?? 0) - 1)}
                    disabled={item.disabled}
                    isActive={item.selected}
                    className="font-semibold"
                  >
                    {item.page}
                  </PaginationNumber>
                ),
                "start-ellipsis": <PaginationEllipsis key={index} />,
                "end-ellipsis": <PaginationEllipsis key={index} />,
                previous: (
                  <PaginationPrevious
                    key={index}
                    onClick={() => table.previousPage()}
                    disabled={item.disabled}
                  />
                ),
                next: (
                  <PaginationNext
                    key={index}
                    onClick={() => table.nextPage()}
                    disabled={item.disabled}
                  />
                ),
                first: undefined,
                last: undefined,
              } as const

              return (
                <PaginationItem key={index}>
                  {paginationItems[item.type]}
                </PaginationItem>
              )
            })}
          </PaginationContent>
        </Pagination>

        <div className="flex items-center gap-4 text-sm font-medium text-gray-800">
          <span className="flex-1">Go to</span>
          <form
            className="flex grow-0 items-center"
            onSubmit={(e) => {
              e.preventDefault()
              table.setPageIndex((inputRef.current?.valueAsNumber ?? 0) - 1)

              if (inputRef.current) {
                inputRef.current.value = ""
              }
            }}
          >
            <div className="flex items-center rounded-sm border border-gray-200 bg-white p-2 shadow-sm">
              <span className="mr-1">Page</span>
              <input
                ref={inputRef}
                type="number"
                min={1}
                className="no-arrow-number w-4 font-semibold focus:outline-none"
                aria-label="Page number"
              />
              <button
                type="submit"
                className="hover:bg-primary/400 ml-2 rounded-[6px] bg-primary p-1 transition-colors"
                aria-label="Go to page"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

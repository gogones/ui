import { Table } from "@tanstack/react-table"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react"

import { usePagination } from "@/registry/default/hooks/use-pagination"
import { Button } from "@/registry/default/ui/button"
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
            <SelectTrigger className="h-8 w-[70px]">
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
        <div className="flex items-center space-x-2">
          {pagination.items.map((item, index) => {
            switch (item.type) {
              case "page":
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.setPageIndex(item.page - 1)}
                    disabled={item.disabled}
                  >
                    {item.page}
                  </Button>
                )
              case "start-ellipsis":
                return (
                  <span key={index} className="text-sm">
                    ...
                  </span>
                )
              case "end-ellipsis":
                return (
                  <span key={index} className="text-sm">
                    ...
                  </span>
                )
              case "first":
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.setPageIndex(0)}
                    disabled={item.disabled}
                  >
                    <span className="sr-only">Go to first page</span>
                    <ChevronsLeft />
                  </Button>
                )
              case "previous":
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.previousPage()}
                    disabled={item.disabled}
                  >
                    <span className="sr-only">Go to previous page</span>
                    <ChevronLeft />
                  </Button>
                )
              case "next":
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.nextPage()}
                    disabled={item.disabled}
                  >
                    <span className="sr-only">Go to next page</span>
                    <ChevronRight />
                  </Button>
                )
              case "last":
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={item.disabled}
                  >
                    <span className="sr-only">Go to last page</span>
                    <ChevronsRight />
                  </Button>
                )
            }
          })}
        </div>

        <div className="flex items-center gap-4 text-sm font-medium text-gray-800">
          <span>Go to</span>
          <form className="flex items-center">
            <div className="flex items-center rounded-sm border border-gray-200 bg-white p-2 shadow-sm">
              <span className="mr-1">Page</span>
              <input
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

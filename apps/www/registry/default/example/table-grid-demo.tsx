import {
  TableGrid,
  TableGridBody,
  TableGridCell,
  TableGridHead,
  TableGridHeadCell,
  TableGridRow,
} from "@/registry/default/ui/table-grid"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function TableDemo() {
  return (
    <TableGrid>
      <TableGridHead className="grid-cols-4">
        <TableGridHeadCell>Invoice</TableGridHeadCell>
        <TableGridHeadCell>Status</TableGridHeadCell>
        <TableGridHeadCell>Method</TableGridHeadCell>
        <TableGridHeadCell className="text-right">Amount</TableGridHeadCell>
      </TableGridHead>

      <TableGridBody>
        {invoices.map((invoice) => (
          <TableGridRow key={invoice.invoice} className="grid-cols-4">
            <TableGridCell className="font-medium">
              {invoice.invoice}
            </TableGridCell>
            <TableGridCell>{invoice.paymentStatus}</TableGridCell>
            <TableGridCell>{invoice.paymentMethod}</TableGridCell>
            <TableGridCell className="text-right">
              {invoice.totalAmount}
            </TableGridCell>
          </TableGridRow>
        ))}
      </TableGridBody>
    </TableGrid>
  )
}

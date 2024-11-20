import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert"
import {WarningErrorIcon} from "@untr/icons";

export default function AlertWarning() {
  return (
    <Alert variant="warning">
      <WarningErrorIcon />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}

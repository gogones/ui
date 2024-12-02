import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/gogones.png" alt="@shadcn" />
      <AvatarFallback>GO</AvatarFallback>
    </Avatar>
  )
}

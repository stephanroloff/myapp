import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchComponent() {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}

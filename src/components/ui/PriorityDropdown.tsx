// components/PriorityDropdown.tsx

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

type Priority = "low" | "medium" | "high";

interface PriorityDropdownProps {
  onSelect: (priority: Priority) => void;
  current?: Priority;
}

const priorityColors = {
  low: "text-green-500",
  medium: "text-yellow-500",
  high: "text-red-500",
};

const PriorityDropdown = ({ onSelect, current }: PriorityDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="border-2 w-1/2 h-full flex items-center justify-start px-4 py-3"
          variant="ghost"
          size="icon"
        >
          <span>
            {current ? (
              <p className="capitalize">{current}</p>
            ) : (
              <p>Set Priority</p>
            )}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {(["low", "medium", "high"] as Priority[]).map((p) => (
          <DropdownMenuItem
            key={p}
            onClick={() => onSelect(p)}
            className="flex items-center gap-2"
          >
            <span className={`text-lg ${priorityColors[p]}`}>●</span>
            <span className="capitalize">{p}</span>
            {current === p && (
              <span className="ml-auto text-xs text-muted-foreground">
                Selected
              </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PriorityDropdown;

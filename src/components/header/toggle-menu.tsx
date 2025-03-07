import { cn } from "@/lib";

interface ToggleMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ToggleMenu = ({ open, setOpen }: ToggleMenuProps) => (
  <button
    type="button"
    className="fixed right-4 top-4 z-50 border-0 bg-transparent text-2xl transition-all duration-400
             outline-none focus:outline-none leading-none cursor-pointer text-right xl:hidden"
  >
    <i
      className={cn(
        "text-primary",
        open ? "icofont-close" : "icofont-navigation-menu",
      )}
      onClick={() => setOpen(!open)}
    ></i>
  </button>
);

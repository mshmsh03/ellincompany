import * as React from "react"
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

// Variants below are Ellin's own button system (previously .btn-primary /
// .btn-white / .btn-ghost / .btn-dark / .btn-outline in the old stylesheet),
// layered onto shadcn's Button shape. `secondary`/`destructive`/`link` are
// left as shadcn's generated defaults — unused today, kept as standard UI
// primitives for future work.
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2.5 rounded-[3px] border-[1.5px] border-transparent bg-clip-padding text-[14.5px] font-bold tracking-[.02em] whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[15px] [&_svg]:transition-transform [&_svg]:duration-300 rtl:[&_svg]:-scale-x-100 hover:[&_svg]:translate-x-[3px] rtl:hover:[&_svg]:-translate-x-[3px]",
  {
    variants: {
      variant: {
        default: "bg-brand text-white hover:bg-brand-dark hover:shadow-[0_10px_24px_rgba(0,98,140,.3)]",
        white: "bg-white text-brand hover:bg-brand hover:text-white",
        heroOutline: "border-white/55 text-white hover:border-white hover:bg-white hover:text-brand-darker",
        dark: "bg-brand-darker text-white hover:bg-brand",
        outline: "border-brand text-brand hover:bg-brand hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "border-none hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "border-none text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-auto px-[30px] py-4",
        icon: "size-8 rounded-md",
        "icon-sm": "size-7 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }

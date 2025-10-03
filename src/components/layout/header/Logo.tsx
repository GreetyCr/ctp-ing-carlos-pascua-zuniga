import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  collegeName: string;
  className?: string;
}

export default function Logo({ collegeName, className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image 
        src="/images/logo/logo.png" 
        alt={collegeName} 
        width={150} 
        height={150}
        className="max-w-[150px] max-h-[150px] scale-x-[-1]"
      />
    </div>
  );
}

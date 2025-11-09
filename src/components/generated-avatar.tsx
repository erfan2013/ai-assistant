import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GeneratedAvatarProps {
  seed: string;
  variant?: "botttsNeutral" | "initials";
  className?: string;
}

export const GeneratedAvatar = ({
  seed,
  variant = "initials",
  className,
}: GeneratedAvatarProps) => {
  let avatarSvg: string;

  if (variant === "botttsNeutral") {
    const avatar = createAvatar(botttsNeutral, {
      seed,
    });
    avatarSvg = avatar.toDataUri();
  } else {
    const avatar = createAvatar(initials, {
      seed,
      fontWeight: 500,
      fontSize: 42,
    });
    avatarSvg = avatar.toDataUri();
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatarSvg} alt="Generated Avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export default GeneratedAvatar;

import { getByAuth } from "@/actions/user.action";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LogoutButton } from "./auth/logout-button";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

export default async function ProfileMenu() {
  const result = await getByAuth();
  if (result.error) {
    throw new Error(result.error.message);
  }
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-white bg-[#103438] rounded-[10px] border-transparent">
          <DropdownMenuItem className="text-[18px] font-medium">
            <CgProfile className="mr-2" />
            Manage Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-[18px] font-medium">
            <TbLogout className="mr-2" />
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

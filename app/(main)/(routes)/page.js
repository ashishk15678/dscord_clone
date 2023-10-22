import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../../../components/mode-toggle";
import InitialModal from "@/components/modals/initial-modal";
import { Dialog } from "@radix-ui/react-dialog";
export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle></ModeToggle>
      <InitialModal></InitialModal>
    </div>
  );
}

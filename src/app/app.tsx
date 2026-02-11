import { getUsername } from "@/shared/lib/username";
import ModalComponent from "@/widgets/components/Modal";

export default function App() {
	return <ModalComponent isOpen={!getUsername()} />;
}

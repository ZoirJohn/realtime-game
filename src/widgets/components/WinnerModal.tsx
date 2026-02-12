import { Button } from "@heroui/button";
import { Modal, ModalContent, ModalBody, ModalFooter } from "@heroui/modal";
export default function WinnerModal({ isOpen, onOpenChange, onRestart, won }: { isOpen: boolean; onOpenChange: () => void; onRestart?: () => {}; won: boolean}) {
	return (
		<Modal isOpen={isOpen} onOpenChange={onOpenChange} className={won ? "bg-success" : "bg-danger"}>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalBody className="pt-12 pb-6 text-center">
							<h2 className="text-5xl">{won ? "You Won 😃" : "You Lost 😢"}</h2>
						</ModalBody>
						<ModalFooter>
							<Button color={won ? "warning" : "secondary"} variant="bordered" className="text-black" onPress={onClose}>
								Dismiss
							</Button>
							<Button color={won ? "warning" : "secondary"} onPress={onRestart}>
								Restart
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}

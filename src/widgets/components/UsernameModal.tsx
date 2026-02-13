import { ChangeEvent, FormEvent, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { getUsername, setUsername as setUser } from "@/shared/lib/username";

export default function UsernameModal({ isOpen, setUsername }: { isOpen: boolean; setUsername: (value: string) => void }) {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen);
	const [fieldValue, setFieldValue] = useState<string>("");

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setUser(fieldValue);
		setUsername(getUsername() || "");
		setIsModalOpen(false);
	};
	const changeFieldValue = (e: ChangeEvent<HTMLInputElement>) => {
		setFieldValue(e.target.value);
	};
	const validate = (value: string) => {
		if (value.length < 3) return "Username must be at least 3 characters long";
		return null;
	};
	return (
		<>
			<Modal isDismissable={false} isKeyboardDismissDisabled={true} isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
				<ModalContent>
					{() => (
						<>
							<ModalHeader className="flex flex-col gap-1 ">Username</ModalHeader>
							<Form className="w-full" onSubmit={onSubmit}>
								<ModalBody className="w-full">
									<Input isRequired name="username" value={fieldValue} onChange={changeFieldValue} validate={validate} />
								</ModalBody>
								<ModalFooter className="flex justify-end w-full">
									<Button color="primary" type="submit">
										Confirm
									</Button>
								</ModalFooter>
							</Form>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

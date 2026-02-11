import { ChangeEvent, FormEvent, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { setUsername } from "@/shared/lib/username";

export default function ModalComponent({ isOpen }: { isOpen: boolean }) {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen);
	const [isLoading, setIsLoading] = useState(false);
	const [fieldValue, setFieldValue] = useState<string>("");

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setUsername(fieldValue);
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
							<ModalHeader className="flex flex-col gap-1">Username</ModalHeader>
							<Form className="w-full" onSubmit={onSubmit}>
								<ModalBody className="w-full">
									<Input isRequired isDisabled={isLoading} name="username" value={fieldValue} onChange={changeFieldValue} validate={validate} />
								</ModalBody>
								<ModalFooter className="flex justify-end w-full">
									<Button color="primary" isLoading={isLoading} type="submit">
										Submit
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

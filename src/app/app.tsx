import { getUsername } from "@/shared/lib/username";
import { useEffect, useState } from "react";
import calculateWinner from "@/shared/lib/calculateWinner";
import Board from "@/widgets/components/Board";
import UsernameModal from "@/widgets/components/UsernameModal";
import WinnerModal from "@/widgets/components/WinnerModal";
import cross from "../shared/img/cross.png";
import zero from "../shared/img/zero.png";

export default function App() {
	const [user, setUser] = useState<TBoxValue>(null);
	const [username, setUsername] = useState<string>("");
	const [xIsNext, setXIsNext] = useState(true);
	const [squares, setSquares] = useState<TBoxValue[]>(Array(9).fill(null));
	const [_, setIsWinnerModalOpen] = useState(true);

	useEffect(() => {
		setUser(decide());
	}, [username]);

	const winner = calculateWinner(squares);
	function handleClick(cell: number) {
		if (squares[cell] || winner) {
			return;
		}
		if (squares[cell]) return;

		const nextSquares = squares.slice();
		nextSquares[cell] = xIsNext ? "x" : "o";

		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	}
	function decide() {
		return Math.round(Math.random()) ? "x" : "o";
	}
	return (
		<main>
			<UsernameModal isOpen={!getUsername()} setUsername={(username: string) => setUsername(username)} />
			<section className="flex items-center min-h-screen text-content1 text-5xl">
				<ul className="bottom-10 left-15 absolute">
					<li className="flex gap-6 mb-4">
						<h2 className="font-fontdiner">{getUsername()}</h2>
						{user == "x" ? <img src={cross} alt="User sign" className="w-12" /> : <img src={zero} alt="User sign" className="w-12" />}
					</li>
					<li className="flex gap-6 mb-4">
						<h2 className="font-fontdiner">Win:</h2>
						<p className="font-fontdiner">0</p>
					</li>
					<li className="flex gap-6">
						<h2 className="font-fontdiner">Loss:</h2>
						<p className="font-fontdiner">0</p>
					</li>
				</ul>

				<Board handleClick={handleClick} squares={squares} />
			</section>

			<WinnerModal isOpen={winner != null} onOpenChange={() => setIsWinnerModalOpen(false)} won={winner == user} />
		</main>
	);
}

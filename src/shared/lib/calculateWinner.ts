export default function calculateWinner(boxes: TBoxValue[]) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		// horizontal
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		// vertical
		[0, 4, 8],
		[2, 4, 6],
		// diagonal
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
			return boxes[a];
		}
	}
	return null;
}

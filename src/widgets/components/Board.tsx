import cross from "../../shared/img/cross.png";
import zero from "../../shared/img/zero.png";

export default function Board({ squares, handleClick }: { squares: TBoxValue[]; handleClick: (i: number) => void }) {
	return (
		<>
			<div className="gap-1 grid grid-cols-3 grid-rows-3 mx-auto w-96 h-96">
				{squares.map((value, i) => {
					return <Box value={value} onBoxClick={() => handleClick(i)} key={i} />;
				})}
			</div>
		</>
	);
}

function Box({ value, onBoxClick }: { value: TBoxValue; onBoxClick: () => void }) {
	return (
		<div className="flex justify-center items-center bg-foreground/30 rounded cursor-pointer" onClick={onBoxClick}>
			{value == "x" ? <img src={cross} className="w-20 h-20" /> : value == "o" ? <img src={zero} className="w-20 h-20" /> : ""}
		</div>
	);
}

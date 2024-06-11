"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const Button = dynamic(() => import("./components/Button"));
const Card = dynamic(() => import("./components/Card"), {
	loading: () => <div>Loading...</div>
});
const Text = dynamic(() => import("./components/Text"));

export default function Home() {
	const [text, setText] = useState();
	const [active, setActive] = useState("Button")
	const [tabList] = useState([
		{
			name: "Button",
			comp: Button
		},
		{
			name: "Text",
			comp: Text
		},
		{
			name: "Card",
			comp: Card
		}
	]);
	const handleClick = () => {
		setText("hi");
	};

	const handleChange = (name) => {
		setActive(name)
	}
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Button />
			{text && <Card />}
			<Text />
			<button onClick={handleClick}>Click Me!</button>
			<br />
			<br /><br /><br /><br /><br />
			<div className="border-4 p-4 border-red-500 rounded-xl">

				<div>Tab List</div>
				<br />
				<div className="flex gap-5">

					{
						tabList.map(item => <div className="bg-blue-500 my-3 cursor-pointer hover:bg-blue-400 text-white p-2 rounded-md" onClick={() => handleChange(item.name)} key={item.name}>{item.name}</div>)
					}
				</div>
				<div>
					<p className="text-red-600 py-5">Click component names. Whichever component is active is visible.</p>
					<div className="bg-red-600 text-white flex justify-center rounded-lg  py-5">
						{
							tabList.find(item => item.name === active).comp()
						}
					</div>

				</div>
			</div>



		</main>
	);
}

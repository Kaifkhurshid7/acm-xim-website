import React, { useState } from "react";
import {
	categories,
	featured,
	otherNewsLetter,
} from "../../lib/data/project.data";
import { Search, Github, Globe, FileText } from "lucide-react";

const Main = () => {
	const [current, setCurrent] = useState(0);

	const selectedCategory = categories[current];

	const filteredNewsletters =
		selectedCategory === "All"
			? otherNewsLetter
			: otherNewsLetter.filter((item) => item.tags === selectedCategory);

	return (
		<div className="pb-20 max-w-screen">
			<Categories current={current} setCurrent={setCurrent} />
			<div className="py-4 md:py-12">
				<AllNewsletters newsletters={filteredNewsletters} />
			</div>
		</div>
	);
};

export default Main;

const Categories = ({ current, setCurrent }) => {
	return (
		<div className="flex text-xs md:text-xl xl:text-2xl justify-between border-b pb-3 px-2">
			<div className="flex gap-3 md:gap-12 ">
				{categories.map((item, i) => (
					<button
						onClick={() => setCurrent(i)}
						key={i}
						className={`font-inter ${current === i ? "text-blue-600" : "text-neutral-800"
							} cursor-pointer`}
					>
						{item}
					</button>
				))}
			</div>

			<div className="hidden md:block">
				<Search className="cursor-pointer" />
			</div>
		</div>
	);
};

const AllNewsletters = ({ newsletters }) => {
	return (
		<div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-10">
			{newsletters.map((item, i) => (
				<div
					key={i}
					className=" flex font-inter flex-col gap-5  pb-10 hover:bg-neutral-50/20 rounded-2xl border-b md:border-0 border-neutral-300 cursor-pointer"
				>
					<img
						src={item.img}
						alt="poster"
						className="rounded-xl overflow-clip max-w-screen"
					/>
					<div className="flex flex-col gap-2">
						<div className="text-xs md:text-base">
							<span>{item.tags}</span>
							<span className="text-neutral-500">
								{" "}
								<span className="text-xs ">&bull;</span>{" "}
								{item.date}
							</span>
						</div>
						<h2 className="text-base md:text-2xl font-medium md:tracking-wide">
							{item.title}
						</h2>
						<p className="text-xs md:text-sm line-clamp-3 text-neutral-500">
							{item.description}
						</p>
						<div>
							<div className="flex items-center gap-6 mt-4">
								{/* GitHub */}
								<a
									href="https://github.com/your-repo"
									target="_blank"
									rel="noreferrer"
									className="flex flex-col items-center group cursor-pointer"
								>
									<Github className="size-6 text-neutral-700 group-hover:text-blue-600 transition" />
									<p className="text-[10px] text-neutral-500 mt-1 group-hover:text-blue-600">
										GitHub
									</p>
								</a>

								{/* Live Preview */}
								<a
									href="https://your-live-demo.com"
									target="_blank"
									rel="noreferrer"
									className="flex flex-col items-center group cursor-pointer"
								>
									<Globe className="size-6 text-neutral-700 group-hover:text-green-600 transition" />
									<p className="text-[10px] text-neutral-500 mt-1 group-hover:text-green-600">
										Live Preview
									</p>
								</a>

								{/* PDF Document */}
								<a
									href="/docs/project-document.pdf"
									target="_blank"
									rel="noreferrer"
									className="flex flex-col items-center group cursor-pointer"
								>
									<FileText className="size-6 text-neutral-700 group-hover:text-red-600 transition" />
									<p className="text-[10px] text-neutral-500 mt-1 group-hover:text-red-600">
										PDF Doc
									</p>
								</a>
							</div>

						</div>
					</div>
				</div>
			))}
		</div>
	);
};

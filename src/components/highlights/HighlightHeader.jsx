import React from "react";

const HighlightHeader = () => {
	return (
		<div className="max-w-6xl mx-auto px-max w-full ">
			<h1 className="font-bebas-neue font-bold text-6xl text-center pb-6">
				Highest{" "}
				<span className="text-blue-500">Number of Activites</span> in February
				2024
			</h1>
			<p className="text-sm md:text-base xl:text-lg text-center text-neutral-700">
				We conducted the highest number of chapter activities in{" "}
				<span className="text-blue-700">February 2024</span>, receiving{" "}
				<span className="text-blue-700">recognition and appreciation from ACM India</span>.{" "}
				During this period, the chapter successfully organized{" "}
				<span className="text-blue-700">6+ technical and professional activities</span>,
				demonstrating consistent engagement and active participation within the ACM
				student community.
			</p>


			<div className="flex flex-col justify-between gap-16 md:gap-28  py-12 lg:py-14 2xl:py-2=16 max-w-[9a0rem] mx-auto">
				<div className="h-full w-full flex justify-center ">
					<div className="h-[34rem] w-[30rem] ">
						<div className="bg-neutral-200 shadow rounded-2xl h-full w-full"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HighlightHeader;

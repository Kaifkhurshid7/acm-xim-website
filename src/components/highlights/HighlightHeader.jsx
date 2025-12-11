import React from "react";

const HighlightHeader = () => {
	return (
		<div className="max-w-6xl mx-auto px-max w-full ">

			{/* INTRODUCTORY TITLE */}
			<h1 className="
                font-bebas-neue 
                font-bold 
                text-7xl 
                text-center 
                pb-12 
                pt-6 
                underline 
                decoration-blue-500 
                decoration-4 
            ">
				Chapter <span className="text-blue-500">Achievements</span>
			</h1>

			{/* NEW SECTION: ACM INDIA WINTER SCHOOL (FIRST SECTION) */}
			<h2 className="font-bebas-neue font-bold text-6xl text-center pb-6">
				ACM India{" "}
				<span className="text-blue-500">Winter School 2025</span>
			</h2>

			<p className="text-sm md:text-base xl:text-lg text-center text-neutral-700">
				ACM–XIM successfully hosted the{" "}
				<span className="text-blue-700">ACM India Winter School 2025</span> on the theme of{" "}
				<span className="text-blue-700">Responsible AI</span>, exclusively for{" "}
				<span className="text-blue-700">women participants</span>.
				The program ran from{" "}
				<span className="text-blue-700">December 15–24, 2025</span>, bringing together aspiring
				students, researchers, and professionals for an intensive learning experience guided
				by national-level experts in AI ethics, fairness, and accountability.
			</p>

			{/* FIRST SECTION IMAGE (Winter School) */}
			<div className="flex flex-col justify-between gap-16 md:gap-28 py-12 lg:py-14 2xl:py-16 max-w-[90rem] mx-auto">
				<div className="h-full w-full flex justify-center ">
					<div className="h-[34rem] w-[30rem] ">
						<div className="bg-neutral-200 shadow rounded-2xl h-full w-full">
							{/* Example: <img src="/src/assets/winterschool.jpg" className="rounded-2xl w-full h-full object-cover" /> */}
						</div>
					</div>
				</div>
			</div>

			{/* NEW SECTION: HIGHEST NUMBER OF ACTIVITIES (SECOND SECTION) */}
			<h2 className="font-bebas-neue font-bold text-6xl text-center pb-6">
				Highest{" "}
				<span className="text-blue-500">Number of Activites</span> in February
				2024
			</h2>

			<p className="text-sm md:text-base xl:text-lg text-center text-neutral-700">
				We conducted the highest number of chapter activities in{" "}
				<span className="text-blue-700">February 2024</span>, receiving{" "}
				<span className="text-blue-700">recognition and appreciation from ACM India</span>.{" "}
				During this period, the chapter successfully organized{" "}
				<span className="text-blue-700">6+ technical and professional activities</span>,
				demonstrating consistent engagement and active participation within the ACM
				student community.
			</p>

			{/* SECOND SECTION IMAGE (Activities) */}
			<div className="flex flex-col justify-between gap-16 md:gap-28 py-12 lg:py-14 2xl:py-16 max-w-[90rem] mx-auto">
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
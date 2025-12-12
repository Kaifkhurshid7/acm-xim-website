import React, { useState } from "react";

import { merchandise } from "/src/lib/data/project.data";
import { motion } from "framer-motion";

const ProjectsGrid = () => {
	// const navigate = useNavigate();

	function handleCard() {
		window.location.href = "/projects";
	}

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto py-12 px-max">
				{merchandise.slice(0, 3).map((item, i) => {
					return (
						<div
							onClick={handleCard}
							key={i}
							className=" rounded-2xl cursor-pointer group"
						>
							<img
								src={item.img}
								alt="image-newletter"
								className="rounded-2xl aspect-square object-cover"
							/>
							<div className="py-2 lg:py-5 px-1 flex flex-col gap-3">
								<h3 className=" font-bebas-neue text-sm md:text-base lg:text-lg xl:text-2xl 2xl:text-3xl font-medium ">
									{item.title}
								</h3>
								<p className="text-sm md:text-sm font-inter font-light text-neutral-700 text-truncate line-clamp-3">
									{item.description}
								</p>
								<p className="font-bold text-sm md:text-lg font-inter" >
									{item.price}
								</p>
								<a href="/projects" className="text-left hover:underline underline-offset-2 ">
									Click here to buy
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectsGrid;

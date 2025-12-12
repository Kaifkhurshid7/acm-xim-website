import ProjectsGrid from "./ProjectsGrid";
import ProjectsHeader from "./ProjectsHeader";

function ProjectListDesktop() {
	return (
		<div className="px-max pt-10 xl:pt-18 relative overflow-x-clip h-full">
			<ProjectsHeader />
			<ProjectsGrid />
		</div>
	);
}

export default ProjectListDesktop;

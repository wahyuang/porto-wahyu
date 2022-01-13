import SectionTitle from "./SectionTitle"
import CardProject from "./CardProject"

function SectionProjects ({ projects }) {
    let num = 0;
    let reverse = true;
    
    return (
        <div className="container py-80">
            <SectionTitle title="Projects" subtitle="Selected" />

            <div className="mb-80">
                <p>These are some of my latest projects.</p>
            </div>
            <div className="space-y-56 tablet-landscape:space-y-192">
                {projects.map( (project) => {
                    num = num + 1
                    reverse = !reverse
                    return (
                        <div key={project.id}>
                            <CardProject
                                number={ num < 10 ? '0' + num : num }
                                title={project.data.project_title[0].text}
                                thumbnail={project.data.project_thumbnail.url}
                                postslug={project.uid}
                                reverse={reverse} />
                        </div>
                    )
                } ) }
            </div>
        </div>
    )
}

export default SectionProjects
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Prismic from "@prismicio/client"
import { Client } from '../../utils/prismicHelpers'
import { RichText } from 'prismic-reactjs'
import CardGallery from '../../components/CardGallery'

export async function getStaticProps({ params }) {
    const project = await Client().getByUID( 'project', params.slug )

    return {
        props: {
            project,
        }
    }
}

export async function getStaticPaths() {
    const docs = await Client().query(
        Prismic.Predicates.at('document.type', 'project'),
        { lang: '*' }
    );

    return {
        paths: docs.results.map((doc) => {
            return { params: { slug: doc.uid }};
        }),
        fallback: false,
    };
}

function ProjectDetail({ project }) {
    // console.log( project )

    return (
        <div>
            <Head>
                <title>Wahyu Anggara | Projects | Crowne Plaza Osaka</title>
            </Head>
            <div className="w-full h-[300px] bg-primary flex justify-center items-center relative overflow-hidden">
                <div className="absolute w-full h-full top-0 left-0 bg-primary z-20 opacity-50"></div>
                {project.data?.project_thumbnail?.url && (
                    <div className="absolute top-0 left-0 w-full h-full z-10 bg-cover bg-no-repeat bg-center blur" style={{backgroundImage: `url(${project.data.project_thumbnail.url})`}}>
                        {project.data.project_thumbnail.url}
                    </div>
                ) }
                <div className="text-white font-black text-6xl relative z-30">
                    {project.data.project_title[0].text}
                </div>
            </div>
            
            <div className="relative container py-80">
                <div className="mb-20">
                    <Link href="/">Back</Link>
                </div>

                <div className="font-black text-primary text-center mb-24">OVERVIEW</div>
                <div className="text-base text-center">
                    {RichText.asText(project.data.project_description)}
                </div>

                <div className="my-80 text-center">
                    <div className="flex flex-wrap justify-center -mx-10">
                        <div className="w-full tablet-landscape:w-3/12 px-10">
                            <div className="mb-16 tablet-landscape:mb-0">
                                <div className="font-black text-base text-primary mb-8">PROJECT</div>
                                <div className="text-base">Crowne Plaza Osaka</div>
                            </div>
                        </div>
                        <div className="w-full tablet-landscape:w-3/12 px-10">
                            <div className="mb-16 tablet-landscape:mb-0">
                                <div className="font-black text-base text-primary mb-8">PROJECT</div>
                                <div className="text-base">Crowne Plaza Osaka</div>
                            </div>
                        </div>
                        <div className="w-full tablet-landscape:w-3/12 px-10">
                            <div className="mb-16 tablet-landscape:mb-0">
                                <div className="font-black text-base text-primary mb-8">PROJECT</div>
                                <div className="text-base">Crowne Plaza Osaka</div>
                            </div>
                        </div>
                        <div className="w-full tablet-landscape:w-3/12 px-10">
                            <div className="mb-16 tablet-landscape:mb-0">
                                <div className="font-black text-base text-primary mb-8">PROJECT</div>
                                <div className="text-base">Crowne Plaza Osaka</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-20 tablet-landscape:space-y-80">
                    
                    {project.data.photo_gallery?.map( ( photo, index ) => {
                        return (
                            <div key={`photo-${index}`}>
                                <CardGallery img={photo} />
                                {/* <Image src={photo.photo.url} width={photo.photo.dimensions.width} height={photo.photo.dimensions.height}/> */}
                                {/* <Image src={`/images/phuquoc-gallery03.png`} width={1200} height={635}/> */}
                            </div>
                        )
                    })}
                </div>
                
                <div className="pb-0 pt-80 tablet-landscape:py-80">
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="w-full tablet-landscape:w-4/12 mb-16 tablet-landscape:mb-0">
                            <div className="font-black text-3xl text-primary">Are you interested to collaborate?</div>
                        </div>
                        <div className="w-full tablet-landscape:w-4/12">
                            <div>
                                Drop me some lines about your ideas or just say hi to <a href="mailto:hello.anggara@gmail.com" className="text-primary font-bold animated-hover-link">hello.anggara@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectDetail
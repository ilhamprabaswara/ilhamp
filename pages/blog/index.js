import Layout from "@/components/layout"
import NavBar from "@/components/navbar"
import { getSortedPostsData } from "@/lib/posts"
import Link from "next/link";

export default function Blog({ allPostsData }) {
    return (
        <Layout>
            <NavBar />
            <div className="grid gap-10">
                {allPostsData.map(({ date, excerpt, img, slug, title }) => (
                    <>
                        <article id={slug}>
                            <img className="rounded mb-[10px]" src={img} />
                            <h2 className="mb-[5px] text-xl">
                                <Link href={`blog/${slug}`}>{`${title} ->`}</Link>
                            </h2>
                            <div>
                                <p className="text-[14px] text-slate-600">{excerpt}</p>
                            </div>
                        </article>
                    </>
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}
import { getAllPhotoIds, getPhotoData } from "../../lib/photos"
import Image from "next/image";
export default function PhotoPage(postData) {
    console.log(postData.id)
    return(
        <>
            <Image 
                src={`/photos/cropped/${postData.id}.jpg`}
                alt={`Dolly photo ${postData.id}`}
                width="500px"
                height="500px"
            />
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPhotoIds();
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params }) {
    const postData = getPhotoData(params.id)
    return {
        props: postData
    }
}

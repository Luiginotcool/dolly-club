import { getAllPhotoIds, getPhotoData } from "../../lib/photos"
import Image from "next/image";
import DollyImage from "../../components/DollyImage";


export default function PhotoPage(photoData) {
    const id = photoData.id
    const fp = photoData.fullPath
    console.log(photoData.relativePath)
    return(
        <>
            <DollyImage 
                relativePath = {photoData.relativePath}
                id = {id}
                caption = "Caption Placeholder"
            />
            {/*
            <Image 
                src={photoData.relativePath}
                alt={`Dolly photo ${id}`}
                width="500px"
                height="500px"
            />*/}
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
    const paths = getAllPhotoIds();
    const photoData = getPhotoData(params.id);
    return {
        props: photoData
    }
}

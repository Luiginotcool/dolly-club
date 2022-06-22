import Image from 'next/image'
import Link from 'next/link'
import barStyles from "../styles/ImageBar.module.css"

const ImageBar = ({names}) => {
    return (
        <div className={barStyles.flex}>
            {names.map((name) => (
                <Link href={{
                    pathname: "/photoPages/[id]",
                    query: { id: `${name}`}    

                }} key={`${name}`}>
                <Image 
                    src={`/photos/cropped/${name}.jpg`}
                    alt={`Dolly photo ${name}`}
                    width="100px"
                    height="100px"
                    key={`${name}`}
                /></Link>
            ))}
            {/*
            <Image 
            src="/photos/1.jpg" 
            alt="Dolly photo 1"
            width="100px"
            height="100px"
        />*/}
        </div>
    )
}

export default ImageBar
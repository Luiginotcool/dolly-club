import DollyImageStyles from "../styles/DollyImage.module.css"
import Image from "next/image"

const DollyImage = ( props ) => {
    const src = props.relativePath;
    const id = props.id;
    const caption = props.caption;
    console.log(src)
    return (
    <div className={DollyImageStyles.table}>
        <div className={DollyImageStyles.tr}>
            <div className={DollyImageStyles.imageCell}>
                <Image
                    className={DollyImageStyles.image}
                    src={src}
                    alt={`Dolly photo ${id}`}
                    width="500px"
                    height="500px"
                />
                </div>
        </div>
        <div className={DollyImageStyles.tr}>
            <div className={DollyImageStyles.captionCell}>
                {caption}
            </div>
        </div>
    </div>
    )
}

export default DollyImage
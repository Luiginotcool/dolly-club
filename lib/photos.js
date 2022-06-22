import fs from 'fs'
import path from 'path'

const photosDirectory = path.join(process.cwd(), 'public/photos/cropped')

export function getAllPhotoIds() {
    const fileNames = fs.readdirSync(photosDirectory)
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(".jpg", "")
            }
        }
    })
}


export function getPhotoData(id) {
    const fullPath = path.join(photosDirectory, `${id}.jpg`);
    return {
        id, fullPath
    }
}
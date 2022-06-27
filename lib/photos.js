import fs from 'fs'
import path from 'path'

const photosDirectory = path.join(process.cwd(), 'public\\photos\\cropped\\webp').split(path.sep).join("/");
/* Windows uses \ and Next uses /. Use \ initially then change to / */

export function getAllPhotoIds() {
    const fileNames = fs.readdirSync(photosDirectory)
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(".webp", "")
            }
        }
    })
}


export function getPhotoData(id) {
    const fullPath = (`${photosDirectory}/${id}.webp`)
    const relativePath = fullPath.substring(fullPath.indexOf("/public") + 7) 
    /*Removes everything up to and incl /public (7 is length of /public*/
    return {
        id, fullPath, relativePath
    }
}
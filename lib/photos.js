import fs from 'fs'
import path from 'path'


const dev = process.env.NODE_ENV !== 'production'
const photosDirectory = ""
if (dev) {
    const photosDirectory = path.join(process.cwd(), 'public\\photos\\cropped\\webp').split(path.sep).join("/");
    console.log(`Dev true ${photosDirectory}`)
    /* Windows uses \ and Next uses /. Use \ initially then change to / */
}
else {
    const photosDirectory = path.join(process.cwd(), 'photos/cropped/webp');
    console.log(`Dev false ${photosDirectory}`)
}
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
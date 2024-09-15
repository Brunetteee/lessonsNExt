const path = require('node:path')
const fs = require('node:fs/promises')


const foo = async () => {
    try {
        const pathToFile = path.join(__dirname, 'baseFolder')
        await fs.mkdir(pathToFile, {recursive: true})

        const folderNames = ['folder1', 'folder2', 'folder3', 'folder4', 'folder5']
        const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt',]

        await Promise.all(folderNames.map(async (folder) => {
            const folderPath = path.join(pathToFile, folder)
            await fs.mkdir(folderPath, {recursive: true})

            await Promise.all(fileNames.map(async (file) => {
                const filePath = path.join(folderPath, file)
                await fs.writeFile(filePath, 'Hello everybody')
            }))
        }))

        const data = await fs.readdir(pathToFile)
        for (const folder of data) {
            const folderPath = path.join(pathToFile, folder)
            const stat = await fs.stat(folderPath)
            console.log(`Folder:${folder},isDirectory:${stat.isDirectory()}`)

            const files = await fs.readdir(pathToFile)
            for (const file of files) {
                const pathToFile = path.join(folderPath, file)
                const fileStat = await fs.stat(pathToFile)
                console.log(`File:${file},isFile:${fileStat.isFile()}`)
            }
        }

    } catch (e) {
        console.log(e.message)
    }

}

void foo();
// optimize-images.mjs
// Redimensionne et compresse toutes les images du dossier public/images/galery
// sans changer les noms de fichiers (donc aucune modif de code nécessaire ensuite).
//
// Installation (une seule fois) :
//   npm install sharp --save-dev
//
// Utilisation :
//   node optimize-images.mjs

import sharp from 'sharp'
import { readdir, stat, rename } from 'fs/promises'
import path from 'path'

const DIR = './public/images/galery'
const MAX_WIDTH = 1600
const QUALITY = 78

async function run() {
  const files = await readdir(DIR)
  const imageFiles = files.filter(f => /\.(jpe?g|png)$/i.test(f))

  let totalBefore = 0
  let totalAfter = 0

  console.log(`\n${imageFiles.length} images trouvées dans ${DIR}\n`)

  for (const file of imageFiles) {
    const filePath = path.join(DIR, file)
    const before = (await stat(filePath)).size
    totalBefore += before

    const buffer = await sharp(filePath).rotate().toBuffer()
    const metadata = await sharp(buffer).metadata()

    let pipeline = sharp(buffer)
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH })
    }

    const ext = path.extname(file).toLowerCase()
    if (ext === '.png') {
      pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9 })
    } else {
      pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true })
    }

    const outBuffer = await pipeline.toBuffer()
    await sharp(outBuffer).toFile(filePath + '.tmp')
    await rename(filePath + '.tmp', filePath)

    const after = (await stat(filePath)).size
    totalAfter += after

    console.log(`${file}: ${(before / 1024 / 1024).toFixed(2)} Mo → ${(after / 1024 / 1024).toFixed(2)} Mo`)
  }

  console.log(`\nTotal avant : ${(totalBefore / 1024 / 1024).toFixed(1)} Mo`)
  console.log(`Total après : ${(totalAfter / 1024 / 1024).toFixed(1)} Mo`)
  console.log(`Gain : ${(100 - (totalAfter / totalBefore) * 100).toFixed(0)}%\n`)
}

run().catch(console.error)

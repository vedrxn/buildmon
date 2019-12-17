import fs from 'fs'
import path from 'path'
import util from 'util'
import to from 'await-to-ts'

const mkdir = util.promisify(fs.mkdir)

const projDir = __dirname
const confDir = path.join(projDir, '.buildmon')

export const createConfDir = async () => {
  const [error] = await to(mkdir(confDir))

  // @ts-ignore Type inference for `error` missing code property
  if (!error || error.code === 'EEXIST') {
    return
  }

  throw error
}

export default {
  projDir,
  confDir
}

import * as fs from 'fs'
import { resolve } from 'path'
import { Extractor, ExtractorConfig, ExtractorResult } from '@microsoft/api-extractor'

const getDirectories = (source: string) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent: fs.Dirent) => dirent.isDirectory())
    .map((dirent: fs.Dirent) => dirent.name)

const root = resolve('packages')
// const files: File[] = fs.readdirSync(resolve('packages'));
const apiExtractorPaths: string[] = getDirectories(root)
  .map((file) => `${root}/${file}/api-extractor.json`)
  .filter((filePath: string) => fs.existsSync(filePath))

for (const apiExtractorPath of apiExtractorPaths) {
  const apiExtractorJsonPath: string = resolve(apiExtractorPath)
  const extractorConfig: ExtractorConfig = ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath)

  const extractorResult: ExtractorResult = Extractor.invoke(extractorConfig, {
    localBuild: true,
    showVerboseMessages: true,
  })

  if (!extractorResult.succeeded) {
    console.error(
      `API Extractor completed with ${extractorResult.errorCount} errors` +
        ` and ${extractorResult.warningCount} warnings`,
    )
    process.exitCode = 1
  }
}

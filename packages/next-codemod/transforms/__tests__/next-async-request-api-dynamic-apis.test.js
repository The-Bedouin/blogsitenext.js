/* global jest */
jest.autoMockOff()
const fs = require('fs')
const path = require('path')
const { defineTest, defineInlineTest, runInlineTest } = require('jscodeshift/dist/testUtils')
const { readdirSync } = require('fs')
const { join } = require('path')

const possibleExtensions = ['ts', 'tsx', 'js', 'jsx']

function getSourceByInputPath(inputPath) {
  let source = ''
  let filePath
  for (const ext of possibleExtensions) {
    const currentPath = `${inputPath}.${ext}`
    if (fs.existsSync(currentPath)) {
      filePath = currentPath
      source = fs.readFileSync(`${inputPath}.${ext}`, 'utf8')
      break
    }
  }
  return [filePath, source]
}

const testFileRegex = /\.input\.(j|t)sx?$/

const fixtureDir = 'next-async-request-api-dynamic-apis'
const transformName = 'next-async-request-api'
const fixtureDirPath = join(__dirname, '..', '__testfixtures__', fixtureDir)
const fixtures = readdirSync(fixtureDirPath)
  .filter(file => testFileRegex.test(file))

describe('next-async-request-api - dynamic-apis', () => {
  for (const file of fixtures) {
    const isTsx = file.endsWith('.tsx')
    const fixture = file.replace(testFileRegex, '')
    const prefix = `${fixtureDir}/${fixture}`;
    const [inputPath, input] = getSourceByInputPath(path.join(`${__dirname}`, `../__testfixtures__/${prefix}.input`))
    const [outputPath, expectedOutput] = getSourceByInputPath(path.join(`${__dirname}`, `../__testfixtures__/${prefix}.output`))

    const transformPath = `${__dirname}/../${transformName}`
    const transform = require(transformPath).default

    it(`transforms correctly ${prefix}`, () => {
      runInlineTest(
        transform,
        null,
        {
          path: inputPath,
          source: input,
        },
        expectedOutput, 
        {
          parser: isTsx ? 'tsx' : 'babel',
        },
      )
    })
  }
})

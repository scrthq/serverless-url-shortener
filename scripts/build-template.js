'use strict'

const fs = require('fs')
const path = require('path')

const config = require('../config.json')

try {
  let readPath = path.resolve(__dirname, '../static/template.html')
  let template = fs.readFileSync(readPath).toString()
  template = template.replace('INSERT_API_URL', config['API_URL'])
  template = template.replace('INSERT_REPO_URL', config['REPO_URL'])
  template = template.replace('INSERT_PAGE_TITLE', config['PAGE_TITLE'])
  template = template.replace('INSERT_PAGE_TITLE', config['PAGE_TITLE']) // twice since it needs to replace both instances

  let writePath = path.resolve(__dirname, '../static/index.html')
  fs.writeFileSync(writePath, template)

  console.log('Template build success')

} catch (error) {
  console.error('Template build error')
  console.error('---')
  console.error(error.message)

}

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 8080

app.use(express.static('.svelte-kit/output/prerendered'))
app.use(express.static('.svelte-kit/output/client'))

app.get('/', (req, res) => {
  res.sendFile('.svelte-kit/output/prerendered/pages/index.html', {
    root: __dirname,
  })
})
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})

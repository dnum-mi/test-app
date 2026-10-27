import { callApi } from './api.ts'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Test App with the new version</h1>
    <div class="card">
      <button id="btn" type="button"> Click me</button>
      <p id="msg"></p>
    </div>
  </div>
`

callApi(document.querySelector<HTMLButtonElement>('#btn')!, document.querySelector<HTMLParagraphElement>('#msg')!)

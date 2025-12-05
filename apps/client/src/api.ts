const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8081/api'

export function callApi(btn: HTMLButtonElement, msg: HTMLParagraphElement) {
  const getMsg = async () => {
    const res = await fetch(apiUrl)
    const { docUrl, githubUrl } = JSON.parse(await res.text())
    msg.innerHTML = `Welcome aboard !<br/><br/>Visit the <a href="${docUrl}" target="_blank">documentation</a> and the <a href="${githubUrl}" target="_blank">Github organization</a>.`
  }
  btn.addEventListener('click', () => getMsg())
}

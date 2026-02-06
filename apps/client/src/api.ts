const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8081/api'

export function callApi(btn: HTMLButtonElement, msg: HTMLParagraphElement) {
  const getMsg = async () => {
    const res = await fetch(apiUrl)
    const { githubUrls } = JSON.parse(await res.text())
    
    const urlLinks = githubUrls
      .map((url: string) => `<a href="${url}" target="_blank">${url}</a>`)
      .join('<br/>')
    
    msg.innerHTML = `Welcome aboard !<br/><br/>${urlLinks}`
  }
  btn.addEventListener('click', () => getMsg())
}

class NovelRegistry {
    registryList: Map<string, CallableFunction> = new Map()
    add(domain: string, callback: CallableFunction) {
        this.registryList.set(domain, callback)
    }
    get(domain: string) {
        return this.registryList.get(domain)
    }
}
// ['N_C'] = {'content': []}
const nr = new NovelRegistry()
nr.add('novelbin.com', () => {
    const contentSelectors = document.querySelectorAll('#chr-content p');
    const data = {
        content: [...contentSelectors]
            .filter(element => {
                return (element as HTMLParagraphElement).innerText.trim() !== ""
            }).map(p => (p as HTMLParagraphElement).innerText)
    }
    window.localStorage.setItem('N_C', JSON.stringify(data))
})

export {nr}
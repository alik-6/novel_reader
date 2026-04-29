import { render } from "preact"
import { App } from "./reader"
// Bun will now load this as a raw string because of the "text" loader
import tailwindStyles from "./styles.css" 

const host = document.createElement('div')
host.id = "novel_reader_root"
document.body.append(host)

const shadow = host.attachShadow({ mode: 'open' });

// 1. Create the Style element
const styleTag = document.createElement('style')
styleTag.textContent = tailwindStyles
shadow.appendChild(styleTag)

// 2. Create the App container inside the shadow
const container = document.createElement('div')
container.id = "app-container"
shadow.appendChild(container)

// 3. Render Preact into the internal container
render(<App />, container)
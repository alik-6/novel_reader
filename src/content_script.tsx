import { render } from "preact";
import { App } from "./reader";
// Bun will now load this as a raw string because of the "text" loader
import tailwindStyles from "./styles.css";
import { nr } from "./reader/data";
import { MiscProvider } from "./reader/store/misc";

const host = document.createElement("div");
host.id = "novel_reader_root";
document.body.append(host);

const shadow = host.attachShadow({ mode: "open" });

// 1. Create the Style element
const styleTag = document.createElement("style");
styleTag.textContent = tailwindStyles;
shadow.appendChild(styleTag);

// 2. Create the App container inside the shadow
const container = document.createElement("div");
container.id = "app-container";
shadow.appendChild(container);

const injectUI = setInterval(() => {
  console.log("timer is started");
  if (
    document.title !== "Just a moment..." ||
    document.cookie.includes("cf_clearance")
  ) {
    const callback = nr.get(window.location.hostname);
    if (callback) {
      console.log("is called");
      callback();
    }

    render(
      <MiscProvider>
        <App />
      </MiscProvider>,
      container,
    );
    clearInterval(injectUI);
  }
}, 500);

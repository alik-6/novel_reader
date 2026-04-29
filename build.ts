import {$} from 'bun'
import * as fs from 'fs/promises'
import * as path from "node:path";
const BASE_DIR = import.meta.dir
const SRC_DIR = path.join(BASE_DIR, 'src')
const   OUT_DIR = path.join(BASE_DIR, "dist")

console.log(BASE_DIR, SRC_DIR);
console.log("Building...")

function src(segment: string) {
    return path.join(SRC_DIR, segment)
}
function out(segment?: string) {
    if (segment) {
        return path.join(OUT_DIR, segment)
    }
    return OUT_DIR
}
if (!(await fs.exists(OUT_DIR))) {
    await fs.mkdir(OUT_DIR);
}

await $`cp ${src("manifest.json")} ${out()}`
await $`bun run tailwindcss -i ${src('style.css')} -o ${src('styles.css')} `
await Bun.build({
    entrypoints: [src("service_worker.ts")],
    outdir: out()
})
await Bun.build({
    entrypoints: [src("content_script.tsx")],
    outdir: out(),
    loader: {
        ".css": "text", // This ensures CSS is imported as a string
    },
})

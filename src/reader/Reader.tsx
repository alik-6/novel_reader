import type { PropsWithoutRef } from "preact/compat";

export function Reader(props: PropsWithoutRef<{ active: boolean, content: Array<String> }>) {
    return (
        <div hidden={!props.active} class={`h-dvh w-full ${props.active ? 'z-9998 fixed top-0 left-0' : ''} overflow-auto flex bg-cyan-300`}>
            <div class={"grow p-4 flex flex-col  gap-1"}>
            {props.content.map(item => <p class="text-2xl">{item}</p>)}

            </div>
        </div>
    )
}
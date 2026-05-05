import type { MouseEventHandler } from "preact";
import type { PropsWithoutRef } from "preact/compat";

function ActionButton(props: PropsWithoutRef<{
    Icon: any,
    onClick: MouseEventHandler<HTMLButtonElement>
    class: string
}>) {
    return (
        <div>
            <button onClick={props.onClick} class={`z-9999 flex items-center justify-center size-20  bg-cyan-400 text-cyan-100 p-4 rounded-full ${props.class}`}>
                <props.Icon class="size-16" />
            </button>   
        </div>
    )
}

export {ActionButton}
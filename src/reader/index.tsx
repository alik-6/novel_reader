import { useEffect, useState } from "preact/hooks";
import { ActionButton } from "./components/ActionButton";
import BookIcon from "./components/icons/BookIcon";
import CloseIcon from "./components/icons/CloseIcon";
import { Reader } from "./Reader";
import SettingsIcon from "./components/icons/SettingsIcon";
import { useMiscContext } from "./store/misc";
function App() {
  const [content, setContent] = useState<Array<string>>([]);
  const {state: miscState, dispatch: miscDispatch} = useMiscContext()
  useEffect(() => {
    const chapterContent = window.localStorage.getItem("N_C");
    if (chapterContent) {
      setContent(JSON.parse(chapterContent).content);
    }
    // setContent([])
  });
  useEffect(() => {
    document.body.style.overflow = miscState.readerOpen ? "hidden" : "auto";
  }, [miscState.readerOpen]);
  return (
    <div>
      <ActionButton
        Icon={miscState.readerOpen ? CloseIcon : BookIcon}
        onClick={() => {
          miscDispatch({event: "toggleReader"})
        }}
        class="fixed bottom-10 right-40"
      />
      {miscState.readerOpen && (
        <ActionButton
          class="fixed bottom-40 right-40"
          onClick={() => {
            miscDispatch({event: "toggleSettings"})
          }}
          Icon={miscState.settingsOpen ? CloseIcon : SettingsIcon}
        />
      )}
      <Reader active={miscState.readerOpen} content={content} />
      {
        (miscState.readerOpen && miscState.settingsOpen) && (
          <div class={"z-9999 p-4 w-96 h-96 fixed top-0 left-10 bg-cyan-500 flex gap-4 flex-col"}>
            <h1 class={"text-3xl"}>Settings</h1>
            {/* <input/> */}
            <label>
              Font Size:
              <select>
                <option value="14px">14</option>
                <option value="21px">21</option>
                <option value="28px">28</option>
                <option value="32px">32</option>
              </select>
            </label>
            <label>
                Content Width:
                <select>
                <option value="60%">60%</option>
                <option value="80%">80%</option>
                <option value="100%">100%</option>
              </select>
            </label>
          </div>
        )
      }
    </div>
  );
}

export { App };

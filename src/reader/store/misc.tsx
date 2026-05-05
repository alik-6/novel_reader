import { withContext } from ".";

interface MiscState {
  readerOpen: boolean;
  settingsOpen: boolean;
}
type MiscAction =
  | {
      event: "toggleReader";
    }
  | {
      event: "toggleSettings";
    };
// export default
export const { Provider: MiscProvider, useCreatedContext: useMiscContext } =
  withContext<MiscState, MiscAction>(
    (state, action) => {
      switch (action.event) {
        case "toggleReader":
          return { ...state, readerOpen: !state.readerOpen };
        case "toggleSettings":
          return { ...state, settingsOpen: !state.settingsOpen };
        default:
          return state;
      }
    },
    {
      readerOpen: false,
      settingsOpen: false,
    },
  );

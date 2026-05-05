
interface ReaderState {
    // define in tailwind css
    fontSize: 14 | 21 | 28 | 32,
    width: '60%' | '80%' | '100%'
}

type ReaderAction = {
    event: 'setFontSize'
} | {

}
// export default withContext()
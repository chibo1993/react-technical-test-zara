
export default function time() {
    const actualDate = new Date()
    const dateSaved = new Date(window.localStorage.getItem('LastFetchDate'))
    const difference = new Date(actualDate.getTime() - dateSaved.getTime()).getHours()
    return difference;
}
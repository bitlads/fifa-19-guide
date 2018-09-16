export const SET_CONSOLE = 'SET_CONSOLE'

export function setConsole(console: string) {
    return (dispatch: any) => {
        dispatch({ type: SET_CONSOLE, console })
    };
}
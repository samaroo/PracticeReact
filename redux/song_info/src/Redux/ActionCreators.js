export const selectSong = (song) => {
    return (
        {
            type: 'SELECT',
            payload: song
        }
    )
}
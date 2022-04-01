export const  getRandomLocation = (from, to) => {
    return Math.round(Math.random() * (to - from) + from);
}
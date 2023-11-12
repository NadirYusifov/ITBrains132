import '../Utils/style.css'

export function setMetaCriticColor(num) {
    if (num < 0) return '';

    let color = 'metacritic-'
    let display = 'metacritic-'

    if (num >= 75) {
        color += 'green';
    } else if (num >= 50) {
        color += 'yellow';
    } else if (num >= 25) {
        color += "gray";
    } else {
        display += 'none';
    }
    return color;
}


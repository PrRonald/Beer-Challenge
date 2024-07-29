
export const truncateString = (str) => {
    const words = str.split(' ');
    let result = '';
    let length = 0;
    let wordCount = 0;

    for (const word of words) {
        if (wordCount < 3 && (length + word.length + (result ? 1 : 0)) <= 12) {
            if (result) {
                result += ' ';
                length += 1;
            }
            result += word;
            length += word.length;
            wordCount += 1;
        } else {
            break;
        }
    }

    return result;
};
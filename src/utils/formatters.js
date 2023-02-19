const formatBookTitle = (str) => {
    if (!str) return "";
    return str.length > 24 ? str.slice(0, 24) + '\u2026' : str;
}

const formatAuthorsList = (str) => {
    if (!str) return "";
    return str.length > 35 ? str.slice(0, 33) + '\u2026' : str;
}

export { formatBookTitle, formatAuthorsList }
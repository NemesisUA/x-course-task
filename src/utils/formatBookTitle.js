const formatBookTitle = (str) => {
    if (!str) return "";
    return str.length > 24 ? str.slice(0, 24) + '\u2026' : str;
}

export { formatBookTitle }
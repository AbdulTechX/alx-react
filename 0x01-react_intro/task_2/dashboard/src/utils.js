export function getFullYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
}
export function getFooterCopy(isIndex) {
    if (isIndex) {
    return "Hoberton School";
    }
    return "Holberton School main dashboard";
}
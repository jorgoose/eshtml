export function removeAccents(str: string): string {
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // remove accents
        .replace(/[\u00f1\u00d1]/g, 'n'); // replace ñ,Ñ with n
}
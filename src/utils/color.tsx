/**
 * Function that returns a hex color that contrasts with the given color.
 * @param color The color to contrast.
 * @returns The contrast color.
 */
 export function getContrastColor(color: string): string {
    const colorRgb = hexToRgb(color);
    if (!colorRgb) return "#222";
    const colorLuminance = getLuminance(colorRgb);
    if (colorLuminance > 0.5) {
        return "#222";
    } else {
        return "#fff";
    }
}

function hexToRgb(hex: string): number[] | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}

function getLuminance(rgb: number[]): number {
    const [r, g, b] = rgb;
    const a = [r / 255, g / 255, b / 255];
    const bkgd = [0.2126, 0.7152, 0.0722];
    const weighted = a.map((v, i) => v * bkgd[i]);
    const c = weighted.reduce((acc, v) => acc + v);
    return c;
}

/**
 * Function that returns a hex color that is a percent shade lighter of the given color.
 * @param color The color to shade.
 * @param percent The percentage to shade the color.
 * @returns The shaded color.
 */
export function getShadeColor(color: string, percent: number): string {
    var R = parseInt(color.substring(1, 3), 16);
    var G = parseInt(color.substring(3, 5), 16);
    var B = parseInt(color.substring(5, 7), 16);

    R = parseInt(`${(R * (100 + percent)) / 100}`);
    G = parseInt(`${(G * (100 + percent)) / 100}`);
    B = parseInt(`${(B * (100 + percent)) / 100}`);

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    let RR = R.toString(16).length === 1 ? "0" + R.toString(16) : R.toString(16);
    let GG = G.toString(16).length === 1 ? "0" + G.toString(16) : G.toString(16);
    let BB = B.toString(16).length === 1 ? "0" + B.toString(16) : B.toString(16);

    return "#" + RR + GG + BB;
}
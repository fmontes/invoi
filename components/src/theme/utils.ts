import { ThemeModel } from "./theme.model";

export const rgba = (color: string, opacity: string): string => {
    return `rgba(${hexToRgbA(color)}, ${opacity})`;
};

export const transition = (theme: ThemeModel, props: string[]): string =>
    props.map((props: string) => `${props} ${theme.animation.speed} ease`).join(', ');

export const hexToRgbA = (hex: string) => {
    let c: any;

    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
    }
    throw new Error('Bad Hex');
}

export const fieldBoxes = {
    normal: (theme: ThemeModel, error: boolean) => `
        border: solid 2px ${error ? theme.colors.error : theme.colors.neutral};
        border-radius: 2px;
        box-sizing: border-box;
        transition: ${transition(theme, ['border', 'box-shadow'])};

    `,
    active: (theme: ThemeModel) => `
        box-shadow: 0 0 0 4px ${rgba(theme.colors.primary, '0.1')};
        border-color: ${theme.colors.primary};
    `,
    focus: (theme: ThemeModel) => `
        box-shadow: 0 0 20px 0 ${rgba(theme.colors.primary, '0.2')};
        border-color: ${theme.colors.primary};
    `,
    disabled: (theme: ThemeModel) => `
        background: none;
        border-style: dotted;
        border-color: ${theme.colors.disabled};
    `
};

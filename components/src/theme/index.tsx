import { ThemeModel } from "./theme.model";
import { hexToRgbA } from './utils';

const primary = '#3951C5';
const black = '#202641';
const gray = '#5B6078';

const theme: ThemeModel = {
    animation: {
        speed: '100ms'
    },
    base: {
        radius: {
            normal: '0.5rem',
            tiny: '0.25rem'
        }
    },
    colors: {
        background: '#FDFCF9',
        black,
        disabled: '#D7D0CB',
        error: '#832400',
        gray,
        primary,
        secondary: '#F0A78B',
        neutral: '#CBC1BB',
        success: primary,
        textBody: black,
        textSub: gray,
        white: '#fff'
    },
    font: {
        family: `'Work Sans', sans-serif;`,
        size: {
            body: '1rem',
            h1: '2rem',
            h2: '1.5rem',
            hint: '0.8125rem',
            tiny: '0.6875rem'
        }
    },
    spaces: {
        half: '0.25rem',
        one: '0.5rem',
        two: '1rem',
        three: '2rem'
    },
    components: {
        buttons: {
            normal: {
                height: '2.75rem'
            },
            tiny: {
                height: '1.5rem'
            }
        }
    }
};

export const rgba = (color: string, opacity: string): string => {
    return `rgba(${hexToRgbA(theme.colors[color])}, ${opacity})`;
};

export const transition = (props: string[]): string =>
    props.map((props: string) => `${props} ${theme.animation.speed} ease`).join(', ');

export default theme;
export * from './theme.model';

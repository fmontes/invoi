const primary = '#3951C5';
const black = '#202641';
const gray = '#5B6078';

const theme = {
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

export default theme;

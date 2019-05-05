export interface ThemeModel {
    animation: Animation;
    base: Base;
    colors: Colors;
    font: Font;
    spaces: Spaces;
    components: Components;
}

interface Components {
    buttons: Buttons;
}

interface Buttons {
    normal: Normal;
    tiny: Normal;
}

interface Normal {
    height: string;
}

interface Spaces {
    half: string;
    one: string;
    two: string;
    three: string;
}

interface Font {
    family: string;
    size: Size;
}

interface Size {
    body: string;
    h1: string;
    h2: string;
    hint: string;
    tiny: string;
}

interface Colors {
    background: string;
    black: string;
    disabled: string;
    error: string;
    gray: string;
    primary: string;
    secondary: string;
    neutral: string;
    success: string;
    textBody: string;
    textSub: string;
    white: string;
}

interface Base {
    radius: Radius;
}

interface Radius {
    normal: string;
    tiny: string;
}

interface Animation {
    speed: string;
}

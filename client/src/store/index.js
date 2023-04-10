import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#AA77FF',
    isLogoTexture: false,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
});

export default state;
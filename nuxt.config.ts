// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', 'nuxt-headlessui'],
	css: ['./assets/css/main.css'],
});

type Mode = 'light' | 'dark';
type ColorType = 'colorBg' | 'colorText' | 'colorBase';
type ColorTone = 'main' | 'soft' | 'hard';

interface Color {
	main: string;
	soft: string;
	hard: string;
}

interface Theme {
	light: {
		colorBg: Color;
		colorText: Color;
		colorBase: Color;
	};
	dark: {
		colorBg: Color;
		colorText: Color;
		colorBase: Color;
	};
}

interface Themes {
	[key: string]: Theme;
}

const themes = {
	primary: {
		light: {
			colorBg: {
				main: '#f3f4f6',
				soft: '#d1d5db',
				hard: '#ffffff',
			},
			colorText: {
				main: '#374151',
				soft: '#6b7280',
				hard: '#111827',
			},
			colorBase: {
				main: '#7162ff',
				soft: '#7f75ff',
				hard: '#5c4fe8',
			},
		},
		dark: {
			colorBg: {
				main: '#111827',
				soft: '#374151',
				hard: '#030712',
			},
			colorText: {
				main: '#d1d5db',
				soft: '#6b7280',
				hard: '#f3f4f6',
			},
			colorBase: {
				main: '#7162ff',
				soft: '#7f75ff',
				hard: '#5c4fe8',
			},
		},
	},
	secondary: {
		light: {
			colorBg: {
				main: '#f3f4f6',
				soft: '#d1d5db',
				hard: '#ffffff',
			},
			colorText: {
				main: '#374151',
				soft: '#6b7280',
				hard: '#111827',
			},
			colorBase: {
				main: '#f31260',
				soft: '#f54180',
				hard: '#c20e4d',
			},
		},
		dark: {
			colorBg: {
				main: '#111827',
				soft: '#374151',
				hard: '#030712',
			},
			colorText: {
				main: '#d1d5db',
				soft: '#6b7280',
				hard: '#f3f4f6',
			},
			colorBase: {
				main: '#f31260',
				soft: '#f54180',
				hard: '#c20e4d',
			},
		},
	},
};
function createGlobalVars(
	themes: Themes,
	modes: Mode[] = ['light', 'dark'],
	colorTypes: ColorType[] = ['colorBg', 'colorText', 'colorBase'],
	colorTones: ColorTone[] = ['main', 'soft', 'hard'],
) {
	const globalVars: { [key: string]: string } = {};

	for (const themeName of Object.keys(themes)) {
		for (const mode of modes) {
			for (const colorType of colorTypes) {
				for (const colorTone of colorTones) {
					const key = `${themeName}-${mode}-${colorType}-${colorTone}`;
					globalVars[key] = themes[themeName][mode][colorType][colorTone];
				}
			}
		}
	}

	return globalVars;
}

console.log(createGlobalVars(themes));

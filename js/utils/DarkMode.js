export default class DarkMode {

    static init() {

        const storedTheme = DarkMode.getStoredTheme()

        if (!storedTheme) {
            DarkMode.setStoredTheme("dark");
        }

        DarkMode.activateTheme(DarkMode.getPreferredTheme());

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {

            const storedTheme = DarkMode.getStoredTheme()

            if (storedTheme !== 'light' && storedTheme !== 'dark') {
                DarkMode.activateTheme(DarkMode.getPreferredTheme())
            }
        })
    }

    static getStoredTheme() {
        return localStorage.getItem('color-theme');
    }

    static setStoredTheme(theme) {
        localStorage.setItem('color-theme', theme)
    }

    static getPreferredTheme() {

        const storedTheme = DarkMode.getStoredTheme()

        if (storedTheme) {
            return storedTheme;
        }

        return DarkMode.getOSTheme();
    }

    static getOSTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    static activateTheme(theme) {

        if (theme === 'auto') {
            document.documentElement.setAttribute('data-bs-theme', DarkMode.getOSTheme())
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
        }
    }

    static setTheme(theme) {
        DarkMode.setStoredTheme(theme);
        DarkMode.activateTheme(theme);
    }
}

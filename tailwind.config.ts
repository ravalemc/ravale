// tailwind.config.ts
import type { Config } from 'tailwindcss'
// @ts-ignore

export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}
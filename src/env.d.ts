/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_SITE_URL: string
	readonly PUBLIC_GOOGLE_ANALYTICS_ID?: string
	// Add more as needed
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

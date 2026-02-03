export const profile = {
	fullName: 'Rouven Reuter',
	title: 'PhD Candidate',
	institute: 'Berlin Institute of Health of the Charité',
	author_name: 'Rouven Reuter', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Phenopackets', description: 'Engineering tools to make phenopackets accessible', field: 'Bioinformatics' },
        { title: 'Bipolar', description: 'Working with longitudinal Bipolar data.', field: 'Bioinformatics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'Rouven.Reuter@proton.me',
	linkedin: 'https://www.linkedin.com/in/rouven-reuter/',
	x: '',
	github: 'https://github.com/SmartMonkey-git',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '/SmartMonkey-git' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/public/favicon.ico',
}

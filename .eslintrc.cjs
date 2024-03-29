/* eslint-env node */
module.exports = {
	root: true,
	env: { browser: true, es2020: true, node: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"prettier",
	],
	ignorePatterns: ["dist"],
	settings: { react: { version: "detect" } },
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: ["./tsconfig.json", "./tsconfig.node.json"],
		tsconfigRootDir: __dirname,
	},
	plugins: ["@typescript-eslint", "react-refresh", "jsx-a11y"],
	rules: {
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
	},
	overrides: [
		{
			files: ["**/*.{js,jsx,cjs}"],
			extends: ["plugin:@typescript-eslint/disable-type-checked"],
		},
	],
};

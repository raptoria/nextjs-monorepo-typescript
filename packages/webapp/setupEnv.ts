import { loadEnvConfig } from '@next/env';

//this makes Next.js environment variables accessible inside tests
export default async (): Promise<any> => {
	const projectDir = process.cwd();
	loadEnvConfig(projectDir);
};

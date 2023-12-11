import fs from 'fs';
import path from 'path';

const envPath = path.resolve('.env');
const envExamplePath = path.resolve('.env.example');

const envContent = fs.readFileSync(envPath, 'utf8');

const variableNames = envContent
  .split('\n')
  .map(line => line.trim() ? `${line.split('=')[0]}=` : '');

const envExampleContent = variableNames.join('\n');
fs.writeFileSync(envExamplePath, envExampleContent);

console.log('.env.example file updated with variable names successfully.');

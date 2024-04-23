const fs = require('fs-extra');
const path = require('path');

const componentName = process.argv[3]; // Use argv[3] to get the component name
const componentDirectory = process.argv[4] || 'app/components'; // Use argv[4] to get the directory, default to 'app/components'

if (!componentName) {
  console.error('Component name is required!');
  process.exit(1);
}

const templateDir = path.join(__dirname, '..', 'template/boilerplate/src'); // Assuming templates directory is one level up

const componentDir = path.join(process.cwd(), componentDirectory, componentName); // Update the component directory path

const files = [
  'CustomComponent.fragment.gql',
  'CustomComponent.fragment.generated.tsx',
  'CustomComponent.mock.ts',
  'CustomComponent.module.css',
  'CustomComponent.stories.tsx',
  'CustomComponent.tsx',
  'CustomComponent.types.ts',
  'index.ts',
];

const createComponentFiles = async () => {
  try {
    await fs.ensureDir(componentDir);

    for (const file of files) {
      const sourceFile = path.join(templateDir, file);
      const destFile = path.join(componentDir, file.replace('CustomComponent', componentName));

      await fs.copy(sourceFile, destFile);
    }

    console.log(`Component ${componentName} created successfully in ${componentDirectory} directory!`);
  } catch (error) {
    console.error('Error creating component:', error);
  }
};

module.exports = createComponentFiles;

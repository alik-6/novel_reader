// This tells TypeScript: "Treat any import ending in .css as a string module"
declare module "*.css" {
  const content: string;
  export default content;
}
export function logEnv() {
  console.log(JSON.stringify(process.env, null, 2));
}

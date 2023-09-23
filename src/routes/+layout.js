export const prerender = false;
export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load() {
  const response = await fetch("https://cataas.com/cat?json=true");
  const data = await response.json();
  const url = `https://cataas.com/${data.url}`;
  return { url };
}


const host = document.location.host;
const protocol = document.location.protocol;
const env = process.env.NODE_ENV;
const app_env = process.env.VUE_APP_ENV;

const apiLocations = {
  development: 'https://us-central1-lithe-window-713.cloudfunctions.net',
  staging: `https://us-central1-lithe-window-713.cloudfunctions.net`,
  production: `https://us-central1-lithe-window-713.cloudfunctions.net`
}

const socketHosts =  {
  development: `ws://us-central1-lithe-window-713.cloudfunctions.net`,
  staging: `ws://us-central1-lithe-window-713.cloudfunctions.net`,
  production: `ws://us-central1-lithe-window-713.cloudfunctions.net`
}


export const apiBaseUrl = apiLocations[app_env] || apiLocations.production;
export const socketBaseUrl = socketHosts[app_env] || socketHosts.production;



console.log(`host: ${host}, protocol: ${protocol}, env: ${env}, app_env: ${app_env}` )
console.log(`apiBaseUrl ${apiBaseUrl}`)
console.log(`socketBaseUrl ${socketBaseUrl}`)

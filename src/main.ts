import { createApp } from 'vue'
import {setupAssets} from "./plugins"
import App from './App.vue'



async function setupApp() {
	setupAssets()  
	const app = createApp(App)
	app.mount("#app")
}

setupApp()


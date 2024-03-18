import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { provideFluentDesignSystem, allComponents } from '@fluentui/web-components';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-amber/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';

provideFluentDesignSystem().register(allComponents);

createApp(App).use(PrimeVue).component('InputGroup', InputGroup).component('InputGroupAddon', InputGroupAddon).mount('#app')

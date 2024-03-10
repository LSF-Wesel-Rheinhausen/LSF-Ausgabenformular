import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { provideFluentDesignSystem, allComponents } from '@fluentui/web-components';

provideFluentDesignSystem().register(allComponents);

createApp(App).mount('#app')

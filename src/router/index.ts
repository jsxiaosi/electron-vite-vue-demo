import { createRouter, createWebHistory } from 'vue-router';
import type { App } from 'vue';

export const router = createRouter({
  history: createWebHistory(''),
  routes: [],
});

export const configMainRouter = async (app: App<Element>) => {
  app.use(router);
  await router.isReady();
};

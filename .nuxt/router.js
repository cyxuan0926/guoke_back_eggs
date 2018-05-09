import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5bf5ec41 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)
const _059d6ce8 = () => import('..\\pages\\solution\\index.vue' /* webpackChunkName: "pages_solution_index" */).then(m => m.default || m)
const _3c3e117c = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */).then(m => m.default || m)
const _53912de8 = () => import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages_contact-us" */).then(m => m.default || m)
const _46633fab = () => import('..\\pages\\solution\\detail.vue' /* webpackChunkName: "pages_solution_detail" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _5bf5ec41,
			name: "index"
		},
		{
			path: "/solution",
			component: _059d6ce8,
			name: "solution"
		},
		{
			path: "/about",
			component: _3c3e117c,
			name: "about"
		},
		{
			path: "/contact-us",
			component: _53912de8,
			name: "contact-us"
		},
		{
			path: "/solution/detail",
			component: _46633fab,
			name: "solution-detail"
		}
    ],
    
    
    fallback: false
  })
}

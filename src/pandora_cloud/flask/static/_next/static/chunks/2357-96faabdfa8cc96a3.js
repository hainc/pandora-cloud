"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2357],{50744:function(r,n,e){var t=e(35250),a=e(55344),o=e.n(a);e(70079);var i=function(r){var n=r.children;return(0,t.jsx)(t.Fragment,{children:n})};n.Z=o()(function(){return Promise.resolve(i)},{ssr:!1})},63857:function(r,n,e){e.d(n,{h:function(){return h},t:function(){return k}});var t=e(4337),a=e(35250),o=e(95182),i=e.n(o),u=e(1454),c=e(21389);function s(){var r=(0,t._)(["text-xs flex items-center justify-center gap-1"]);return s=function(){return r},r}function l(){var r=(0,t._)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]);return l=function(){return r},r}function f(){var r=(0,t._)(["flex-grow flex-shrink-0 tabular-nums"]);return f=function(){return r},r}function d(){var r=(0,t._)(["text-xs inline-flex bg-token-surface-secondary h-8 border rounded border-token-border-medium"]);return d=function(){return r},r}function v(){var r=(0,t._)(["text-token-text-secondary disabled:text-token-border-medium w-8 flex items-center justify-center hover:bg-token-surface-tertiary"]);return v=function(){return r},r}function m(){var r=(0,t._)(["text-token-text-tertiary px-2 flex items-center font-mono tracking-widest"]);return m=function(){return r},r}function h(r){var n=r.currentPage,e=r.onChangeIndex,t=r.length,o=r.className,c=function(r){e(i()(n+r,0,t-1))};return(0,a.jsxs)(g,{className:o,children:[(0,a.jsx)(p,{onClick:function(){return c(-1)},disabled:0===n,children:(0,a.jsx)(u.YFh,{className:"icon-xs"})}),(0,a.jsx)(b,{children:"".concat(n+1," / ").concat(t)}),(0,a.jsx)(p,{onClick:function(){return c(1)},disabled:n===t-1,children:(0,a.jsx)(u.Tfp,{className:"icon-xs"})})]})}var g=c.Z.div(s()),p=c.Z.button(l()),b=c.Z.span(f());function k(r){var n=r.currentPage,e=r.onChangeIndex,t=r.length,o=r.className,c=function(r){e(i()(n+r,0,t-1))};return(0,a.jsxs)(x,{className:o,children:[(0,a.jsx)(y,{onClick:function(){return c(-1)},disabled:0===n,children:(0,a.jsx)(u.YFh,{className:"icon-sm"})}),(0,a.jsx)(N,{children:"".concat(n+1,"/").concat(t)}),(0,a.jsx)(y,{onClick:function(){return c(1)},disabled:n===t-1,children:(0,a.jsx)(u.Tfp,{className:"icon-sm"})})]})}var x=c.Z.div(d()),y=c.Z.button(v()),N=c.Z.span(m())},44513:function(r,n,e){e.d(n,{m:function(){return i}});var t=e(35250),a=e(98359),o=e(70079);function i(r){var n=r.children;return(0,t.jsx)(a.u,{as:o.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:n})}},52696:function(r,n,e){e.d(n,{$3:function(){return d},Ap:function(){return s},CV:function(){return v},GA:function(){return f},Gk:function(){return p},Ix:function(){return h},_O:function(){return g},bE:function(){return b},cI:function(){return m},qH:function(){return l}});var t=e(96237),a=e(75641),o=e(78931),i=e(62509),u=e(70079),c=e(70671);function s(){var r=(0,c.Z)(),n=r.formatMessage(k.adminRoleName),e=r.formatMessage(k.ownerRoleName),o=r.formatMessage(k.standardRoleName);return(0,u.useMemo)(function(){var r;return r={},(0,t._)(r,a.r3.OWNER,e),(0,t._)(r,a.r3.ADMIN,n),(0,t._)(r,a.r3.STANDARD,o),r},[e,n,o])}function l(r){var n=(0,c.Z)();return r?r.structure===a.CZ.PERSONAL?n.formatMessage(k.personalPlanName):n.formatMessage(k.enterprisePlanName):n.formatMessage(k.personalPlanName)}function f(r){return v((0,c.Z)(),r)}function d(){var r=(0,o.ec)(function(r){return r.currentWorkspace});return v((0,c.Z)(),r)}function v(r,n){var e;return n&&n.structure!==a.CZ.PERSONAL?null!==(e=n.name)&&void 0!==e?e:r.formatMessage(k.defaultWorkspaceTitle):r.formatMessage(k.personalWorkspaceTitle)}function m(){var r,n,e,t,a=(0,i.kP)().session;return null!==(t=null!==(e=null==a?void 0:null===(r=a.user)||void 0===r?void 0:r.name)&&void 0!==e?e:null==a?void 0:null===(n=a.user)||void 0===n?void 0:n.email)&&void 0!==t?t:null}function h(r){var n=(0,o.ec)(function(r){return r.currentWorkspace}),e=(0,o.ec)(o.F_.isPersonalWorkspace),t=(0,o.$T)(),i=f(n),u=m();return r&&!t?r.structure===a.CZ.PERSONAL?u:r.name:n?e?u:i:u}function g(){return(0,o.ec)(function(r){return r.workspaces})}function p(r){var n=g().find(function(n){return n.id===r});return(null==n?void 0:n.role)===a.r3.OWNER}function b(r){var n=g().find(function(n){return n.id===r});return(null==n?void 0:n.role)===a.r3.ADMIN}var k=(0,e(94968).vU)({defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace",description:"title for workspace without a name"},personalWorkspaceTitle:{id:"useWorkspaces.personalWorkspaceTitle",defaultMessage:"Personal account",description:"title for personal workspace"},personalPlanName:{id:"useWorkspaces.personalPlanName",defaultMessage:"Personal",description:"label for personal tier account"},enterprisePlanName:{id:"useWorkspaces.enterprisePlanName",defaultMessage:"Enterprise",description:"label for enterprise tier account"},adminRoleName:{id:"useWorkspaces.adminRoleName",defaultMessage:"Admin",description:"Role name for an admin user"},ownerRoleName:{id:"useWorkspaces.ownerRoleName",defaultMessage:"Owner",description:"Role name for an owner user"},standardRoleName:{id:"useWorkspacews.standardRoleName",defaultMessage:"Member",description:"Role name for a standard user"}})},42271:function(r,n,e){e.d(n,{O:function(){return u},h:function(){return c}});var t=e(4337),a=e(21389);function o(){var r=(0,t._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-gray-600 dark:text-gray-200 cursor-pointer text-sm rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 h-11"]);return o=function(){return r},r}function i(){var r=(0,t._)(["h-11 w-11"]);return i=function(){return r},r}var u=a.Z.button(o()),c=a.Z.div(i())},38566:function(r,n,e){e.d(n,{C:function(){return s}});var t=e(39324),a=e(71209),o=e(91530),i=e.n(o),u=e(78103),c={showReferralInviteModal:!1},s=(0,u.ZP)()(function(r){return(0,a._)((0,t._)({},c),{setShowReferralInviteModal:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i();r({showReferralInviteModal:n}),null==e||e()}})})},15329:function(r,n,e){e.d(n,{R:function(){return g},Vq:function(){return p},ZB:function(){return m},ZP:function(){return v},zV:function(){return h}});var t=e(4337),a=e(35250),o=e(7813),i=e(19841),u=e(21389);function c(){var r=(0,t._)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"]);return c=function(){return r},r}function s(){var r=(0,t._)(["flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]);return s=function(){return r},r}function l(){var r=(0,t._)(["rounded-md border dark:border-white/20 gizmo:min-h-0 hover:bg-gray-500/10 h-11 gizmo:h-10 gizmo:rounded-lg gizmo:border-[rgba(0,0,0,0.1)]"]);return l=function(){return r},r}function f(){var r=(0,t._)(["my-1.5 h-px dark:bg-white/20 bg-black/20"]);return f=function(){return r},r}function d(){var r=(0,t._)(["",""]);return d=function(){return r},r}function v(r){var n=r.onClick,e=r.href,t=r.target,u=r.children;return(0,a.jsx)(o.v.Item,{children:function(r){var o=r.active;return(0,a.jsx)(m,{as:void 0!==e?"a":"button",onClick:n,href:e,target:t,className:(0,i.default)(o?"bg-gray-100 dark:bg-gray-800":"hover:bg-gray-100 dark:hover:bg-gray-800"),children:u})}})}u.Z.a(c());var m=u.Z.a(s()),h=(0,u.Z)(m)(l()),g=u.Z.div(f()),p=(0,u.Z)(m)(d(),function(r){return r.$active?"bg-gray-100 dark:bg-gray-800":"hover:bg-gray-100 dark:hover:bg-gray-800"})},28735:function(r,n,e){e.d(n,{LW:function(){return o},eR:function(){return a}});var t=e(22830);function a(r,n){var e=!0,a=!1,o=void 0;try{for(var i,u=Object.entries(n)[Symbol.iterator]();!(e=(i=u.next()).done);e=!0){var c=(0,t._)(i.value,2),s=c[0],l=c[1];r.addEventListener(s,l)}}catch(r){a=!0,o=r}finally{try{e||null==u.return||u.return()}finally{if(a)throw o}}return function(){var e=!0,a=!1,o=void 0;try{for(var i,u=Object.entries(n)[Symbol.iterator]();!(e=(i=u.next()).done);e=!0){var c=(0,t._)(i.value,2),s=c[0],l=c[1];r.removeEventListener(s,l)}}catch(r){a=!0,o=r}finally{try{e||null==u.return||u.return()}finally{if(a)throw o}}}}function o(r,n){var e=!0,a=!1,o=void 0;try{for(var i,u=Object.entries(n)[Symbol.iterator]();!(e=(i=u.next()).done);e=!0){var c=(0,t._)(i.value,2),s=c[0],l=c[1];r.on(s,l)}}catch(r){a=!0,o=r}finally{try{e||null==u.return||u.return()}finally{if(a)throw o}}return function(){var e=!0,a=!1,o=void 0;try{for(var i,u=Object.entries(n)[Symbol.iterator]();!(e=(i=u.next()).done);e=!0){var c=(0,t._)(i.value,2),s=c[0],l=c[1];r.off(s,l)}}catch(r){a=!0,o=r}finally{try{e||null==u.return||u.return()}finally{if(a)throw o}}}}},640:function(r,n,e){e.d(n,{V:function(){return i}});var t=e(51217),a=e(36560),o=e.n(a),i=function(){function r(){(0,t._)(this,r),this.emitter=new(o()),this.emitter.setMaxListeners(1e3)}var n=r.prototype;return n.on=function(r,n){this.emitter.on(r,n)},n.off=function(r,n){this.emitter.off(r,n)},n.publish=function(r){this.emitter.emit(r.kind,r),this.emitter.emit("anyEvent",r)},r}()}}]);
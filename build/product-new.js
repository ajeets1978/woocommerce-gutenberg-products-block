this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-new"]=function(t){function e(e){for(var n,i,u=e[0],a=e[1],s=e[2],b=0,p=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(l&&l(e);p.length;)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={21:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=a;return c.push([853,0,1]),r()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},111:function(t,e){},113:function(t,e){},114:function(t,e){},115:function(t,e){},116:function(t,e){},117:function(t,e){},118:function(t,e){},119:function(t,e){},12:function(t,e){!function(){t.exports=this.wp.apiFetch}()},120:function(t,e){},121:function(t,e){},122:function(t,e){},123:function(t,e){},124:function(t,e){},125:function(t,e){},126:function(t,e){},127:function(t,e){},16:function(t,e){!function(){t.exports=this.wp.url}()},162:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(0),o=r(5),c=Object(n.createElement)("img",{src:o.Q+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})},17:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},29:function(t,e){!function(){t.exports=this.wp.blockEditor}()},3:function(t,e){!function(){t.exports=this.wc.wcSettings}()},30:function(t,e){!function(){t.exports=this.wp.compose}()},31:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},32:function(t,e){!function(){t.exports=this.moment}()},33:function(t,e){!function(){t.exports=this.wp.blocks}()},4:function(t,e){!function(){t.exports=this.wp.components}()},41:function(t,e,r){"use strict";r.d(e,"h",(function(){return p})),r.d(e,"e",(function(){return d})),r.d(e,"b",(function(){return g})),r.d(e,"i",(function(){return f})),r.d(e,"f",(function(){return h})),r.d(e,"c",(function(){return O})),r.d(e,"d",(function(){return m})),r.d(e,"g",(function(){return j})),r.d(e,"a",(function(){return w}));var n=r(9),o=r.n(n),c=r(16),i=r(12),u=r.n(i),a=r(6),s=r(5);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,l=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,u=void 0===i?[]:i,a={per_page:s.t?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)("/wc/store/products",b(b({},a),u))];return s.t&&r.length&&l.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r})),l}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(t){return u()({path:t})}))).then((function(t){return Object(a.uniqBy)(Object(a.flatten)(t),"id").map((function(t){return b(b({},t),{},{parent:0})}))})).catch((function(t){throw t}))},d=function(t){return u()({path:"/wc/store/products/".concat(t)})},g=function(){return u()({path:"wc/store/products/attributes"})},f=function(t){return u()({path:"wc/store/products/attributes/".concat(t,"/terms")})},h=function(t){var e=t.selected,r=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:s.w?100:0,orderby:s.w?"count":"name",order:s.w?"desc":"asc",search:n})];return s.w&&r.length&&o.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:r})),o}({selected:void 0===e?[]:e,search:t.search});return Promise.all(r.map((function(t){return u()({path:t})}))).then((function(t){return Object(a.uniqBy)(Object(a.flatten)(t),"id")}))},O=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products/categories",b({per_page:0},t))})},m=function(t){return u()({path:"wc/store/products/categories/".concat(t)})},j=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:t})})},w=function(t,e){if(!t.title.raw)return t.slug;var r=1===e.filter((function(e){return e.title.raw===t.title.raw})).length;return t.title.raw+(r?"":" - ".concat(t.slug))}},44:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(17),o=r.n(n),c=r(37),i=r.n(c),u=function(){var t=i()(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.json){t.next=11;break}return t.prev=1,t.next=4,e.json();case 4:return r=t.sent,t.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{message:t.t0.message,type:"general"});case 11:return t.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},48:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},5:function(t,e,r){"use strict";r.d(e,"k",(function(){return o})),r.d(e,"G",(function(){return c})),r.d(e,"M",(function(){return i})),r.d(e,"x",(function(){return u})),r.d(e,"z",(function(){return a})),r.d(e,"l",(function(){return s})),r.d(e,"y",(function(){return l})),r.d(e,"B",(function(){return b})),r.d(e,"n",(function(){return p})),r.d(e,"A",(function(){return d})),r.d(e,"m",(function(){return g})),r.d(e,"C",(function(){return f})),r.d(e,"t",(function(){return h})),r.d(e,"w",(function(){return O})),r.d(e,"q",(function(){return m})),r.d(e,"r",(function(){return j})),r.d(e,"s",(function(){return w})),r.d(e,"j",(function(){return y})),r.d(e,"I",(function(){return v})),r.d(e,"N",(function(){return _})),r.d(e,"p",(function(){return k})),r.d(e,"o",(function(){return S})),r.d(e,"F",(function(){return P})),r.d(e,"c",(function(){return E})),r.d(e,"u",(function(){return C})),r.d(e,"v",(function(){return x})),r.d(e,"Q",(function(){return A})),r.d(e,"H",(function(){return D})),r.d(e,"a",(function(){return R})),r.d(e,"K",(function(){return B})),r.d(e,"b",(function(){return T})),r.d(e,"J",(function(){return L})),r.d(e,"h",(function(){return M})),r.d(e,"L",(function(){return z})),r.d(e,"g",(function(){return H})),r.d(e,"i",(function(){return Q})),r.d(e,"E",(function(){return F})),r.d(e,"D",(function(){return V})),r.d(e,"P",(function(){return q})),r.d(e,"O",(function(){return G})),r.d(e,"d",(function(){return U})),r.d(e,"e",(function(){return J})),r.d(e,"f",(function(){return W}));var n=r(3),o=Object(n.getSetting)("currentUserIsAdmin",!1),c=Object(n.getSetting)("reviewRatingsEnabled",!0),i=Object(n.getSetting)("showAvatars",!0),u=Object(n.getSetting)("max_columns",6),a=Object(n.getSetting)("min_columns",1),s=Object(n.getSetting)("default_columns",3),l=Object(n.getSetting)("max_rows",6),b=Object(n.getSetting)("min_rows",1),p=Object(n.getSetting)("default_rows",3),d=Object(n.getSetting)("min_height",500),g=Object(n.getSetting)("default_height",500),f=Object(n.getSetting)("placeholderImgSrc",""),h=(Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),O=Object(n.getSetting)("limitTags"),m=Object(n.getSetting)("hasProducts",!0),j=Object(n.getSetting)("hasTags",!0),w=Object(n.getSetting)("homeUrl",""),y=Object(n.getSetting)("couponsEnabled",!0),v=Object(n.getSetting)("shippingEnabled",!0),_=Object(n.getSetting)("taxesEnabled",!0),k=Object(n.getSetting)("displayItemizedTaxes",!1),S=(Object(n.getSetting)("displayShopPricesIncludingTax",!1),Object(n.getSetting)("displayCartPricesIncludingTax",!1)),P=Object(n.getSetting)("productCount",0),E=Object(n.getSetting)("attributes",[]),C=Object(n.getSetting)("isShippingCalculatorEnabled",!0),x=Object(n.getSetting)("isShippingCostHidden",!1),A=Object(n.getSetting)("wcBlocksAssetUrl",""),D=Object(n.getSetting)("shippingCountries",{}),R=Object(n.getSetting)("allowedCountries",{}),B=Object(n.getSetting)("shippingStates",{}),T=Object(n.getSetting)("allowedStates",{}),L=Object(n.getSetting)("shippingMethodsExist",!1),M=Object(n.getSetting)("checkoutShowLoginReminder",!0),I={id:0,title:"",permalink:""},N=Object(n.getSetting)("storePages",{shop:I,cart:I,checkout:I,privacy:I,terms:I}),z=N.shop.permalink,H=N.checkout.id,Q=N.checkout.permalink,F=N.privacy.permalink,V=N.privacy.title,q=N.terms.permalink,G=N.terms.title,U=N.cart.id,J=N.cart.permalink,W=Object(n.getSetting)("checkoutAllowsGuest",!1);Object(n.getSetting)("checkoutAllowsSignup",!1)},50:function(t,e,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(48));e.a=function(t){var e,r,i,u=t.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(e=u).message,i=e.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},51:function(t,e){!function(){t.exports=this.wp.keycodes}()},6:function(t,e){!function(){t.exports=this.lodash}()},60:function(t,e,r){"use strict";var n=r(9),o=r.n(n),c=r(38),i=r.n(c),u=r(7);r(2);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}e.a=function(t){var e=t.srcElement,r=t.size,n=void 0===r?24:r,c=i()(t,["srcElement","size"]);return Object(u.isValidElement)(e)&&Object(u.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({width:n,height:n},c))}},64:function(t,e){!function(){t.exports=this.wp.editor}()},7:function(t,e){!function(){t.exports=this.React}()},70:function(t,e,r){"use strict";r.d(e,"b",(function(){return o}));var n=r(5),o=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];e.a={columns:{type:"number",default:n.l},rows:{type:"number",default:n.n},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}},72:function(t,e,r){"use strict";var n=r(9),o=r.n(n),c=r(0),i=r(1),u=(r(2),r(4));function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.onChange,r=t.settings,n=r.button,o=r.price,a=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(s(s({},r),{},{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return e(s(s({},r),{},{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:a?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:a,onChange:function(){return e(s(s({},r),{},{rating:!a}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return e(s(s({},r),{},{button:!n}))}}))}},73:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(6),i=(r(2),r(4)),u=r(5);e.a=function(t){var e=t.columns,r=t.rows,a=t.setAttributes,s=t.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:e,onChange:function(t){var e=Object(c.clamp)(t,u.z,u.x);a({columns:Object(c.isNaN)(e)?"":e})},min:u.z,max:u.x}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(t){var e=Object(c.clamp)(t,u.B,u.y);a({rows:Object(c.isNaN)(e)?"":e})},min:u.B,max:u.y}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block","woo-gutenberg-products-block"),help:s?Object(o.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:s,onChange:function(){return a({alignButtons:!s})}}))}},76:function(t,e){!function(){t.exports=this.wp.dom}()},77:function(t,e,r){"use strict";var n=r(13),o=r.n(n),c=r(0),i=r(1),u=r(6),a=(r(2),r(52)),s=r(4),l=r(17),b=r.n(l),p=r(37),d=r.n(p),g=r(22),f=r.n(g),h=r(28),O=r.n(h),m=r(19),j=r.n(m),w=r(23),y=r.n(w),v=r(24),_=r.n(v),k=r(11),S=r.n(k),P=r(30),E=r(41),C=r(44);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=S()(t);if(e){var o=S()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _()(this,r)}}var A=Object(P.createHigherOrderComponent)((function(t){return function(e){y()(n,e);var r=x(n);function n(){var t;return f()(this,n),(t=r.apply(this,arguments)).state={error:null,loading:!1,categories:null},t.loadCategories=t.loadCategories.bind(j()(t)),t}return O()(n,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var t=this;this.setState({loading:!0}),Object(E.c)().then((function(e){t.setState({categories:e,loading:!1,error:null})})).catch(function(){var e=d()(b.a.mark((function e(r){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)(r);case 2:n=e.sent,t.setState({categories:null,loading:!1,error:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.loading,i=e.categories;return Object(c.createElement)(t,o()({},this.props,{error:r,isLoading:n,categories:i}))}}]),n}(c.Component)}),"withCategories"),D=r(50),R=(r(184),function(t){var e=t.categories,r=t.error,n=t.isLoading,l=t.onChange,b=t.onOperatorChange,p=t.operator,d=t.selected,g=t.isSingle,f=t.showReviewCount,h={clear:Object(i.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(i.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(i.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(i.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(t){return Object(i.sprintf)(Object(i._n)("%d category selected","%d categories selected",t,"woo-gutenberg-products-block"),t)},updated:Object(i.__)("Category search results updated.","woo-gutenberg-products-block")};return r?Object(c.createElement)(D.a,{error:r}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.a,{className:"woocommerce-product-categories",list:e,isLoading:n,selected:d.map((function(t){return Object(u.find)(e,{id:t})})).filter(Boolean),onChange:l,renderItem:function(t){var e=t.item,r=t.search,n=t.depth,u=void 0===n?0:n,s=["woocommerce-product-categories__item"];r.length&&s.push("is-searching"),0===u&&0!==e.parent&&s.push("is-skip-level");var l=e.breadcrumbs.length?"".concat(e.breadcrumbs.join(", "),", ").concat(e.name):e.name,b=f?Object(i.sprintf)(Object(i._n)("%s, has %d review","%s, has %d reviews",e.review_count,"woo-gutenberg-products-block"),l,e.review_count):Object(i.sprintf)(Object(i._n)("%s, has %d product","%s, has %d products",e.count,"woo-gutenberg-products-block"),l,e.count),p=f?Object(i.sprintf)(Object(i._n)("%d Review","%d Reviews",e.review_count,"woo-gutenberg-products-block"),e.review_count):Object(i.sprintf)(Object(i._n)("%d Product","%d Products",e.count,"woo-gutenberg-products-block"),e.count);return Object(c.createElement)(a.b,o()({className:s.join(" ")},t,{showCount:!0,countLabel:p,"aria-label":b}))},messages:h,isHierarchical:!0,isSingle:g}),!!b&&Object(c.createElement)("div",{className:d.length<2?"screen-reader-text":""},Object(c.createElement)(s.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(i.__)("Display products matching","woo-gutenberg-products-block"),help:Object(i.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:p,onChange:b,options:[{label:Object(i.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(i.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))});R.defaultProps={operator:"any",isSingle:!1};e.a=A(R)},79:function(t,e){!function(){t.exports=this.ReactDOM}()},81:function(t,e){!function(){t.exports=this.wp.viewport}()},82:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var n=r(0),o=r(8),c=r.n(o),i=r(10),u=r.n(i),a=r(5);function s(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,c=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){i=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=function(t){return function(e){var r=e.attributes,o=r.align,i=r.contentVisibility,l=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:l},function(t,e){var r=t.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,l=r.orderby,b=r.products,p=r.columns||a.l,d=r.rows||a.n,g=new Map;switch(g.set("limit",d*p),g.set("columns",p),c&&c.length&&(g.set("category",c.join(",")),i&&"all"===i&&g.set("cat_operator","AND")),n&&n.length&&(g.set("terms",n.map((function(t){return t.id})).join(",")),g.set("attribute",n[0].attr_slug),o&&"all"===o&&g.set("terms_operator","AND")),l&&("price_desc"===l?(g.set("orderby","price"),g.set("order","DESC")):"price_asc"===l?(g.set("orderby","price"),g.set("order","ASC")):"date"===l?(g.set("orderby","date"),g.set("order","DESC")):g.set("orderby",l)),e){case"woocommerce/product-best-sellers":g.set("best_selling","1");break;case"woocommerce/product-top-rated":g.set("orderby","rating");break;case"woocommerce/product-on-sale":g.set("on_sale","1");break;case"woocommerce/product-new":g.set("orderby","date"),g.set("order","DESC");break;case"woocommerce/handpicked-products":if(!b.length)return"";g.set("ids",b.join(",")),g.set("limit",b.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var f,h="[products",O=s(g);try{for(O.s();!(f=O.n()).done;){var m=u()(f.value,2);h+=" "+m[0]+'="'+m[1]+'"'}}catch(t){O.e(t)}finally{O.f()}return h+="]"}(e,t))}}},853:function(t,e,r){"use strict";r.r(e);var n=r(9),o=r.n(n),c=r(0),i=r(1),u=r(33),a=r(6),s=r(60),l=r(54),b=Object(c.createElement)(l.c,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(c.createElement)("path",{d:"M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-4.51 2.11l.26 2.79-2.74.62-1.43 2.41L12 18.82l-2.58 1.11-1.43-2.41-2.74-.62.26-2.8L3.66 12l1.85-2.12-.26-2.78 2.74-.61 1.43-2.41L12 5.18l2.58-1.11 1.43 2.41 2.74.62-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z"})),p=r(22),d=r.n(p),g=r(28),f=r.n(g),h=r(23),O=r.n(h),m=r(24),j=r.n(m),w=r(11),y=r.n(w),v=r(4),_=r(29),k=r(64),S=(r(2),r(72)),P=r(73),E=r(77),C=r(162);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=y()(t);if(e){var o=y()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return j()(this,r)}}var A=function(t){O()(r,t);var e=x(r);function r(){return d()(this,r),e.apply(this,arguments)}return f()(r,[{key:"getInspectorControls",value:function(){var t=this.props,e=t.attributes,r=t.setAttributes,n=e.categories,o=e.catOperator,u=e.columns,a=e.contentVisibility,s=e.rows,l=e.alignButtons;return Object(c.createElement)(_.InspectorControls,{key:"inspector"},Object(c.createElement)(v.PanelBody,{title:Object(i.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(P.a,{columns:u,rows:s,alignButtons:l,setAttributes:r})),Object(c.createElement)(v.PanelBody,{title:Object(i.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(S.a,{settings:a,onChange:function(t){return r({contentVisibility:t})}})),Object(c.createElement)(v.PanelBody,{title:Object(i.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(E.a,{selected:n,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return t.id}));r({categories:e})},operator:o,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({catOperator:t})}})))}},{key:"render",value:function(){var t=this.props,e=t.attributes,r=t.name;return e.isPreview?C.a:Object(c.createElement)(c.Fragment,null,this.getInspectorControls(),Object(c.createElement)(v.Disabled,null,Object(c.createElement)(k.ServerSideRender,{block:r,attributes:e})))}}]),r}(c.Component),D=r(82),R=r(70);function B(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}Object(u.registerBlockType)("woocommerce/product-new",{title:Object(i.__)("Newest Products","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(s.a,{srcElement:b}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Display a grid of your newest products.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},attributes:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?B(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},R.a),example:{attributes:{isPreview:!0}},transforms:{from:[{type:"block",blocks:Object(a.without)(R.b,"woocommerce/product-new"),transform:function(t){return Object(u.createBlock)("woocommerce/product-new",t)}}]},deprecated:[{attributes:R.a,save:Object(D.a)("woocommerce/product-new")}],edit:function(t){return Object(c.createElement)(A,t)},save:function(){return null}})},92:function(t,e){!function(){t.exports=this.wp.hooks}()},99:function(t,e){!function(){t.exports=this.wp.date}()}});
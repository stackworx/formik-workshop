(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(153)),i={id:"yup",title:"Yup"},c={id:"yup",title:"Yup",description:"Validation is a very repetitive task, and can easily clutter code",source:"@site/docs/yup.md",permalink:"/formik-workshop/docs/yup",editUrl:"https://github.com/stackworx/formik-workshop/edit/master/docs/docs/yup.md",sidebar:"someSidebar",previous:{title:"Formik Material Ui",permalink:"/formik-workshop/docs/formik-material-ui"}},u=[],l={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Validation is a very repetitive task, and can easily clutter code"),Object(a.b)("p",null,"Thanks to Yup, validation is made super easy."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If you take a look in the basic validation in the Example project NoFormik.tsx you will see how much work a simple string validation can be, and how much it can clutter the code.")),Object(a.b)("p",null,"Below follows an example of yup integration with Formik"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import * as yup from "yup";\nimport Formik, { Field } from "formik";\nimport { TextField } from "formik-material-ui";\n\nconst validationSchema = yup.object().shape({\n  name: yup.string().required("This is a required field"),\n});\n\n<Formik\n  validationSchema={validationSchema}\n  initialValues={{ name: "" }}\n  onSubmit={() => {}}\n>\n  {(formikBag) => {\n    const { errors, touched } = formikBag;\n    return (\n      <>\n        <Field name="name" component={TextField} />\n      </>\n    );\n  }}\n</Formik>;\n')))}p.isMDXComponent=!0},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||a;return n?o.a.createElement(d,c({ref:t},l,{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
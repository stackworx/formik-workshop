(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(9),a=(r(0),r(153)),i={id:"material-ui",title:"Material Ui"},c={id:"material-ui",title:"Material Ui",description:"Manual Material Ui Integration",source:"@site/docs/material-ui.md",permalink:"/formik-workshop/docs/material-ui",editUrl:"https://github.com/stackworx/formik-workshop/edit/master/docs/docs/material-ui.md",sidebar:"someSidebar",previous:{title:"The Field",permalink:"/formik-workshop/docs/simple-form-with-field"},next:{title:"Formik Material Ui",permalink:"/formik-workshop/docs/formik-material-ui"}},l=[],p={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Manual Material Ui Integration"),Object(a.b)("p",null,"Seeing as we are integrating Material UI with most of our projects Integrating the UI library with the form management is quite important"),Object(a.b)("p",null,"As discussed in the previous section there are a lot ways to use the Field Component"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import TextField from "@material-ui/core/TextField";\nimport Field from "formik";\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Field>\n  {(fieldProps) => {\n    //  field: FieldInputProps<V>;\n    // form: FormikProps<FormValues>;\n    // meta: FieldMetaProps<V>;\n    const { field, meta, form } = fieldProps;\n    return (\n      <TextField\n        {...field}\n        error={meta.error && meta.touched}\n        helperText={meta.touched && meta.error ? meta.error : ""}\n      />\n    );\n  }}\n</Field>\n')))}u.isMDXComponent=!0},153:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},m=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=n,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||a;return r?o.a.createElement(d,c({ref:t},p,{components:r})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{5276:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(5509)}])},5509:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var r=t(7876),a=t(6101),l=t(4232),n=t(6905),o=t(4398),i=t(8130);t.n(i)().config();let c=()=>{let{executeRecaptcha:e}=(0,n._Y)(),[s,t]=(0,o.mN)("manedaop"),[a,i]=(0,l.useState)(!1),[c,d]=(0,l.useState)({firstName:"",lastName:"",email:"",phone:"",message:""});(0,l.useEffect)(()=>{e&&i(!0)},[e]);let m=e=>{d({...c,[e.target.name]:e.target.value})},x=async s=>{if(s.preventDefault(),!e){console.error("reCAPTCHA not loaded"),alert("reCAPTCHA not loaded! Please refresh the page and try again.");return}try{console.log("Executing reCAPTCHA...");let s=await e("submit");if(console.log("reCAPTCHA token received:",s?"Token received":"No token"),s){let e={...c,"g-recaptcha-response":s};console.log("Submitting form with reCAPTCHA token"),await t(e)}else console.error("No reCAPTCHA token received"),alert("reCAPTCHA verification failed. Please try again.")}catch(e){console.error("Error during form submission:",e),alert("There was an error submitting the form. Please try again.")}};return s.succeeded?(0,r.jsx)("section",{className:"relative flex flex-col items-center justify-center w-full py-40 bg-dark font-montserrat min-h-screen",children:(0,r.jsxs)("div",{className:"max-w-4xl mx-auto my-10 p-8 bg-dark text-yellowApp shadow-lg rounded-lg",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Thank You!"}),(0,r.jsx)("p",{children:"Your message has been sent successfully. We'll get back to you soon."})]})}):(0,r.jsx)("section",{className:"relative flex flex-col items-center justify-center w-full py-40 bg-dark font-montserrat min-h-screen",children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row max-w-4xl mx-auto my-10 shadow-lg rounded-lg overflow-hidden",children:[(0,r.jsxs)("div",{className:"md:w-1/3 bg-dark text-yellowApp p-6 flex flex-col justify-between",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Contact Information"}),(0,r.jsx)("p",{className:"text-yellowApp",children:"Contact us by phone or send a message and we will contact you!"}),(0,r.jsxs)("div",{className:"mt-6",children:[(0,r.jsxs)("p",{className:"flex items-center",children:[(0,r.jsx)("span",{className:"mr-2",children:"\uD83D\uDCDE"})," 083 168 0801"]}),(0,r.jsxs)("p",{className:"flex items-center",children:[(0,r.jsx)("span",{className:"mr-2",children:"✉️"})," Info@cloghalahomes.ie"]}),(0,r.jsxs)("p",{className:"flex items-center",children:[(0,r.jsx)("span",{className:"mr-2",children:"\uD83D\uDCCD"})," Hebron Business Park, 39B Hebron Road, Leggetsrath West, Kilkenny R95 C43W"]})]})]}),(0,r.jsxs)("div",{className:"md:w-2/3 p-6",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-yellowApp",children:"Contact Us"}),(0,r.jsx)("p",{className:"text-yellowApp",children:"Any questions? Just write us a message!"}),!a&&(0,r.jsx)("div",{className:"text-yellow-500 mt-2 mb-4",children:"Loading security verification..."}),(0,r.jsxs)("form",{onSubmit:x,className:"mt-6 space-y-4",children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,r.jsx)("input",{name:"firstName",value:c.firstName,onChange:m,placeholder:"First Name",className:"border p-2 rounded w-full",required:!0}),(0,r.jsx)("input",{name:"lastName",value:c.lastName,onChange:m,placeholder:"Last Name",className:"border p-2 rounded w-full",required:!0})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,r.jsx)("input",{type:"email",name:"email",value:c.email,onChange:m,placeholder:"Email",className:"border p-2 rounded w-full",required:!0}),(0,r.jsx)("input",{name:"phone",value:c.phone,onChange:m,placeholder:"Phone Number",className:"border p-2 rounded w-full",required:!0})]}),(0,r.jsx)("textarea",{name:"message",value:c.message,onChange:m,placeholder:"Write your message..",className:"border p-2 rounded w-full h-24",required:!0}),s.errors&&(0,r.jsx)("div",{className:"text-red-500",children:(0,r.jsx)(o.yI,{errors:s.errors})}),(0,r.jsx)("div",{className:"text-xs text-gray-400",children:"This site is protected by reCAPTCHA v3. By submitting, you agree to Google's Privacy Policy and Terms of Service."}),(0,r.jsx)("button",{type:"submit",className:"bg-footerBrown text-yellowApp px-6 py-2 rounded-lg hover:bg-gray-700",disabled:s.submitting||!a,children:s.submitting?"Sending...":"Send Message"})]})]})]})})};var d=t(5105),m=t.n(d);let x=()=>(0,r.jsxs)(a.A,{title:"Contact | Cloghala",children:[(0,r.jsx)(m(),{src:"https://www.google.com/recaptcha/api.js?render=6LeIuAQrAAAAAJinmxQ4L_QLoHlxWPf87Vfc8iiV"}),(0,r.jsx)(c,{})]})},6101:(e,s,t)=>{"use strict";t.d(s,{A:()=>u});var r=t(7876),a=t(4232),l=t(8230),n=t.n(l),o=t(7328),i=t.n(o),c=t(9099),d=t(4587),m=t.n(d),x=t(672),h=t(8447);let u=e=>{let{children:s,title:t="Layout"}=e,l=(0,c.useRouter)(),[o,d]=(0,a.useState)(!1),u=()=>{d(!o),document.body.style.overflow=o?"auto":"hidden"};return(0,r.jsxs)("div",{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:t})}),(0,r.jsx)("header",{className:"fixed top-0 left-0 w-full z-50 transition duration-300 bg-dark",children:(0,r.jsxs)("nav",{className:"max-w-screen-xl flex items-center justify-between mx-auto p-4",children:[(0,r.jsx)("a",{href:"/",className:"text-2xl font-semibold transition duration-300",children:(0,r.jsx)(m(),{src:"/images/homePage/Logo/logo.jpg",alt:"Logo",width:75,height:75,priority:!0})}),(0,r.jsxs)("div",{className:"hidden md:flex space-x-8 items-center",children:[(0,r.jsx)(n(),{href:"/",className:"py-2 px-3 transition text-yellowApp ".concat("/"===l.pathname?"font-bold border-b-2 border-gray-900":"hover:text-white"),children:"Home"}),(0,r.jsx)(n(),{href:"/about",className:"text-yellowApp py-2 px-3 transition ".concat("/about"===l.pathname?"font-bold border-b-2 border-gray-900":"hover:text-white"),children:"About"}),(0,r.jsx)(n(),{href:"/contact",className:"text-yellowApp py-2 px-3 transition ".concat("/contact"===l.pathname?"font-bold border-b-2 border-gray-900":"hover:text-white"),children:"Contact"})]}),(0,r.jsx)("button",{onClick:u,className:"md:hidden text-yellowApp z-50",children:o?(0,r.jsx)(x.A,{size:28}):(0,r.jsx)(h.A,{size:28})}),(0,r.jsx)("div",{className:"fixed top-0 left-0 w-full h-screen bg-dark text-yellowApp flex flex-col items-center justify-center transition-transform duration-300 ".concat(o?"translate-y-0 opacity-100":"-translate-y-full opacity-0"),children:(0,r.jsxs)("ul",{className:"space-y-6 text-2xl text-center",children:[(0,r.jsx)("li",{children:(0,r.jsx)(n(),{href:"/",onClick:u,className:"hover:underline",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n(),{href:"/about",onClick:u,className:"hover:underline",children:"About"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n(),{href:"/contact",onClick:u,className:"hover:underline",children:"Contact"})})]})})]})}),(0,r.jsx)("div",{children:s}),(0,r.jsx)("footer",{className:"bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-footerBrown dark:border-gray-600",children:(0,r.jsx)("span",{className:"text-sm text-gray-500 sm:text-center dark:text-gray-400",children:"\xa9 2025 Cloghala Construction™. All Rights Reserved."})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[112,846,636,593,792],()=>s(5276)),_N_E=e.O()}]);
"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[209],{5351:function(e,t,a){a.r(t);var s=a(7387),r=a(6540),n=a(3895),o=a(7528);let l=function(e){function t(t){var a;return(a=e.call(this,t)||this).submitForm=a.submitForm.bind(a),a.state={status:""},a}(0,s.A)(t,e);var a=t.prototype;return a.render=function(){const{data:{site:{siteMetadata:{title:e}}}}=this.props,{status:t}=this.state;return r.createElement(n.A,{location:this.props.location,title:e},r.createElement(o.A,{title:"Contact Me"}),r.createElement("h1",null,"Send your message:"),r.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/xeqpqqor",method:"POST",className:"contact"},r.createElement("label",{htmlFor:"name"},"Name:"),r.createElement("input",{type:"text",name:"name",required:!0}),r.createElement("label",{htmlFor:"email"},"Email:"),r.createElement("input",{type:"email",name:"email",required:!0}),r.createElement("label",{htmlFor:"message"},"Message:"),r.createElement("textarea",{name:"message",rows:5,required:!0}),"SUCCESS"===t?r.createElement("p",{className:"success"},"Thanks!"):r.createElement("button",null,"Submit"),"ERROR"===t&&r.createElement("p",{className:"error"},"Ooops! There was an error.")))},a.submitForm=function(e){e.preventDefault();const t=e.target,a=new FormData(t),s=new XMLHttpRequest;s.open(t.method,t.action),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=()=>{s.readyState===XMLHttpRequest.DONE&&(200===s.status?(t.reset(),this.setState({status:"SUCCESS"})):this.setState({status:"ERROR"}))},s.send(a)},t}(r.Component);t.default=l}}]);
//# sourceMappingURL=component---src-pages-contact-js-dff2ad017808905851ec.js.map
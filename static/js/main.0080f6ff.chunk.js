(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{109:function(e,t,s){},110:function(e,t,s){},210:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s(0),n=s.n(r),o=s(24),c=s.n(o),i=(s(107),s(108),s(109),s(110),s(25)),l=s(8),d=s(12),h=s(13),u=s(15),j=s(14),m=s(30),p=s(31),b=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("header",{className:"home",children:[Object(a.jsxs)("h1",{children:["C-lister ",Object(a.jsx)(m.a,{icon:p.a})]}),Object(a.jsx)("p",{children:"Check those things off the list."}),Object(a.jsx)("p",{children:Object(a.jsx)(i.b,{to:"/signup",className:"sign-up",children:"Sign up"})}),Object(a.jsxs)("p",{className:"aleady-a-user",children:["Already a user?",Object(a.jsx)(i.b,{to:"/login",className:"sign-up",onClick:this.handleOpen,children:Object(a.jsx)("span",{className:"ml-2",children:"Log in"})})]})]})})}}]),s}(r.Component),O=s(17),f=s(97),w=s.n(f),x="localhost:8000",g="c-lister.herokuapp.com",v=window.location.hostname,E={API_URL:"http://".concat("localhost"===v?x:g,"/api/v1")},y={baseURL:E.API_URL,headers:{"Content-Type":"application/json"}},k=w.a.create(y);k.interceptors.request.use((function(e){var t=localStorage.getItem("auth_token");return e.headers.Authorization=t?"Token ".concat(t):null,e}),(function(e){return Promise.reject(e)}));var S=k,N=s(4),C=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"logUserOut",value:function(){localStorage.removeItem("auth_token"),window.location="/C-lister/"}},{key:"render",value:function(){var e=localStorage.getItem("auth_token"),t=window.location.pathname;return Object(a.jsxs)(N.r,{type:"dark",theme:"primary",expand:"md",children:[Object(a.jsx)(N.s,{href:"/C-lister/",children:"C-lister"}),e?Object(a.jsxs)(N.o,{navbar:!0,className:"ml-auto",children:[Object(a.jsx)(N.p,{children:Object(a.jsx)(N.q,{active:"/C-lister/list"===t,disabled:"/C-lister/list"===t,href:"/C-lister/list",children:"Checklist"})}),Object(a.jsx)(N.p,{children:Object(a.jsx)(N.q,{active:"/C-lister/account"===t,disabled:"/C-lister/account"===t,href:"/C-lister/account",children:"Account"})}),Object(a.jsx)(N.p,{children:Object(a.jsx)(N.q,{href:"/C-lister/",onClick:this.logUserOut,children:"Log out"})})]}):""]})}}]),s}(r.Component),P=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(e,a){var r;return Object(d.a)(this,s),(r=t.call(this,e)).updateTitle=function(e){""!==e.target.value&&r.setState({title:e.target.value,showTitleError:!1})},r.updateDesciption=function(e){r.setState({description:e.target.value})},r.updateDueDate=function(e){r.setState({dueDate:e.target.value})},r.submitForm=function(e){e.preventDefault(),r.setState({showError:!1});var t={title:r.state.title,description:r.state.description};r.state.dueDate&&(t.due_date=r.state.dueDate),S.post("".concat(E.API_URL,"/items/"),t).then((function(e){r.setState({title:"",description:"",dueDate:"",showTitleError:!1,nonfieldError:"",showNonFieldError:!1}),r.props.handleAddItemModal()})).catch((function(e){e.response&&(e.response.data.title&&r.setState({showTitleError:!0}),e.response.data.non_field_errors&&r.setState((function(){return{showNonFieldError:!0,nonFieldErrorMessage:e.response.data.non_field_errors}})))}))},r.state={open:r.props.open,title:"",description:"",dueDate:"",showTitleError:!1,nonfieldError:"",showNonFieldError:!1},r}return Object(h.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(N.k,{open:this.props.open,onHide:this.props.handleAddItemModal,children:[Object(a.jsx)(N.n,{children:"Add Item"}),Object(a.jsxs)(N.l,{children:[Object(a.jsxs)(N.e,{children:[Object(a.jsxs)(N.g,{children:[Object(a.jsx)("label",{htmlFor:"title",children:"Title"}),Object(a.jsx)(N.h,{invalid:this.state.showTitleError,id:"title",type:"text",onChange:this.updateTitle}),Object(a.jsx)(N.f,{type:"invalid",children:"Please enter a title"})]}),Object(a.jsxs)(N.g,{children:[Object(a.jsx)("label",{htmlFor:"description",children:"Description"}),Object(a.jsx)(N.h,{id:"description",type:"text",onChange:this.updateDescription})]}),Object(a.jsxs)(N.g,{children:[Object(a.jsx)("label",{htmlFor:"due-date",children:"Due Date"}),Object(a.jsx)(N.h,{id:"due-date",type:"date",onChange:this.updateDueDate}),Object(a.jsx)(N.f,{type:"invalid",children:"Please enter a due date"})]})]}),Object(a.jsx)("p",{className:this.state.showNonFieldError?"show-error":"hide-error",children:this.state.nonfieldError})]}),Object(a.jsxs)(N.m,{children:[Object(a.jsx)(N.b,{variant:"primary",onClick:this.submitForm,children:"Add"}),Object(a.jsx)(N.b,{variant:"secondary",onClick:this.props.handleAddItemModal,children:"Cancel"})]})]})})}}]),s}(r.Component),I=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(e,a){var r;return Object(d.a)(this,s),(r=t.call(this,e)).completeItem=r.completeItem.bind(Object(O.a)(r)),r.unCompleteItem=r.unCompleteItem.bind(Object(O.a)(r)),r.deleteItem=r.deleteItem.bind(Object(O.a)(r)),r.handleAddItemModal=r.handleAddItemModal.bind(Object(O.a)(r)),r.state={items:[],showAddItemModal:!1},r}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.loadItems()}},{key:"loadItems",value:function(){var e=this;S.get("".concat(E.API_URL,"/items/")).then((function(t){e.setState({items:t.data})})).catch((function(e){e.response}))}},{key:"completeItem",value:function(e){var t=this;S.patch("".concat(E.API_URL,"/items/").concat(e.pk,"/"),{complete:!0}).then((function(s){t.setState((function(t){return t.items.map((function(t){return t.complete=t.pk===e.pk||t.complete,t}))}))})).catch((function(e){return console.log(e)}))}},{key:"unCompleteItem",value:function(e){var t=this;S.patch("".concat(E.API_URL,"/items/").concat(e.pk,"/"),{complete:!1}).then((function(s){t.setState((function(t){return t.items.map((function(t){return t.complete=t.pk!==e.pk&&t.complete,t}))}))})).catch((function(e){return console.log(e)}))}},{key:"deleteItem",value:function(e){var t=this;S.delete("".concat(E.API_URL,"/items/").concat(e.pk,"/")).then((function(s){t.setState((function(t){return{items:t.items.filter((function(t){return t.pk!==e.pk}))}}))})).catch((function(e){return console.log(e)}))}},{key:"updateTitle",value:function(e){console.log("updating title...")}},{key:"editItem",value:function(e){console.log("editing item....".concat(e))}},{key:"renderActions",value:function(e){var t=this;return e.complete?Object(a.jsx)(N.b,{className:"mr-2",size:"sm",theme:"secondary",onClick:function(){return t.unCompleteItem(e)},children:Object(a.jsx)(m.a,{icon:p.d})}):Object(a.jsx)(N.b,{className:"mr-2",size:"sm",theme:"secondary",onClick:function(){return t.completeItem(e)},children:Object(a.jsx)(m.a,{icon:p.a})})}},{key:"handleAddItemModal",value:function(){var e=!this.state.showAddItemModal;this.setState({showAddItemModal:e}),this.loadItems()}},{key:"renderList",value:function(){var e=this;return this.state.items.map((function(t,s){return Object(a.jsxs)(N.j,{children:[Object(a.jsx)("span",{className:t.complete?"strikethrough":"",children:t.title}),Object(a.jsxs)("span",{className:"float-right",children:[Object(a.jsx)(N.b,{size:"sm",className:"mr-2",theme:"info",onClick:function(){return e.editItem(t)},children:Object(a.jsx)(m.a,{icon:p.b})}),e.renderActions(t),Object(a.jsx)(N.b,{size:"sm",className:"mr-2",theme:"danger",onClick:function(){return e.deleteItem(t)},children:Object(a.jsx)(m.a,{icon:p.e})})]})]},s)}))}},{key:"renderItems",value:function(){return 0===this.state.items.length?Object(a.jsx)(N.c,{sm:"12",children:Object(a.jsx)("div",{className:"text-center no-items",children:"You have no items yet. Click the plus button add one!"})}):Object(a.jsx)(N.c,{lg:!0,children:Object(a.jsx)(N.i,{children:this.renderList()})})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"checklist",children:[Object(a.jsx)(C,{}),Object(a.jsxs)(N.d,{children:[Object(a.jsxs)(N.t,{className:"justify-content-md-center mb-5",children:[Object(a.jsx)(N.c,{sm:"9",children:Object(a.jsx)("h2",{children:"Your CheckList"})}),Object(a.jsx)(N.c,{sm:"1",children:Object(a.jsx)(N.b,{theme:"light",onClick:function(){return e.handleAddItemModal()},children:Object(a.jsx)(m.a,{icon:p.c})})})]}),Object(a.jsx)(N.t,{className:"justify-content-md-center",children:this.renderItems()})]}),Object(a.jsx)(P,{open:this.state.showAddItemModal,handleAddItemModal:this.handleAddItemModal})]})}}]),s}(r.Component),F=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).updateEmail=function(e){""!==e.target.value&&a.setState({username:e.target.value,email:e.target.value,showUsernameError:!1,showNonFieldError:!1})},a.updatePassword=function(e){""!==e.target.value&&a.setState({password:e.target.value,showPasswordError:!1,showNonFieldError:!1})},a.submitForm=function(e){e.preventDefault(),a.setState({showError:!1}),S.post("".concat(E.API_URL,"/token-auth/"),{username:a.state.username,password:a.state.password}).then((function(e){localStorage.setItem("auth_token",e.data.token),a.props.history.push("/list")})).catch((function(e){e.response&&((e.response.data.email||e.response.data.username)&&a.setState({showEmailError:!0}),e.response.data.password&&a.setState({showPasswordError:!0}),e.response.data.non_field_errors&&a.setState((function(){return{showNonFieldError:!0,nonFieldErrorMessage:e.response.data.non_field_errors}})))}))},a.state={username:"",email:"",password:"",showEmailError:!1,showPasswordError:!1,showNonFieldError:!1,nonFieldErrorMessage:""},a}return Object(h.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(C,{}),Object(a.jsxs)(N.d,{children:[Object(a.jsx)(N.t,{className:"justify-content-md-center",children:Object(a.jsxs)(N.c,{sm:"8",children:[Object(a.jsx)("h3",{className:"mb-4",children:"Log in to your Account"}),Object(a.jsxs)(N.e,{children:[Object(a.jsxs)(N.g,{children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(a.jsx)(N.h,{invalid:this.state.showEmailError,id:"email",type:"text",onChange:this.updateEmail}),Object(a.jsx)(N.f,{type:"invalid",children:"Please enter a valid email address"})]}),Object(a.jsxs)(N.g,{children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)(N.h,{invalid:this.state.showPasswordError,id:"password",type:"password",onChange:this.updatePassword}),Object(a.jsx)(N.f,{type:"invalid",children:"Please enter a password"})]})]}),Object(a.jsx)("p",{className:this.state.showNonFieldError?"show-error":"hide-error",children:this.state.nonFieldErrorMessage}),Object(a.jsx)(N.b,{className:"mr-2",theme:"primary",onClick:this.submitForm,children:"Log in"})]})}),Object(a.jsx)(N.t,{className:"justify-content-md-center",children:Object(a.jsx)(N.c,{sm:"8",children:Object(a.jsxs)("p",{className:"aleady-a-user",children:["Don't have an account? ",Object(a.jsx)(i.b,{to:"/signup",className:"sign-up",children:"Sign up"})]})})})]})]})}}]),s}(r.Component),_=Object(l.g)(F),M=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(e,a){var r;return Object(d.a)(this,s),(r=t.call(this,e)).handleClose=function(){r.setState({open:!1})},r.handleOpen=function(e){e.preventDefault(),r.setState({open:!0})},r.updateEmail=function(e){""!==e.target.value&&r.setState({username:e.target.value,email:e.target.value,showEmailError:!1})},r.updatePassword=function(e){""!==e.target.value&&r.setState({password:e.target.value,showPasswordError:!1})},r.submitForm=function(e){e.preventDefault(),r.setState({showError:!1}),S.post("".concat(E.API_URL,"/account/"),{username:r.state.username,email:r.state.email,password:r.state.password}).then((function(e){r.props.history.push("/list")})).catch((function(e){e.response&&(e.response.data.email&&r.setState({showEmailError:!0}),e.response.data.password&&r.setState({showPasswordError:!0}),r.setState((function(){return{showNonFieldError:!0,nonFieldErrorMessage:e.response.data.non_field_errors}})))}))},r.handleOpen=r.handleOpen.bind(Object(O.a)(r)),r.handleClose=r.handleClose.bind(Object(O.a)(r)),r.state={username:"",email:"",password:"",showUsernameError:!1,showEmailError:!1,showPasswordError:!1,showNonFieldError:"",nonFieldErrorMessage:""},r}return Object(h.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(C,{}),Object(a.jsxs)(N.d,{children:[Object(a.jsx)(N.t,{className:"justify-content-md-center",children:Object(a.jsxs)(N.c,{sm:"8",children:[Object(a.jsx)("h3",{className:"mb-4",children:"Sign up for an Account"}),Object(a.jsxs)(N.e,{children:[Object(a.jsxs)(N.g,{children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(a.jsx)(N.h,{invalid:this.state.showEmailError,id:"email",type:"email",onChange:this.updateEmail}),Object(a.jsx)(N.f,{className:"text-danger",children:"Please enter valid email address."})]}),Object(a.jsxs)(N.g,{children:[Object(a.jsx)("label",{htmlFor:"email",children:"Password"}),Object(a.jsx)(N.h,{invalid:this.state.showPasswordError,id:"password",type:"password",onChange:this.updatePassword}),Object(a.jsx)(N.f,{type:"invalid",children:"Please enter a password"})]})]}),Object(a.jsx)("p",{className:this.state.showNonFieldError?"show-error":"hide-error",children:this.state.nonFieldErrorMessage}),Object(a.jsx)(N.b,{className:"mr-2",theme:"primary",onClick:this.submitForm,children:"Sign up"})]})}),Object(a.jsx)(N.t,{className:"justify-content-md-center",children:Object(a.jsx)(N.c,{sm:"8",children:Object(a.jsxs)("p",{className:"aleady-a-user",children:["Already have an account? ",Object(a.jsx)(i.b,{to:"/login",className:"sign-up",children:"Log in"})]})})})]})]})}}]),s}(r.Component),U=Object(l.g)(M),A=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).populateForm=function(e){S.get("".concat(E.API_URL,"/account/")).then((function(e){var t=e.data[0];a.setState({account:t,fields:{email:t.email}})})).catch((function(e){e.response}))},a.updateEmail=function(e){a.setState({fields:{email:e.target.value},showEmailError:!1})},a.submitUpdateAccountForm=function(e){e.preventDefault(),a.setState({showEmailError:!1}),S.patch("".concat(E.API_URL,"/account/").concat(a.state.account.id,"/"),{username:a.state.fields.username,email:a.state.fields.email}).then((function(e){a.setState({showEmailUpdatedSuccessMessage:!0})})).catch((function(e){e.response&&(e.response.data.email&&a.setState({showEmailError:!0}),e.response.data.non_field_errors&&a.setState((function(){return{showNonFieldError:!0,nonFieldErrorMessage:e.response.data.non_field_errors}})))}))},a.updatePassword=function(e){a.setState({password:e.target.value,showPasswordError:!1})},a.updateConfirmPassword=function(e){a.setState({confirm_password:e.target.value,showPasswordError:!1})},a.submitUpdatePasswordForm=function(e){e.preventDefault(),a.setState({showPasswordError:!1}),S.post("".concat(E.API_URL,"/account/").concat(a.state.account.id,"/change-password/"),{password:a.state.password,confirm_password:a.state.confirm_password}).then((function(e){a.setState({showPasswordUpdatedSuccessMessage:!0})})).catch((function(e){e.response&&(e.response.data.password&&a.setState({passwordError:e.response.data.password,showPasswordError:!0}),e.response.data.non_field_errors&&a.setState((function(){return{showNonFieldError:!0,nonFieldErrorMessage:e.response.data.non_field_errors}})))}))},a.state={account:{id:null,email:""},fields:{email:""},password:"",confirm_password:"",showNonFieldError:"",nonFieldErrorMessage:"",showEmailError:!1,showEmailUpdatedSuccessMessage:!1,showPasswordError:!1,showPasswordUpdatedSuccessMessage:!1,passwordError:""},a.dismissEmailUpdateSuccessMessage=a.dismissEmailUpdateSuccessMessage.bind(Object(O.a)(a)),a.dismissPasswordUpdateSuccessMessage=a.dismissPasswordUpdateSuccessMessage.bind(Object(O.a)(a)),a}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.populateForm()}},{key:"dismissEmailUpdateSuccessMessage",value:function(){this.setState({showEmailUpdatedSuccessMessage:!1})}},{key:"dismissPasswordUpdateSuccessMessage",value:function(){this.setState({showPasswordUpdatedSuccessMessage:!1})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(C,{}),Object(a.jsxs)(N.d,{children:[Object(a.jsx)(N.t,{className:"justify-content-md-center",children:Object(a.jsx)(N.c,{sm:"10",children:Object(a.jsx)(N.a,{theme:"success",dismissible:this.dismissEmailUpdateSuccessMessage,open:this.state.showEmailUpdatedSuccessMessage,children:"Your email address has been updated!"})})}),Object(a.jsx)(N.t,{className:"justify-content-md-center",children:Object(a.jsxs)(N.c,{sm:"8",children:[Object(a.jsx)("h3",{className:"mb-4",children:"Account Information"}),Object(a.jsx)(N.e,{children:Object(a.jsxs)(N.g,{children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(a.jsx)(N.h,{invalid:this.state.showEmailError,value:this.state.fields.email||"",id:"email",type:"email",onChange:this.updateEmail}),Object(a.jsx)(N.f,{className:"text-danger",children:"Please enter valid email address."})]})}),Object(a.jsx)("p",{className:this.state.showNonFieldError?"show-error":"hide-error",children:this.state.nonFieldErrorMessage}),Object(a.jsx)(N.b,{className:"mr-2",theme:"primary",onClick:this.submitUpdateAccountForm,children:"Update"})]})}),Object(a.jsx)(N.t,{className:"justify-content-md-center mt-5",children:Object(a.jsx)(N.c,{sm:"10",children:Object(a.jsx)(N.a,{theme:"success",dismissible:this.dismissPasswordUpdateSuccessMessage,open:this.state.showPasswordUpdatedSuccessMessage,children:"Your password has been updated!"})})}),Object(a.jsx)(N.t,{className:"justify-content-md-center",children:Object(a.jsxs)(N.c,{sm:"8",children:[Object(a.jsx)("h3",{className:"mb-4",children:"Change Password"}),Object(a.jsxs)(N.e,{children:[Object(a.jsxs)(N.g,{children:[Object(a.jsx)("label",{htmlFor:"password",children:"New Password"}),Object(a.jsx)(N.h,{invalid:this.state.showPasswordError,id:"password",type:"password",onChange:this.updatePassword})]}),Object(a.jsxs)(N.g,{children:[Object(a.jsx)("label",{htmlFor:"password_confirmation",children:"Confirm New Password"}),Object(a.jsx)(N.h,{invalid:this.state.showPasswordError,id:"confirm_password",type:"password",onChange:this.updateConfirmPassword})]})]}),Object(a.jsx)("p",{className:this.state.showPasswordError?"show-error":"hide-error",children:this.state.passwordError}),Object(a.jsx)(N.b,{className:"mr-2",theme:"primary",onClick:this.submitUpdatePasswordForm,children:"Update"})]})})]})]})}}]),s}(r.Component),D=Object(l.g)(A),L=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){var e=this.props.component;return localStorage.getItem("auth_token")?Object(a.jsx)(e,{}):Object(a.jsx)(l.a,{to:{pathname:"/"}})}}]),s}(n.a.Component);var R=function(){var e=!!localStorage.getItem("auth_token");return Object(a.jsx)(i.a,{basename:"/C-lister",children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/",exact:!0,children:e?Object(a.jsx)(l.a,{to:"/list"}):Object(a.jsx)(b,{})}),Object(a.jsx)(l.b,{path:"/login",exact:!0,component:_}),Object(a.jsx)(l.b,{path:"/signup",exact:!0,component:U}),Object(a.jsx)(L,{path:"/list",exact:!0,component:I}),Object(a.jsx)(L,{path:"/account",exact:!0,component:D})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(a.jsx)(R,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[210,1,2]]]);
//# sourceMappingURL=main.0080f6ff.chunk.js.map
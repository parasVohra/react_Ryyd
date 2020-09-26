(this.webpackJsonpryyd=this.webpackJsonpryyd||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"a":"http://localhost:5001/api"}')},39:function(e,t,a){e.exports=a(72)},45:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(34),c=a.n(s),o=a(14),i=(a(44),a(45),a(4)),l=a(8),u=a(6),m=a(5),p=a(1),d=a.n(p),h=a(9),f=a(18),v=a.n(f);v.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(console.log("logging the error",e),alert("An unexpected error occurred")),Promise.reject(e)}));var b={get:v.a.get,post:v.a.post,put:v.a.put,delete:v.a.delete,setJwt:function(e){v.a.defaults.headers.common["x-auth-token"]=e}},g=a(16),E=a(35),y=a.n(E),w=g.a+"/auth";function O(){return(O=Object(h.a)(d.a.mark((function e(t,a){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post(w,{email:t,password:a});case 2:r=e.sent,n=r.data,localStorage.setItem("token",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return localStorage.getItem("token")}b.setJwt(j());var x={login:function(e,t){return O.apply(this,arguments)},logout:function(){localStorage.removeItem("token")},getCurrentUser:function(){try{var e=localStorage.getItem("token");return y()(e)}catch(t){return null}},loginWithJwt:function(e){localStorage.setItem("token",e)},getJwt:j},k=a(3),N=function(e){var t=e.user;return n.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light"},n.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Ryyd"),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},n.a.createElement("div",{className:"navbar-nav"},n.a.createElement(o.c,{className:"nav-item nav-link",to:"/dashboard"},"Dashboard"),!t&&n.a.createElement(n.a.Fragment,null,n.a.createElement(o.c,{className:"nav-item nav-link",to:"/login"},"Login"),n.a.createElement(o.c,{className:"nav-item nav-link",to:"/register"},"Register")),t&&n.a.createElement(n.a.Fragment,null,n.a.createElement(o.c,{className:"nav-item nav-link",to:"/searchRide"},"Search Ride"),n.a.createElement(o.c,{className:"nav-item nav-link",to:"/offerRide"},"Offer Ride"),n.a.createElement(o.c,{className:"nav-item nav-link",to:"/profile"},t.name),n.a.createElement(o.c,{className:"nav-item nav-link",to:"/logout"},"Logout")))))},S=function(){return n.a.createElement("h1",null,"Not found")},I=a(13),R=a(20),A=a(37),q=a(2),D=a.n(q),C=a(38),P=function(e){var t=e.name,a=e.label,r=e.error,s=Object(C.a)(e,["name","label","error"]);return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:t},a),n.a.createElement("input",Object.assign({},s,{name:t,id:t,className:"form-control"})),r&&n.a.createElement("div",{className:"alert alert-danger"},r))},F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={data:{},errors:{}},e.validate=function(){var t=D.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var a,r={},n=Object(A.a)(t.details);try{for(n.s();!(a=n.n()).done;){var s=a.value;r[s.path[0]]=s.message}}catch(c){n.e(c)}finally{n.f()}return r},e.validateProperty=function(t){var a=t.name,r=t.value,n=Object(R.a)({},a,r),s=Object(R.a)({},a,e.schema[a]),c=D.a.validate(n,s).error;return c?c.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||e.doSubmit()},e.handleChange=function(t){var a=t.currentTarget,r=Object(I.a)({},e.state.errors),n=e.validateProperty(a);n?r[a.name]=n:delete r[a.name];var s=Object(I.a)({},e.state.data);s[a.name]=a.value,e.setState({data:s,errors:r})},e.renderButton=function(t){return n.a.createElement("button",{disabled:e.validate(),className:"btn btn-primary"},t)},e.renderInput=function(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",s=e.state,c=s.data,o=s.errors;return n.a.createElement(P,{type:r,name:t,value:c[t],onChange:e.handleChange,label:a,error:o[t]})},e}return a}(r.Component),J=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{email:"",password:""},errors:{}},e.schema={email:D.a.string().min(5).max(255).required().label("Email"),password:D.a.string().min(5).max(255).required().label("Password")},e.doSubmit=Object(h.a)(d.a.mark((function t(){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.state.data,t.next=4,x.login(a.email,a.password);case 4:window.location="/",t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((r=Object(I.a)({},e.state.errors)).email=t.t0.response.data,e.setState({errors:r}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Login"),n.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.renderButton("Login")))}}]),a}(F);function T(){return(T=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post(g.a+"/publishRide",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(g.a+"/getRides");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post(g.a+"/searchRide",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M={publishRide:function(e){return T.apply(this,arguments)},getRides:function(){return B.apply(this,arguments)},searchRides:function(e){return L.apply(this,arguments)}},W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.ride;return n.a.createElement("div",null,n.a.createElement("div",{className:"row justify-content-md-center my-3"},n.a.createElement("div",{className:"card col-md-6 col-sm-10 shadow",style:{height:"200px"}},n.a.createElement("div",{className:"card-title my-2 mx-3 text-primary"},"Departure: ",e.date," at ",e.time),n.a.createElement("div",{className:"card-body row"},n.a.createElement("div",{className:"col"},n.a.createElement("p",null,e.userName),n.a.createElement("p",null,"4 Rating")),n.a.createElement("div",{className:"col"},n.a.createElement("p",{className:"text-secondary"},"FROM"),n.a.createElement("strong",null,e.from)),n.a.createElement("div",{className:"col"},n.a.createElement("strong",{style:{fontSize:"50px"}},"\u21e2"),n.a.createElement("p",null)),n.a.createElement("div",{className:"col"},n.a.createElement("p",{className:"text-secondary"},"TO"),n.a.createElement("strong",null,e.to)),n.a.createElement("div",{className:"col "},n.a.createElement("h2",{className:"text-success"},"$",e.price))),n.a.createElement("div",{className:" text-center text-secondary"},n.a.createElement("p",null," Stops: ",e.stops)))))}}]),a}(r.Component),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.getRides();case 2:t=e.sent,a=[t.data],this.setState({rideList:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.rideList;return n.a.createElement("div",null,e?e[0].map((function(e){return n.a.createElement(W,{key:e._id,ride:e})})):n.a.createElement("p",null,'"Loading..."'))}}]),a}(r.Component),_=g.a+"/users";function $(){return($=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.post(_,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z={register:function(e){return $.apply(this,arguments)}},H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{email:"",password:"",name:""},errors:{}},e.schema={email:D.a.string().min(5).max(255).required().label("Email"),password:D.a.string().min(5).max(255).required().label("Password"),name:D.a.string().min(3).max(40).required().label("Name")},e}return Object(l.a)(a,[{key:"doSubmit",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("submitted"),e.prev=1,e.next=4,z.register(this.state.data);case 4:t=e.sent,console.log(t),x.loginWithJwt(t.headers["x-auth-token"]),window.location="/",e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),(a=Object(I.a)({},this.state.errors)).email=e.t0.response.data,this.setState({errors:a});case 15:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Register"),n.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("name","Name"),this.renderInput("email","Email","email"),this.renderInput("password","Password","password"),this.renderButton("Register")))}}]),a}(F),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("h1",null,"Home")}}]),a}(r.Component),K=(a(71),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){x.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),a}(r.Component)),Q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{from:"",to:"",date:"",stops:"",time:"",seats:"",price:"",info:""},errors:{}},e.schema={from:D.a.string().min(3).max(255).required().label("From"),to:D.a.string().min(3).max(255).required().label("To"),stops:D.a.string().min(3).max(255).label("Stops"),date:D.a.date().required().label("Date"),time:D.a.string().required().label("Time"),seats:D.a.number().min(1).max(7).required().label("Seat"),price:D.a.number().required().label("Price"),info:D.a.string().max(255).label("Info")},e}return Object(l.a)(a,[{key:"doSubmit",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,a,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.state.data),t=x.getCurrentUser(),(a=Object(I.a)({},this.state.data)).userName=t.name,a.userID=t._id,this.setState({publishData:a}),e.prev=6,e.next=9,M.publishRide(a);case 9:r=e.sent,console.log(r),this.props.history.push("/dashboard"),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(6),(n=Object(I.a)({},this.state.errors)).from=e.t0.response,this.setState({errors:n});case 19:case"end":return e.stop()}}),e,this,[[6,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Offer Ride"),n.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("from","From"),this.renderInput("to","To"),this.renderInput("stops","Additional Stops"),this.renderInput("date","Date of Ryyding","date"),this.renderInput("time","Time","time"),this.renderInput("seats","No. of seats","number"),this.renderInput("price","Price per seat","number"),this.renderInput("info","Additional Info"),this.renderButton("Publish")))}}]),a}(F),V=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{from:"",to:""},searchData:"",errors:{}},e.schema={from:D.a.string().min(3).max(255).required().label("From"),to:D.a.string().min(3).max(255).required().label("To")},e}return Object(l.a)(a,[{key:"doSubmit",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.data,e.prev=1,e.next=4,M.searchRides(t);case 4:a=e.sent,this.setState({searchData:a.data}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),(r=Object(I.a)({},this.state.errors)).from=e.t0.response,this.setState({errors:r});case 13:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.searchData;return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("from","From"),this.renderInput("to","To"),this.renderButton("Search")),e?e.map((function(e){return n.a.createElement(W,{key:e._id,ride:e})})):n.a.createElement("p",null))}}]),a}(F),X=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=x.getCurrentUser();this.setState({user:e})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(N,{user:this.state.user}),n.a.createElement("main",{className:"container"},n.a.createElement(k.d,null,n.a.createElement(k.b,{path:"/searchRide",component:V}),n.a.createElement(k.b,{path:"/showRide",component:W}),n.a.createElement(k.b,{path:"/offerRide",component:Q}),n.a.createElement(k.b,{path:"/logout",component:K}),n.a.createElement(k.b,{path:"/home",component:G}),n.a.createElement(k.b,{path:"/login",component:J}),n.a.createElement(k.b,{path:"/Register",component:H}),n.a.createElement(k.b,{path:"/dashboard",component:U}),n.a.createElement(k.b,{path:"/not-found",component:S}),n.a.createElement(k.a,{from:"/",exact:!0,to:"/home"}),n.a.createElement(k.a,{to:"/not-found"}))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(o.a,null,n.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.6c9e4104.chunk.js.map
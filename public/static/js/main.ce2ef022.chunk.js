(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t){},117:function(e,t,a){e.exports={container:"CustomerDashboard_container__3ndar",dashHeader:"CustomerDashboard_dashHeader__25Lhs",buttonDiv:"CustomerDashboard_buttonDiv__3wLEY",dashIcon:"CustomerDashboard_dashIcon__2uObU"}},166:function(e,t,a){e.exports={aboutContainer:"About_aboutContainer__1jJK6"}},175:function(e,t,a){e.exports=a(352)},180:function(e,t,a){},181:function(e,t,a){},26:function(e,t,a){e.exports={locationItemBox:"LocationItem_locationItemBox__1mLFB",addressTextBox:"LocationItem_addressTextBox__ILdYh",addressText:"LocationItem_addressText__2Ug1s",icon:"LocationItem_icon__3pq0W",timingsBox:"LocationItem_timingsBox__23C-v",timings:"LocationItem_timings__7vYfV",day:"LocationItem_day__2a-Ux"}},28:function(e,t,a){e.exports={mainSection:"Menu_mainSection__3xyfS",heroText:"Menu_heroText__z-Oga",menuContainer:"Menu_menuContainer__NoTPc",menuCategory:"Menu_menuCategory__2Rrc4",menuBg:"Menu_menuBg__1VxLs"}},35:function(e,t,a){e.exports={container:"Footer_container__8kFeD",footerContainer:"Footer_footerContainer__17tln",footerIconsBox:"Footer_footerIconsBox__2xu-7",footerIcon:"Footer_footerIcon__uJssM",footerText:"Footer_footerText__5lGmX",copyright:"Footer_copyright__1XDx0",creators:"Footer_creators__27B6m"}},352:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(44),s=a.n(o),c=(a(180),a(181),a(16)),i=a(38),l=a(361),m=a(159),u=a(360),d=a(40),p=a.n(d),h=function(){return r.a.createElement(l.a,{expand:"md",className:p.a.navBar},r.a.createElement(m.a,null,r.a.createElement(c.b,{className:p.a.brand,to:"/"},"Bar BQ Tonite")),r.a.createElement(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(l.a.Collapse,{id:"basic-navbar-nav",className:[p.a.menuBtn,"justify-content-end"]},r.a.createElement(u.a,{className:p.a.navLinks},r.a.createElement(u.a.Link,{as:c.b,to:"/menu"},r.a.createElement("span",{className:p.a.navLink},"Menu")),r.a.createElement(u.a.Link,{as:c.b,to:"/location"},r.a.createElement("span",{className:p.a.navLink},"Location")),r.a.createElement(u.a.Link,{as:c.b,to:"/reservation"},r.a.createElement("span",{className:p.a.navLink},"Reservation")))))},f=a(11),b=a(12),E=a(14),v=a(13),g=a(15),y=a(67),_=a.n(y),O=a(19),N=a.n(O),w=a(55),j=a.n(w),x=a(357),C=a(363),S=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={reviews:[]},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/api/restaurant/reviews").then((function(t){var a=t.data.reviews;e.setState({reviews:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:j.a.heading},"Reviews"),r.a.createElement(x.a,{className:"d-flex"},this.state.reviews.map((function(e){return e.rating>=4?r.a.createElement(C.a,{bg:"dark",text:"white",key:e.time},r.a.createElement(C.a.Header,{className:j.a.cardHeader},r.a.createElement("h3",{className:j.a.cardHeaderText},e.author_name)),r.a.createElement(C.a.Body,{className:j.a.cardBody},r.a.createElement(C.a.Text,{className:"py-0 text-dark"},e.text)),r.a.createElement(C.a.Footer,{className:j.a.cardFooter},r.a.createElement("small",null,r.a.createElement("span",null," Posted: "),r.a.createElement("span",{className:"text-capitalize"},e.relative_time_description)))):null}))))}}]),t}(n.Component),k=a(166),D=a.n(k),T=function(){return r.a.createElement("div",{className:D.a.aboutContainer},r.a.createElement("h1",null,"About Us"),r.a.createElement("p",null,"As passionate food admirers, we believe that there are no shortcuts to great food. That is why our food is carefully marinated and prepared to ensure perfection. Whether it\u2019s the sizzling kababs off the charcoal grill or pan frying the flavourful karahi recipe, each item is made to order. We take great pride in knowing only the highest quality of food is being served to our customers."))},I=function(e){function t(){return Object(f.a)(this,t),Object(E.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:_.a.mainSection},r.a.createElement("div",{className:_.a.heroText},r.a.createElement("h2",{className:_.a.mainTitle},"Tandoori Grill"),r.a.createElement("h3",null,"Flavor Worth Having"))),r.a.createElement("section",{className:_.a.container},r.a.createElement(T,null),r.a.createElement(S,null)))}}]),t}(n.Component),B=a(56),L=a.n(B),P=a(358),R=function(){return r.a.createElement("div",null,r.a.createElement("section",{className:L.a.mainSection},r.a.createElement("div",{className:L.a.heroText},r.a.createElement("h2",{className:L.a.mainTitle},"Book Your Reservation"))),r.a.createElement("section",{className:L.a.container},r.a.createElement("h3",{className:"text-center pb-2 orange-text font-weight-bold"},"Find A Table"),r.a.createElement("div",{className:L.a.btnDiv},r.a.createElement(c.b,{to:"/signin"},r.a.createElement(P.a,{variant:"secondary"},"Sign In")),r.a.createElement(c.b,{to:"/signup",className:"ml-3"},r.a.createElement(P.a,{variant:"secondary"},"Sign Up")))))},M=a(35),z=a.n(M),F=a(54),A=function(){return r.a.createElement("div",{className:z.a.footerContainer},r.a.createElement("div",{className:z.a.container},r.a.createElement("div",{className:z.a.footerIconsBox},r.a.createElement("a",{href:"https://www.facebook.com/Bar-B-Q-Tonite-Restaurant-127740740599984/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(F.a,{className:z.a.footerIcon})),r.a.createElement("a",{href:"https://www.instagram.com/explore/locations/304456163343909/bar-b-q-tonite/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(F.b,{className:z.a.footerIcon}))),r.a.createElement("div",null,r.a.createElement("p",{className:z.a.footerText},r.a.createElement("span",{className:z.a.copyright},"\xa9")," Copyright"," "+(new Date).getFullYear(),r.a.createElement("br",null),"Created By: ",r.a.createElement("span",{className:z.a.creators}," Sarosh & Imran")))))},H=a(91),G=a.n(H),q=function(){return r.a.createElement("div",{id:G.a.notfound},r.a.createElement("div",{class:G.a.notfound},r.a.createElement("div",{class:G.a.notfound404},r.a.createElement("h1",null,"Oops!"),r.a.createElement("h2",null,"404 - The Page can't be found")),r.a.createElement(c.b,{to:"/"},"Go TO Homepage")))},Y=a(22),X=a(51),U=a(57),Q=a.n(U),W=function(e){return r.a.createElement("div",{className:Q.a.menuItemBox},r.a.createElement("div",{className:Q.a.detailsBox},r.a.createElement("h2",{className:Q.a.dishTitle},e.title),r.a.createElement("h4",{className:Q.a.dishPrice},"$ ",e.price)),r.a.createElement("p",{className:Q.a.dishDesc},e.description))},K=a(28),V=a.n(K);function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(Object(a),!0).forEach((function(t){Object(Y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $=Object(X.a)({space:"16wwcbfuof0f",accessToken:"Qrmlmhfud4wVp78tbQIhulCBklkpgKvwoXBbHXaByyM"}),ee=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={curries:[],desserts:[],drinks:[],grillItems:[],rice:[],starters:[]},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;$.getEntries({content_type:"bbqCurries"}).then((function(t){var a=t.items;e.setState((function(e){return Z({},e,{curries:a})}))})),$.getEntries({content_type:"bbqDesserts"}).then((function(t){var a=t.items;e.setState((function(e){return Z({},e,{desserts:a})}))})),$.getEntries({content_type:"bbqDrinks"}).then((function(t){var a=t.items;console.log("grabbing drinks",{items:a}),e.setState((function(e){return Z({},e,{drinks:a})}))})),$.getEntries({content_type:"bbqGrill"}).then((function(t){var a=t.items;e.setState((function(e){return Z({},e,{grillItems:a})}))})),$.getEntries({content_type:"bbqRice"}).then((function(t){var a=t.items;e.setState((function(e){return Z({},e,{rice:a})}))})),$.getEntries({content_type:"bbqStarter"}).then((function(t){var a=t.items;e.setState((function(e){return Z({},e,{starters:a})}))}))}},{key:"render",value:function(){var e,t,a,n,o,s;return e=this.state.drinks.map((function(e){return r.a.createElement(W,{key:e.sys.id,title:e.fields.title,description:e.fields.description,price:e.fields.price})})),t=this.state.curries.map((function(e){return r.a.createElement(W,{key:e.sys.id,title:e.fields.title,description:e.fields.description,price:e.fields.price})})),n=this.state.desserts.map((function(e){return r.a.createElement(W,{key:e.sys.id,title:e.fields.title,description:e.fields.description,price:e.fields.price})})),o=this.state.grillItems.map((function(e){return r.a.createElement(W,{key:e.sys.id,title:e.fields.title,description:e.fields.description,price:e.fields.price})})),s=this.state.rice.map((function(e){return r.a.createElement(W,{key:e.sys.id,title:e.fields.title,description:e.fields.description,price:e.fields.price})})),a=this.state.starters.map((function(e){return r.a.createElement(W,{key:e.sys.id,title:e.fields.title,description:e.fields.description,price:e.fields.price})})),r.a.createElement("div",null,r.a.createElement("section",{className:V.a.mainSection},r.a.createElement("div",{className:V.a.heroText},r.a.createElement("h2",{className:V.a.mainTitle},"Excite Your Senses"))),r.a.createElement("section",{className:V.a.menuBg},r.a.createElement("div",{className:"container menuContainer"},r.a.createElement("h2",{className:V.a.menuCategory},"Starters"),a,r.a.createElement("h2",{className:V.a.menuCategory},"Grill"),o,r.a.createElement("h2",{className:V.a.menuCategory},"Rice"),s,r.a.createElement("h2",{className:V.a.menuCategory},"Curries"),t,r.a.createElement("h2",{className:V.a.menuCategory},"Drinks"),e,r.a.createElement("h2",{className:V.a.menuCategory},"Desserts"),n)))}}]),t}(n.Component),te=a(117),ae=a.n(te),ne=function(e){return r.a.createElement("div",{id:e.res._id,className:"card mb-2 pl-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text text-capitalize "},r.a.createElement("span",{className:"font-weight-bold"},"seats:")," ",e.res.seatsReqd),r.a.createElement("p",{className:"card-text text-capitalize"},r.a.createElement("span",{className:"font-weight-bold"},"location:")," ",e.res.locationId),r.a.createElement("p",{className:"card-text text-capitalize"},r.a.createElement("span",{className:"font-weight-bold"},"Date & Time:")," ",e.res.bookingDateAndTime)))};function re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var oe=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={showReservations:[],allReservations:[]},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;N()({method:"get",url:"/api/users/reservations/view",headers:{authorization:localStorage.getItem("authorization")}}).then((function(t){e.setState({allReservations:t.data,showReservations:[]},(function(){e.setState((function(t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?re(Object(a),!0).forEach((function(t){Object(Y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):re(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{showReservations:e.state.allReservations.filter((function(t){return t.status===e.props.type}))})}))}))}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.showReservations.map((function(e){return r.a.createElement(ne,{key:e._id,res:e})})))}}]),t}(n.Component),se=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).logoutHandler=function(e){console.log(e),console.log("test"),localStorage.removeItem("authorization"),a.props.history.push("/")},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return console.log("customer dashboard"),r.a.createElement("div",{className:ae.a.container},r.a.createElement("div",{className:ae.a.dashHeader},r.a.createElement("h2",{className:"text-capitalize"},"Welcome to your dashbaord"),r.a.createElement("button",{className:"btn btn-danger ml-2 text-capitalize",onClick:this.logoutHandler},"Logout")),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/reservations/new"},r.a.createElement("button",{className:"btn my-button btn-secondary text-capitalize my-3"},"Make a new reservation"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-4 "},r.a.createElement("h2",null,"Upcoming Reservations"),r.a.createElement(oe,{type:"accepted"})),r.a.createElement("div",{className:"col-sm-12 col-md-4 "},r.a.createElement("h2",null,"Pending Reservations"),r.a.createElement(oe,{type:"pending"})),r.a.createElement("div",{className:"col-sm-12 col-md-4 "},r.a.createElement("h2",null,"Declined Reservations"),r.a.createElement(oe,{type:"declined"}))))}}]),t}(n.Component),ce=a(362),ie=a(172),le=a.n(ie),me=a(170),ue=a.n(me),de=a(171),pe=a.n(de);a(298),a(153);function he(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?he(Object(a),!0).forEach((function(t){Object(Y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):he(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var be=Object(X.a)({space:"16wwcbfuof0f",accessToken:"Qrmlmhfud4wVp78tbQIhulCBklkpgKvwoXBbHXaByyM"}),Ee=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={locations:[],numOfSeats:null,locationId:null,time:"",date:new Date,error:"",alert:null},a.handleChange=function(e){console.log(e.target.id),console.log(e.target.value),a.setState(Object(Y.a)({},e.target.id,e.target.value)),console.log(a.state)},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state);var t=a.state.date+" "+a.state.time;console.log(t),N()({method:"post",url:"/api/users/reservation/create",data:{seatsReqd:a.state.numOfSeats,bookingDateAndTime:t,locationId:a.state.locationId},headers:{authorization:localStorage.getItem("authorization")}}).then((function(e){console.log(e.data),201===e.status&&a.setState({locations:[],numOfSeats:"",locationId:null,time:"",date:new Date,alert:"success",error:null})})).catch((function(e){console.log(e.response),a.setState({locations:[],numOfSeats:"",locationId:null,time:"",date:new Date,alert:"failed",error:e.response.data.error})}))},a.handleTime=function(e){a.setState((function(t){return fe({},t,{time:e})}))},a.handleDate=function(e){console.log("handle date called"),a.setState((function(t){return fe({},t,{date:ue()(e).format("DD-MM-YYYY")})}))},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("State",this.state),be.getEntries({content_type:"restaurantLocation"}).then((function(t){var a=t.items;e.setState((function(e){return fe({},e,{locations:a})}))}))}},{key:"render",value:function(){console.log(this.state);var e=null;return"success"===this.state.alert?e=r.a.createElement(ce.a,{className:"text-capitalize",variant:"success"},"Reservation created! ",r.a.createElement(c.b,{to:"/customerdash"},"Go To Dashboard")):"failed"===this.state.alert&&(e=r.a.createElement(ce.a,{className:"text-capitalize",variant:"danger"},this.state.error)),r.a.createElement("section",{className:"container my-5"},e,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"numOfSeats"},"Seats Required"),r.a.createElement("select",{className:"form-control",id:"numOfSeats",onChange:this.handleChange,value:this.state.numOfSeats},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"locationId"},"Location"),r.a.createElement("select",{className:"form-control",id:"locationId",onChange:this.handleChange},r.a.createElement("option",{disabled:!0,selected:!0}," ","-- select a location --"," "),this.state.locations.map((function(e){return r.a.createElement("option",{key:e.fields.locationId,value:e.fields.unit+"-"+e.fields.street+"-"+e.fields.city},e.fields.unit,"-",e.fields.street,", ",e.fields.city)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Reservation Date"),r.a.createElement("br",null),r.a.createElement(le.a,{minDate:new Date,value:this.state.date,onChange:this.handleDate,name:"date",dateFormat:"MM-DD-YYYY"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Reservation Time"),r.a.createElement("br",null),r.a.createElement(pe.a,{onChange:this.handleTime,value:this.state.time,disableClock:!0,minTime:"13:00",maxTime:"22:00",maxDetail:"minute",required:!0,hourPlaceholder:"hh",minutePlaceholder:"mm"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}}]),t}(n.Component),ve=a(26),ge=a.n(ve),ye=function(e){var t=e.unit,a=e.street,n=e.city,o=e.province,s=e.postalCode,c=e.hours,i=e.phone;return r.a.createElement("div",{className:ge.a.locationItemBox},r.a.createElement("div",{className:ge.a.addressBox},r.a.createElement("div",{className:ge.a.addressTextBox},r.a.createElement(F.c,{className:ge.a.icon}),r.a.createElement("span",{className:ge.a.addressText},a," Unit ",t,", ",n,", ",o," ",s," ")),r.a.createElement("div",{className:ge.a.addressTextBox},r.a.createElement(F.d,{className:ge.a.icon}),r.a.createElement("span",{className:ge.a.addressText},"+1-",i))),r.a.createElement("div",{className:ge.a.timingsBox},r.a.createElement("h3",null,"Hours"),c.map((function(e){return r.a.createElement("div",{key:Math.random(),className:ge.a.timings},r.a.createElement("span",{className:ge.a.day},e.day)," : ",e.hours)}))))},_e=a(58),Oe=a.n(_e);function Ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var we=Object(X.a)({space:"16wwcbfuof0f",accessToken:"Qrmlmhfud4wVp78tbQIhulCBklkpgKvwoXBbHXaByyM"}),je=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={locations:[]},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;we.getEntries({content_type:"restaurantLocation"}).then((function(t){var a=t.items;e.setState((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(a),!0).forEach((function(t){Object(Y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ne(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{locations:a})}))}))}},{key:"render",value:function(){var e=this.state.locations.map((function(e){return r.a.createElement(ye,{key:e.sys.id,unit:e.fields.unit,street:e.fields.street,city:e.fields.city,province:e.fields.povince,postalCode:e.fields.postalCode,hours:e.fields.hours,phone:e.fields.phone})}));return r.a.createElement("div",null,r.a.createElement("section",{className:Oe.a.mainSection},r.a.createElement("div",{className:Oe.a.heroText},r.a.createElement("h2",{className:Oe.a.mainTitle},"Find Us At"))),r.a.createElement("section",{className:Oe.a.locationsBg},r.a.createElement("div",{className:Oe.a.locationsContainer},e)))}}]),t}(n.Component),xe=a(359),Ce=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",email:"",password:"",passwordConfirmation:"",alert:null,error:null},a.handleChange=function(e){a.setState(Object(Y.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={firstName:a.state.firstName,lastName:a.state.lastName,email:a.state.email,password:a.state.password,passwordConfirmation:a.state.passwordConfirmation};N()({method:"post",url:"/api/users",data:t}).then((function(e){200===e.status&&a.setState({firstName:"",lastName:"",email:"",password:"",passwordConfirmation:"",alert:"success",error:null})})).catch((function(e){a.setState({firstName:"",lastName:"",email:"",password:"",passwordConfirmation:"",alert:"failed",error:e.response.data.error})}))},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=null;return"success"===this.state.alert?e=r.a.createElement(ce.a,{className:"text-capitalize",variant:"success"},"sign up successful. please ",r.a.createElement(c.b,{to:"/signin"},"Login")," to continue."):"failed"===this.state.alert&&(e=r.a.createElement(ce.a,{className:"text-capitalize",variant:"danger"},this.state.error)),r.a.createElement("section",{className:"container my-3 "},r.a.createElement("h2",null,"Sign Up "),e,r.a.createElement(xe.a,{className:"my-4",onSubmit:this.handleSubmit},r.a.createElement(xe.a.Group,null,r.a.createElement(xe.a.Label,null,"First Name"),r.a.createElement(xe.a.Control,{id:"firstName",onChange:this.handleChange,placeholder:"First Name",name:"firstName",value:this.state.firstName})),r.a.createElement(xe.a.Group,null,r.a.createElement(xe.a.Label,null,"Last Name"),r.a.createElement(xe.a.Control,{id:"lastName",onChange:this.handleChange,placeholder:"Last Name",name:"lastName",value:this.state.lastName})),r.a.createElement(xe.a.Group,null,r.a.createElement(xe.a.Label,null,"Email address"),r.a.createElement(xe.a.Control,{id:"email",type:"email",placeholder:"Email Address",name:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement(xe.a.Group,null,r.a.createElement(xe.a.Label,null,"Password"),r.a.createElement(xe.a.Control,{id:"password",type:"password",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password})),r.a.createElement(xe.a.Group,null,r.a.createElement(xe.a.Label,null,"Confirm Password"),r.a.createElement(xe.a.Control,{id:"passwordConfirmation",type:"password",placeholder:"Confirm Password",name:"passwordConfirmation",onChange:this.handleChange,value:this.state.passwordConfirmation})),r.a.createElement(P.a,{variant:"primary",type:"submit"},"Submit")))}}]),t}(n.Component),Se=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",alert:null,error:null},a.handleChange=function(e){a.setState(Object(Y.a)({},e.target.id,e.target.value))},a.handleLoginSuccess=function(){a.props.history.push("/customerdash")},a.handleSubmit=function(e){e.preventDefault();var t={email:a.state.email,password:a.state.password};N()({method:"post",url:"/api/users/login",data:t}).then((function(e){200===e.status&&a.setState({email:"",password:"",alert:"success",error:null},(function(){localStorage.setItem("authorization",e.data),a.handleLoginSuccess()}))})).catch((function(e){a.setState({email:"",password:"",alert:"failed",error:e.response.data.error})}))},a}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=null;return"success"===this.state.alert?e=r.a.createElement(ce.a,{className:"text-capitalize",variant:"success"},"sign in successful."):"failed"===this.state.alert&&(e=r.a.createElement(ce.a,{className:"text-capitalize",variant:"danger"},this.state.error)),r.a.createElement("section",{className:"custom container my-3 align-items-center"},r.a.createElement("h2",null,"Sign In "),e,r.a.createElement(xe.a,{className:"my-4",onSubmit:this.handleSubmit},r.a.createElement(xe.a.Group,null,r.a.createElement(xe.a.Label,null,"Email address"),r.a.createElement(xe.a.Control,{id:"email",type:"email",placeholder:"Email Address",name:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement(xe.a.Group,null,r.a.createElement(xe.a.Label,null,"Password"),r.a.createElement(xe.a.Control,{id:"password",type:"password",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password})),r.a.createElement(P.a,{variant:"primary",type:"submit"},"Submit")))}}]),t}(n.Component);function ke(e){return function(t){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(E.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!0,redirect:!1},t}return Object(g.a)(a,t),Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/api/users/checkToken",{headers:{authorization:localStorage.getItem("authorization")}}).then((function(t){if(200!==t.status)throw new Error(t.error);e.setState({loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1,redirect:!0})}))}},{key:"render",value:function(){var t=this.state,a=t.loading,n=t.redirect;return a?null:n?r.a.createElement(i.a,{to:"/reservation"}):r.a.createElement(e,this.props)}}]),a}(n.Component)}var De=function(){return r.a.createElement(c.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:I}),r.a.createElement(i.b,{exact:!0,path:"/menu",component:ee}),r.a.createElement(i.b,{exact:!0,path:"/location",component:je}),r.a.createElement(i.b,{exact:!0,path:"/reservation",component:R}),r.a.createElement(i.b,{exact:!0,path:"/signup",component:Ce}),r.a.createElement(i.b,{exact:!0,path:"/signin",component:Se}),r.a.createElement(i.b,{exact:!0,path:"/customerdash",component:ke(se)}),r.a.createElement(i.b,{exact:!0,path:"/reservations/new",component:ke(Ee)}),r.a.createElement(i.b,{path:"*",component:q})),r.a.createElement(A,null)))};s.a.render(r.a.createElement(De,null),document.getElementById("root"))},40:function(e,t,a){e.exports={brand:"Navbar_brand__2yma8",navBar:"Navbar_navBar__mIXG2",navLinks:"Navbar_navLinks__3rcGg",navLink:"Navbar_navLink__2fo2L"}},55:function(e,t,a){e.exports={heading:"GoogleReviews_heading__3XoKR",cardHeaderText:"GoogleReviews_cardHeaderText__1jhBC",cardBody:"GoogleReviews_cardBody__3LnML",cardFooter:"GoogleReviews_cardFooter__1Pif3"}},56:function(e,t,a){e.exports={mainSection:"Reservation_mainSection__6sXzW",heroText:"Reservation_heroText__2I58e",container:"Reservation_container__ZcEwU",btnDiv:"Reservation_btnDiv__EL35p"}},57:function(e,t,a){e.exports={menuItemBox:"MenuItem_menuItemBox__4L_wg",detailsBox:"MenuItem_detailsBox__2v2l9",dishTitle:"MenuItem_dishTitle__1epZK",dishDesc:"MenuItem_dishDesc__2fdl5",dishPrice:"MenuItem_dishPrice__k504M"}},58:function(e,t,a){e.exports={mainSection:"Location_mainSection__1rlFo",heroText:"Location_heroText__3Op4_",locationsBg:"Location_locationsBg__2Zj7A",locationsContainer:"Location_locationsContainer__TxzzR"}},67:function(e,t,a){e.exports={mainSection:"Home_mainSection__1wL60",heroText:"Home_heroText__1qAk7",container:"Home_container__sLWHd"}},91:function(e,t,a){e.exports={notfound:"ErrorPage_notfound__qNcab",notfound404:"ErrorPage_notfound404__24xQ8"}}},[[175,1,2]]]);
//# sourceMappingURL=main.ce2ef022.chunk.js.map
(window.webpackJsonpBuilds=window.webpackJsonpBuilds||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(10),o=n.n(r),i=(n(16),n(7)),c=n.n(i),l=n(8),u=n(2),d=n(3),h=n(6),m=n(4),p=n(1),b=n(5),v=(n(18),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={user:""},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props,a=n.message,r=n.sendUser,o=this.state.user;return"lots"===a&&(e='User "'.concat(window.location.pathname.substr(7),'" has no lots!')),s.a.createElement("div",{id:"home"},s.a.createElement("div",{id:"message"},s.a.createElement("h1",null,"Builds"),s.a.createElement("p",{id:"alert"},e),s.a.createElement("p",null,"Enter a username to visit a profile:"),s.a.createElement("input",{type:"text",onChange:function(e){return t.setState({user:e.target.value})}}),s.a.createElement("button",{onClick:function(e){return r(o)}},"submit")))}}]),t}(a.Component)),f=(n(19),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={click:!1},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(){this.props.openLot(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.images,n=e.lot_type,a=e.name,r=e.bedrooms,o=e.bathrooms;return s.a.createElement("div",{className:"lot-card"},s.a.createElement("img",{src:t,alt:a}),s.a.createElement("h5",{onClick:this.handleClick},a),s.a.createElement("p",null,n),s.a.createElement("p",null,r," beds, ",o," baths"))}}]),t}(a.Component)),k=(n(20),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(){this.setState({redirect:!0})}},{key:"render",value:function(){if(console.log(this.props),void 0===this.props.id)return"Loading Lot!";var e=this.props,t=e.name,n=e.description,a=e.gallery,r=e.lot_type,o=e.bedrooms,i=e.bathrooms,c=e.sims,l=e.images,u=e.clearLot;return s.a.createElement("div",{id:"lot-view-container"},s.a.createElement("div",{id:"top"},s.a.createElement("span",{id:"back",onClick:function(e){return u()}},this.props.user,"'s Builds")),s.a.createElement("div",{id:"lot-view"},s.a.createElement("img",{src:l,alt:"Sims Build"}),s.a.createElement("h1",null,t),s.a.createElement("p",{id:"lot-type"},r," Lot"),"Residential"===r&&s.a.createElement("p",{id:"lot-numbers"},o," bedrooms / ",i," bathrooms / sleeps ",c," sims"),"Rental"===r&&s.a.createElement("p",{id:"lot-numbers"},o," bedrooms / ",i," bathrooms / sleeps ",c," sims"),s.a.createElement("p",{id:"lot-description"},n),s.a.createElement("p",{id:"lot-link"},s.a.createElement("a",{href:a,target:"_blank"},"View on the Sims 4 Gallery"))))}}]),t}(a.Component)),E=(n(21),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={user:void 0,lots:void 0,lot:void 0},n.getProfileData=n.getProfileData.bind(Object(p.a)(n)),n.getLotData=n.getLotData.bind(Object(p.a)(n)),n.openLot=n.openLot.bind(Object(p.a)(n)),n.clearLot=n.clearLot.bind(Object(p.a)(n)),n.clearUser=n.clearUser.bind(Object(p.a)(n)),n.sendUser=n.sendUser.bind(Object(p.a)(n)),n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getRoute()}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.user,n=e.lots,a=e.lot;t&&!n&&this.getProfileData(),a&&"number"==typeof a&&this.getLotData()}},{key:"getRoute",value:function(){var e=window.location.pathname;"/"===e[0]&&this.setState({user:e.substr(7)})}},{key:"getProfileData",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,n,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.user,e.next=3,fetch("api/lots/user/".concat(t),{method:"GET"});case 3:return n=e.sent,e.next=6,n.status;case 6:if(e.t0=e.sent,200!==e.t0){e.next=19;break}return e.next=10,n.json();case 10:return a=e.sent,e.t1=this,e.next=14,a;case 14:e.t2=e.sent,e.t3={lots:e.t2},e.t1.setState.call(e.t1,e.t3),e.next=24;break;case 19:return e.next=21,n.status;case 21:if(e.t4=e.sent,404!==e.t4){e.next=24;break}this.setState({lots:404});case 24:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getLotData",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,n,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.lot,e.next=3,fetch("api/lots/".concat(t),{method:"GET"});case 3:return n=e.sent,e.next=6,n.status;case 6:if(e.t0=e.sent,200!==e.t0){e.next=19;break}return e.next=10,n.json();case 10:return a=e.sent,e.t1=this,e.next=14,a;case 14:e.t2=e.sent,e.t3={lot:e.t2},e.t1.setState.call(e.t1,e.t3),e.next=20;break;case 19:this.setState({lots:404});case 20:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"mapLots",value:function(){var e=this,t=this.state.lots;return t?t.map(function(t){return s.a.createElement(f,Object.assign({},t,{openLot:e.openLot}))}):"Loading Lots!"}},{key:"openLot",value:function(e){this.setState({lot:e})}},{key:"clearLot",value:function(){this.setState({lot:void 0})}},{key:"clearUser",value:function(){this.setState({user:void 0}),this.setState({lots:void 0}),this.setState({lot:void 0})}},{key:"sendUser",value:function(e){this.setState({user:e})}},{key:"render",value:function(){var e=this.state,t=e.lots,n=e.lot,a=e.user;return n?s.a.createElement(k,Object.assign({},n,{clearLot:this.clearLot,user:a})):t?404===t?s.a.createElement(v,{message:"lots",sendUser:this.sendUser}):s.a.createElement("div",{id:"lot-cards-view"},s.a.createElement("h1",{onClick:this.clearUser},"Builds"),s.a.createElement("h2",null,"from ",a),s.a.createElement("div",{id:"lot-cards"},this.mapLots())):s.a.createElement(v,{sendUser:this.sendUser})}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.1a3fbce9.chunk.js.map
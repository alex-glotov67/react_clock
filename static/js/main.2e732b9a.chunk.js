(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),r=n(4),l=n(1),u=n.n(l),h=(n(12),n(0)),m=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={time:(new Date).toLocaleTimeString()},t.update=setInterval((function(){t.setState({time:(new Date).toLocaleTimeString()}),console.log(t.state.time)}),1e3),t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){return this.update}},{key:"componentWillUnmount",value:function(){clearInterval(this.update)}},{key:"render",value:function(){var t=this.state.time;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("p",{children:["Current time:"," ",t]})})}}]),n}(u.a.Component),b=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isVisible:!0,clockName:0},t.hideClock=function(){t.setState({isVisible:!1})},t.showClock=function(){t.setState({isVisible:!0})},t.changeClockName=function(){var e=t.state.clockName;t.setState({clockName:Math.round(1e3*Math.random())}),setTimeout((function(){console.log("The Clock was renamed from ".concat(e," to ").concat(t.state.clockName))}),0)},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.clockName,n=t.isVisible;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),n&&Object(h.jsx)(m,{clockName:e})]}),Object(h.jsx)("button",{className:"container__button",type:"button",onClick:this.hideClock,children:"Hide Clock"}),Object(h.jsx)("button",{className:"container__button",type:"button",onClick:this.showClock,children:"Show Clock"}),Object(h.jsx)("button",{className:"container__button",type:"button",onClick:this.changeClockName,children:"Set random name"})]})}}]),n}(u.a.Component);a.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2e732b9a.chunk.js.map
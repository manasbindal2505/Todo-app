(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),s=a.n(i),l=(a(16),a(2)),c=a(10),r=a(4),d=a(5),u=a(1),h=a(7),m=a(6),p=a(3),b=(a(17),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={isEditing:!1,task:n.props.task},n.handleRemove=n.handleRemove.bind(Object(u.a)(n)),n.toggleForm=n.toggleForm.bind(Object(u.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(u.a)(n)),n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleToggle=n.handleToggle.bind(Object(u.a)(n)),n}return Object(d.a)(a,[{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleUpdate",value:function(e){e.preventDefault(),this.props.updateTodo(this.props.id,this.state.task),this.setState({isEditing:!1})}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleToggle",value:function(e){this.props.toggleTodo(this.props.id)}},{key:"render",value:function(){return this.state.isEditing?o.a.createElement("div",{className:"todo"},o.a.createElement("form",{onSubmit:this.handleUpdate,className:"todo-edit-form"},o.a.createElement("input",{type:"text ",value:this.state.task,name:"task",onChange:this.handleChange}),o.a.createElement("button",null,"Save"))):o.a.createElement("div",{className:"todo"},o.a.createElement("li",{className:this.props.completed?" todo-task completed":"todo-task",onClick:this.handleToggle},this.props.task),o.a.createElement("div",{className:"todo-buttons"},o.a.createElement("button",{onClick:this.toggleForm},o.a.createElement("i",{class:"fas fa-pen"})),o.a.createElement("button",{onClick:this.handleRemove},o.a.createElement("i",{class:"fas fa-trash"}))))}}]),a}(n.Component)),g=a(22),v=(a(18),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={task:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(d.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.createTodo(Object(l.a)(Object(l.a)({},this.state),{},{id:Object(g.a)(),completed:!1})),this.setState({task:""})}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"newtodo"},o.a.createElement("label",null,"New Todo"),o.a.createElement("input",{placeholder:"New Todo",type:"text",id:"task",name:"task",value:this.state.task,onChange:this.handleChange}),o.a.createElement("button",null,"Add Todo"))}}]),a}(n.Component)),f=(a(19),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={todos:[]},n.create=n.create.bind(Object(u.a)(n)),n.remove=n.remove.bind(Object(u.a)(n)),n.update=n.update.bind(Object(u.a)(n)),n.toggleCompletion=n.toggleCompletion.bind(Object(u.a)(n)),n}return Object(d.a)(a,[{key:"create",value:function(e){this.setState({todos:[].concat(Object(c.a)(this.state.todos),[e])})}},{key:"remove",value:function(e){this.setState({todos:this.state.todos.filter((function(t){return t.id!==e}))})}},{key:"update",value:function(e,t){var a=this.state.todos.map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},{task:t}):a}));this.setState({todos:a})}},{key:"toggleCompletion",value:function(e){var t=this.state.todos.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}));this.setState({todos:t})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return o.a.createElement(b,{key:t.id,task:t.task,id:t.id,removeTodo:e.remove,updateTodo:e.update,completed:t.completed,toggleTodo:e.toggleCompletion})}));return o.a.createElement("div",{className:"todolist"},o.a.createElement("h1",null,"Todo List!",o.a.createElement("span",null,"A simple React Todo List App")),o.a.createElement("ul",null,t),o.a.createElement(v,{createTodo:this.create}))}}]),a}(n.Component));var k=function(){return o.a.createElement("div",null,o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.60f20a8d.chunk.js.map
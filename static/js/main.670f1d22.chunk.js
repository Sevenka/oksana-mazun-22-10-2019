(this["webpackJsonpherolo-home-assignment"]=this["webpackJsonpherolo-home-assignment"]||[]).push([[0],{66:function(e,t,n){e.exports=n(98)},77:function(e,t,n){},79:function(e,t,n){},82:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(12),i=n.n(c),u=n(25),s=n(53),l=n(22),p=n(9),h=n(29);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={currentLocation:{Version:1,Key:"215854",Type:"City",Rank:31,LocalizedName:"Tel Aviv",Country:{ID:"IL",LocalizedName:"Israel"},AdministrativeArea:{ID:"TA",LocalizedName:"Tel Aviv"}},locationsAutocomplete:[],fiveDaysForecast:[],currentConditions:[],favoriteLocations:JSON.parse(localStorage.getItem("favoriteLocations"))||[],favoriteLocationsWithWeather:[],loading:!1},d=(a={},Object(p.a)(a,"SET_CURRENT_LOCATION",(function(e,t){return m({},e,{currentLocation:t.payload.currentLocation})})),Object(p.a)(a,"GET_AUTOCOMPLETE_SEARCH_BEGIN",y),Object(p.a)(a,"GET_AUTOCOMPLETE_SEARCH_SUCCESS",(function(e,t){return m({},e,{loading:!1,locationsAutocomplete:t.payload.locationsAutocomplete})})),Object(p.a)(a,"GET_AUTOCOMPLETE_SEARCH_FAILURE",O),Object(p.a)(a,"GET_FIVE_DAYS_FORECAST_BEGIN",y),Object(p.a)(a,"GET_FIVE_DAYS_FORECAST_SUCCESS",(function(e,t){return m({},e,{loading:!1,fiveDaysForecast:t.payload.forecast.DailyForecasts})})),Object(p.a)(a,"GET_FIVE_DAYS_FORECAST_FAILURE",O),Object(p.a)(a,"GET_CURRENT_CONDITIONS_BEGIN",y),Object(p.a)(a,"GET_CURRENT_CONDITIONS_SUCCESS",(function(e,t){return m({},e,{loading:!1})})),Object(p.a)(a,"GET_CURRENT_CONDITIONS_FAILURE",O),Object(p.a)(a,"GET_MULTIPLE_CURRENT_CONDITIONS_BEGIN",y),Object(p.a)(a,"GET_MULTIPLE_CURRENT_CONDITIONS_SUCCESS",(function(e,t){var n=t.payload.multipleConditions,a=e.favoriteLocations.map((function(e,t){return m({},e,{},n[t][0])}));return m({},e,{loading:!1,favoriteLocationsWithWeather:a})})),Object(p.a)(a,"GET_MULTIPLE_CURRENT_CONDITIONS_FAILURE",O),Object(p.a)(a,"ADD_TO_FAVORITES",(function(e,t){var n=e.favoriteLocations;return n.push(t.payload.location),localStorage.setItem("favoriteLocations",JSON.stringify(n)),h.a.success("Successfully added to favorites"),m({},e,{favoriteLocations:n})})),Object(p.a)(a,"REMOVE_FROM_FAVORITES",(function(e,t){var n=e.favoriteLocations.filter((function(e){return e.Key!==t.payload.key})),a=e.favoriteLocationsWithWeather.filter((function(e){return e.Key!==t.payload.key}));return h.a.success("Successfully removed from favorites"),m({},e,{favoriteLocations:n,favoriteLocationsWithWeather:a})})),a);function y(e,t){return m({},e,{loading:!0,error:null})}function O(e,t){return h.a.error("An error occured while loading data"),m({},e,{loading:!1,error:t.payload.error})}var v=Object(u.combineReducers)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return d[t.type]?d[t.type](e,t):e}}),T=n(57),C=(n(77),n(78),n(65)),_=n(20),S=n(101),I=n(15),L=n(16),b=n(18),A=n(17),j=n(19),g=n(104),N="/oksana-mazun-22-10-2019",R=(n(79),function(e){function t(){return Object(I.a)(this,t),Object(b.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(L.a)(t,[{key:"navigate",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){var e=this;return o.a.createElement(g.a,{variant:"pills",activeKey:this.props.history.location.pathname,onSelect:function(t){return e.navigate(t)},className:"navigation"},o.a.createElement("h1",null,"Herolo Weather Task"),o.a.createElement("div",{className:"links"},o.a.createElement(g.a.Item,null,o.a.createElement(g.a.Link,{eventKey:N},"Home")),o.a.createElement(g.a.Item,null,o.a.createElement(g.a.Link,{eventKey:"".concat(N,"/favorites")},"Favorites"))))}}]),t}(r.Component)),D=Object(_.f)(R),F=n(103),w=n(105),U=function(e){return{type:"SET_CURRENT_LOCATION",payload:{currentLocation:e}}},k=function(){return{type:"GET_AUTOCOMPLETE_SEARCH_BEGIN"}},G=function(e){return{type:"GET_AUTOCOMPLETE_SEARCH_SUCCESS",payload:{locationsAutocomplete:e}}},M=function(e){return{type:"GET_AUTOCOMPLETE_SEARCH_FAILURE",payload:{error:e}}},P=function(){return{type:"GET_FIVE_DAYS_FORECAST_BEGIN"}},V=function(e){return{type:"GET_FIVE_DAYS_FORECAST_SUCCESS",payload:{forecast:e}}},W=function(e){return{type:"GET_FIVE_DAYS_FORECAST_FAILURE",payload:{error:e}}},K=function(){return{type:"GET_CURRENT_CONDITIONS_BEGIN"}},B=function(e){return{type:"GET_CURRENT_CONDITIONS_SUCCESS",payload:{conditions:e}}},H=function(e){return{type:"GET_CURRENT_CONDITIONS_FAILURE",payload:{error:e}}},x=function(){return{type:"GET_MULTIPLE_CURRENT_CONDITIONS_BEGIN"}},z=function(e){return{type:"GET_MULTIPLE_CURRENT_CONDITIONS_SUCCESS",payload:{multipleConditions:e}}},Y=function(e){return{type:"GET_MULTIPLE_CURRENT_CONDITIONS_FAILURE",payload:{error:e}}},J=function(e){return{type:"REMOVE_FROM_FAVORITES",payload:{key:e}}},q="http://dataservice.accuweather.com/",X="Vj2eJu7BgBHttJMoLKA0APRYAfzv8rEk",Q="https://cors-anywhere.herokuapp.com/";function Z(e){if(!e.ok)throw Error(e.statusText);return e}function $(e){return function(t){t(U(e)),t(ee(e.Key))}}function ee(e){return function(t,n){return t(P()),fetch("".concat(Q+q,"/forecasts/v1/daily/5day/").concat(e,"?apikey=").concat(X,"&language=en-us"),{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},mode:"cors"}).then(Z).then((function(e){return e.json()})).then((function(e){return t(V(e)),e})).catch((function(e){return t(W(e))}))}}n(82);var te=function(e){function t(e){var n;return Object(I.a)(this,t),(n=Object(b.a)(this,Object(A.a)(t).call(this,e))).searchField=o.a.createRef(),n.state={dropdownIsShown:!1,searchValue:""},n}return Object(j.a)(t,e),Object(L.a)(t,[{key:"handleChange",value:function(e){this.setState({searchValue:e.target.value})}},{key:"showDropdown",value:function(){this.setState({dropdownIsShown:!0})}},{key:"hideDropdown",value:function(){this.setState({dropdownIsShown:!1})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&(e.preventDefault(),this.onShowDropdown())}},{key:"onShowDropdown",value:function(){this.props.getAutocompleteSearch(this.state.searchValue),this.showDropdown()}},{key:"onSelectItem",value:function(e){this.props.onSetCurrentLocation(e),this.hideDropdown()}},{key:"render",value:function(){var e=this;return o.a.createElement(F.a,{onKeyPress:function(t){return e.handleKeyPress(t)}},o.a.createElement(F.a.Group,{controlId:"search",className:"search-field"},o.a.createElement(F.a.Control,{type:"text",placeholder:"Enter city name",value:this.state.searchValue,onChange:function(t){return e.handleChange(t)}}),o.a.createElement(w.a.Menu,{show:this.state.dropdownIsShown},this.props.locationsAutocomplete.map((function(t){return o.a.createElement(w.a.Item,{onClick:function(){return e.onSelectItem(t)},key:t.Key},t.LocalizedName)})))))}}]),t}(r.Component),ne={onSetCurrentLocation:$,getAutocompleteSearch:function(e){return function(t){return t(k()),fetch("".concat(Q+q,"/locations/v1/cities/autocomplete?apikey=").concat(X,"&q=").concat(e,"&language=en-us"),{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},mode:"cors"}).then(Z).then((function(e){return e.json()})).then((function(e){return t(G(e)),e})).catch((function(e){return t(M(e))}))}}},ae=Object(l.b)((function(e){return{currentLocation:e.weather.currentLocation,locationsAutocomplete:e.weather.locationsAutocomplete}}),ne)(te),re=n(106),oe=n(100),ce=n(64),ie=function(e){function t(){return Object(I.a)(this,t),Object(b.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(L.a)(t,[{key:"navigateFromFavorites",value:function(e,t){e.preventDefault(),this.props.onSetCurrentLocation(t),this.props.history.push("/")}},{key:"getDayName",value:function(){return new Date(this.props.data.Date).toLocaleDateString("en-US",{weekday:"long"})}},{key:"render",value:function(){var e=this,t="";t=this.props.dayName?this.getDayName():this.props.data.LocalizedName;var n="";if(this.props.temperatureRange){var a="".concat(this.props.data.Temperature.Minimum.Value,"\xb0").concat(this.props.data.Temperature.Minimum.Unit),r="".concat(this.props.data.Temperature.Maximum.Value,"\xb0").concat(this.props.data.Temperature.Maximum.Unit);n="".concat(a," - ").concat(r)}else n="".concat(this.props.data.Temperature.Imperial.Value,"\xb0").concat(this.props.data.Temperature.Imperial.Unit);var c="";return c=this.props.singleCity?this.props.data.WeatherText:this.props.data.Day.IconPhrase,o.a.createElement(re.a,null,o.a.createElement(re.a.Body,null,o.a.createElement(re.a.Link,{href:"#",onClick:function(t){return e.navigateFromFavorites(t,e.props.data)}},t),o.a.createElement(re.a.Text,null,n),o.a.createElement(re.a.Text,null,c),this.props.singleCity&&o.a.createElement(ce.a,{variant:"danger",onClick:function(){return e.props.removeFromFavorites(e.props.data.Key)}},"Remove item")))}}]),t}(r.Component),ue={onSetCurrentLocation:$,removeFromFavorites:J},se=Object(l.b)(null,ue)(Object(_.f)(ie)),le=(n(95),function(e){function t(){return Object(I.a)(this,t),Object(b.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){this.props.getFiveDaysForecast(this.props.currentLocation.Key)}},{key:"render",value:function(){var e=this,t=this.props.fiveDaysForecast[0],n=t?"".concat(t.Temperature.Minimum.Value,"\xb0").concat(t.Temperature.Minimum.Unit):"",a=t?"".concat(t.Temperature.Maximum.Value,"\xb0").concat(t.Temperature.Maximum.Unit):"",r=this.props.favoriteLocations.some((function(t){return t.Key===e.props.currentLocation.Key}));return o.a.createElement(re.a,{className:"weather-full-view"},o.a.createElement("div",{className:"inner"},o.a.createElement(oe.a,null,o.a.createElement(oe.a.Body,null,o.a.createElement("h5",null,this.props.currentLocation.LocalizedName),o.a.createElement("p",null,n," - ",a))),r?o.a.createElement(ce.a,{onClick:function(){return e.props.removeFromFavorites(e.props.currentLocation.Key)},variant:"danger"},"Remove from favorites"):o.a.createElement(ce.a,{onClick:function(){return e.props.addToFavorites(e.props.currentLocation)}},"Add to favorites")),o.a.createElement("div",{className:"inner"},this.props.fiveDaysForecast.map((function(e){return o.a.createElement(se,{data:e,key:e.Date,temperatureRange:!0,days:!0})}))))}}]),t}(r.Component)),pe={getFiveDaysForecast:ee,addToFavorites:function(e){return{type:"ADD_TO_FAVORITES",payload:{location:e}}},removeFromFavorites:J},he=Object(l.b)((function(e){return{currentLocation:e.weather.currentLocation,fiveDaysForecast:e.weather.fiveDaysForecast,favoriteLocations:e.weather.favoriteLocations}}),pe)(le),fe=function(e){function t(){return Object(I.a)(this,t),Object(b.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"home"},o.a.createElement(ae,null),o.a.createElement(he,null))}}]),t}(r.Component),me=n(60),Ee=n(102),de=function(e){function t(){return Object(I.a)(this,t),Object(b.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){this.props.getMultipleCurrentConditions()}},{key:"render",value:function(){var e=this.props.favoriteLocationsWithWeather.map((function(e){return o.a.createElement(me.a,{key:e.Key},o.a.createElement(se,{data:e,singleCity:!0}))}));return o.a.createElement(S.a,null,o.a.createElement(Ee.a,{className:"justify-content-md-center"},e,!e.length&&o.a.createElement("h2",null,"No favorites")))}}]),t}(r.Component),ye={getMultipleCurrentConditions:function(){return function(e,t){return e(x()),Promise.all(t().weather.favoriteLocations.map((function(t){return e((n=t.Key,function(e,t){return e(K()),fetch("".concat(Q+q,"/currentconditions/v1/").concat(n,"?apikey=").concat(X,"&language=en-us"),{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},mode:"cors"}).then(Z).then((function(e){return e.json()})).then((function(t){return e(B(t)),t})).catch((function(t){return e(H(t))}))}));var n}))).then((function(t){return e(z(t)),t})).catch((function(t){e(Y(t))}))}}},Oe=Object(l.b)((function(e){return{favoriteLocations:e.weather.favoriteLocations,favoriteLocationsWithWeather:e.weather.favoriteLocationsWithWeather}}),ye)(de);n(96),n(97);h.a.configure({hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1});var ve=function(){return o.a.createElement(C.a,null,o.a.createElement(S.a,{fluid:!0},o.a.createElement(D,null),o.a.createElement(_.c,null,o.a.createElement(_.a,{path:"".concat(N,"/favorites")},o.a.createElement(Oe,null)),o.a.createElement(_.a,{path:N},o.a.createElement(fe,null)))))},Te=Object(u.createStore)(v,Object(s.composeWithDevTools)(Object(u.applyMiddleware)(T.a)));i.a.render(o.a.createElement(l.a,{store:Te},o.a.createElement(ve,null)),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.670f1d22.chunk.js.map
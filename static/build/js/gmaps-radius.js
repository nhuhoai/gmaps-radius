/*! Made by Oliver Beattie. Built 2014-07-09 */

(function(){$(function(){var a,b,c,d,e,f;return c=new google.maps.Map($("#map")[0],{zoom:10,center:new google.maps.LatLng(51.500358,-.125506),mapType:google.maps.MapTypeId.ROADMAP}),b={mi:3963.1676,km:6378.1,ft:20925524.9,mt:6378100,"in":251106299,yd:6975174.98,fa:3487587.49,na:3443.89849,ch:317053.408,rd:1268213.63,fr:31705.3408},d=function(){return this.setMap(null)},a=function(e){var f,g,h,i;return h=$("#unitSelector"),i=$("option",h).eq(h[0].selectedIndex).val(),g=parseFloat(document.getElementById("radiusInput").value),g=g/b[i]*b.mt,f=new google.maps.Circle({center:e.latLng,clickable:!0,draggable:!1,editable:!1,fillColor:"#004de8",fillOpacity:.27,map:c,radius:g,strokeColor:"#004de8",strokeOpacity:.62,strokeWeight:1}),google.maps.event.addListener(f,"rightclick",d),google.maps.event.addListener(f,"click",a)},google.maps.event.addListener(c,"click",a),f=document.getElementById("searchInput"),$(f.form).on({submit:function(){return!1}}),e=new google.maps.places.SearchBox(f),google.maps.event.addListener(e,"places_changed",function(){var a;console.log("Places selected",e.getPlaces()),a=e.getPlaces()[0],null!=a&&(null!=a.geometry.viewport?(c.fitBounds(a.geometry.viewport),c.panToBounds(a.geometry.viewport)):c.setCenter(a.geometry.location))})})}).call(this);
//# sourceMappingURL=gmaps-radius.js.map
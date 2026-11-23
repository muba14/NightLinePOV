(()=>{var Uu=0,$c=1,Fu=2;var so=1,Ga=2,qs=3,Di=0,Je=1,en=2,fi=0,Ys=1,Bn=2,Jc=3,Kc=4,Ou=5;var es=100,Bu=101,zu=102,Hu=103,ku=104,Gu=200,Vu=201,Wu=202,Xu=203,Qc=204,jc=205,qu=206,Yu=207,Zu=208,$u=209,Ju=210,Ku=211,Qu=212,ju=213,td=214,ha=0,ua=1,da=2,Is=3,fa=4,pa=5,ma=6,ga=7,th=0,ed=1,nd=2,Yn=0,ro=1,oo=2,ao=3,ns=4,lo=5,co=6,ho=7;var eh=300,is=301,Zs=302,Va=303,Wa=304,Ls=1e3,Pe=1001,_a=1002,Ye=1003,id=1004;var uo=1005;var ln=1006,Xa=1007;var pi=1008;var pn=1009,nh=1010,ih=1011,$s=1012,qa=1013,zn=1014,Cn=1015,Be=1016,Ya=1017,Za=1018,ss=1020,sh=35902,rh=35899,oh=1021,ah=1022,Hn=1023,ci=1026,mi=1027,$a=1028,Ja=1029,Ni=1030,Ka=1031;var Qa=1033,fo=33776,po=33777,mo=33778,go=33779,ja=35840,tl=35841,el=35842,nl=35843,il=36196,sl=37492,rl=37496,ol=37488,al=37489,_o=37490,ll=37491,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,_l=37816,xl=37817,vl=37818,yl=37819,Ml=37820,Sl=37821,bl=36492,El=36494,Tl=36495,wl=36283,Al=36284,xo=36285,Rl=36286;var vr=2300,xa=2301,la=2302,Oc=2303,Bc=2400,zc=2401,Hc=2402;var sd=3200;var Cl=0,rd=1,gi="",Xe="srgb",Zi="srgb-linear",yr="linear",le="srgb";var ca=7680;var od=519,ad=512,ld=513,cd=514,lh=515,hd=516,ud=517,ch=518,hh=519,uh=35044;var dh="300 es",Tn=2e3,Ds=2001;function Uf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ff(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){let i=Mr("canvas");return i.style.display="block",i}var eu={},Ns=null;function Sr(...i){let t="THREE."+i.shift();Ns?Ns("log",t,...i):console.log(t,...i)}function fd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=fd(i);let t="THREE."+i.shift();if(Ns)Ns("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=fd(i);let t="THREE."+i.shift();if(Ns)Ns("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Yi(...i){let t=i.join(" ");t in eu||(eu[t]=!0,zt(...i))}function pd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var md={[ha]:ha,[da]:ma,[fa]:fa,[Is]:pa,[ua]:ua,[ma]:da,[ga]:ga,[pa]:Is},Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var uc=Math.PI/180,br=180/Math.PI;function Ui(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function Of(i,t){return(i%t+t)%t}function dc(i,t,e){return(1-e)*i+e*t}function gd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function _d(i,t){if(t.constructor===Float32Array)return i;let e=Pl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function xd(i,t){if(t.constructor===Float32Array)return i;let e=Pl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var et=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],u=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||l!==f||c!==u||h!==g){let p=l*f+c*u+h*g+d*y;p<0&&(f=-f,u=-u,g=-g,y=-y,p=-p);let m=1-a;if(p<.9995){let _=Math.acos(p),M=Math.sin(_);m=Math.sin(m*_)/M,a=Math.sin(a*_)/M,l=l*m+f*a,c=c*m+u*a,h=h*m+g*a,d=d*m+y*a}else{l=l*m+f*a,c=c*m+u*a,h=h*m+g*a,d=d*m+y*a;let _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*u-c*f,t[e+1]=l*g+h*f+c*d-a*u,t[e+2]=c*g+h*u+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fc.copy(this).projectOnVector(t),this.sub(fc)}reflect(t){return this.sub(fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fc=new L,nu=new wn,Wt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],y=s[0],p=s[3],m=s[6],_=s[1],M=s[4],v=s[7],w=s[2],E=s[5],x=s[8];return r[0]=o*y+a*_+l*w,r[3]=o*p+a*M+l*E,r[6]=o*m+a*v+l*x,r[1]=c*y+h*_+d*w,r[4]=c*p+h*M+d*E,r[7]=c*m+h*v+d*x,r[2]=f*y+u*_+g*w,r[5]=f*p+u*M+g*E,r[8]=f*m+u*v+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,g=e*d+n*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=u*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pc.makeScale(t,e)),this}rotate(t){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pc.makeRotation(-t)),this}translate(t,e){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pc=new Wt,iu=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bf(){let i={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===le&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zi]:{primaries:t,whitePoint:n,transfer:yr,toXYZ:iu,fromXYZ:su,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:le,toXYZ:iu,fromXYZ:su,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}var te=Bf();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ds,va=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ds===void 0&&(ds=Mr("canvas")),ds.width=t.width,ds.height=t.height;let s=ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zf=0,Us=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mc(s[o].image)):r.push(mc(s[o]))}else r=mc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function mc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?va.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Hf=0,gc=new L,cn=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pe,s=Pe,r=ln,o=pi,a=Hn,l=pn,c=i.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Ui(),this.name="",this.source=new Us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(gc).x}get height(){return this.source.getSize(gc).y}get depth(){return this.source.getSize(gc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ls:t.x=t.x-Math.floor(t.x);break;case Pe:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ls:t.y=t.y-Math.floor(t.y);break;case Pe:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=eh;cn.DEFAULT_ANISOTROPY=1;var Se=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(u+1)/2,w=(m+1)/2,E=(h+f)/4,x=(d+y)/4,S=(g+p)/4;return M>v&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=x/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=S/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=x/r,s=S/r),this.set(n,s,r,e),this}let _=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-y)/_,this.z=(f-h)/_,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ya=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new cn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Us(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Re=class extends ya{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Er=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ma=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Pe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ue=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,d,f,u,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,u,g,y,p)}set(t,e,n,s,r,o,a,l,c,h,d,f,u,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=u,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),o=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,g=c*h,y=c*d;e[0]=f+y*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,g=c*h,y=c*d;e[0]=f-y*a,e[4]=-o*d,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=g*c-u,e[8]=f*c+y,e[1]=l*d,e[5]=y*c+f,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-f*d,e[8]=g*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+g,e[10]=f-y*d}else if(t.order==="XZY"){let f=o*l,u=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+y,e[5]=o*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=a*h,e[10]=y*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kf,t,Gf)}lookAt(t,e,n){let s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Mi.crossVectors(n,_n),Mi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Mi.crossVectors(n,_n)),Mi.normalize(),Fo.crossVectors(_n,Mi),s[0]=Mi.x,s[4]=Fo.x,s[8]=_n.x,s[1]=Mi.y,s[5]=Fo.y,s[9]=_n.y,s[2]=Mi.z,s[6]=Fo.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],y=n[6],p=n[10],m=n[14],_=n[3],M=n[7],v=n[11],w=n[15],E=s[0],x=s[4],S=s[8],C=s[12],A=s[1],P=s[5],N=s[9],O=s[13],I=s[2],B=s[6],H=s[10],z=s[14],J=s[3],k=s[7],Y=s[11],Z=s[15];return r[0]=o*E+a*A+l*I+c*J,r[4]=o*x+a*P+l*B+c*k,r[8]=o*S+a*N+l*H+c*Y,r[12]=o*C+a*O+l*z+c*Z,r[1]=h*E+d*A+f*I+u*J,r[5]=h*x+d*P+f*B+u*k,r[9]=h*S+d*N+f*H+u*Y,r[13]=h*C+d*O+f*z+u*Z,r[2]=g*E+y*A+p*I+m*J,r[6]=g*x+y*P+p*B+m*k,r[10]=g*S+y*N+p*H+m*Y,r[14]=g*C+y*O+p*z+m*Z,r[3]=_*E+M*A+v*I+w*J,r[7]=_*x+M*P+v*B+w*k,r[11]=_*S+M*N+v*H+w*Y,r[15]=_*C+M*O+v*z+w*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],g=t[3],y=t[7],p=t[11],m=t[15],_=l*u-c*f,M=a*u-c*d,v=a*f-l*d,w=o*u-c*h,E=o*f-l*h,x=o*d-a*h;return e*(y*_-p*M+m*v)-n*(g*_-p*w+m*E)+s*(g*M-y*w+m*x)-r*(g*v-y*E+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],g=t[12],y=t[13],p=t[14],m=t[15],_=e*a-n*o,M=e*l-s*o,v=e*c-r*o,w=n*l-s*a,E=n*c-r*a,x=s*c-r*l,S=h*y-d*g,C=h*p-f*g,A=h*m-u*g,P=d*p-f*y,N=d*m-u*y,O=f*m-u*p,I=_*O-M*N+v*P+w*A-E*C+x*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return t[0]=(a*O-l*N+c*P)*B,t[1]=(s*N-n*O-r*P)*B,t[2]=(y*x-p*E+m*w)*B,t[3]=(f*E-d*x-u*w)*B,t[4]=(l*A-o*O-c*C)*B,t[5]=(e*O-s*A+r*C)*B,t[6]=(p*v-g*x-m*M)*B,t[7]=(h*x-f*v+u*M)*B,t[8]=(o*N-a*A+c*S)*B,t[9]=(n*A-e*N-r*S)*B,t[10]=(g*E-y*v+m*_)*B,t[11]=(d*v-h*E-u*_)*B,t[12]=(a*C-o*P-l*S)*B,t[13]=(e*P-n*C+s*S)*B,t[14]=(y*M-g*w-p*_)*B,t[15]=(h*w-d*M+f*_)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,g=r*d,y=o*h,p=o*d,m=a*d,_=l*c,M=l*h,v=l*d,w=n.x,E=n.y,x=n.z;return s[0]=(1-(y+m))*w,s[1]=(u+v)*w,s[2]=(g-M)*w,s[3]=0,s[4]=(u-v)*E,s[5]=(1-(f+m))*E,s[6]=(p+_)*E,s[7]=0,s[8]=(g+M)*x,s[9]=(p-_)*x,s[10]=(1-(f+y))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=fs.set(s[0],s[1],s[2]).length(),a=fs.set(s[4],s[5],s[6]).length(),l=fs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Dn.copy(this);let c=1/o,h=1/a,d=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,e.setFromRotationMatrix(Dn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Tn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Tn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ds)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Tn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Tn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ds)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fs=new L,Dn=new ue,kf=new L(0,0,0),Gf=new L(1,1,1),Mi=new L,Fo=new L,_n=new L,ru=new ue,ou=new wn,On=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vf=0,au=new L,ps=new wn,ni=new ue,Oo=new L,ar=new L,Wf=new L,Xf=new wn,lu=new L(1,0,0),cu=new L(0,1,0),hu=new L(0,0,1),uu={type:"added"},qf={type:"removed"},ms={type:"childadded",child:null},_c={type:"childremoved",child:null},Oe=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new On,n=new wn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Wt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(lu,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lu,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Oo.copy(t):Oo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(ar,Oo,this.up):ni.lookAt(Oo,ar,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(ni),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),ms.child=t,this.dispatchEvent(ms),ms.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qf),_c.child=t,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,Wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new L(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ve=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yf={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function xc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Of(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xc(o,r,t+1/3),this.g=xc(o,r,t),this.b=xc(o,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return te.workingToColorSpace(tn.copy(this),t),Math.round(Qt(tn.r*255,0,255))*65536+Math.round(Qt(tn.g*255,0,255))*256+Math.round(Qt(tn.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(tn.copy(this),e);let n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Xe){te.workingToColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,s=tn.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(Bo);let n=dc(Si.h,Bo.h,e),s=dc(Si.s,Bo.s,e),r=dc(Si.l,Bo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Et;Et.NAMES=vd;var wr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$i=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nn=new L,ii=new L,vc=new L,si=new L,gs=new L,_s=new L,du=new L,yc=new L,Mc=new L,Sc=new L,bc=new Se,Ec=new Se,Tc=new Se,ai=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),ii.subVectors(n,e),vc.subVectors(t,e);let o=Nn.dot(Nn),a=Nn.dot(ii),l=Nn.dot(vc),c=ii.dot(ii),h=ii.dot(vc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return bc.setScalar(0),Ec.setScalar(0),Tc.setScalar(0),bc.fromBufferAttribute(t,e),Ec.fromBufferAttribute(t,n),Tc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(bc,r.x),o.addScaledVector(Ec,r.y),o.addScaledVector(Tc,r.z),o}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),ii.subVectors(t,e),Nn.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Nn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;gs.subVectors(s,n),_s.subVectors(r,n),yc.subVectors(t,n);let l=gs.dot(yc),c=_s.dot(yc);if(l<=0&&c<=0)return e.copy(n);Mc.subVectors(t,s);let h=gs.dot(Mc),d=_s.dot(Mc);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(gs,o);Sc.subVectors(t,r);let u=gs.dot(Sc),g=_s.dot(Sc);if(g>=0&&u<=g)return e.copy(r);let y=u*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(_s,a);let p=h*g-u*d;if(p<=0&&d-h>=0&&u-g>=0)return du.subVectors(r,s),a=(d-h)/(d-h+(u-g)),e.copy(s).addScaledVector(du,a);let m=1/(p+y+f);return o=y*m,a=f*m,e.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zo.copy(n.boundingBox)),zo.applyMatrix4(t.matrixWorld),this.union(zo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),Ho.subVectors(this.max,lr),xs.subVectors(t.a,lr),vs.subVectors(t.b,lr),ys.subVectors(t.c,lr),bi.subVectors(vs,xs),Ei.subVectors(ys,vs),Gi.subVectors(xs,ys);let e=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-Gi.z,Gi.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,Gi.z,0,-Gi.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-Gi.y,Gi.x,0];return!wc(e,xs,vs,ys,Ho)||(e=[1,0,0,0,1,0,0,0,1],!wc(e,xs,vs,ys,Ho))?!1:(ko.crossVectors(bi,Ei),e=[ko.x,ko.y,ko.z],wc(e,xs,vs,ys,Ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ri=[new L,new L,new L,new L,new L,new L,new L,new L],Un=new L,zo=new Xn,xs=new L,vs=new L,ys=new L,bi=new L,Ei=new L,Gi=new L,lr=new L,Ho=new L,ko=new L,Vi=new L;function wc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vi.fromArray(i,r);let a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ue=new L,Go=new et,Zf=0,Ae=class extends Wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=Cn,this.version=0,this._normalizationScale=t!==void 0?Pl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Go.fromBufferAttribute(this,e),Go.applyMatrix3(t),this.setXY(e,Go.x,Go.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):_d(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):xd(t,this.array)}};var Ar=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Rr=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var kt=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},$f=new Xn,cr=new L,Ac=new L,wi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$f.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);let e=cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(Ac)),this.expandByPoint(cr.copy(t.center).sub(Ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jf=0,En=new ue,Rc=new Oe,Ms=new L,xn=new Xn,hr=new Xn,We=new L,fe=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uf(t)?Rr:Ar)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Rc.lookAt(t),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(xn.min,hr.min),xn.expandByPoint(We),We.addVectors(xn.max,hr.max),xn.expandByPoint(We)):(xn.expandByPoint(hr.min),xn.expandByPoint(hr.max))}xn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),We.add(Ms)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new L,l[C]=new L;let h=new L,d=new L,f=new L,u=new et,g=new et,y=new et,p=new L,m=new L;function _(C,A,P){c[C]=c[A]=c[P]=1,h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,A),f.fromBufferAttribute(n,P),u.fromBufferAttribute(r,C),g.fromBufferAttribute(r,A),y.fromBufferAttribute(r,P),d.sub(h),f.sub(h),g.sub(u),y.sub(u);let N=1/(g.x*y.y-y.x*g.y);isFinite(N)&&(p.copy(d).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(N),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(N),a[C].add(p),a[A].add(p),a[P].add(p),l[C].add(m),l[A].add(m),l[P].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,A=M.length;C<A;++C){let P=M[C],N=P.start,O=P.count;for(let I=N,B=N+O;I<B;I+=3)_(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new L,w=new L,E=new L,x=new L;function S(C){E.fromBufferAttribute(s,C),x.copy(E);let A=a[C];v.copy(A),v.sub(E.multiplyScalar(E.dot(A))).normalize(),w.crossVectors(x,A);let N=w.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,N)}for(let C=0,A=n.count;C<A;++C)c[C]&&S(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let f=0,u=t.count;f<u;f+=3){let g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?u=l[y]*a.data.stride+a.offset:u=l[y]*h;for(let m=0;m<h;m++)f[g++]=c[u++]}return new Ae(f,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uh,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function fu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Ui()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var an=new L,Os=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Pl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):_d(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):xd(t,this.data.array)}},Cc=new L,Kf=new L,Qf=new Wt,Fn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Cc.subVectors(n,e).cross(Kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Cc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qf.getNormalMatrix(t),s=this.coplanarPoint(Cc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},jf=0,hi=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Ys,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=jc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ui=class extends hi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ss,ur=new L,bs=new L,Es=new L,Ts=new et,dr=new et,yd=new ue,Vo=new L,fr=new L,Wo=new L,pu=new et,Pc=new et,mu=new et,Ai=class extends Oe{constructor(t=new ui){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cr(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Os(n,3,0,!1)),Ss.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new et(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),yd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-Es.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Xo(Vo.set(-.5,-.5,0),Es,o,bs,s,r),Xo(fr.set(.5,-.5,0),Es,o,bs,s,r),Xo(Wo.set(.5,.5,0),Es,o,bs,s,r),pu.set(0,0),Pc.set(1,0),mu.set(1,1);let a=t.ray.intersectTriangle(Vo,fr,Wo,!1,ur);if(a===null&&(Xo(fr.set(-.5,.5,0),Es,o,bs,s,r),Pc.set(0,1),a=t.ray.intersectTriangle(Vo,Wo,fr,!1,ur),a===null))return;let l=t.ray.origin.distanceTo(ur);l<t.near||l>t.far||e.push({distance:l,point:ur.clone(),uv:ai.getInterpolation(ur,Vo,fr,Wo,pu,Pc,mu,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Xo(i,t,e,n,s,r){Ts.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(dr.x=r*Ts.x-s*Ts.y,dr.y=s*Ts.x+r*Ts.y):dr.copy(Ts),i.copy(t),i.x+=dr.x,i.y+=dr.y,i.applyMatrix4(yd)}var oi=new L,Ic=new L,qo=new L,Yo=new L,Sa=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ic.copy(t).add(e).multiplyScalar(.5),qo.copy(e).sub(t).normalize(),Yo.copy(this.origin).sub(Ic);let r=t.distanceTo(e)*.5,o=-this.direction.dot(qo),a=Yo.dot(this.direction),l=-Yo.dot(qo),c=Yo.lengthSq(),h=Math.abs(1-o*o),d,f,u,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let y=1/h;d*=y,f*=y,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ic).addScaledVector(qo,f),u}intersectSphere(t,e){if(t.radius<0)return null;oi.subVectors(t.center,this.origin);let n=oi.dot(this.direction),s=oi.dot(oi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,g=e.x-o.x,y=e.y-o.y,p=e.z-o.z,m=n.x-o.x,_=n.y-o.y,M=n.z-o.z,v=Math.abs(l),w=Math.abs(c),E=Math.abs(h),x,S,C,A,P,N,O,I,B,H,z,J;if(v>=w&&v>=E?(C=l,N=d,B=g,J=m,l>=0?(x=c,S=h,A=f,P=u,O=y,I=p,H=_,z=M):(x=h,S=c,A=u,P=f,O=p,I=y,H=M,z=_)):w>=E?(C=c,N=f,B=y,J=_,c>=0?(x=h,S=l,A=u,P=d,O=p,I=g,H=M,z=m):(x=l,S=h,A=d,P=u,O=g,I=p,H=m,z=M)):(C=h,N=u,B=p,J=M,h>=0?(x=l,S=c,A=d,P=f,O=g,I=y,H=m,z=_):(x=c,S=l,A=f,P=d,O=y,I=g,H=_,z=m)),C===0)return null;let k=x/C,Y=S/C,Z=1/C,ut=A-k*N,At=P-Y*N,q=O-k*B,at=I-Y*B,wt=H-k*J,Nt=z-Y*J,yt=wt*at-Nt*q,Ut=ut*Nt-At*wt,ye=q*At-at*ut;if(s){if(yt<0||Ut<0||ye<0)return null}else if((yt<0||Ut<0||ye<0)&&(yt>0||Ut>0||ye>0))return null;let Bt=yt+Ut+ye;if(Bt===0)return null;let Kt=Z*(yt*N+Ut*B+ye*J);return(Bt>0?Kt<0:Kt>0)?null:this.at(Kt/Bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Te=class extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gu=new ue,Wi=new Sa,Zo=new wi,_u=new L,$o=new L,Jo=new L,Ko=new L,Lc=new L,Qo=new L,xu=new L,jo=new L,nt=class extends Oe{constructor(t=new fe,e=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Lc.fromBufferAttribute(d,t),o?Qo.addScaledVector(Lc,h):Qo.addScaledVector(Lc.sub(e),h))}e.add(Qo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(Zo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Zo,_u)===null||Wi.origin.distanceToSquared(_u)>(t.far-t.near)**2))&&(gu.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(gu),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],_=Math.max(p.start,u.start),M=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let v=_,w=M;v<w;v+=3){let E=a.getX(v),x=a.getX(v+1),S=a.getX(v+2);s=ta(this,m,t,n,c,h,d,E,x,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(a.count,u.start+u.count);for(let p=g,m=y;p<m;p+=3){let _=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);s=ta(this,o,t,n,c,h,d,_,M,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],_=Math.max(p.start,u.start),M=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let v=_,w=M;v<w;v+=3){let E=v,x=v+1,S=v+2;s=ta(this,m,t,n,c,h,d,E,x,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let p=g,m=y;p<m;p+=3){let _=p,M=p+1,v=p+2;s=ta(this,o,t,n,c,h,d,_,M,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function tp(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Di,a),l===null)return null;jo.copy(a),jo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(jo);return c<e.near||c>e.far?null:{distance:c,point:jo.clone(),object:i}}function ta(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,$o),i.getVertexPosition(l,Jo),i.getVertexPosition(c,Ko);let h=tp(i,t,e,n,$o,Jo,Ko,xu);if(h){let d=new L;ai.getBarycoord(xu,$o,Jo,Ko,d),s&&(h.uv=ai.getInterpolatedAttribute(s,a,l,c,d,new et)),r&&(h.uv1=ai.getInterpolatedAttribute(r,a,l,c,d,new et)),o&&(h.normal=ai.getInterpolatedAttribute(o,a,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};ai.getNormal($o,Jo,Ko,f.normal),h.face=f,h.barycoord=d}return h}var Pr=class extends cn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ye,h=Ye,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bs=class extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new ue,vu=new ue,ea=[],yu=new Xn,ep=new ue,pr=new nt,mr=new wi,An=class extends nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ep)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),yu.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(yu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),mr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),t.ray.intersectsSphere(mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),vu.multiplyMatrices(n,ws),pr.matrixWorld=vu,pr.raycast(t,ea);for(let o=0,a=ea.length;o<a;o++){let l=ea[o];l.instanceId=r,l.object=this,e.push(l)}ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pr(new Float32Array(s*this.count),s,this.count,$a,Cn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xi=new wi,np=new et(.5,.5),na=new L,Ri=class{constructor(t=new Fn,e=new Fn,n=new Fn,s=new Fn,r=new Fn,o=new Fn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],g=r[8],y=r[9],p=r[10],m=r[11],_=r[12],M=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-o,u-h,m-g,w-_).normalize(),s[1].setComponents(c+o,u+h,m+g,w+_).normalize(),s[2].setComponents(c+a,u+d,m+y,w+M).normalize(),s[3].setComponents(c-a,u-d,m-y,w-M).normalize(),n)s[4].setComponents(l,f,p,v).normalize(),s[5].setComponents(c-l,u-f,m-p,w-v).normalize();else if(s[4].setComponents(c-l,u-f,m-p,w-v).normalize(),e===Tn)s[5].setComponents(c+l,u+f,m+p,w+v).normalize();else if(e===Ds)s[5].setComponents(l,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);let e=np.distanceTo(t.center);return Xi.radius=.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(na.x=s.normal.x>0?t.max.x:t.min.x,na.y=s.normal.y>0?t.max.y:t.min.y,na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Mu=new ue,ba=class i{constructor(){this.coordinateSystem=Tn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Mu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ri),n[s].setFromProjectionMatrix(Mu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ri),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ir=class extends cn{constructor(t=[],e=is,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ji=class extends cn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var di=class extends cn{constructor(t,e,n=zn,s,r,o,a=Ye,l=Ye,c,h=ci,d=1){if(h!==ci&&h!==mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Lr=class extends di{constructor(t,e=zn,n=is,s,r,o=Ye,a=Ye,l,c=ci){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Dr=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},me=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(d,2));function g(y,p,m,_,M,v,w,E,x,S,C){let A=v/x,P=w/S,N=v/2,O=w/2,I=E/2,B=x+1,H=S+1,z=0,J=0,k=new L;for(let Y=0;Y<H;Y++){let Z=Y*P-O;for(let ut=0;ut<B;ut++){let At=ut*A-N;k[y]=At*_,k[p]=Z*M,k[m]=I,c.push(k.x,k.y,k.z),k[y]=0,k[p]=0,k[m]=E>0?1:-1,h.push(k.x,k.y,k.z),d.push(ut/x),d.push(1-Y/S),z+=1}}for(let Y=0;Y<S;Y++)for(let Z=0;Z<x;Z++){let ut=f+Z+B*Y,At=f+Z+B*(Y+1),q=f+(Z+1)+B*(Y+1),at=f+(Z+1)+B*Y;l.push(ut,At,at),l.push(At,q,at),J+=6}a.addGroup(u,J,C),u+=J,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Nr=class i extends fe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,f=e,u=2*d+f,g=n*2+r,y=s+1,p=new L,m=new L;for(let _=0;_<=g;_++){let M=0,v=0,w=0,E=0;if(_<=n){let C=_/n,A=C*Math.PI/2;v=-h-t*Math.cos(A),w=t*Math.sin(A),E=-t*Math.cos(A),M=C*d}else if(_<=n+r){let C=(_-n)/r;v=-h+C*e,w=t,E=0,M=d+C*f}else{let C=(_-n-r)/n,A=C*Math.PI/2;v=h+t*Math.sin(A),w=t*Math.cos(A),E=t*Math.sin(A),M=d+f+C*d}let x=Math.max(0,Math.min(1,M/u)),S=0;_===0?S=.5/s:_===g&&(S=-.5/s);for(let C=0;C<=s;C++){let A=C/s,P=A*Math.PI*2,N=Math.sin(P),O=Math.cos(P);m.x=-w*O,m.y=v,m.z=w*N,a.push(m.x,m.y,m.z),p.set(-w*O,E,w*N),p.normalize(),l.push(p.x,p.y,p.z),c.push(A+S,x)}if(_>0){let C=(_-1)*y;for(let A=0;A<s;A++){let P=C+A,N=C+A+1,O=_*y+A,I=_*y+A+1;o.push(P,N,O),o.push(N,I,O)}}}this.setIndex(o),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(l,3)),this.setAttribute("uv",new kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ki=class i extends fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new L,h=new et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let u=n+d/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(a,3)),this.setAttribute("uv",new kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ze=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],u=[],g=0,y=[],p=n/2,m=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(u,2));function _(){let v=new L,w=new L,E=0,x=(e-t)/n;for(let S=0;S<=r;S++){let C=[],A=S/r,P=A*(e-t)+t;for(let N=0;N<=s;N++){let O=N/s,I=O*l+a,B=Math.sin(I),H=Math.cos(I);w.x=P*B,w.y=-A*n+p,w.z=P*H,d.push(w.x,w.y,w.z),v.set(B,x,H).normalize(),f.push(v.x,v.y,v.z),u.push(O,1-A),C.push(g++)}y.push(C)}for(let S=0;S<s;S++)for(let C=0;C<r;C++){let A=y[C][S],P=y[C+1][S],N=y[C+1][S+1],O=y[C][S+1];(t>0||C!==0)&&(h.push(A,P,O),E+=3),(e>0||C!==r-1)&&(h.push(P,N,O),E+=3)}c.addGroup(m,E,0),m+=E}function M(v){let w=g,E=new et,x=new L,S=0,C=v===!0?t:e,A=v===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,p*A,0),f.push(0,A,0),u.push(.5,.5),g++;let P=g;for(let N=0;N<=s;N++){let I=N/s*l+a,B=Math.cos(I),H=Math.sin(I);x.x=C*H,x.y=p*A,x.z=C*B,d.push(x.x,x.y,x.z),f.push(0,A,0),E.x=B*.5+.5,E.y=H*.5*A+.5,u.push(E.x,E.y),g++}for(let N=0;N<s;N++){let O=w+N,I=P+N;v===!0?h.push(I,I+1,O):h.push(I+1,I,O),S+=3}c.addGroup(m,S,v===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ur=class i extends Ze{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fr=class i extends fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(r.slice(),3)),this.setAttribute("uv",new kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let M=new L,v=new L,w=new L;for(let E=0;E<e.length;E+=3)u(e[E+0],M),u(e[E+1],v),u(e[E+2],w),l(M,v,w,_)}function l(_,M,v,w){let E=w+1,x=[];for(let S=0;S<=E;S++){x[S]=[];let C=_.clone().lerp(v,S/E),A=M.clone().lerp(v,S/E),P=E-S;for(let N=0;N<=P;N++)N===0&&S===E?x[S][N]=C:x[S][N]=C.clone().lerp(A,N/P)}for(let S=0;S<E;S++)for(let C=0;C<2*(E-S)-1;C++){let A=Math.floor(C/2);C%2===0?(f(x[S][A+1]),f(x[S+1][A]),f(x[S][A])):(f(x[S][A+1]),f(x[S+1][A+1]),f(x[S+1][A]))}}function c(_){let M=new L;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(_),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let _=new L;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let v=p(_)/2/Math.PI+.5,w=m(_)/Math.PI+.5;o.push(v,1-w)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){let M=o[_+0],v=o[_+2],w=o[_+4],E=Math.max(M,v,w),x=Math.min(M,v,w);E>.9&&x<.1&&(M<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function u(_,M){let v=_*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){let _=new L,M=new L,v=new L,w=new L,E=new et,x=new et,S=new et;for(let C=0,A=0;C<r.length;C+=9,A+=6){_.set(r[C+0],r[C+1],r[C+2]),M.set(r[C+3],r[C+4],r[C+5]),v.set(r[C+6],r[C+7],r[C+8]),E.set(o[A+0],o[A+1]),x.set(o[A+2],o[A+3]),S.set(o[A+4],o[A+5]),w.copy(_).add(M).add(v).divideScalar(3);let P=p(w);y(E,A+0,_,P),y(x,A+2,M,P),y(S,A+4,v,P)}}function y(_,M,v,w){w<0&&_.x===1&&(o[M]=_.x-1),v.x===0&&v.z===0&&(o[M]=w/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Or=class i extends Fr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new et:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],o=[],a=new L,l=new ue;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Qt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Qt(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},zs=class extends vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ea=class extends zs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function fh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Su=new L,bu=new L,Dc=new fh,Nc=new fh,Uc=new fh,Hs=class extends vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(bu.subVectors(s[0],s[1]).add(s[0]),c=bu);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Su.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Su),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),u),y=Math.pow(d.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(h),u);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Dc.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,y,p),Nc.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,y,p),Uc.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Dc.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Nc.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Uc.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Dc.calc(l),Nc.calc(l),Uc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Eu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ip(i,t){let e=1-i;return e*e*t}function sp(i,t){return 2*(1-i)*i*t}function rp(i,t){return i*i*t}function _r(i,t,e,n){return ip(i,t)+sp(i,e)+rp(i,n)}function op(i,t){let e=1-i;return e*e*e*t}function ap(i,t){let e=1-i;return 3*e*e*i*t}function lp(i,t){return 3*(1-i)*i*i*t}function cp(i,t){return i*i*i*t}function xr(i,t,e,n,s){return op(i,t)+ap(i,e)+lp(i,n)+cp(i,s)}var Br=class extends vn{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(t,s.x,r.x,o.x,a.x),xr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ta=class extends vn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(t,s.x,r.x,o.x,a.x),xr(t,s.y,r.y,o.y,a.y),xr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zr=class extends vn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wa=class extends vn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hr=class extends vn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kr=class extends vn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(_r(t,s.x,r.x,o.x),_r(t,s.y,r.y,o.y),_r(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Eu(a,l.x,c.x,h.x,d.x),Eu(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new et().fromArray(s))}return this}},Aa=Object.freeze({__proto__:null,ArcCurve:Ea,CatmullRomCurve3:Hs,CubicBezierCurve:Br,CubicBezierCurve3:Ta,EllipseCurve:zs,LineCurve:zr,LineCurve3:wa,QuadraticBezierCurve:Hr,QuadraticBezierCurve3:kr,SplineCurve:Gr}),Ra=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Aa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Aa[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Vr=class extends Ra{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new zr(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Hr(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Br(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Gr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new zs(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},qn=class extends Vr{constructor(t){super(t),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Vr().fromJSON(s))}return this}};function hp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Md(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=mp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let f=e;f<s;f+=e){let u=i[f],g=i[f+1];u<a&&(a=u),g<l&&(l=g),u>h&&(h=u),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Wr(r,o,e,a,l,c,0),o}function Md(i,t,e,n,s){let r;if(s===wp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Tu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Tu(o/n|0,i[o],i[o+1],r);return r&&ks(r,r.next)&&(qr(r),r=r.next),r}function Qi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ks(e,e.next)||Ee(e.prev,e,e.next)===0)){if(qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&yp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?dp(i,n,s,r):up(i)){t.push(l.i,i.i,c.i),qr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=fp(Qi(i),t),Wr(i,t,e,n,s,r,2)):o===2&&pp(i,t,e,n,s,r):Wr(Qi(i),t,e,n,s,r,1);break}}}function up(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),u=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=u&&gr(s,a,r,l,o,c,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,u=Math.min(a,l,c),g=Math.min(h,d,f),y=Math.max(a,l,c),p=Math.max(h,d,f),m=kc(u,g,t,e,n),_=kc(y,p,t,e,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=m&&v&&v.z<=_;){if(M.x>=u&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&gr(a,h,l,d,c,f,M.x,M.y)&&Ee(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=u&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&gr(a,h,l,d,c,f,v.x,v.y)&&Ee(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=u&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&gr(a,h,l,d,c,f,M.x,M.y)&&Ee(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=u&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&gr(a,h,l,d,c,f,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function fp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ks(n,s)&&bd(n,e,e.next,s)&&Xr(n,s)&&Xr(s,n)&&(t.push(n.i,e.i,s.i),qr(e),qr(e.next),e=i=s),e=e.next}while(e!==i);return Qi(e)}function pp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bp(o,a)){let l=Ed(o,a);o=Qi(o,o.next),l=Qi(l,l.next),Wr(o,t,e,n,s,r,0),Wr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function mp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Md(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Sp(c))}s.sort(gp);for(let r=0;r<s.length;r++)e=_p(s[r],e);return e}function gp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function _p(i,t){let e=xp(i,t);if(!e)return t;let n=Ed(e,i);return Qi(n,n.next),Qi(e,e.next)}function xp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(ks(i,e))return e;do{if(ks(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Sd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Xr(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&vp(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function vp(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function yp(i,t,e,n){let s=i;do s.z===0&&(s.z=kc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Mp(s)}function Mp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function kc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Sp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Sd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function gr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Sd(i,t,e,n,s,r,o,a)}function bp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ep(i,t)&&(Xr(i,t)&&Xr(t,i)&&Tp(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||ks(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ks(i,t){return i.x===t.x&&i.y===t.y}function bd(i,t,e,n){let s=sa(Ee(i,t,e)),r=sa(Ee(i,t,n)),o=sa(Ee(e,n,i)),a=sa(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&ia(i,e,t)||r===0&&ia(i,n,t)||o===0&&ia(e,i,n)||a===0&&ia(e,t,n))}function ia(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function sa(i){return i>0?1:i<0?-1:0}function Ep(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Xr(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Tp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ed(i,t){let e=Gc(i.i,i.x,i.y),n=Gc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Tu(i,t,e,n){let s=Gc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Vc=class{static triangulate(t,e,n=2){return hp(t,e,n)}},qi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];wu(t),Au(n,t);let o=t.length;e.forEach(wu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Au(n,e[l]);let a=Vc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function wu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Au(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ci=class i extends fe{constructor(t=new qn([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new kt(s,3)),this.setAttribute("uv",new kt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Ap,M,v=!1,w,E,x,S;if(m){M=m.getSpacedPoints(h),v=!0,f=!1;let it=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,it),E=new L,x=new L,S=new L}f||(p=0,u=0,g=0,y=0);let C=a.extractPoints(c),A=C.shape,P=C.holes;if(!qi.isClockWise(A)){A=A.reverse();for(let it=0,dt=P.length;it<dt;it++){let lt=P[it];qi.isClockWise(lt)&&(P[it]=lt.reverse())}}function O(it){let lt=10000000000000001e-36,Tt=it[0];for(let vt=1;vt<=it.length;vt++){let qt=vt%it.length,Lt=it[qt],ne=Lt.x-Tt.x,ie=Lt.y-Tt.y,ae=ne*ne+ie*ie,F=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(Tt.x),Math.abs(Tt.y)),De=lt*F*F;if(ae<=De){it.splice(qt,1),vt--;continue}Tt=Lt}}O(A),P.forEach(O);let I=P.length,B=A;for(let it=0;it<I;it++){let dt=P[it];A=A.concat(dt)}function H(it,dt,lt){return dt||Ht("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(dt,lt)}let z=A.length;function J(it,dt,lt){let Tt,vt,qt,Lt=it.x-dt.x,ne=it.y-dt.y,ie=lt.x-it.x,ae=lt.y-it.y,F=Lt*Lt+ne*ne,De=Lt*ae-ne*ie;if(Math.abs(De)>Number.EPSILON){let jt=Math.sqrt(F),ge=Math.sqrt(ie*ie+ae*ae),gt=dt.x-ne/jt,we=dt.y+Lt/jt,Ot=lt.x-ae/ge,Gt=lt.y+ie/ge,R=((Ot-gt)*ae-(Gt-we)*ie)/(Lt*ae-ne*ie);Tt=gt+Lt*R-it.x,vt=we+ne*R-it.y;let b=Tt*Tt+vt*vt;if(b<=2)return new et(Tt,vt);qt=Math.sqrt(b/2)}else{let jt=!1;Lt>Number.EPSILON?ie>Number.EPSILON&&(jt=!0):Lt<-Number.EPSILON?ie<-Number.EPSILON&&(jt=!0):Math.sign(ne)===Math.sign(ae)&&(jt=!0),jt?(Tt=-ne,vt=Lt,qt=Math.sqrt(F)):(Tt=Lt,vt=ne,qt=Math.sqrt(F/2))}return new et(Tt/qt,vt/qt)}let k=[];for(let it=0,dt=B.length,lt=dt-1,Tt=it+1;it<dt;it++,lt++,Tt++)lt===dt&&(lt=0),Tt===dt&&(Tt=0),k[it]=J(B[it],B[lt],B[Tt]);let Y=[],Z,ut=k.concat();for(let it=0,dt=I;it<dt;it++){let lt=P[it];Z=[];for(let Tt=0,vt=lt.length,qt=vt-1,Lt=Tt+1;Tt<vt;Tt++,qt++,Lt++)qt===vt&&(qt=0),Lt===vt&&(Lt=0),Z[Tt]=J(lt[Tt],lt[qt],lt[Lt]);Y.push(Z),ut=ut.concat(Z)}let At;if(p===0)At=qi.triangulateShape(B,P);else{let it=[],dt=[];for(let lt=0;lt<p;lt++){let Tt=lt/p,vt=u*Math.cos(Tt*Math.PI/2),qt=g*Math.sin(Tt*Math.PI/2)+y;for(let Lt=0,ne=B.length;Lt<ne;Lt++){let ie=H(B[Lt],k[Lt],qt);Ut(ie.x,ie.y,-vt),Tt===0&&it.push(ie)}for(let Lt=0,ne=I;Lt<ne;Lt++){let ie=P[Lt];Z=Y[Lt];let ae=[];for(let F=0,De=ie.length;F<De;F++){let jt=H(ie[F],Z[F],qt);Ut(jt.x,jt.y,-vt),Tt===0&&ae.push(jt)}Tt===0&&dt.push(ae)}}At=qi.triangulateShape(it,dt)}let q=At.length,at=g+y;for(let it=0;it<z;it++){let dt=f?H(A[it],ut[it],at):A[it];v?(x.copy(w.normals[0]).multiplyScalar(dt.x),E.copy(w.binormals[0]).multiplyScalar(dt.y),S.copy(M[0]).add(x).add(E),Ut(S.x,S.y,S.z)):Ut(dt.x,dt.y,0)}for(let it=1;it<=h;it++)for(let dt=0;dt<z;dt++){let lt=f?H(A[dt],ut[dt],at):A[dt];v?(x.copy(w.normals[it]).multiplyScalar(lt.x),E.copy(w.binormals[it]).multiplyScalar(lt.y),S.copy(M[it]).add(x).add(E),Ut(S.x,S.y,S.z)):Ut(lt.x,lt.y,d/h*it)}for(let it=p-1;it>=0;it--){let dt=it/p,lt=u*Math.cos(dt*Math.PI/2),Tt=g*Math.sin(dt*Math.PI/2)+y;for(let vt=0,qt=B.length;vt<qt;vt++){let Lt=H(B[vt],k[vt],Tt);Ut(Lt.x,Lt.y,d+lt)}for(let vt=0,qt=P.length;vt<qt;vt++){let Lt=P[vt];Z=Y[vt];for(let ne=0,ie=Lt.length;ne<ie;ne++){let ae=H(Lt[ne],Z[ne],Tt);v?Ut(ae.x,ae.y+M[h-1].y,M[h-1].x+lt):Ut(ae.x,ae.y,d+lt)}}}wt(),Nt();function wt(){let it=s.length/3;if(f){let dt=0,lt=z*dt;for(let Tt=0;Tt<q;Tt++){let vt=At[Tt];ye(vt[2]+lt,vt[1]+lt,vt[0]+lt)}dt=h+p*2,lt=z*dt;for(let Tt=0;Tt<q;Tt++){let vt=At[Tt];ye(vt[0]+lt,vt[1]+lt,vt[2]+lt)}}else{for(let dt=0;dt<q;dt++){let lt=At[dt];ye(lt[2],lt[1],lt[0])}for(let dt=0;dt<q;dt++){let lt=At[dt];ye(lt[0]+z*h,lt[1]+z*h,lt[2]+z*h)}}n.addGroup(it,s.length/3-it,0)}function Nt(){let it=s.length/3,dt=0;yt(B,dt),dt+=B.length;for(let lt=0,Tt=P.length;lt<Tt;lt++){let vt=P[lt];yt(vt,dt),dt+=vt.length}n.addGroup(it,s.length/3-it,1)}function yt(it,dt){let lt=it.length;for(;--lt>=0;){let Tt=lt,vt=lt-1;vt<0&&(vt=it.length-1);for(let qt=0,Lt=h+p*2;qt<Lt;qt++){let ne=z*qt,ie=z*(qt+1),ae=dt+Tt+ne,F=dt+vt+ne,De=dt+vt+ie,jt=dt+Tt+ie;Bt(ae,F,De,jt)}}}function Ut(it,dt,lt){l.push(it),l.push(dt),l.push(lt)}function ye(it,dt,lt){Kt(it),Kt(dt),Kt(lt);let Tt=s.length/3,vt=_.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);ee(vt[0]),ee(vt[1]),ee(vt[2])}function Bt(it,dt,lt,Tt){Kt(it),Kt(dt),Kt(Tt),Kt(dt),Kt(lt),Kt(Tt);let vt=s.length/3,qt=_.generateSideWallUV(n,s,vt-6,vt-3,vt-2,vt-1);ee(qt[0]),ee(qt[1]),ee(qt[3]),ee(qt[1]),ee(qt[2]),ee(qt[3])}function Kt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function ee(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Rp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Aa[s.type]().fromJSON(s)),new i(n,t.options)}},Ap={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new et(r,o),new et(a,l),new et(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[s*3],u=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new et(o,1-l),new et(c,1-d),new et(f,1-g),new et(y,1-m)]:[new et(a,1-l),new et(h,1-d),new et(u,1-g),new et(p,1-m)]}};function Rp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Yr=class i extends Fr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Zr=class i extends fe{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Qt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new L,f=new et,u=new L,g=new L,y=new L,p=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:p=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,u.x=m*1,u.y=-p,u.z=m*0,y.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:p=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,u.x=m*1,u.y=-p,u.z=m*0,g.copy(u),u.x+=y.x,u.y+=y.y,u.z+=y.z,u.normalize(),l.push(u.x,u.y,u.z),y.copy(g)}for(let _=0;_<=e;_++){let M=n+_*h*s,v=Math.sin(M),w=Math.cos(M);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*v,d.y=t[E].y,d.z=t[E].x*w,o.push(d.x,d.y,d.z),f.x=_/e,f.y=E/(t.length-1),a.push(f.x,f.y);let x=l[3*E+0]*v,S=l[3*E+1],C=l[3*E+0]*w;c.push(x,S,C)}}for(let _=0;_<e;_++)for(let M=0;M<t.length-1;M++){let v=M+_*t.length,w=v,E=v+t.length,x=v+t.length+1,S=v+1;r.push(w,E,S),r.push(x,S,E)}this.setIndex(r),this.setAttribute("position",new kt(o,3)),this.setAttribute("uv",new kt(a,2)),this.setAttribute("normal",new kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var pe=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,u=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let _=m*f-o;for(let M=0;M<c;M++){let v=M*d-r;g.push(v,-_,0),y.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let M=_+c*m,v=_+c*(m+1),w=_+1+c*(m+1),E=_+1+c*m;u.push(M,v,E),u.push(v,w,E)}this.setIndex(u),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(y,3)),this.setAttribute("uv",new kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Gs=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new L,f=new L,u=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){let _=[],M=m/n,v=o+M*a,w=t*Math.cos(v),E=Math.sqrt(t*t-w*w),x=0;m===0&&o===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){let C=S/e,A=s+C*r;d.x=-E*Math.cos(A),d.y=w,d.z=E*Math.sin(A),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),p.push(C+x,1-M),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){let M=h[m][_+1],v=h[m][_],w=h[m+1][_],E=h[m+1][_+1];(m!==0||o>0)&&u.push(M,v,E),(m!==n-1||l<Math.PI)&&u.push(v,w,E)}this.setIndex(u),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(y,3)),this.setAttribute("uv",new kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Rn=class i extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],f=new L,u=new L,g=new L;for(let y=0;y<=n;y++){let p=o+y/n*a;for(let m=0;m<=s;m++){let _=m/s*r;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),c.push(u.x,u.y,u.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),g.subVectors(u,f).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,_=(s+1)*(y-1)+p-1,M=(s+1)*(y-1)+p,v=(s+1)*y+p;l.push(m,_,v),l.push(_,M,v)}this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var $r=class i extends fe{constructor(t=new kr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new et,h=new L,d=[],f=[],u=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(u,2));function y(){for(let M=0;M<e;M++)p(M);p(r===!1?e:0),_(),m()}function p(M){h=t.getPointAt(M/e,h);let v=o.normals[M],w=o.binormals[M];for(let E=0;E<=s;E++){let x=E/s*Math.PI*2,S=Math.sin(x),C=-Math.cos(x);l.x=C*v.x+S*w.x,l.y=C*v.y+S*w.y,l.z=C*v.z+S*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let v=1;v<=s;v++){let w=(s+1)*(M-1)+(v-1),E=(s+1)*M+(v-1),x=(s+1)*M+v,S=(s+1)*(M-1)+v;g.push(w,E,S),g.push(E,x,S)}}function _(){for(let M=0;M<=e;M++)for(let v=0;v<=s;v++)c.x=M/e,c.y=v/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Aa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ru(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ru(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=rs(i[e]);for(let s in n)t[s]=n[s]}return t}function Ru(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ph(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var _i={clone:rs,merge:nn},Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fe=class extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=Cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Et().setHex(s.value);break;case"v2":this.uniforms[n].value=new et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Vs=class extends Fe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yt=class extends hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},yn=class extends Yt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Yi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Yi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ca=class extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pa=class extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function As(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ra(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ia=class extends Pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bc,endingEnd:Bc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zc:r=t,a=2*e-n;break;case Hc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zc:o=t,l=2*n-e;break;case Hc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,_=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,M=(-1-u)*p+(1.5+u)*y+.5*g,v=u*p-u*y;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+_*o[c+w]+M*o[l+w]+v*o[d+w];return r}},La=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Da=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Na=class extends Pi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),y=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*y+o[l+p]*g;return r}let f=a*2,u=t-1;for(let g=0;g!==a;++g){let y=o[c+g],p=o[l+g],m=u*f+g*2,_=d[m],M=d[m+1],v=t*f+g*2,w=h[v],E=h[v+1],x=Dp(n,e,_,w,s);r[g]=Td(x,y,M,E,p)}return r}};function Td(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Lp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Dp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Td(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Lp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=As(e,this.TimeBufferType),this.values=As(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:As(t.times,Array),values:As(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ra(t.settings)&&(n.settings={inTangents:As(t.settings.inTangents,Array),outTangents:As(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Na(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case xa:e=this.InterpolantFactoryMethodLinear;break;case la:e=this.InterpolantFactoryMethodSmooth;break;case Oc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return xa;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return Oc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;ra(this.settings)&&(Cu(this.settings.inTangents,t),Cu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ra(this.settings)&&(Pu(this.settings.inTangents,t),Pu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ht("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Ff(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===la,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[f+g]||y!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ra(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Cu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Pu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=xa;var Ii=class extends Mn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=vr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};Ua.prototype.ValueTypeName="color";var Fa=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};Fa.prototype.ValueTypeName="number";var Oa=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)wn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Jr=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Oa(this.times,this.values,this.getValueSize(),t)}};Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends Mn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=vr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};Ba.prototype.ValueTypeName="vector";var za=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],g=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wd=new za,Ha=class{constructor(t){this.manager=t!==void 0?t:wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji=class extends Oe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Kr=class extends ji{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Fc=new ue,Iu=new L,Lu=new L,Ws=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ri,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Iu),Lu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Fc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ds||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},oa=new L,aa=new wn,Vn=new L,Qr=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oa,aa,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(oa,aa,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ti=new L,Du=new et,Nu=new et,qe=class extends Qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(uc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Du,Nu),e.subVectors(Nu,Du)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(uc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Wc=class extends Ws{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=br*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},jr=class extends ji{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Xc=class extends Ws{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}},to=class extends ji{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ts=class extends Qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qc=class extends Ws{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},eo=class extends ji{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new qc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Rs=-90,Cs=1,Xs=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(Rs,Cs,t,e);s.layers=this.layers,this.add(s);let r=new qe(Rs,Cs,t,e);r.layers=this.layers,this.add(r);let o=new qe(Rs,Cs,t,e);o.layers=this.layers,this.add(o);let a=new qe(Rs,Cs,t,e);a.layers=this.layers,this.add(a);let l=new qe(Rs,Cs,t,e);l.layers=this.layers,this.add(l);let c=new qe(Rs,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ka=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},no=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Np.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Np(){this._document.hidden===!1&&this.reset()}var mh="\\[\\]\\.:\\/",Up=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",Fp="[^"+mh.replace("\\.","")+"]",Op=/((?:WC+[\/:])*)/.source.replace("WC",gh),Bp=/(WCOD+)?/.source.replace("WCOD",Fp),zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),Hp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),kp=new RegExp("^"+Op+Bp+zp+Hp+"$"),Gp=["material","materials","bones","map"],Yc=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Up,"")}static parseTrackName(t){let e=kp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Yc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tv=new Float32Array(1);var io=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,zt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Zc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function _h(i,t,e,n){let s=Vp(n);switch(e){case oh:return i*t;case $a:return i*t/s.components*s.byteLength;case Ja:return i*t/s.components*s.byteLength;case Ni:return i*t*2/s.components*s.byteLength;case Ka:return i*t*2/s.components*s.byteLength;case ah:return i*t*3/s.components*s.byteLength;case Hn:return i*t*4/s.components*s.byteLength;case Qa:return i*t*4/s.components*s.byteLength;case fo:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:case nl:return Math.max(i,16)*Math.max(t,8)/4;case ja:case el:return Math.max(i,8)*Math.max(t,8)/2;case il:case sl:case ol:case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rl:case _o:case ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ml:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case yl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bl:case El:case Tl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wl:case Al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xo:case Rl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vp(i){switch(i){case pn:case nh:return{byteLength:1,components:1};case $s:case ih:case Be:return{byteLength:2,components:1};case Ya:case Za:return{byteLength:2,components:4};case zn:case qa:case Cn:return{byteLength:4,components:1};case sh:case rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Zd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $p(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){let g=d[f],y=d[u];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){let y=d[u];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ym=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,km=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ym=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,D0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,U0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,O0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,V0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,W0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ng=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ig=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_g=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ag=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:Jp,alphahash_pars_fragment:Kp,alphamap_fragment:Qp,alphamap_pars_fragment:jp,alphatest_fragment:tm,alphatest_pars_fragment:em,aomap_fragment:nm,aomap_pars_fragment:im,batching_pars_vertex:sm,batching_vertex:rm,begin_vertex:om,beginnormal_vertex:am,bsdfs:lm,iridescence_fragment:cm,bumpmap_pars_fragment:hm,clipping_planes_fragment:um,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:fm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:gm,color_pars_vertex:_m,color_vertex:xm,common:vm,defaultnormal_vertex:ym,displacementmap_pars_vertex:Mm,displacementmap_vertex:Sm,emissivemap_fragment:bm,emissivemap_pars_fragment:Em,colorspace_fragment:Tm,colorspace_pars_fragment:wm,envmap_fragment:Am,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Cm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:km,envmap_vertex:Im,fog_vertex:Lm,fog_pars_vertex:Dm,fog_fragment:Nm,fog_pars_fragment:Um,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:Om,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:zm,lights_pars_begin:Hm,lights_toon_fragment:Gm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:qm,lights_physical_pars_fragment:Ym,lights_fragment_begin:Zm,lights_fragment_maps:$m,lights_fragment_end:Jm,lightprobes_pars_fragment:Km,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:e0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:s0,map_particle_pars_fragment:r0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:a0,morphinstance_vertex:l0,morphcolor_vertex:c0,morphnormal_vertex:h0,morphtarget_pars_vertex:u0,morphtarget_vertex:d0,normal_fragment_begin:f0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:g0,normal_vertex:_0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:y0,clearcoat_pars_fragment:M0,iridescence_pars_fragment:S0,opaque_fragment:b0,packing:E0,premultiplied_alpha_fragment:T0,project_vertex:w0,dithering_fragment:A0,dithering_pars_fragment:R0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:I0,shadowmap_pars_vertex:L0,shadowmap_vertex:D0,shadowmask_pars_fragment:N0,skinbase_vertex:U0,skinning_pars_vertex:F0,skinning_vertex:O0,skinnormal_vertex:B0,specularmap_fragment:z0,specularmap_pars_fragment:H0,tonemapping_fragment:k0,tonemapping_pars_fragment:G0,transmission_fragment:V0,transmission_pars_fragment:W0,uv_pars_fragment:X0,uv_pars_vertex:q0,uv_vertex:Y0,worldpos_vertex:Z0,background_vert:$0,background_frag:J0,backgroundCube_vert:K0,backgroundCube_frag:Q0,cube_vert:j0,cube_frag:tg,depth_vert:eg,depth_frag:ng,distance_vert:ig,distance_frag:sg,equirect_vert:rg,equirect_frag:og,linedashed_vert:ag,linedashed_frag:lg,meshbasic_vert:cg,meshbasic_frag:hg,meshlambert_vert:ug,meshlambert_frag:dg,meshmatcap_vert:fg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:_g,meshphong_frag:xg,meshphysical_vert:vg,meshphysical_frag:yg,meshtoon_vert:Mg,meshtoon_frag:Sg,points_vert:bg,points_frag:Eg,shadow_vert:Tg,shadow_frag:wg,sprite_vert:Ag,sprite_frag:Rg},St={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},$n={basic:{uniforms:nn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:nn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:nn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:nn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:nn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Et(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:nn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:nn([St.points,St.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:nn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:nn([St.common,St.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:nn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:nn([St.sprite,St.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:nn([St.common,St.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:nn([St.lights,St.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};$n.physical={uniforms:nn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Il={r:0,b:0,g:0},Cg=new ue,$d=new Wt;$d.set(-1,0,0,0,1,0,0,0,1);function Pg(i,t,e,n,s,r){let o=new Et(0),a=s===!0?0:1,l,c,h=null,d=0,f=null;function u(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=t.get(M,v)}return M}function g(_){let M=!1,v=u(_);v===null?p(o,a):v&&v.isColor&&(p(v,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(_,M){let v=u(M);v&&v.isCubeTexture?(c===void 0&&(c=new nt(new me(1,1,1),new Fe({name:"BackgroundCubeMaterial",uniforms:rs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($d),c.material.toneMapped=te.getTransfer(v.colorSpace)!==le,(h!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new nt(new pe(2,2),new Fe({name:"BackgroundMaterial",uniforms:rs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=te.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,M){_.getRGB(Il,ph(i)),e.buffers.color.setClear(Il.r,Il.g,Il.b,M,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:g,addToRenderList:y,dispose:m}}function Ig(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,N,O,I,B){let H=!1,z=d(P,I,O,N);r!==z&&(r=z,c(r.object)),H=u(P,I,O,B),H&&g(P,I,O,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(P,N,O,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,N,O,I){let B=I.wireframe===!0,H=n[N.id];H===void 0&&(H={},n[N.id]=H);let z=P.isInstancedMesh===!0?P.id:0,J=H[z];J===void 0&&(J={},H[z]=J);let k=J[O.id];k===void 0&&(k={},J[O.id]=k);let Y=k[B];return Y===void 0&&(Y=f(l()),k[B]=Y),Y}function f(P){let N=[],O=[],I=[];for(let B=0;B<e;B++)N[B]=0,O[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:I,object:P,attributes:{},index:null}}function u(P,N,O,I){let B=r.attributes,H=N.attributes,z=0,J=O.getAttributes();for(let k in J)if(J[k].location>=0){let Z=B[k],ut=H[k];if(ut===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(ut=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(ut=P.instanceColor)),Z===void 0||Z.attribute!==ut||ut&&Z.data!==ut.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function g(P,N,O,I){let B={},H=N.attributes,z=0,J=O.getAttributes();for(let k in J)if(J[k].location>=0){let Z=H[k];Z===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));let ut={};ut.attribute=Z,Z&&Z.data&&(ut.data=Z.data),B[k]=ut,z++}r.attributes=B,r.attributesNum=z,r.index=I}function y(){let P=r.newAttributes;for(let N=0,O=P.length;N<O;N++)P[N]=0}function p(P){m(P,0)}function m(P,N){let O=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;O[P]=1,I[P]===0&&(i.enableVertexAttribArray(P),I[P]=1),B[P]!==N&&(i.vertexAttribDivisor(P,N),B[P]=N)}function _(){let P=r.newAttributes,N=r.enabledAttributes;for(let O=0,I=N.length;O<I;O++)N[O]!==P[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function M(P,N,O,I,B,H,z){z===!0?i.vertexAttribIPointer(P,N,O,B,H):i.vertexAttribPointer(P,N,O,I,B,H)}function v(P,N,O,I){y();let B=I.attributes,H=O.getAttributes(),z=N.defaultAttributeValues;for(let J in H){let k=H[J];if(k.location>=0){let Y=B[J];if(Y===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){let Z=Y.normalized,ut=Y.itemSize,At=t.get(Y);if(At===void 0)continue;let q=At.buffer,at=At.type,wt=At.bytesPerElement,Nt=at===i.INT||at===i.UNSIGNED_INT||Y.gpuType===qa;if(Y.isInterleavedBufferAttribute){let yt=Y.data,Ut=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,ye=Y.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let Bt=0;Bt<k.locationSize;Bt++)m(k.location+Bt,yt.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Bt=0;Bt<k.locationSize;Bt++)p(k.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Bt=0;Bt<k.locationSize;Bt++)M(k.location+Bt,ut/k.locationSize,at,Z,Ut*wt,(ye+ut/k.locationSize*Bt)*wt,Nt)}else{if(Y.isInstancedBufferAttribute){for(let yt=0;yt<k.locationSize;yt++)m(k.location+yt,Y.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let yt=0;yt<k.locationSize;yt++)p(k.location+yt);i.bindBuffer(i.ARRAY_BUFFER,q);for(let yt=0;yt<k.locationSize;yt++)M(k.location+yt,ut/k.locationSize,at,Z,ut*wt,ut/k.locationSize*yt*wt,Nt)}}else if(z!==void 0){let Z=z[J];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(k.location,Z);break;case 3:i.vertexAttrib3fv(k.location,Z);break;case 4:i.vertexAttrib4fv(k.location,Z);break;default:i.vertexAttrib1fv(k.location,Z)}}}}_()}function w(){C();for(let P in n){let N=n[P];for(let O in N){let I=N[O];for(let B in I){let H=I[B];for(let z in H)h(H[z].object),delete H[z];delete I[B]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let O in N){let I=N[O];for(let B in I){let H=I[B];for(let z in H)h(H[z].object),delete H[z];delete I[B]}}delete n[P.id]}function x(P){for(let N in n){let O=n[N];for(let I in O){let B=O[I];if(B[P.id]===void 0)continue;let H=B[P.id];for(let z in H)h(H[z].object),delete H[z];delete B[P.id]}}}function S(P){for(let N in n){let O=n[N],I=P.isInstancedMesh===!0?P.id:0,B=O[I];if(B!==void 0){for(let H in B){let z=B[H];for(let J in z)h(z[J].object),delete z[J];delete B[H]}delete O[I],Object.keys(O).length===0&&delete n[N]}}}function C(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:p,disableUnusedAttributes:_}}function Lg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Dg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Hn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===Be&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==pn&&x!==Cn&&!S&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:w,samples:E}}function Ng(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Fn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let _=r?0:n,M=_*4,v=m.clippingState||null;l.value=v,v=h(g,f,M,u);for(let w=0;w!==M;++w)v[w]=e[w];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=u+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=u;M!==y;++M,v+=4)o.copy(d[M]).applyMatrix4(_,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Mo=class extends Re{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ir(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new me(5,5,5),r=new Fe({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:fi});r.uniforms.tEquirect.value=e;let o=new nt(s,r),a=e.minFilter;return e.minFilter===pi&&(e.minFilter=ln),new Xs(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ad=256,Ug=3,Fg=20,Jd=256,Kd=16,Og=3,Bg=new L,zg=new Et,Ks=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xs(1,10,null),this._boxMesh=new nt(new me(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Bg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,g=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(zg));let p=new Xs(n,s,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=g,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ad,gd(t))}_fromTexture(t,e){t.mapping===is||t.mapping===Zs?this._setSize(t.image.length===0?Ad:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Rd(t,!1,!1),n=Math.log2(t)-Ug;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Rd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===is||t.mapping===Zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Hg(),this._integrationMaterial=kg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Kd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Og)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Jd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Gg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Rd(i,t,e){return new Mo(i,{minFilter:pi,generateMipmaps:t,type:Be,colorSpace:Zi,depthBuffer:e})}function So(i,t,e){return new Fe({name:i,uniforms:t,vertexShader:Jt.cube_vert,fragmentShader:e,side:Je,blending:fi,depthTest:!1,depthWrite:!1})}function Hg(){return So("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function kg(){return So("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Kd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Gg(){return So("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Fg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Cd(){return So("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Pd(){return So("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Vg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Va||u===Wa)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Mo(g.height);return y.fromEquirectangularTexture(i,f),t.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,g=u===Va||u===Wa,y=u===is||u===Zs;if(g||y){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Ks(i)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let _=f.image;return g&&_&&_.height>0||y&&_&&l(_)?(n===null&&(n=new Ks(i)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,u){return u===Va?f.mapping=is:u===Wa&&(f.mapping=Zs),f}function l(f){let u=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&u++;return u===g}function c(f){let u=f.target;u.removeEventListener("dispose",c);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Wg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Yi("WebGLRenderer: "+n+" extension not supported."),s}}}function Xg(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),e.memory.geometries++),y}function h(g){let y=g.attributes;for(let p in y)t.update(y[p],i.ARRAY_BUFFER)}function d(g){let y=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let _=y!==null?y.array.length:p.array.length/3-1,M=p.count>=65535?Rr:Ar,v=new M(Math.ceil(_/3)*6,1),w=v.array;if(y!==null){let x=y.array;m=y.version;for(let S=0,C=0;S<_;S+=3){let A=x[S+0],P=x[S+1],N=x[S+2];w[C++]=A,w[C++]=P,w[C++]=P,w[C++]=N,w[C++]=N,w[C++]=A}}else{m=p.version;for(let x=0,S=0;x<_;x+=3){let C=x+0,A=x+1,P=x+2;w[S++]=C,w[S++]=A,w[S++]=A,w[S++]=P,w[S++]=P,w[S++]=C}}v.version=m;let E=r.get(g);E&&t.remove(E),r.set(g,v)}function f(g){let y=r.get(g);if(y){let p=g.index;p!==null&&y.version<p.version&&d(g)}else d(g);return r.get(g)}function u(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function qg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let y=0;for(let p=0;p<u;p++)y+=f[p];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Yg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zg(i,t,e){let n=new WeakMap,s=new Se;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let C=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;u===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let v=a.attributes.position.count*M,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*w*4*d),x=new Er(E,v,w,d);x.type=Cn,x.needsUpdate=!0;let S=M*4;for(let A=0;A<d;A++){let P=p[A],N=m[A],O=_[A],I=v*w*4*A;for(let B=0;B<P.count;B++){let H=B*S;u===!0&&(s.fromBufferAttribute(P,B),E[I+H+0]=s.x,E[I+H+1]=s.y,E[I+H+2]=s.z,E[I+H+3]=0),g===!0&&(s.fromBufferAttribute(N,B),E[I+H+4]=s.x,E[I+H+5]=s.y,E[I+H+6]=s.z,E[I+H+7]=0),y===!0&&(s.fromBufferAttribute(O,B),E[I+H+8]=s.x,E[I+H+9]=s.y,E[I+H+10]=s.z,E[I+H+11]=O.itemSize===4?s.w:1)}}f={count:d,texture:x,size:new et(v,w)},n.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let y=0;y<c.length;y++)u+=c[y];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function $g(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Jg={[ro]:"LINEAR_TONE_MAPPING",[oo]:"REINHARD_TONE_MAPPING",[ao]:"CINEON_TONE_MAPPING",[ns]:"ACES_FILMIC_TONE_MAPPING",[co]:"AGX_TONE_MAPPING",[ho]:"NEUTRAL_TONE_MAPPING",[lo]:"CUSTOM_TONE_MAPPING"};function Kg(i,t,e,n,s,r){let o=new Re(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new fe;h.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new kt([0,2,0,0,2,0],2));let d=new Vs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new nt(h,d),u=new ts(-1,1,1,-1,0,1),g=null,y=null,p=!1,m,_=null,M=[],v=!1;this.setSize=function(w,E){o.setSize(w,E),a!==null&&a.setSize(w,E),l!==null&&l.setSize(w,E);for(let x=0;x<M.length;x++){let S=M[x];S.setSize&&S.setSize(w,E)}},this.setEffects=function(w){M=w,v=M.length>0&&M[0].isRenderPass===!0;let E=o.width,x=o.height;M.length>0&&a===null&&(a=new Re(E,x,{type:Be,depthBuffer:!1,stencilBuffer:!1}),l=new Re(E,x,{type:Be,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&M.some(C=>C.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new di(E,x),r===!0&&(c.format=mi,c.type=ss)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let C=0;C<M.length;C++){let A=M[C];A.setSize&&A.setSize(E,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(w,E){if(p||w.toneMapping===Yn&&M.length===0)return!1;if(_=E,E!==null){let x=E.width,S=E.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return v===!1&&w.setRenderTarget(o),m=w.toneMapping,w.toneMapping=Yn,!0},this.hasRenderPass=function(){return v},this.end=function(w,E){w.toneMapping=m,p=!0;let x=o,S=a;for(let C=0;C<M.length;C++){let A=M[C];A.enabled!==!1&&(A.render(w,S,x,E),A.needsSwap!==!1&&(x=S,S=S===a?l:a))}if(g!==w.outputColorSpace||y!==w.toneMapping){g=w.outputColorSpace,y=w.toneMapping,d.defines={},te.getTransfer(g)===le&&(d.defines.SRGB_TRANSFER="");let C=Jg[y];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(_),w.render(f,u),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Qd=new cn,jd=new di(1,1),tf=new Lr(1),ef=new Er,nf=new Ma,sf=new Ir,Id=[],Ld=[],Dd=new Float32Array(16),Nd=new Float32Array(9),Ud=new Float32Array(4);function Qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Nl(i,t){let e=Ld[t];e===void 0&&(e=new Int32Array(t),Ld[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function n_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;Ud.set(n),i.uniformMatrix2fv(this.addr,!1,Ud),He(e,n)}}function i_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;Nd.set(n),i.uniformMatrix3fv(this.addr,!1,Nd),He(e,n)}}function s_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;Dd.set(n),i.uniformMatrix4fv(this.addr,!1,Dd),He(e,n)}}function r_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function c_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function h_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function Ul(i){return i.version===0&&(i.compareFunction=hh,i.needsUpdate=!0),i}function f_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ul(jd):r=Qd,e.setTexture2D(t||r,s)}function p_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nf,s)}function m_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ul(tf):r=sf,e.setTextureCube(t||r,s)}function g_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ef,s)}function __(i){switch(i){case 5126:return Qg;case 35664:return jg;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function x_(i,t){i.uniform1fv(this.addr,t)}function v_(i,t){let e=Qs(t,this.size,2);i.uniform2fv(this.addr,e)}function y_(i,t){let e=Qs(t,this.size,3);i.uniform3fv(this.addr,e)}function M_(i,t){let e=Qs(t,this.size,4);i.uniform4fv(this.addr,e)}function S_(i,t){let e=Qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function b_(i,t){let e=Qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function E_(i,t){let e=Qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function T_(i,t){i.uniform1iv(this.addr,t)}function w_(i,t){i.uniform2iv(this.addr,t)}function A_(i,t){i.uniform3iv(this.addr,t)}function R_(i,t){i.uniform4iv(this.addr,t)}function C_(i,t){i.uniform1uiv(this.addr,t)}function P_(i,t){i.uniform2uiv(this.addr,t)}function I_(i,t){i.uniform3uiv(this.addr,t)}function L_(i,t){i.uniform4uiv(this.addr,t)}function D_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ul(jd):o=Qd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function N_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nf,r[o])}function U_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Ul(tf):o=sf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function F_(i,t,e){let n=this.cache,s=t.length,r=Nl(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ef,r[o])}function O_(i){switch(i){case 5126:return x_;case 35664:return v_;case 35665:return y_;case 35666:return M_;case 35674:return S_;case 35675:return b_;case 35676:return E_;case 5124:case 35670:return T_;case 35667:case 35671:return w_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return I_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return F_}}var yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=__(e.type)}},Mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O_(e.type)}},Sh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},xh=/(\w+)(\])?(\[|\.)?/g;function Fd(i,t){i.seq.push(t),i.map[t.id]=t}function B_(i,t,e){let n=i.name,s=n.length;for(xh.lastIndex=0;;){let r=xh.exec(n),o=xh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fd(e,c===void 0?new yh(a,i,t):new Mh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Sh(a),Fd(e,d)),e=d}}}var Js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);B_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Od(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var z_=37297,H_=0;function k_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Bd=new Wt;function G_(i){te._getMatrix(Bd,te.workingColorSpace,i);let t=`mat3( ${Bd.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case yr:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+k_(i.getShaderSource(t),a)}else return r}function V_(i,t){let e=G_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var W_={[ro]:"Linear",[oo]:"Reinhard",[ao]:"Cineon",[ns]:"ACESFilmic",[co]:"AgX",[ho]:"Neutral",[lo]:"Custom"};function X_(i,t){let e=W_[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ll=new L;function q_(){te.getLuminanceCoefficients(Ll);let i=Ll.x.toFixed(4),t=Ll.y.toFixed(4),e=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function Z_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function yo(i){return i!==""}function Hd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function kd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(i){return i.replace(J_,K_)}function K_(i,t){let e=Jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return bh(e)}var Q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(i){return i.replace(Q_,j_)}function j_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var tx={[so]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function ex(i){return tx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nx={[Zs]:"ENVMAP_MODE_REFRACTION"};function ix(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sx={[th]:"ENVMAP_BLENDING_MULTIPLY",[ed]:"ENVMAP_BLENDING_MIX",[nd]:"ENVMAP_BLENDING_ADD"};function rx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sx[i.combine]||"ENVMAP_BLENDING_NONE"}function ox(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ex(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ix(e),d=rx(e),f=Y_(e),u=Z_(r),g=s.createProgram(),y,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(yo).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(yo).join(`
`),p.length>0&&(p+=`
`)):(y=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),p=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?X_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,V_("linearToOutputTexel",e.outputColorSpace),q_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yo).join(`
`)),o=bh(o),o=Hd(o,e),o=kd(o,e),a=bh(a),a=Hd(a,e),a=kd(a,e),o=Gd(o),a=Gd(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=m+y+o,M=m+p+a,v=Od(s,s.VERTEX_SHADER,_),w=Od(s,s.FRAGMENT_SHADER,M);s.attachShader(g,v),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(A){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(g)||"",N=s.getShaderInfoLog(v)||"",O=s.getShaderInfoLog(w)||"",I=P.trim(),B=N.trim(),H=O.trim(),z=!0,J=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,w);else{let k=zd(s,v,"vertex"),Y=zd(s,w,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+k+`
`+Y)}else I!==""?zt("WebGLProgram: Program Info Log:",I):(B===""||H==="")&&(J=!1);J&&(A.diagnostics={runnable:z,programLog:I,vertexShader:{log:B,prefix:y},fragmentShader:{log:H,prefix:p}})}s.deleteShader(v),s.deleteShader(w),x=new Js(s,g),S=$_(s,g)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(g,z_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=w,this}var ax=0,Eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Th(t),e.set(t,n)),n}},Th=class{constructor(t){this.id=ax++,this.code=t,this.usedTimes=0}};function lx(i){return i===Ni||i===_o||i===xo}function cx(i,t,e,n,s,r){let o=new Tr,a=new Eh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,S,C,A,P,N){let O=A.fog,I=P.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=t.get(x.envMap||B,H),J=f[x.type],k=n.precision;x.precision!==null&&(k=n.getMaxPrecision(x.precision),k!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",k,"instead."));let Y=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=Y!==void 0?Y.length:0,ut=0;I.morphAttributes.position!==void 0&&(ut=1),I.morphAttributes.normal!==void 0&&(ut=2),I.morphAttributes.color!==void 0&&(ut=3);let At,q,at,wt;if(J){let Mt=$n[J];At=Mt.vertexShader,q=Mt.fragmentShader}else{At=x.vertexShader,q=x.fragmentShader;let Mt=a.getVertexShaderStage(x),de=a.getFragmentShaderStage(x);a.update(x,Mt,de),at=Mt.id,wt=de.id}let Nt=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Ut=P.isInstancedMesh===!0,ye=P.isBatchedMesh===!0,Bt=!!x.map,Kt=!!x.matcap,ee=!!z,it=ee&&z.isPMREMTexture===!0,dt=!!x.aoMap,lt=!!x.lightMap,Tt=!!x.bumpMap&&x.wireframe===!1,vt=!!x.normalMap,qt=!!x.displacementMap,Lt=!!x.emissiveMap,ne=!!x.metalnessMap,ie=!!x.roughnessMap,ae=x.anisotropy>0,F=x.clearcoat>0,De=x.diffuseRoughness>0,jt=x.dispersion>0,ge=x.retroreflectivity>0,gt=x.iridescence>0,we=x.sheen>0,Ot=x.transmission>0,Gt=ae&&!!x.anisotropyMap,R=F&&!!x.clearcoatMap,b=F&&!!x.clearcoatNormalMap,V=F&&!!x.clearcoatRoughnessMap,st=De&&!!x.diffuseRoughnessMap,tt=gt&&!!x.iridescenceMap,ct=gt&&!!x.iridescenceThicknessMap,_t=we&&!!x.sheenColorMap,K=we&&!!x.sheenRoughnessMap,Q=!!x.specularMap,ft=!!x.specularColorMap,D=!!x.specularIntensityMap,j=Ot&&!!x.transmissionMap,$=Ot&&!!x.thicknessMap,pt=!!x.gradientMap,ot=!!x.alphaMap,ht=x.alphaTest>0,Dt=!!x.alphaHash,$t=!!x.extensions,rt=Yn;x.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(rt=i.toneMapping);let Ft=it?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Zt={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:At,fragmentShader:q,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:wt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:k,batching:ye,batchingColor:ye&&P._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&P.instanceColor!==null,instancingMorph:Ut&&P.morphTexture!==null,outputColorSpace:Nt===null?i.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Bt,matcap:Kt,envMap:ee,envMapMode:ee&&z.mapping,envMapPMREM:it,envMapMaxLod:it?Ft.length-1:null,envMapSize:it?Ft[0].width:null,aoMap:dt,lightMap:lt,bumpMap:Tt,normalMap:vt,displacementMap:qt,emissiveMap:Lt,normalMapObjectSpace:vt&&x.normalMapType===rd,normalMapTangentSpace:vt&&x.normalMapType===Cl,packedNormalMap:vt&&x.normalMapType===Cl&&lx(x.normalMap.format),metalnessMap:ne,roughnessMap:ie,anisotropy:ae,anisotropyMap:Gt,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:V,diffuseRoughness:De,diffuseRoughnessMap:st,dispersion:jt,retroreflection:ge,iridescence:gt,iridescenceMap:tt,iridescenceThicknessMap:ct,sheen:we,sheenColorMap:_t,sheenRoughnessMap:K,specularMap:Q,specularColorMap:ft,specularIntensityMap:D,transmission:Ot,transmissionMap:j,thicknessMap:$,gradientMap:pt,opaque:x.transparent===!1&&x.blending===Ys&&x.alphaToCoverage===!1,alphaMap:ot,alphaTest:ht,alphaHash:Dt,combine:x.combine,mapUv:Bt&&u(x.map.channel),aoMapUv:dt&&u(x.aoMap.channel),lightMapUv:lt&&u(x.lightMap.channel),bumpMapUv:Tt&&u(x.bumpMap.channel),normalMapUv:vt&&u(x.normalMap.channel),displacementMapUv:qt&&u(x.displacementMap.channel),emissiveMapUv:Lt&&u(x.emissiveMap.channel),metalnessMapUv:ne&&u(x.metalnessMap.channel),roughnessMapUv:ie&&u(x.roughnessMap.channel),anisotropyMapUv:Gt&&u(x.anisotropyMap.channel),clearcoatMapUv:R&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&u(x.sheenRoughnessMap.channel),specularMapUv:Q&&u(x.specularMap.channel),specularColorMapUv:ft&&u(x.specularColorMap.channel),specularIntensityMapUv:D&&u(x.specularIntensityMap.channel),transmissionMapUv:j&&u(x.transmissionMap.channel),thicknessMapUv:$&&u(x.thicknessMap.channel),alphaMapUv:ot&&u(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(vt||ae),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(Bt||ot),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&vt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ut,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.filter(Mt=>Mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:Bt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===le,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&te.getTransfer(x.emissiveMap.colorSpace)===le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===en,flipSided:x.side===Je,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:$t&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&x.extensions.multiDraw===!0||ye)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function y(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)S.push(C),S.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(S,x),m(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function m(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function _(x){let S=f[x.type],C;if(S){let A=$n[S];C=_i.clone(A.uniforms)}else C=x.uniforms;return C}function M(x,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new ox(i,S,x,s),c.push(C),h.set(S,C)),C}function v(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function E(){a.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:E}}function hx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ux(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Wd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,g,y,p,m){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:u,material:g,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:m},i[t]=_):(_.id=f.id,_.object=f,_.geometry=u,_.material=g,_.materialVariant=o(f),_.groupOrder=y,_.renderOrder=f.renderOrder,_.z=p,_.group=m),t++,_}function l(f,u,g,y,p,m,_){_.reversedDepth===!0&&(p=-p);let M=a(f,u,g,y,p,m);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):e.push(M)}function c(f,u,g,y,p,m){let _=a(f,u,g,y,p,m);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function h(f,u){e.length>1&&e.sort(f||ux),n.length>1&&n.sort(u||Wd),s.length>1&&s.sort(u||Wd)}function d(){for(let f=t,u=i.length;f<u;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function dx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Xd,i.set(n,[o])):s>=r.length?(o=new Xd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function fx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Et};break;case"SpotLight":e={position:new L,direction:new L,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function px(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var mx=0;function gx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _x(i){let t=new fx,e=px(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new ue,o=new ue;function a(c){let h=0,d=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let u=0,g=0,y=0,p=0,m=0,_=0,M=0,v=0,w=0,E=0,x=0,S=0,C=0,A=0;c.sort(gx);for(let N=0,O=c.length;N<O;N++){let I=c[N],B=I.color,H=I.intensity,z=I.distance,J=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ni?J=I.shadow.map.texture:J=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*H,d+=B.g*H,f+=B.b*H;else if(I.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(I.sh.coefficients[k],H);A++}else if(I.isSunLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,Z=e.get(I);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=J;let ut=Y.getViewportCount();for(let At=0;At<ut;At++)n.sunShadowMatrix[y+At]=Y.getMatrix(At),n.sunShadowCascade[y+At]=Y._cascadeData[At];y+=ut,g++}n.sun[u]=k,u++}else if(I.isDirectionalLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,Z=e.get(I);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=k,p++}else if(I.isSpotLight){let k=t.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(B).multiplyScalar(H),k.distance=z,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,n.spot[_]=k;let Y=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,Y.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[_]=Y.matrix,I.castShadow){let Z=e.get(I);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=J,x++}_++}else if(I.isRectAreaLight){let k=t.get(I);k.color.copy(B).multiplyScalar(H),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=k,M++}else if(I.isPointLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){let Y=I.shadow,Z=e.get(I);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,Z.shadowCameraNear=Y.camera.near,Z.shadowCameraFar=Y.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=I.shadow.matrix,E++}n.point[m]=k,m++}else if(I.isHemisphereLight){let k=t.get(I);k.skyColor.copy(I.color).multiplyScalar(H),k.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[v]=k,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let P=n.hash;(P.sunLength!==u||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==v||P.numSunShadows!==g||P.numDirectionalShadows!==w||P.numPointShadows!==E||P.numSpotShadows!==x||P.numSpotMaps!==S||P.numLightProbes!==A)&&(n.sun.length=u,n.directional.length=p,n.spot.length=_,n.rectArea.length=M,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,P.sunLength=u,P.directionalLength=p,P.pointLength=m,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=v,P.numSunShadows=g,P.numDirectionalShadows=w,P.numPointShadows=E,P.numSpotShadows=x,P.numSpotMaps=S,P.numLightProbes=A,n.version=mx++)}function l(c,h){let d=0,f=0,u=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let v=c[_];if(v.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(v.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let w=n.rectArea[y];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),y++}else if(v.isPointLight){let w=n.point[u];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function qd(i){let t=new _x(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function xx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new qd(i),t.set(s,[a])):r>=o.length?(a=new qd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Mx=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Sx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Yd=new ue,vo=new L,vh=new L;function bx(i,t,e){let n=new Ri,s=new et,r=new et,o=new Se,a=new Ca,l=new Pa,c={},h=e.maxTextureSize,d={[Di]:Je,[Je]:Di,[en]:en},f=new Fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:vx,fragmentShader:yx}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let g=new fe;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new nt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let m=this.type;this.render=function(E,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Ga&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=so);let C=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(fi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=m!==this.type;O&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=E.length;I<B;I++){let H=E[I],z=H.shadow;if(z===void 0){zt("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let J=z.getFrameExtents();s.multiply(J),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,z.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=k,z.map===null||O===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===qs){if(H.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Re(s.x,s.y,{format:Ni,type:Be,minFilter:ln,magFilter:ln,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new di(s.x,s.y,Cn),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=ci,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ye,z.map.depthTexture.magFilter=Ye}else H.isPointLight?(z.map=new Mo(s.x),z.map.depthTexture=new Lr(s.x,zn)):(z.map=new Re(s.x,s.y),z.map.depthTexture=new di(s.x,s.y,zn)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=ci,this.type===so?(z.map.depthTexture.compareFunction=k?ch:lh,z.map.depthTexture.minFilter=ln,z.map.depthTexture.magFilter=ln):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ye,z.map.depthTexture.magFilter=Ye);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let Y=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();H.isPointLight!==!0&&z.updateMatrices(H,S);let Z=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:S.layers;for(let ut=0;ut<Y;ut++){let At=z.getCamera(ut);if(H.isPointLight){let q=z.camera,at=z.matrix,wt=H.distance||q.far;wt!==q.far&&(q.far=wt,q.updateProjectionMatrix()),vo.setFromMatrixPosition(H.matrixWorld),q.position.copy(vo),vh.copy(q.position),vh.add(Mx[ut]),q.up.copy(Sx[ut]),q.lookAt(vh),q.updateMatrixWorld(),at.makeTranslation(-vo.x,-vo.y,-vo.z),Yd.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Yd,q.coordinateSystem,q.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,ut),i.clear();else{ut===0&&(i.setRenderTarget(z.map),i.clear());let q=z.getViewport(ut);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),N.viewport(o)}n=z.getFrustum(ut),v(x,S,At,H,Z,this.type)}z.isPointLightShadow!==!0&&this.type===qs&&_(z,S),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(C,A,P)};function _(E,x){let S=t.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new Re(s.x,s.y,{format:Ni,type:Be}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,S,f,y,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,S,u,y,null)}function M(E,x,S,C){let A=null,P=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)A=P;else if(A=S.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let N=A.uuid,O=x.uuid,I=c[N];I===void 0&&(I={},c[N]=I);let B=I[O];B===void 0&&(B=A.clone(),I[O]=B,x.addEventListener("dispose",w)),A=B}if(A.visible=x.visible,A.wireframe=x.wireframe,C===qs?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=i.properties.get(A);N.light=S}return A}function v(E,x,S,C,A,P){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===qs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let I=t.update(E),B=E.material;if(Array.isArray(B)){let H=I.groups;for(let z=0,J=H.length;z<J;z++){let k=H[z],Y=B[k.materialIndex];if(Y&&Y.visible){let Z=M(E,Y,C,P);E.onBeforeShadow(i,E,x,S,I,Z,k),i.renderBufferDirect(S,null,I,Z,E,k),E.onAfterShadow(i,E,x,S,I,Z,k)}}}else if(B.visible){let H=M(E,B,C,P);E.onBeforeShadow(i,E,x,S,I,H,null),i.renderBufferDirect(S,null,I,H,E,null),E.onAfterShadow(i,E,x,S,I,H,null)}}let O=E.children;for(let I=0,B=O.length;I<B;I++)v(O[I],x,S,C,A,P)}function w(E){E.target.removeEventListener("dispose",w);for(let S in c){let C=c[S],A=E.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function Ex(i,t){function e(){let D=!1,j=new Se,$=null,pt=new Se(0,0,0,0);return{setMask:function(ot){$!==ot&&!D&&(i.colorMask(ot,ot,ot,ot),$=ot)},setLocked:function(ot){D=ot},setClear:function(ot,ht,Dt,$t,rt){rt===!0&&(ot*=$t,ht*=$t,Dt*=$t),j.set(ot,ht,Dt,$t),pt.equals(j)===!1&&(i.clearColor(ot,ht,Dt,$t),pt.copy(j))},reset:function(){D=!1,$=null,pt.set(-1,0,0,0)}}}function n(){let D=!1,j=!1,$=null,pt=null,ot=null;return{setReversed:function(ht){if(j!==ht){let Dt=t.get("EXT_clip_control");ht?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),j=ht;let $t=ot;ot=null,this.setClear($t)}},getReversed:function(){return j},setTest:function(ht){ht?yt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(ht){$!==ht&&!D&&(i.depthMask(ht),$=ht)},setFunc:function(ht){if(j&&(ht=md[ht]),pt!==ht){switch(ht){case ha:i.depthFunc(i.NEVER);break;case ua:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case pa:i.depthFunc(i.GEQUAL);break;case ma:i.depthFunc(i.GREATER);break;case ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=ht}},setLocked:function(ht){D=ht},setClear:function(ht){ot!==ht&&(ot=ht,j&&(ht=1-ht),i.clearDepth(ht))},reset:function(){D=!1,$=null,pt=null,ot=null,j=!1}}}function s(){let D=!1,j=null,$=null,pt=null,ot=null,ht=null,Dt=null,$t=null,rt=null;return{setTest:function(Ft){D||(Ft?yt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Ft){j!==Ft&&!D&&(i.stencilMask(Ft),j=Ft)},setFunc:function(Ft,Zt,Mt){($!==Ft||pt!==Zt||ot!==Mt)&&(i.stencilFunc(Ft,Zt,Mt),$=Ft,pt=Zt,ot=Mt)},setOp:function(Ft,Zt,Mt){(ht!==Ft||Dt!==Zt||$t!==Mt)&&(i.stencilOp(Ft,Zt,Mt),ht=Ft,Dt=Zt,$t=Mt)},setLocked:function(Ft){D=Ft},setClear:function(Ft){rt!==Ft&&(i.clearStencil(Ft),rt=Ft)},reset:function(){D=!1,j=null,$=null,pt=null,ot=null,ht=null,Dt=null,$t=null,rt=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,g=[],y=null,p=!1,m=null,_=null,M=null,v=null,w=null,E=null,x=null,S=new Et(0,0,0),C=0,A=!1,P=null,N=null,O=null,I=null,B=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,J=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=J>=2);let Y=null,Z={},ut=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),q=new Se().fromArray(ut),at=new Se().fromArray(At);function wt(D,j,$,pt){let ot=new Uint8Array(4),ht=i.createTexture();i.bindTexture(D,ht),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<$;Dt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(j+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return ht}let Nt={};Nt[i.TEXTURE_2D]=wt(i.TEXTURE_2D,i.TEXTURE_2D,1),Nt[i.TEXTURE_CUBE_MAP]=wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[i.TEXTURE_2D_ARRAY]=wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Nt[i.TEXTURE_3D]=wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),yt(i.DEPTH_TEST),o.setFunc(Is),Tt(!1),vt($c),yt(i.CULL_FACE),dt(fi);function yt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ut(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function ye(D,j){return f[D]!==j?(i.bindFramebuffer(D,j),f[D]=j,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=j),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Bt(D,j){let $=g,pt=!1;if(D){$=u.get(j),$===void 0&&($=[],u.set(j,$));let ot=D.textures;if($.length!==ot.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Dt=ot.length;ht<Dt;ht++)$[ht]=i.COLOR_ATTACHMENT0+ht;$.length=ot.length,pt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,pt=!0);pt&&i.drawBuffers($)}function Kt(D){return y!==D?(i.useProgram(D),y=D,!0):!1}let ee={[es]:i.FUNC_ADD,[Bu]:i.FUNC_SUBTRACT,[zu]:i.FUNC_REVERSE_SUBTRACT};ee[Hu]=i.MIN,ee[ku]=i.MAX;let it={[Gu]:i.ZERO,[Vu]:i.ONE,[Wu]:i.SRC_COLOR,[Qc]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[Zu]:i.DST_COLOR,[qu]:i.DST_ALPHA,[Xu]:i.ONE_MINUS_SRC_COLOR,[jc]:i.ONE_MINUS_SRC_ALPHA,[$u]:i.ONE_MINUS_DST_COLOR,[Yu]:i.ONE_MINUS_DST_ALPHA,[Ku]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[td]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(D,j,$,pt,ot,ht,Dt,$t,rt,Ft){if(D===fi){p===!0&&(Ut(i.BLEND),p=!1);return}if(p===!1&&(yt(i.BLEND),p=!0),D!==Ou){if(D!==m||Ft!==A){if((_!==es||w!==es)&&(i.blendEquation(i.FUNC_ADD),_=es,w=es),Ft)switch(D){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFunc(i.ONE,i.ONE);break;case Jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",D);break}else switch(D){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jc:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kc:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",D);break}M=null,v=null,E=null,x=null,S.set(0,0,0),C=0,m=D,A=Ft}return}ot=ot||j,ht=ht||$,Dt=Dt||pt,(j!==_||ot!==w)&&(i.blendEquationSeparate(ee[j],ee[ot]),_=j,w=ot),($!==M||pt!==v||ht!==E||Dt!==x)&&(i.blendFuncSeparate(it[$],it[pt],it[ht],it[Dt]),M=$,v=pt,E=ht,x=Dt),($t.equals(S)===!1||rt!==C)&&(i.blendColor($t.r,$t.g,$t.b,rt),S.copy($t),C=rt),m=D,A=!1}function lt(D,j){D.side===en?Ut(i.CULL_FACE):yt(i.CULL_FACE);let $=D.side===Je;j&&($=!$),Tt($),D.blending===Ys&&D.transparent===!1?dt(fi):dt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let pt=D.stencilWrite;a.setTest(pt),pt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(D){P!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),P=D)}function vt(D){D!==Uu?(yt(i.CULL_FACE),D!==N&&(D===$c?i.cullFace(i.BACK):D===Fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),N=D}function qt(D){D!==O&&(z&&i.lineWidth(D),O=D)}function Lt(D,j,$){D?(yt(i.POLYGON_OFFSET_FILL),(I!==j||B!==$)&&(I=j,B=$,o.getReversed()&&(j=-j,$=-$),i.polygonOffset(j,$))):Ut(i.POLYGON_OFFSET_FILL)}function ne(D){D?yt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function ie(D){D===void 0&&(D=i.TEXTURE0+H-1),Y!==D&&(i.activeTexture(D),Y=D)}function ae(D,j,$){$===void 0&&(Y===null?$=i.TEXTURE0+H-1:$=Y);let pt=Z[$];pt===void 0&&(pt={type:void 0,texture:void 0},Z[$]=pt),(pt.type!==D||pt.texture!==j)&&(Y!==$&&(i.activeTexture($),Y=$),i.bindTexture(D,j||Nt[D]),pt.type=D,pt.texture=j)}function F(){let D=Z[Y];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function De(){try{i.compressedTexImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function jt(){try{i.compressedTexImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function ge(){try{i.texSubImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function gt(){try{i.texSubImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function we(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function Gt(){try{i.texStorage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function R(){try{i.texStorage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function b(){try{i.texImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function V(){try{i.texImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function st(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function tt(D,j){d[D]!==j&&(i.pixelStorei(D,j),d[D]=j)}function ct(D){q.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),q.copy(D))}function _t(D){at.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),at.copy(D))}function K(D,j){let $=c.get(j);$===void 0&&($=new WeakMap,c.set(j,$));let pt=$.get(D);pt===void 0&&(pt=i.getUniformBlockIndex(j,D.name),i.uniformBlockBinding(j,pt,pt),$.set(D,pt))}function Q(D,j,$){let ot=c.get(j).get(D);l[ot]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,ot,$),l[ot]=$)}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Y=null,Z={},f={},l={},u=new WeakMap,g=[],y=null,p=!1,m=null,_=null,M=null,v=null,w=null,E=null,x=null,S=new Et(0,0,0),C=0,A=!1,P=null,N=null,O=null,I=null,B=null,q.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:yt,disable:Ut,bindFramebuffer:ye,drawBuffers:Bt,useProgram:Kt,setBlending:dt,setMaterial:lt,setFlipSided:Tt,setCullFace:vt,setLineWidth:qt,setPolygonOffset:Lt,setScissorTest:ne,activeTexture:ie,bindTexture:ae,unbindTexture:F,compressedTexImage2D:De,compressedTexImage3D:jt,texImage2D:b,texImage3D:V,pixelStorei:tt,getParameter:st,updateUBOMapping:K,uniformBlockBinding:Q,texStorage2D:Gt,texStorage3D:R,texSubImage2D:ge,texSubImage3D:gt,compressedTexSubImage2D:we,compressedTexSubImage3D:Ot,scissor:ct,viewport:_t,reset:ft}}function Tx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,d=new Set,f,u=new WeakMap,g=new Set,y=new FinalizationRegistry(R=>g.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return p?new OffscreenCanvas(R,b):Mr("canvas")}function _(R,b,V){let st=1,tt=Gt(R);if((tt.width>V||tt.height>V)&&(st=V/Math.max(tt.width,tt.height)),st<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ct=Math.floor(st*tt.width),_t=Math.floor(st*tt.height);f===void 0&&(f=m(ct,_t));let K=b?m(ct,_t):f;return K.width=ct,K.height=_t,K.getContext("2d").drawImage(R,0,0,ct,_t),zt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ct+"x"+_t+")."),K}else return"data"in R&&zt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function M(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,b,V,st,tt,ct=!1){if(R!==null){if(i[R]!==void 0)return i[R];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let _t;st&&(_t=t.get("EXT_texture_norm16"),_t||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8),V===i.UNSIGNED_SHORT&&_t&&(K=_t.R16_EXT),V===i.SHORT&&_t&&(K=_t.R16_SNORM_EXT)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),b===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8),V===i.UNSIGNED_SHORT&&_t&&(K=_t.RG16_EXT),V===i.SHORT&&_t&&(K=_t.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),b===i.RGB&&(V===i.UNSIGNED_SHORT&&_t&&(K=_t.RGB16_EXT),V===i.SHORT&&_t&&(K=_t.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),b===i.RGBA){let Q=ct?yr:te.getTransfer(tt);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=Q===le?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&_t&&(K=_t.RGBA16_EXT),V===i.SHORT&&_t&&(K=_t.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(R,b){let V;return R?b===null||b===zn||b===ss?V=i.DEPTH24_STENCIL8:b===Cn?V=i.DEPTH32F_STENCIL8:b===$s&&(V=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===zn||b===ss?V=i.DEPTH_COMPONENT24:b===Cn?V=i.DEPTH_COMPONENT32F:b===$s&&(V=i.DEPTH_COMPONENT16),V}function S(R,b){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ye&&R.minFilter!==ln?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){let b=new WeakRef(R);n.get(R).__ref=b,g.add(b),y.register(R,b,b)}function A(R){let b=n.get(R).__ref;b!==void 0&&(g.delete(b),y.unregister(b))}function P(R){O(R.target)}function N(R){I(R.target)}function O(R){R.removeEventListener("dispose",P),A(R),H(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function I(R){R.removeEventListener("dispose",N),A(R),J(R)}function B(){for(let R of g){let b=R.deref();b!==void 0&&(b.isRenderTarget===!0?I(b):O(b))}g.clear(),d.clear()}function H(R){let b=n.get(R);if(b.__webglInit===void 0)return;let V=R.source,st=u.get(V);if(st){let tt=st[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&z(R),Object.keys(st).length===0&&u.delete(V)}n.remove(R)}function z(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let V=R.source,st=u.get(V);delete st[b.__cacheKey],o.memory.textures--}function J(R){let b=n.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();let V=R.depthTexture;if(V&&V.renderTarget===R&&O(V),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let ct=0;ct<b.__webglFramebuffer[tt].length;ct++)i.deleteFramebuffer(b.__webglFramebuffer[tt][ct]);else i.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[tt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let st=R.textures;for(let tt=0,ct=st.length;tt<ct;tt++){let _t=n.get(st[tt]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),o.memory.textures--),n.remove(st[tt])}n.remove(R)}let k=0;function Y(){k=0}function Z(){return k}function ut(R){k=R}function At(){let R=k;return R>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,R}function q(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function at(R,b){let V=n.get(R);if(R.isVideoTexture&&we(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let st=R.image;if(st===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(V,R,b);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function wt(R,b){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){lt(V,R,b);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function Nt(R,b){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){lt(V,R,b);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function yt(R,b){let V=n.get(R);if(R.version>0&&V.__version!==R.version){Tt(V,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}let Ut={[Ls]:i.REPEAT,[Pe]:i.CLAMP_TO_EDGE,[_a]:i.MIRRORED_REPEAT},ye={[Ye]:i.NEAREST,[id]:i.NEAREST_MIPMAP_NEAREST,[uo]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Xa]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},Bt={[ad]:i.NEVER,[hh]:i.ALWAYS,[ld]:i.LESS,[lh]:i.LEQUAL,[cd]:i.EQUAL,[ch]:i.GEQUAL,[hd]:i.GREATER,[ud]:i.NOTEQUAL};function Kt(R,b){if(b.type===Cn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ln||b.magFilter===Xa||b.magFilter===uo||b.magFilter===pi||b.minFilter===ln||b.minFilter===Xa||b.minFilter===uo||b.minFilter===pi)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Ut[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Ut[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Ut[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ye[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Bt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ye||b.minFilter!==uo&&b.minFilter!==pi||b.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ee(R,b){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P),C(b));let st=b.source,tt=u.get(st);tt===void 0&&(tt={},u.set(st,tt));let ct=q(b);if(ct!==R.__cacheKey){tt[ct]===void 0&&(tt[ct]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),tt[ct].usedTimes++;let _t=tt[R.__cacheKey];_t!==void 0&&(tt[R.__cacheKey].usedTimes--,_t.usedTimes===0&&z(b)),R.__cacheKey=ct,R.__webglTexture=tt[ct].texture}return V}function it(R,b,V){return Math.floor(Math.floor(R/V)/b)}function dt(R,b,V,st){let ct=R.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,V,st,b.data);else{ct.sort((D,j)=>D.start-j.start);let _t=0;for(let D=1;D<ct.length;D++){let j=ct[_t],$=ct[D],pt=j.start+j.count,ot=it($.start,b.width,4),ht=it(j.start,b.width,4);$.start<=pt+1&&ot===ht&&it($.start+$.count-1,b.width,4)===ot?j.count=Math.max(j.count,$.start+$.count-j.start):(++_t,ct[_t]=$)}ct.length=_t+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let D=0,j=ct.length;D<j;D++){let $=ct[D],pt=Math.floor($.start/4),ot=Math.ceil($.count/4),ht=pt%b.width,Dt=Math.floor(pt/b.width),$t=ot,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(i.TEXTURE_2D,0,ht,Dt,$t,rt,V,st,b.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function lt(R,b,V){let st=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=i.TEXTURE_3D);let tt=ee(R,b),ct=b.source;e.bindTexture(st,R.__webglTexture,i.TEXTURE0+V);let _t=n.get(ct);if(ct.version!==_t.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let rt=te.getPrimaries(te.workingColorSpace),Ft=b.colorSpace===gi?null:te.getPrimaries(b.colorSpace),Zt=b.colorSpace===gi||rt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let Q=_(b.image,!1,s.maxTextureSize);Q=Ot(b,Q);let ft=r.convert(b.format,b.colorSpace),D=r.convert(b.type),j=E(b.internalFormat,ft,D,b.normalized,b.colorSpace,b.isVideoTexture);Kt(st,b);let $,pt=b.mipmaps,ot=b.isVideoTexture!==!0,ht=_t.__version===void 0||tt===!0,Dt=ct.dataReady,$t=S(b,Q);if(b.isDepthTexture)j=x(b.format===mi,b.type),ht&&(ot?e.texStorage2D(i.TEXTURE_2D,1,j,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,j,Q.width,Q.height,0,ft,D,null));else if(b.isDataTexture)if(pt.length>0){ot&&ht&&e.texStorage2D(i.TEXTURE_2D,$t,j,pt[0].width,pt[0].height);for(let rt=0,Ft=pt.length;rt<Ft;rt++)$=pt[rt],ot?Dt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,$.width,$.height,ft,D,$.data):e.texImage2D(i.TEXTURE_2D,rt,j,$.width,$.height,0,ft,D,$.data);b.generateMipmaps=!1}else ot?(ht&&e.texStorage2D(i.TEXTURE_2D,$t,j,Q.width,Q.height),Dt&&dt(b,Q,ft,D)):e.texImage2D(i.TEXTURE_2D,0,j,Q.width,Q.height,0,ft,D,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ot&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$t,j,pt[0].width,pt[0].height,Q.depth);for(let rt=0,Ft=pt.length;rt<Ft;rt++)if($=pt[rt],b.format!==Hn)if(ft!==null)if(ot){if(Dt)if(b.layerUpdates.size>0){let Zt=_h($.width,$.height,b.format,b.type);for(let Mt of b.layerUpdates){let de=$.data.subarray(Mt*Zt/$.data.BYTES_PER_ELEMENT,(Mt+1)*Zt/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Mt,$.width,$.height,1,ft,de)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,$.width,$.height,Q.depth,ft,$.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,j,$.width,$.height,Q.depth,0,$.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,$.width,$.height,Q.depth,ft,D,$.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,j,$.width,$.height,Q.depth,0,ft,D,$.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ot&&ht&&e.texStorage2D(i.TEXTURE_2D,$t,j,pt[0].width,pt[0].height);for(let rt=0,Ft=pt.length;rt<Ft;rt++)$=pt[rt],b.format!==Hn?ft!==null?ot?Dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,$.width,$.height,ft,$.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,j,$.width,$.height,0,$.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Dt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,$.width,$.height,ft,D,$.data):e.texImage2D(i.TEXTURE_2D,rt,j,$.width,$.height,0,ft,D,$.data)}else if(b.isDataArrayTexture)if(ot){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$t,j,Q.width,Q.height,Q.depth),Dt)if(b.layerUpdates.size>0){let rt=_h(Q.width,Q.height,b.format,b.type);for(let Ft of b.layerUpdates){let Zt=Q.data.subarray(Ft*rt/Q.data.BYTES_PER_ELEMENT,(Ft+1)*rt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ft,Q.width,Q.height,1,ft,D,Zt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,D,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,j,Q.width,Q.height,Q.depth,0,ft,D,Q.data);else if(b.isData3DTexture)ot?(ht&&e.texStorage3D(i.TEXTURE_3D,$t,j,Q.width,Q.height,Q.depth),Dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,D,Q.data)):e.texImage3D(i.TEXTURE_3D,0,j,Q.width,Q.height,Q.depth,0,ft,D,Q.data);else if(b.isFramebufferTexture){if(ht)if(ot)e.texStorage2D(i.TEXTURE_2D,$t,j,Q.width,Q.height);else{let rt=Q.width,Ft=Q.height;for(let Zt=0;Zt<$t;Zt++)e.texImage2D(i.TEXTURE_2D,Zt,j,rt,Ft,0,ft,D,null),rt>>=1,Ft>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),Q.parentNode!==rt){rt.appendChild(Q),d.add(b),rt.onpaint=Ft=>{let Zt=Ft.changedElements;for(let Mt of d)Zt.includes(Mt.image)&&(Mt.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Zt=i.RGBA,Mt=i.RGBA,de=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Zt,Mt,de,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ot&&ht){let rt=Gt(pt[0]);e.texStorage2D(i.TEXTURE_2D,$t,j,rt.width,rt.height)}for(let rt=0,Ft=pt.length;rt<Ft;rt++)$=pt[rt],ot?Dt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,ft,D,$):e.texImage2D(i.TEXTURE_2D,rt,j,ft,D,$);b.generateMipmaps=!1}else if(ot){if(ht){let rt=Gt(Q);e.texStorage2D(i.TEXTURE_2D,$t,j,rt.width,rt.height)}Dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,D,Q)}else e.texImage2D(i.TEXTURE_2D,0,j,ft,D,Q);M(b)&&b.mipmapsAutoUpdate===!0&&v(st),_t.__version=ct.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Tt(R,b,V){if(b.image.length!==6)return;let st=ee(R,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let ct=n.get(tt);if(tt.version!==ct.__version||st===!0){e.activeTexture(i.TEXTURE0+V);let _t=te.getPrimaries(te.workingColorSpace),K=b.colorSpace===gi?null:te.getPrimaries(b.colorSpace),Q=b.colorSpace===gi||_t===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ft=b.isCompressedTexture||b.image[0].isCompressedTexture,D=b.image[0]&&b.image[0].isDataTexture,j=[];for(let Mt=0;Mt<6;Mt++)!ft&&!D?j[Mt]=_(b.image[Mt],!0,s.maxCubemapSize):j[Mt]=D?b.image[Mt].image:b.image[Mt],j[Mt]=Ot(b,j[Mt]);let $=j[0],pt=r.convert(b.format,b.colorSpace),ot=r.convert(b.type),ht=E(b.internalFormat,pt,ot,b.normalized,b.colorSpace),Dt=b.isVideoTexture!==!0,$t=ct.__version===void 0||st===!0,rt=tt.dataReady,Ft=S(b,$);Kt(i.TEXTURE_CUBE_MAP,b);let Zt;if(b.isDepthTexture){if(ht=x(b.format===mi,b.type),$t)if(Dt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ht,$.width,$.height);else for(let Mt=0;Mt<6;Mt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ht,$.width,$.height,0,pt,ot,null)}else if(ft){Dt&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ht,$.width,$.height);for(let Mt=0;Mt<6;Mt++){Zt=j[Mt].mipmaps;for(let de=0;de<Zt.length;de++){let Ge=Zt[de];b.format!==Hn?pt!==null?Dt?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de,0,0,Ge.width,Ge.height,pt,Ge.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de,ht,Ge.width,Ge.height,0,Ge.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de,0,0,Ge.width,Ge.height,pt,ot,Ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de,ht,Ge.width,Ge.height,0,pt,ot,Ge.data)}}}else{if(Zt=b.mipmaps,Dt&&$t){Zt.length>0&&Ft++;let Mt=Gt(j[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ht,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(D){Dt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,j[Mt].width,j[Mt].height,pt,ot,j[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ht,j[Mt].width,j[Mt].height,0,pt,ot,j[Mt].data);for(let de=0;de<Zt.length;de++){let vi=Zt[de].image[Mt].image;Dt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de+1,0,0,vi.width,vi.height,pt,ot,vi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de+1,ht,vi.width,vi.height,0,pt,ot,vi.data)}}else{Dt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,pt,ot,j[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ht,pt,ot,j[Mt]);for(let de=0;de<Zt.length;de++){let Ge=Zt[de];Dt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de+1,0,0,pt,ot,Ge.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,de+1,ht,pt,ot,Ge.image[Mt])}}}M(b)&&b.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),ct.__version=tt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function vt(R,b,V,st,tt,ct){let _t=r.convert(V.format,V.colorSpace),K=r.convert(V.type),Q=E(V.internalFormat,_t,K,V.normalized,V.colorSpace),ft=n.get(b),D=n.get(V);if(D.__renderTarget=b,!ft.__hasExternalTextures){let j=Math.max(1,b.width>>ct),$=Math.max(1,b.height>>ct);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,ct,Q,j,$,b.depth,0,_t,K,null):e.texImage2D(tt,ct,Q,j,$,0,_t,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),gt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,tt,D.__webglTexture,0,ge(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,tt,D.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(R,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let st=b.depthTexture,tt=st&&st.isDepthTexture?st.type:null,ct=x(b.stencilBuffer,tt),_t=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(b),ct,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(b),ct,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ct,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,R)}else{let st=b.textures;for(let tt=0;tt<st.length;tt++){let ct=st[tt],_t=r.convert(ct.format,ct.colorSpace),K=r.convert(ct.type),Q=E(ct.internalFormat,_t,K,ct.normalized,ct.colorSpace);gt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(b),Q,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(b),Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(R,b,V){let st=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(b.depthTexture);tt.__renderTarget=b;let ct=st?b.depthTexture.image[0]:b.depthTexture.image;(!tt.__webglTexture||ct.width!==b.width||ct.height!==b.height)&&(ct.width=b.width,ct.height=b.height,b.depthTexture.needsUpdate=!0),st?yt(b.depthTexture,0):at(b.depthTexture,0);let _t=tt.__webglTexture,K=ge(b),Q=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,ft=b.depthTexture.format===mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ci)gt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,Q,_t,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,ft,Q,_t,0);else if(b.depthTexture.format===mi)gt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,Q,_t,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,ft,Q,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(R){let b=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let st=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),st){let tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",tt)};st.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=st}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(V)for(let st=0;st<6;st++)Lt(b.__webglFramebuffer[st],R,st);else R.texture.mipmaps.length>0?Lt(b.__webglFramebuffer[0],R,0):Lt(b.__webglFramebuffer,R,0);else if(V){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=i.createRenderbuffer(),qt(b.__webglDepthbuffer[st],R,!1);else{let tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ct)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),qt(b.__webglDepthbuffer,R,!1);else{let tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(R,b,V){let st=n.get(R);b!==void 0&&vt(st.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ne(R)}function ae(R){let b=R.texture,V=n.get(R),st=n.get(b);R.addEventListener("dispose",N),C(R);let tt=R.textures,ct=R.isWebGLCubeRenderTarget===!0,_t=tt.length>1;if(_t||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=b.version,o.memory.textures++),ct){V.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps.length>0){V.__webglFramebuffer[K]=[];for(let Q=0;Q<b.mipmaps.length;Q++)V.__webglFramebuffer[K][Q]=i.createFramebuffer()}else V.__webglFramebuffer[K]=i.createFramebuffer()}else{if(b.mipmaps.length>0){V.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)V.__webglFramebuffer[K]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(_t)for(let K=0,Q=tt.length;K<Q;K++){let ft=n.get(tt[K]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&gt(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<tt.length;K++){let Q=tt[K];V.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[K]);let ft=r.convert(Q.format,Q.colorSpace),D=r.convert(Q.type),j=E(Q.internalFormat,ft,D,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),$=ge(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,j,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,V.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)vt(V.__webglFramebuffer[K][Q],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else vt(V.__webglFramebuffer[K],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);M(b)?v(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let K=0,Q=tt.length;K<Q;K++){let ft=tt[K],D=n.get(ft),j=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,D.__webglTexture),Kt(j,ft),vt(V.__webglFramebuffer,R,ft,i.COLOR_ATTACHMENT0+K,j,0),M(ft)&&v(j)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,st.__webglTexture),Kt(K,b),b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)vt(V.__webglFramebuffer[Q],R,b,i.COLOR_ATTACHMENT0,K,Q);else vt(V.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,K,0);M(b)?v(K):b.mipmaps.length>0&&i.texParameteri(K,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&ne(R)}function F(R){let b=R.textures;for(let V=0,st=b.length;V<st;V++){let tt=b[V];if(M(tt)&&tt.mipmapsAutoUpdate===!0){let ct=w(R),_t=n.get(tt).__webglTexture;e.bindTexture(ct,_t),v(ct),e.unbindTexture()}}}let De=[];function jt(R){if(R.samples>0){if(gt(R)===!1){let b=R.textures,V=R.width,st=R.height,tt=i.COLOR_BUFFER_BIT,ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(R),K=b.length>1;if(K)for(let ft=0;ft<b.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ft=0;ft<b.length;ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);let D=n.get(b[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,V,st,0,0,V,st,tt,i.NEAREST),l===!0&&(De.length=0,De.push(i.COLOR_ATTACHMENT0+ft),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&De.push(ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,De))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ft=0;ft<b.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);let D=n.get(b[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ge(R){return Math.min(s.maxSamples,R.samples)}function gt(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function we(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Ot(R,b){let V=R.colorSpace,st=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Zi&&V!==gi&&(te.getTransfer(V)===le?(st!==Hn||tt!==pn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",V)),b}function Gt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=At,this.resetTextureUnits=Y,this.getTextureUnits=Z,this.setTextureUnits=ut,this.setTexture2D=at,this.setTexture2DArray=wt,this.setTexture3D=Nt,this.setTextureCube=yt,this.rebindTextures=ie,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=gt,this.dispose=B}function wx(i,t){function e(n,s=gi){let r,o=te.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nh)return i.BYTE;if(n===ih)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Be)return i.HALF_FLOAT;if(n===oh)return i.ALPHA;if(n===ah)return i.RGB;if(n===Hn)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===$a)return i.RED;if(n===Ja)return i.RED_INTEGER;if(n===Ni)return i.RG;if(n===Ka)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===rl||n===ol||n===al||n===_o||n===ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===il||n===sl)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ol)return r.COMPRESSED_R11_EAC;if(n===al)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_o)return r.COMPRESSED_RG11_EAC;if(n===ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_l)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ml)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===El||n===Tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bl)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===Al||n===xo||n===Rl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Dr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fe({vertexShader:Ax,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends Wn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null,y=typeof XRWebGLBinding<"u",p=new wh,m={},_=e.getContextAttributes(),M=null,v=null,w=[],E=[],x=new et,S=null,C=null,A=new qe;A.viewport=new Se;let P=new qe;P.viewport=new Se;let N=[A,P],O=new ka,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let at=w[q];return at===void 0&&(at=new Fs,w[q]=at),at.getTargetRaySpace()},this.getControllerGrip=function(q){let at=w[q];return at===void 0&&(at=new Fs,w[q]=at),at.getGripSpace()},this.getHand=function(q){let at=w[q];return at===void 0&&(at=new Fs,w[q]=at),at.getHandSpace()};function H(q){let at=E.indexOf(q.inputSource);if(at===-1)return;let wt=w[at];wt!==void 0&&(wt.update(q.inputSource,q.frame,c||o),wt.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",J);for(let q=0;q<w.length;q++){let at=E[q];at!==null&&(E[q]=null,w[q].disconnect(at))}I=null,B=null,p.reset();for(let q in m)delete m[q];if(t.setRenderTarget(M),u=null,f=null,d=null,s=null,v=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(x.width,x.height,!1),C!==null){let q=C.camera;q.fov=C.fov,q.zoom=C.zoom,q.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",z),s.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Nt=null,yt=null;_.depth&&(yt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=_.stencil?mi:ci,Nt=_.stencil?ss:zn);let Ut={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ut),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Re(f.textureWidth,f.textureHeight,{format:Hn,type:pn,depthTexture:new di(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let wt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Re(u.framebufferWidth,u.framebufferHeight,{format:Hn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),At.setContext(s),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function J(q){for(let at=0;at<q.removed.length;at++){let wt=q.removed[at],Nt=E.indexOf(wt);Nt>=0&&(E[Nt]=null,w[Nt].disconnect(wt))}for(let at=0;at<q.added.length;at++){let wt=q.added[at],Nt=E.indexOf(wt);if(Nt===-1){for(let Ut=0;Ut<w.length;Ut++)if(Ut>=E.length){E.push(wt),Nt=Ut;break}else if(E[Ut]===null){E[Ut]=wt,Nt=Ut;break}if(Nt===-1)break}let yt=w[Nt];yt&&yt.connect(wt)}}function k(q,at){at===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(at.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let at=q.near,wt=q.far;p.texture!==null&&(p.depthNear>0&&(at=p.depthNear),p.depthFar>0&&(wt=p.depthFar)),O.near=P.near=A.near=at,O.far=P.far=A.far=wt,(I!==O.near||B!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,B=O.far),O.layers.mask=q.layers.mask|6,A.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;let Nt=q.parent,yt=O.cameras;k(O,Nt);for(let Ut=0;Ut<yt.length;Ut++)k(yt[Ut],Nt);O.projectionMatrix.copy(A.projectionMatrix),O.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&q.isPerspectiveCamera&&(C={camera:q,fov:q.fov,zoom:q.zoom}),Y(q,O,Nt)};function Y(q,at,wt){wt===null?q.matrix.copy(at.matrixWorld):(q.matrix.copy(wt.matrixWorld),q.matrix.invert(),q.matrix.multiply(at.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(at.projectionMatrix),q.projectionMatrixInverse.copy(at.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=br*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(q){return m[q]};let Z=null;function ut(q,at){if(h=at.getViewerPose(c||o),g=at,h!==null){let wt=h.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let Nt=!1;wt.length!==O.cameras.length&&(O.cameras.length=0,Nt=!0);for(let Bt=0;Bt<wt.length;Bt++){let Kt=wt[Bt],ee=null;if(u!==null)ee=u.getViewport(Kt);else{let dt=d.getViewSubImage(f,Kt);ee=dt.viewport,Bt===0&&(t.setRenderTargetTextures(v,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(v))}let it=N[Bt];it===void 0&&(it=new qe,it.layers.enable(Bt),it.viewport=new Se,N[Bt]=it),it.matrix.fromArray(Kt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Kt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ee.x,ee.y,ee.width,ee.height),Bt===0&&(O.matrix.copy(it.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Nt===!0&&O.cameras.push(it)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Bt=d.getDepthInformation(wt[0]);Bt&&Bt.isValid&&Bt.texture&&p.init(Bt,s.renderState)}if(yt&&yt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let Bt=0;Bt<wt.length;Bt++){let Kt=wt[Bt].camera;if(Kt){let ee=m[Kt];ee||(ee=new Dr,m[Kt]=ee);let it=d.getCameraImage(Kt);ee.sourceTexture=it}}}}for(let wt=0;wt<w.length;wt++){let Nt=E[wt],yt=w[wt];Nt!==null&&yt!==void 0&&yt.update(Nt,at,c||o)}Z&&Z(q,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}let At=new Zd;At.setAnimationLoop(ut),this.setAnimationLoop=function(q){Z=q},this.dispose=function(){}}},Cx=new ue,rf=new Wt;rf.set(-1,0,0,0,1,0,0,0,1);function Px(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ph(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,M,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&u(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,_,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Je&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Je&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=t.get(m),M=_.envMap,v=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(rf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,_){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Je&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ix(i,t,e,n){let s={},r={};function o(_,M){let v=M.program;n.uniformBlockBinding(_,v,s[_.id])}function a(_,M){let v=s[_.id];v===void 0&&(g(_),v=l(_),s[_.id]=v,_.addEventListener("dispose",p));let w=M.program;n.updateUBOMapping(_,w);let E=t.render.frame;r[_.id]!==E&&(c(_),r[_.id]=E)}function l(_){let M=i.createBuffer(),v=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,v,w),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(_){let M=s[_.id],v=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,x=v.length;E<x;E++){let S=v[E];if(Array.isArray(S))for(let C=0,A=S.length;C<A;C++)h(S[C],E,C,w);else h(S,E,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,M,v,w){if(f(_,M,v,w)===!0){let E=_.__offset,x=_.value;if(Array.isArray(x)){let S=0;for(let C=0;C<x.length;C++){let A=x[C],P=y(A,!0);d(A,_.__data,S),S+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,_.__data)}}function d(_,M,v){typeof _=="number"||typeof _=="boolean"?M[v]=_:_.isMatrix3?(M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-v),v):_.toArray(M,v)}function f(_,M,v,w){let E=_.value,x=M+"_"+v;if(Array.isArray(E)){w[x]===void 0&&(w[x]=[]);let S=w[x],C=!1;for(let A=0;A<E.length;A++)u(E[A],S,A)===!0&&(C=!0);return C}return u(E,w,x)}function u(_,M,v){if(M[v]===void 0)return typeof _=="number"||typeof _=="boolean"?M[v]=_:ArrayBuffer.isView(_)?M[v]=_.slice():M[v]=_.clone(),!0;{let w=M[v];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return M[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function g(_){let M=_.uniforms,v=0,w=16;for(let x=0,S=M.length;x<S;x++){let C=Array.isArray(M[x])?M[x]:[M[x]];for(let A=0,P=C.length;A<P;A++){let N=C[A],O=Array.isArray(N.value)?N.value:[N.value],I=Array.isArray(M[x])||Array.isArray(N.value),B=v;for(let z=0,J=O.length;z<J;z++){let k=O[z],Y=y(k,I),Z=v%w,ut=Z%Y.boundary,At=Z+ut;v+=ut,At!==0&&w-At<Y.storage&&(v+=w-At),z===0&&(B=v),v+=Y.storage}let H=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new H((v-B)/Float32Array.BYTES_PER_ELEMENT),N.__offset=B}}let E=v%w;return E>0&&(v+=w-E),_.__size=v,_.__cache={},this}function y(_,M){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(_){let M=_.target;M.removeEventListener("dispose",p),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:m}}var Lx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function Dx(){return Zn===null&&(Zn=new Pr(Lx,16,16,Ni,Be),Zn.name="DFG_LUT",Zn.minFilter=ln,Zn.magFilter=ln,Zn.wrapS=Pe,Zn.wrapT=Pe,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var Dl=class{constructor(t={}){let{canvas:e=dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=pn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=u,p=new Set([Qa,Ka,Ja]),m=new Set([pn,zn,$s,ss,Ya,Za]),_=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},w=null,E=null,x=[],S=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,N=null,O=null,I=null,B=null;this._outputColorSpace=Xe;let H=0,z=0,J=null,k=-1,Y=null,Z=new Se,ut=new Se,At=null,q=new Et(0),at=0,wt=e.width,Nt=e.height,yt=1,Ut=null,ye=null,Bt=new Se(0,0,wt,Nt),Kt=new Se(0,0,wt,Nt),ee=!1,it=new Ri,dt=new ba,lt=!1,Tt=!1,vt=new ue,qt=new L,Lt=new Se,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function ae(){return J===null?yt:1}let F=n;function De(T,U){return e.getContext(T,U)}let jt,ge,gt,we,Ot,Gt,R,b,V,st,tt,ct,_t,K,Q,ft,D,j,$,pt,ot,ht,Dt;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),F===null){let U="webgl2";if(F=De(U,T),F===null)throw De(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(T){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Ht("WebGLRenderer: "+T.message),T}function $t(){jt=new Wg(F),jt.init(),ot=new wx(F,jt),ge=new Dg(F,jt,t,ot),gt=new Ex(F,jt),ge.reversedDepthBuffer&&f&&gt.buffers.depth.setReversed(!0),O=F.createFramebuffer(),I=F.createFramebuffer(),B=F.createFramebuffer(),we=new Yg(F),Ot=new hx,Gt=new Tx(F,jt,gt,Ot,ge,ot,we),R=new Vg(A),b=new $p(F),ht=new Ig(F,b),V=new Xg(F,b,we,ht),st=new $g(F,V,b,ht,we),j=new Zg(F,ge,Gt),Q=new Ng(Ot),tt=new cx(A,R,jt,ge,ht,Q),ct=new Px(A,Ot),_t=new dx,K=new xx(jt),D=new Pg(A,R,gt,st,g,l),ft=new bx(A,st,ge),Dt=new Ix(F,we,ge,gt),$=new Lg(F,jt,we),pt=new qg(F,jt,we),we.programs=tt.programs,A.capabilities=ge,A.extensions=jt,A.properties=Ot,A.renderLists=_t,A.shadowMap=ft,A.state=gt,A.info=we}y!==pn&&(C=new Kg(y,e.width,e.height,a,s,r));let rt=new Ah(A,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=jt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=jt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(T){T!==void 0&&(yt=T,this.setSize(wt,Nt,!1))},this.getSize=function(T){return T.set(wt,Nt)},this.setSize=function(T,U,X=!0){if(rt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=T,Nt=U,e.width=Math.floor(T*yt),e.height=Math.floor(U*yt),X===!0&&(e.style.width=T+"px",e.style.height=U+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(wt*yt,Nt*yt).floor()},this.setDrawingBufferSize=function(T,U,X){wt=T,Nt=U,yt=X,e.width=Math.floor(T*X),e.height=Math.floor(U*X),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(y===pn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Z)},this.getViewport=function(T){return T.copy(Bt)},this.setViewport=function(T,U,X,G){T.isVector4?Bt.set(T.x,T.y,T.z,T.w):Bt.set(T,U,X,G),gt.viewport(Z.copy(Bt).multiplyScalar(ae()).round())},this.getScissor=function(T){return T.copy(Kt)},this.setScissor=function(T,U,X,G){T.isVector4?Kt.set(T.x,T.y,T.z,T.w):Kt.set(T,U,X,G),gt.scissor(ut.copy(Kt).multiplyScalar(ae()).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(T){gt.setScissorTest(ee=T)},this.setOpaqueSort=function(T){Ut=T},this.setTransparentSort=function(T){ye=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,X=!0){let G=0;if(T){let W=!1;if(J!==null){let xt=J.texture.format;W=p.has(xt)}if(W){let xt=J.texture.type,Rt=m.has(xt),mt=D.getClearColor(),bt=D.getClearAlpha(),It=mt.r,Xt=mt.g,se=mt.b;Rt?(_[0]=It,_[1]=Xt,_[2]=se,_[3]=bt,F.clearBufferuiv(F.COLOR,0,_)):(M[0]=It,M[1]=Xt,M[2]=se,M[3]=bt,F.clearBufferiv(F.COLOR,0,M))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),D.dispose(),_t.dispose(),K.dispose(),Gt.dispose(),Ot.dispose(),R.dispose(),st.dispose(),V.dispose(),ht.dispose(),Dt.dispose(),tt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Xh),rt.removeEventListener("sessionend",qh),zi.stop()};function Ft(T){T.preventDefault(),Sr("WebGLRenderer: Context Lost."),P=!0}function Zt(){Sr("WebGLRenderer: Context Restored."),P=!1;let T=we.autoReset,U=ft.enabled,X=ft.autoUpdate,G=ft.needsUpdate,W=ft.type;$t(),we.autoReset=T,ft.enabled=U,ft.autoUpdate=X,ft.needsUpdate=G,ft.type=W}function Mt(T){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function de(T){let U=T.target;U.removeEventListener("dispose",de),Ge(U)}function Ge(T){vi(T),Ot.remove(T)}function vi(T){let U=Ot.get(T).programs;U!==void 0&&(U.forEach(function(X){tt.releaseProgram(X)}),T.isShaderMaterial&&tt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,X,G,W,xt){U===null&&(U=ne);let Rt=W.isMesh&&W.matrixWorld.determinantAffine()<0,mt=Lf(T,U,X,G,W);gt.setMaterial(G,Rt);let bt=X.index,It=1;if(G.wireframe===!0){if(bt=V.getWireframeAttribute(X),bt===void 0)return;It=2}let Xt=X.drawRange,se=X.attributes.position,Ct=Xt.start*It,re=(Xt.start+Xt.count)*It;xt!==null&&(Ct=Math.max(Ct,xt.start*It),re=Math.min(re,(xt.start+xt.count)*It)),bt!==null?(Ct=Math.max(Ct,0),re=Math.min(re,bt.count)):se!=null&&(Ct=Math.max(Ct,0),re=Math.min(re,se.count));let Ne=re-Ct;if(Ne<0||Ne===1/0)return;ht.setup(W,G,mt,X,bt);let xe,_e=$;if(bt!==null&&(xe=b.get(bt),_e=pt,_e.setIndex(xe)),W.isMesh)G.wireframe===!0?(gt.setLineWidth(G.wireframeLinewidth*ae()),_e.setMode(F.LINES)):_e.setMode(F.TRIANGLES);else if(W.isLine){let Ke=G.linewidth;Ke===void 0&&(Ke=1),gt.setLineWidth(Ke*ae()),W.isLineSegments?_e.setMode(F.LINES):W.isLineLoop?_e.setMode(F.LINE_LOOP):_e.setMode(F.LINE_STRIP)}else W.isPoints?_e.setMode(F.POINTS):W.isSprite&&_e.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))_e.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ke=W._multiDrawStarts,Pt=W._multiDrawCounts,on=W._multiDrawCount,he=bt?b.get(bt).bytesPerElement:1,Hi=Ot.get(G).currentProgram.getUniforms();for(let Qe=0;Qe<on;Qe++)Hi.setValue(F,"_gl_DrawID",Qe),_e.render(Ke[Qe]/he,Pt[Qe])}else if(W.isInstancedMesh)_e.renderInstances(Ct,Ne,W.count);else if(X.isInstancedBufferGeometry){let Ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Pt=Math.min(X.instanceCount,Ke);_e.renderInstances(Ct,Ne,Pt)}else _e.render(Ct,Ne)};function Wh(T,U,X,G){N!==null&&T.isNodeMaterial&&N.setObject(G,T),lt===!0&&Q.setState(T,X,!1),T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=Je,T.needsUpdate=!0,or(T,U,G),T.side=Di,T.needsUpdate=!0,or(T,U,G),T.side=en):or(T,U,G)}this.compile=function(T,U,X=null){X===null&&(X=T),N!==null&&N.renderStart(T,U,X),E=K.get(X),E.init(U),S.push(E),X.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),T!==X&&T.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),Tt=this.localClippingEnabled,lt=Q.init(this.clippingPlanes,Tt),lt===!0&&Q.setGlobalState(this.clippingPlanes,U),N!==null&&ft.render(E.state.shadowsArray,X,U);let G=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let xt=W.material;if(xt)if(Array.isArray(xt))for(let Rt=0;Rt<xt.length;Rt++){let mt=xt[Rt];Wh(mt,X,U,W),G.add(mt)}else Wh(xt,X,U,W),G.add(xt)}),E=S.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(T,U,X=null){let G=this.compile(T,U,X);return new Promise(W=>{function xt(){if(G.forEach(function(Rt){let bt=Ot.get(Rt).currentProgram;(bt===void 0||bt.isReady())&&G.delete(Rt)}),G.size===0){W(T);return}setTimeout(xt,10)}jt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let cc=null;function Pf(T){cc&&cc(T)}function Xh(){zi.stop()}function qh(){zi.start()}let zi=new Zd;zi.setAnimationLoop(Pf),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(T){cc=T,rt.setAnimationLoop(T),T===null?zi.stop():zi.start()},rt.addEventListener("sessionstart",Xh),rt.addEventListener("sessionend",qh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(T,U);let X=rt.enabled===!0&&rt.isPresenting===!0,G=C!==null&&(J===null||X)&&C.begin(A,J);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,U,J),E=K.get(T,S.length),E.init(U),E.state.textureUnits=Gt.getTextureUnits(),S.push(E),vt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?dt.setFromArrayCamera(U):it.setFromProjectionMatrix(vt,Tn,U.reversedDepth),Tt=this.localClippingEnabled,lt=Q.init(this.clippingPlanes,Tt),w=_t.get(T,x.length),w.init(),x.push(w),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let Rt=A.xr.getDepthSensingMesh();Rt!==null&&hc(Rt,U,-1/0,A.sortObjects)}hc(T,U,0,A.sortObjects),w.finish(),N!==null&&N.updateLights(E.state.lightsArray),A.sortObjects===!0&&w.sort(Ut,ye),ie=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,ie&&D.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),lt===!0&&Q.beginShadows();let W=E.state.shadowsArray;if(ft.render(W,T,U),lt===!0&&Q.endShadows(),(G&&C.hasRenderPass())===!1){let Rt=w.opaque,mt=w.transmissive;if(E.setupLights(),U.isArrayCamera){let bt=U.cameras;if(mt.length>0)for(let It=0,Xt=bt.length;It<Xt;It++){let se=bt[It];Zh(Rt,mt,T,se)}ie&&D.render(T);for(let It=0,Xt=bt.length;It<Xt;It++){let se=bt[It];Yh(w,T,se,se.viewport)}}else mt.length>0&&Zh(Rt,mt,T,U),ie&&D.render(T),Yh(w,T,U)}J!==null&&z===0&&(Gt.updateMultisampleRenderTarget(J),Gt.updateRenderTargetMipmap(J)),G&&C.end(A),T.isScene===!0&&T.onAfterRender(A,T,U),ht.resetDefaultState(),k=-1,Y=null,S.pop(),S.length>0?(E=S[S.length-1],Gt.setTextureUnits(E.state.textureUnits),lt===!0&&Q.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,N!==null&&N.renderEnd()};function hc(T,U,X,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){let Rt=U.isArrayCamera?dt:it;if(!T.frustumCulled||T.intersectsFrustum(Rt)){G&&Lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(vt);let mt=st.update(T),bt=T.material;bt.visible&&w.push(T,mt,bt,X,Lt.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){let Rt=U.isArrayCamera?dt:it;if(!T.frustumCulled||T.intersectsFrustum(Rt)){let mt=st.update(T),bt=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Lt.copy(T.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Lt.copy(mt.boundingSphere.center)),Lt.applyMatrix4(T.matrixWorld).applyMatrix4(vt)),Array.isArray(bt)){let It=mt.groups;for(let Xt=0,se=It.length;Xt<se;Xt++){let Ct=It[Xt],re=bt[Ct.materialIndex];re&&re.visible&&w.push(T,mt,re,X,Lt.z,Ct,U)}}else bt.visible&&w.push(T,mt,bt,X,Lt.z,null,U)}}}let xt=T.children;for(let Rt=0,mt=xt.length;Rt<mt;Rt++)hc(xt[Rt],U,X,G)}function Yh(T,U,X,G){let{opaque:W,transmissive:xt,transparent:Rt}=T;E.setupLightsView(X),lt===!0&&Q.setGlobalState(A.clippingPlanes,X),G&&gt.viewport(Z.copy(G)),W.length>0&&No(W,U,X),xt.length>0&&No(xt,U,X),Rt.length>0&&No(Rt,U,X),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Zh(T,U,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let Ct=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Re(1,1,{generateMipmaps:!0,type:Ct?Be:pn,minFilter:pi,samples:Math.max(4,ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let xt=E.state.transmissionRenderTarget[G.id],Rt=G.viewport||Z;xt.setSize(Rt.z*A.transmissionResolutionScale,Rt.w*A.transmissionResolutionScale);let mt=A.getRenderTarget(),bt=A.getActiveCubeFace(),It=A.getActiveMipmapLevel();A.setRenderTarget(xt),A.getClearColor(q),at=A.getClearAlpha(),at<1&&A.setClearColor(16777215,.5),A.clear(),ie&&D.render(X);let Xt=A.toneMapping;A.toneMapping=Yn;let se=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),lt===!0&&Q.setGlobalState(A.clippingPlanes,G),No(T,X,G),Gt.updateMultisampleRenderTarget(xt),Gt.updateRenderTargetMipmap(xt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let re=0,Ne=U.length;re<Ne;re++){let xe=U[re],{object:_e,geometry:Ke,material:Pt,group:on}=xe;if(Pt.side===en&&_e.layers.test(G.layers)){let he=Pt.side;Pt.side=Je,Pt.needsUpdate=!0,$h(_e,X,G,Ke,Pt,on),Pt.side=he,Pt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Gt.updateMultisampleRenderTarget(xt),Gt.updateRenderTargetMipmap(xt))}A.setRenderTarget(mt,bt,It),A.setClearColor(q,at),se!==void 0&&(G.viewport=se),A.toneMapping=Xt}function No(T,U,X){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,xt=T.length;W<xt;W++){let Rt=T[W],{object:mt,geometry:bt,group:It}=Rt,Xt=Rt.material;Xt.allowOverride===!0&&G!==null&&(Xt=G),mt.layers.test(X.layers)&&$h(mt,U,X,bt,Xt,It)}}function $h(T,U,X,G,W,xt){N!==null&&W.isNodeMaterial&&N.setObject(T,W),T.onBeforeRender(A,U,X,G,W,xt),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(A,U,X,G,T,xt),W.transparent===!0&&W.side===en&&W.forceSinglePass===!1?(W.side=Je,W.needsUpdate=!0,A.renderBufferDirect(X,U,G,W,T,xt),W.side=Di,W.needsUpdate=!0,A.renderBufferDirect(X,U,G,W,T,xt),W.side=en):A.renderBufferDirect(X,U,G,W,T,xt),T.onAfterRender(A,U,X,G,W,xt)}function Jh(T){let U=0;for(let X of T)X.texture!==null&&U++;return U}function or(T,U,X){U.isScene!==!0&&(U=ne);let G=Ot.get(T),W=E.state.lights,xt=E.state.shadowsArray,Rt=W.state.version,mt=tt.getParameters(T,W.state,xt,U,X,E.state.lightProbeGridArray),bt=tt.getProgramCacheKey(mt),It=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Xt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=R.get(T.envMap||G.environment,Xt),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,It===void 0&&(T.addEventListener("dispose",de),It=new Map,G.programs=It,G.programVariants=new Map);let se=It.get(bt);if(se!==void 0){if(G.currentProgram===se&&G.lightsStateVersion===Rt)return Qh(T,mt),se}else mt.uniforms=tt.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,X,mt),T.onBeforeCompile(mt,A),se=tt.acquireProgram(mt,bt),It.set(bt,se),G.uniforms=mt.uniforms;let Ct=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ct.clippingPlanes=Q.uniform),Qh(T,mt),G.needsLights=Nf(T),G.lightsStateVersion=Rt,G.needsLights&&(Ct.ambientLightColor.value=W.state.ambient,Ct.lightProbe.value=W.state.probe,Ct.sunLights.value=W.state.sun,Ct.sunLightShadows.value=W.state.sunShadow,Ct.directionalLights.value=W.state.directional,Ct.directionalLightShadows.value=W.state.directionalShadow,Ct.spotLights.value=W.state.spot,Ct.spotLightShadows.value=W.state.spotShadow,Ct.rectAreaLights.value=W.state.rectArea,Ct.ltc_1.value=W.state.rectAreaLTC1,Ct.ltc_2.value=W.state.rectAreaLTC2,Ct.pointLights.value=W.state.point,Ct.pointLightShadows.value=W.state.pointShadow,Ct.hemisphereLights.value=W.state.hemi,Ct.sunShadowMatrix.value=W.state.sunShadowMatrix,Ct.sunShadowCascade.value=W.state.sunShadowCascade,Ct.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ct.spotLightMatrix.value=W.state.spotLightMatrix,Ct.spotLightMap.value=W.state.spotLightMap,Ct.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=Jh(E.state.lightProbeGridArray),G.currentProgram=se,G.uniformsList=null,se}function If(T,U,X,G,W){let xt=Ot.get(T),Rt=xt.currentProgram.id+","+G+","+W,mt=xt.programVariants.get(Rt);return mt===void 0?(mt=or(T,U,X),xt.programVariants.set(Rt,mt)):(xt.currentProgram=mt,xt.uniformsList=null,xt.outputColorSpace=G,xt.toneMapping=W),mt}function Kh(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Js.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Qh(T,U){let X=Ot.get(T);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Lf(T,U,X,G,W){U.isScene!==!0&&(U=ne),Gt.resetTextureUnits();let xt=U.fog,Rt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,mt=J===null?A.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:te.workingColorSpace,bt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,It=R.get(G.envMap||Rt,bt),Xt=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,se=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!X.morphAttributes.position,re=!!X.morphAttributes.normal,Ne=!!X.morphAttributes.color,xe=Yn;G.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(xe=A.toneMapping);let _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ke=_e!==void 0?_e.length:0,Pt=Ot.get(G),on=E.state.lights;if(lt===!0&&(Tt===!0||T!==Y)){let be=T===Y&&G.id===k;Q.setState(G,T,be)}let he=!1,Hi=!1;G.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==on.state.version||W.isBatchedMesh&&Pt.batching===!1||!W.isBatchedMesh&&Pt.batching===!0||W.isBatchedMesh&&Pt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Pt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Pt.instancing===!1||!W.isInstancedMesh&&Pt.instancing===!0||W.isSkinnedMesh&&Pt.skinning===!1||!W.isSkinnedMesh&&Pt.skinning===!0||W.isInstancedMesh&&Pt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Pt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Pt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Pt.instancingMorph===!1&&W.morphTexture!==null||Pt.envMap!==It||G.fog===!0&&Pt.fog!==xt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Q.numPlanes||Pt.numIntersection!==Q.numIntersection)||Pt.vertexAlphas!==Xt||Pt.vertexTangents!==se||Pt.morphTargets!==Ct||Pt.morphNormals!==re||Pt.morphColors!==Ne||Pt.morphTargetsCount!==Ke||Pt.numLightProbeGrids!==Jh(E.state.lightProbeGridArray)?he=!0:(Pt.outputColorSpace!==mt||Pt.toneMapping!==xe)&&(Hi=!0):(he=!0,Pt.__version=G.version);let Qe=Pt.currentProgram;(he===!0||Hi===!0)&&(Qe=Hi===!0?If(G,U,W,mt,xe):or(G,U,W),N&&G.isNodeMaterial&&N.onUpdateProgram(G,Qe,Pt));let Uo=!1,yi=!1,ki=!1,oe=Qe.getUniforms(),$e=Pt.uniforms;if(gt.useProgram(Qe.program)&&(Uo=!0,yi=!0,ki=!0),G.id!==k&&(k=G.id,yi=!0),Uo||Y!==T){gt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),oe.setValue(F,"projectionMatrix",T.projectionMatrix),oe.setValue(F,"viewMatrix",T.matrixWorldInverse);let Ve=oe.map.cameraPosition;Ve!==void 0&&Ve.setValue(F,qt.setFromMatrixPosition(T.matrixWorld)),ge.logarithmicDepthBuffer&&oe.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&oe.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),Y!==T&&(Y=T,yi=!0,ki=!0)}if(Pt.needsLights&&(on.state.sunShadowMap.length>0&&oe.setValue(F,"sunShadowMap",on.state.sunShadowMap,Gt),on.state.directionalShadowMap.length>0&&oe.setValue(F,"directionalShadowMap",on.state.directionalShadowMap,Gt),on.state.spotShadowMap.length>0&&oe.setValue(F,"spotShadowMap",on.state.spotShadowMap,Gt),on.state.pointShadowMap.length>0&&oe.setValue(F,"pointShadowMap",on.state.pointShadowMap,Gt)),W.isSkinnedMesh){oe.setOptional(F,W,"bindMatrix"),oe.setOptional(F,W,"bindMatrixInverse");let be=W.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),oe.setValue(F,"boneTexture",be.boneTexture,Gt))}W.isBatchedMesh&&(oe.setOptional(F,W,"batchingTexture"),oe.setValue(F,"batchingTexture",W._matricesTexture,Gt),oe.setOptional(F,W,"batchingIdTexture"),oe.setValue(F,"batchingIdTexture",W._indirectTexture,Gt),oe.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&oe.setValue(F,"batchingColorTexture",W._colorsTexture,Gt));let Ln=X.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&j.update(W,X,Qe),(yi||Pt.receiveShadow!==W.receiveShadow)&&(Pt.receiveShadow=W.receiveShadow,oe.setValue(F,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&($e.envMapIntensity.value=U.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=Dx()),yi){if(oe.setValue(F,"toneMappingExposure",A.toneMappingExposure),Pt.needsLights&&Df($e,ki),xt&&G.fog===!0&&ct.refreshFogUniforms($e,xt),ct.refreshMaterialUniforms($e,G,yt,Nt,E.state.transmissionRenderTarget[T.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){let be=v,Ve=0;for(let ei of E.state.lightProbeGridArray)ei.texture!==null&&(be.textures[Ve]=ei.texture,be.min[Ve]=ei.boundingBox.min,be.max[Ve]=ei.boundingBox.max,be.resolution[Ve]=ei.resolution,Ve++);for(let ei in be)be[ei].length=Ve;$e.probesSH.value=be.textures,$e.probesMin.value=be.min,$e.probesMax.value=be.max,$e.probesResolution.value=be.resolution}Js.upload(F,Kh(Pt),$e,Gt)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Js.upload(F,Kh(Pt),$e,Gt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&oe.setValue(F,"center",W.center),oe.setValue(F,"modelViewMatrix",W.modelViewMatrix),oe.setValue(F,"normalMatrix",W.normalMatrix),oe.setValue(F,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let be=G.uniformsGroups;for(let Ve=0,ei=be.length;Ve<ei;Ve++){let tu=be[Ve];Dt.update(tu,Qe),Dt.bind(tu,Qe)}}return Qe}function Df(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Nf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(T,U,X){let G=Ot.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ot.get(T.texture).__webglTexture=U,Ot.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let X=Ot.get(T);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,X=0){J=T,H=U,z=X;let G=null,W=!1,xt=!1;if(T){let mt=Ot.get(T);if(mt.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(F.FRAMEBUFFER,mt.__webglFramebuffer),Z.copy(T.viewport),ut.copy(T.scissor),At=T.scissorTest,gt.viewport(Z),gt.scissor(ut),gt.setScissorTest(At),k=-1;return}else if(mt.__webglFramebuffer===void 0)Gt.setupRenderTarget(T);else if(mt.__hasExternalTextures)Gt.rebindTextures(T,Ot.get(T.texture).__webglTexture,Ot.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Xt=T.depthTexture;if(mt.__boundDepthTexture!==Xt){if(Xt!==null&&Ot.has(Xt)&&(T.width!==Xt.image.width||T.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(T)}}let bt=T.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(xt=!0);let It=Ot.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(It[U])?G=It[U][X]:G=It[U],W=!0):T.samples>0&&Gt.useMultisampledRTT(T)===!1?G=Ot.get(T).__webglMultisampledFramebuffer:Array.isArray(It)?G=It[X]:G=It,Z.copy(T.viewport),ut.copy(T.scissor),At=T.scissorTest}else Z.copy(Bt).multiplyScalar(yt).floor(),ut.copy(Kt).multiplyScalar(yt).floor(),At=ee;if(X!==0&&(G=O),gt.bindFramebuffer(F.FRAMEBUFFER,G)&&gt.drawBuffers(T,G),gt.viewport(Z),gt.scissor(ut),gt.setScissorTest(At),W){let mt=Ot.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,X)}else if(xt){let mt=U;for(let bt=0;bt<T.textures.length;bt++){let It=Ot.get(T.textures[bt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+bt,It.__webglTexture,X,mt)}}else if(T!==null&&X!==0){let mt=Ot.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mt.__webglTexture,X)}k=-1};function jh(T){let U=Ot.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=ge.textureFormatReadable(T.format),U.__typeReadable=ge.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,X,G,W,xt,Rt,mt=0){if(!(T&&T.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(bt=bt[Rt],Array.isArray(bt)&&(bt=bt[0])),bt){gt.bindFramebuffer(F.FRAMEBUFFER,bt);try{let It=T.textures[mt],Xt=It.format,se=It.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+mt);let Ct=jh(It);if(Ct.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&X>=0&&X<=T.height-W&&F.readPixels(U,X,G,W,ot.convert(Xt),ot.convert(se),xt)}finally{let It=J!==null?Ot.get(J).__webglFramebuffer:null;gt.bindFramebuffer(F.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(T,U,X,G,W,xt,Rt,mt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(bt=bt[Rt],Array.isArray(bt)&&(bt=bt[0])),bt)if(U>=0&&U<=T.width-G&&X>=0&&X<=T.height-W){gt.bindFramebuffer(F.FRAMEBUFFER,bt);let It=T.textures[mt],Xt=It.format,se=It.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+mt);let Ct=jh(It);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,re),F.bufferData(F.PIXEL_PACK_BUFFER,xt.byteLength,F.STREAM_READ),F.readPixels(U,X,G,W,ot.convert(Xt),ot.convert(se),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ne=J!==null?Ot.get(J).__webglFramebuffer:null;gt.bindFramebuffer(F.FRAMEBUFFER,Ne);let xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await pd(F,xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,re),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(re),F.deleteSync(xe),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,X=0){let G=Math.pow(2,-X),W=Math.floor(T.image.width*G),xt=Math.floor(T.image.height*G),Rt=U!==null?U.x:0,mt=U!==null?U.y:0;Gt.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Rt,mt,W,xt),gt.unbindTexture()},this.copyTextureToTexture=function(T,U,X=null,G=null,W=0,xt=0){let Rt,mt,bt,It,Xt,se,Ct,re,Ne,xe=T.isCompressedTexture?T.mipmaps[xt]:T.image;if(X!==null)Rt=X.max.x-X.min.x,mt=X.max.y-X.min.y,bt=X.isBox3?X.max.z-X.min.z:1,It=X.min.x,Xt=X.min.y,se=X.isBox3?X.min.z:0;else{let oe=Math.pow(2,-W);Rt=Math.floor(xe.width*oe),mt=Math.floor(xe.height*oe),T.isDataArrayTexture?bt=xe.depth:T.isData3DTexture?bt=Math.floor(xe.depth*oe):bt=1,It=0,Xt=0,se=0}G!==null?(Ct=G.x,re=G.y,Ne=G.z):(Ct=0,re=0,Ne=0);let _e=ot.convert(U.format),Ke=ot.convert(U.type),Pt;U.isData3DTexture?(Gt.setTexture3D(U,0),Pt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Gt.setTexture2DArray(U,0),Pt=F.TEXTURE_2D_ARRAY):(Gt.setTexture2D(U,0),Pt=F.TEXTURE_2D),gt.activeTexture(F.TEXTURE0),gt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),gt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),gt.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let on=gt.getParameter(F.UNPACK_ROW_LENGTH),he=gt.getParameter(F.UNPACK_IMAGE_HEIGHT),Hi=gt.getParameter(F.UNPACK_SKIP_PIXELS),Qe=gt.getParameter(F.UNPACK_SKIP_ROWS),Uo=gt.getParameter(F.UNPACK_SKIP_IMAGES);gt.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),gt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),gt.pixelStorei(F.UNPACK_SKIP_PIXELS,It),gt.pixelStorei(F.UNPACK_SKIP_ROWS,Xt),gt.pixelStorei(F.UNPACK_SKIP_IMAGES,se);let yi=T.isDataArrayTexture||T.isData3DTexture,ki=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let oe=Ot.get(T),$e=Ot.get(U),Ln=Ot.get(oe.__renderTarget),be=Ot.get($e.__renderTarget);gt.bindFramebuffer(F.READ_FRAMEBUFFER,Ln.__webglFramebuffer),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ve=0;Ve<bt;Ve++)yi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.get(T).__webglTexture,W,se+Ve),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.get(U).__webglTexture,xt,Ne+Ve)),F.blitFramebuffer(It,Xt,It+Rt,Xt+mt,Ct,re,Ct+Rt,re+mt,F.DEPTH_BUFFER_BIT,F.NEAREST);gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||Ot.has(T)){let oe=Ot.get(T),$e=Ot.get(U);gt.bindFramebuffer(F.READ_FRAMEBUFFER,I),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Ln=0;Ln<bt;Ln++)yi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,oe.__webglTexture,W,se+Ln):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,oe.__webglTexture,W),ki?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$e.__webglTexture,xt,Ne+Ln):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$e.__webglTexture,xt),W!==0?F.blitFramebuffer(It,Xt,It+Rt,Xt+mt,Ct,re,Ct+Rt,re+mt,F.COLOR_BUFFER_BIT,F.NEAREST):ki?F.copyTexSubImage3D(Pt,xt,Ct,re,Ne+Ln,It,Xt,Rt,mt):F.copyTexSubImage2D(Pt,xt,Ct,re,It,Xt,Rt,mt);gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ki?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Pt,xt,Ct,re,Ne,Rt,mt,bt,_e,Ke,xe.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Pt,xt,Ct,re,Ne,Rt,mt,bt,_e,xe.data):F.texSubImage3D(Pt,xt,Ct,re,Ne,Rt,mt,bt,_e,Ke,xe):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xt,Ct,re,Rt,mt,_e,Ke,xe.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xt,Ct,re,xe.width,xe.height,_e,xe.data):F.texSubImage2D(F.TEXTURE_2D,xt,Ct,re,Rt,mt,_e,Ke,xe);gt.pixelStorei(F.UNPACK_ROW_LENGTH,on),gt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he),gt.pixelStorei(F.UNPACK_SKIP_PIXELS,Hi),gt.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),gt.pixelStorei(F.UNPACK_SKIP_IMAGES,Uo),xt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Pt),gt.unbindTexture()},this.initRenderTarget=function(T){Ot.get(T).__webglFramebuffer===void 0&&Gt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Gt.setTextureCube(T,0):T.isData3DTexture?Gt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Gt.setTexture2DArray(T,0):Gt.setTexture2D(T,0),gt.unbindTexture()},this.resetState=function(){H=0,z=0,J=null,gt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var js={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Nx=new ts(-1,1,1,-1,0,1),Rh=class extends fe{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}},Ux=new Rh,Fi=class{constructor(t){this._mesh=new nt(Ux,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Nx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var tr=class extends Sn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Fe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=_i.clone(t.uniforms),this.material=new Fe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Fi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Eo=class extends Sn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Fl=class extends Sn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ol=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new et);this._width=n.width,this._height=n.height,e=new Re(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Be}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new tr(js),this.copyPass.material.blending=fi,this.timer=new no}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Eo!==void 0&&(o instanceof Eo?n=!0:o instanceof Fl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bl=class extends Sn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Et}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var of={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var er=class i extends Sn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new Et(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Re(r,o,{type:Be,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Re(r,o,{type:Be,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Re(r,o,{type:Be,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=of;this.highPassUniforms=_i.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Fe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=_i.clone(js.uniforms),this.blendMaterial=new Fe({uniforms:this.copyUniforms,vertexShader:js.vertexShader,fragmentShader:js.fragmentShader,premultipliedAlpha:!0,blending:Bn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Et,this._oldClearAlpha=1,this._basic=new Te,this._fsQuad=new Fi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Fe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Fe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};er.BlurDirectionX=new et(1,0);er.BlurDirectionY=new et(0,1);var To={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var zl=class extends Sn{constructor(){super(),this.isOutputPass=!0,this.uniforms=_i.clone(To.uniforms),this.material=new Vs({name:To.name,uniforms:this.uniforms,vertexShader:To.vertexShader,fragmentShader:To.fragmentShader}),this._fsQuad=new Fi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ro?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ns?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===co?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===lo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Hl(i,t){let e=Math.imul(i,374761393)^Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),e^=e>>>16,(e>>>0)/4294967295}function af(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Hl(e,n),c=Hl(e+1,n),h=Hl(e,n+1),d=Hl(e+1,n+1);return(l+(c-l)*o+(h-l)*a+(l-c-h+d)*o*a)*2-1}function Jn(i,t,e=5){let n=0,s=.5,r=1,o=0;for(let a=0;a<e;a++)n+=s*af(i*r+a*17.3,t*r-a*9.1),o+=s,s*=.5,r*=2.03;return n/o}function wo(i,t,e=5){let n=0,s=.5,r=1,o=0;for(let a=0;a<e;a++){let l=1-Math.abs(af(i*r+a*31.7,t*r+a*4.3));n+=s*l*l,o+=s,s*=.5,r*=2.1}return n/o}function Kn(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Qn=(i,t,e)=>Math.min(e,Math.max(t,i)),lf=(i,t,e)=>i+(t-i)*e,kl=(i,t,e)=>{let n=Qn((e-i)/(t-i),0,1);return n*n*(3-2*n)};function sn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Ie(i,{repeat:t=[1,1],srgb:e=!0,aniso:n=8}={}){let s=new Ji(i);return s.wrapS=s.wrapT=Ls,s.repeat.set(t[0],t[1]),e&&(s.colorSpace=Xe),s.anisotropy=n,s}function os(i,t,e,n=1,s=128){let r=Kn(n),o=sn(i,t),a=o.getContext("2d");a.fillStyle=`rgb(${s},${s},${s})`,a.fillRect(0,0,i,t);for(let[l,c]of e){let h=Math.max(1,Math.round(l*t/i)),d=sn(l,h),f=d.getContext("2d"),u=f.createImageData(l,h);for(let g=0;g<l*h;g++){let y=r()*255;u.data[g*4]=u.data[g*4+1]=u.data[g*4+2]=y,u.data[g*4+3]=255}f.putImageData(u,0,0),a.save(),a.globalAlpha=c,a.imageSmoothingEnabled=!0,a.setTransform(i/l,0,0,t/h,0,0),a.fillStyle=a.createPattern(d,"repeat"),a.fillRect(0,0,l,h),a.restore()}return o}function cf(i){let t=Math.min(16,i.capabilities.getMaxAnisotropy()),e={};{let a=os(512,1024,[[8,.35],[32,.25],[128,.2],[512,.35]],11,70),l=a.getContext("2d");l.globalCompositeOperation="multiply",l.fillStyle="#6a6c70",l.fillRect(0,0,512,1024),l.globalCompositeOperation="source-over";let c=Kn(5);for(let u=0;u<9e3;u++){let g=70+c()*90;l.fillStyle=`rgba(${g},${g},${g+4},${.08+c()*.18})`,l.fillRect(c()*512,c()*1024,1.2,1.2)}let h=u=>(u+10.5)/21*512;for(let u of[3.3,6.9,-3.3,-6.9])for(let g of[-.8,.8]){let y=h(u+g),p=l.createLinearGradient(y-10,0,y+10,0);p.addColorStop(0,"rgba(20,20,22,0)"),p.addColorStop(.5,"rgba(20,20,22,0.28)"),p.addColorStop(1,"rgba(20,20,22,0)"),l.fillStyle=p,l.fillRect(y-10,0,20,1024)}l.strokeStyle="rgba(15,15,15,0.5)",l.lineWidth=1.5;for(let u=0;u<6;u++){l.beginPath();let g=c()*512,y=c()*1024;l.moveTo(g,y);for(let p=0;p<8;p++)g+=(c()-.5)*40,y+=c()*30,l.lineTo(g,y);l.stroke()}let d=(u,g,y)=>{let p=h(u)-g/21*512/2,m=g/21*512,_=y?[[0,256],[512,768]]:[[0,1024]];for(let[M,v]of _){l.fillStyle="rgba(232,232,222,0.92)",l.fillRect(p,M,m,v-M);for(let w=0;w<(v-M)*.6;w++)l.fillStyle=`rgba(60,60,62,${c()*.5})`,l.fillRect(p+c()*m,M+c()*(v-M),1.5,1.5)}};d(1.45,.15,!1),d(-1.45,.15,!1),d(8.75,.2,!1),d(-8.75,.2,!1),d(5.1,.15,!0),d(-5.1,.15,!0),e.asphalt=Ie(a,{aniso:t});let f=os(256,512,[[64,.5],[256,.6]],12);e.asphaltBump=Ie(f,{srgb:!1,aniso:t})}e.rock=Ie(os(512,512,[[4,.4],[16,.35],[64,.3],[256,.3],[512,.2]],21,190),{aniso:t}),e.rockBump=Ie(os(256,256,[[16,.5],[64,.5],[256,.4]],22),{srgb:!1,aniso:t}),e.concrete=Ie(os(256,256,[[8,.2],[64,.2],[256,.25]],23,175),{aniso:t});{let a=os(512,256,[[16,.3],[128,.3]],31,120),l=a.getContext("2d"),c=Kn(9);for(let h=0;h<4;h++){let d=-c()*60;for(;d<512;){let f=60+c()*70,u=110+c()*60;l.fillStyle=`rgba(${u},${u-4},${u-10},0.75)`,l.beginPath(),l.roundRect(d+3,h*64+3,f-6,58,8),l.fill(),d+=f}}e.stone=Ie(a,{aniso:t})}e.leatherBump=Ie(os(256,256,[[32,.4],[128,.6],[256,.6]],41),{srgb:!1,repeat:[6,6],aniso:t});{let r=sn(128,128),o=r.getContext("2d"),a=16;for(let l=0;l<128;l+=a)for(let c=0;c<128;c+=a){let d=(c/a+l/a)%2===0?o.createLinearGradient(c,l,c+a,l):o.createLinearGradient(c,l,c,l+a);d.addColorStop(0,"#16181b"),d.addColorStop(.5,"#555a63"),d.addColorStop(1,"#16181b"),o.fillStyle=d,o.fillRect(c,l,a,a)}e.carbon=Ie(r,{repeat:[10,3],aniso:t})}{let r=sn(512,64),o=r.getContext("2d");o.fillStyle="#9a9ea4",o.fillRect(0,0,512,64);let a=Kn(51);for(let l=0;l<900;l++){let c=120+a()*110;o.fillStyle=`rgba(${c},${c},${c+3},0.35)`,o.fillRect(0,a()*64,512,.6+a())}e.brushed=Ie(r,{aniso:t})}{let r=sn(128,128),o=r.getContext("2d"),a=o.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.15,"rgba(255,255,255,0.55)"),a.addColorStop(.45,"rgba(255,255,255,0.12)"),a.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=a,o.fillRect(0,0,128,128),e.glow=Ie(r,{srgb:!0}),e.glow.wrapS=e.glow.wrapT=Pe}{let r=sn(128,128),o=r.getContext("2d"),a=o.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(255,190,120,0.55)"),a.addColorStop(.5,"rgba(255,170,100,0.18)"),a.addColorStop(1,"rgba(255,160,90,0)"),o.fillStyle=a,o.fillRect(0,0,128,128),e.pool=Ie(r),e.pool.wrapS=e.pool.wrapT=Pe}{let r=sn(512,512),o=r.getContext("2d");o.fillStyle="#050505",o.fillRect(0,0,512,512);let a=256,l=256;o.fillStyle="#22b14c",o.beginPath(),o.arc(a,l,250,0,Math.PI*2),o.fill(),o.strokeStyle="#050505",o.lineWidth=7,o.stroke();let c=150;o.save(),o.translate(a,l),o.rotate(-.02),o.fillStyle="#050505",o.beginPath(),o.arc(0,0,c+8,0,Math.PI*2),o.fill(),o.fillStyle="#22b14c",o.beginPath(),o.arc(0,0,c,0,Math.PI*2),o.fill(),o.fillStyle="#050505",o.beginPath(),o.moveTo(0,0),o.arc(0,0,c,Math.PI,Math.PI*1.5),o.closePath(),o.fill(),o.beginPath(),o.moveTo(0,0),o.arc(0,0,c,0,Math.PI*.5),o.closePath(),o.fill(),o.restore(),e.emblem=Ie(r),e.emblem.wrapS=e.emblem.wrapT=Pe}{let r=sn(256,128),o=r.getContext("2d");o.fillStyle="#101114",o.fillRect(0,0,256,128),o.strokeStyle="rgba(240,240,240,0.9)",o.fillStyle="rgba(240,240,240,0.9)",o.lineWidth=4,o.beginPath(),o.arc(80,64,26,0,Math.PI*2),o.stroke(),o.fillRect(76,26,8,76),o.fillRect(42,60,76,8),o.beginPath(),o.arc(170,40,10,0,Math.PI*2),o.stroke(),o.beginPath(),o.arc(170,88,10,0,Math.PI*2),o.stroke(),o.fillRect(205,30,6,68),e.buttons=Ie(r),e.buttons.wrapS=e.buttons.wrapT=Pe}{let r=sn(128,128),o=r.getContext("2d");o.fillStyle="#1a1b1e",o.fillRect(0,0,128,128),o.fillStyle="#050506";for(let a=4;a<128;a+=8)for(let l=4+a/8%2*4;l<128;l+=8)o.beginPath(),o.arc(l,a,2.2,0,Math.PI*2),o.fill();e.grille=Ie(r,{repeat:[3,3]})}{let a=sn(1024,128),l=a.getContext("2d");l.fillStyle="#2a1a12",l.fillRect(0,0,1024,128);let c=Kn(61);for(let h=0;h<140;h++){let d=c()*128,f=2+c()*6,u=.004+c()*.01,g=c()*6,y=c();l.strokeStyle=y<.5?`rgba(15,8,5,${.25+c()*.4})`:`rgba(90,58,38,${.15+c()*.25})`,l.lineWidth=.6+c()*2.2,l.beginPath();for(let p=0;p<=1024;p+=8){let m=d+Math.sin(p*u+g)*f+Math.sin(p*u*3.1)*f*.3;p?l.lineTo(p,m):l.moveTo(p,m)}l.stroke()}for(let h=0;h<3e3;h++)l.fillStyle=`rgba(8,4,2,${c()*.5})`,l.fillRect(c()*1024,c()*128,2+c()*5,.8);e.wood=Ie(a,{aniso:t})}let n=r=>{let o=sn(256,160),a=o.getContext("2d");a.fillStyle="#0e0f12",a.fillRect(0,0,256,160),a.strokeStyle="rgba(235,238,242,0.92)",a.fillStyle="rgba(235,238,242,0.92)",a.lineWidth=4;let l=(d,f)=>{a.strokeStyle="rgba(255,255,255,0.07)",a.lineWidth=2,a.strokeRect(d-30,f-24,60,48),a.strokeStyle="rgba(235,238,242,0.92)",a.lineWidth=4};(r?[(d,f)=>{a.beginPath(),a.moveTo(d-10,f),a.lineTo(d+10,f),a.moveTo(d,f-10),a.lineTo(d,f+10),a.stroke()},(d,f)=>{a.beginPath(),a.moveTo(d-10,f),a.lineTo(d+10,f),a.stroke()},(d,f)=>{a.beginPath(),a.moveTo(d-9,f-9),a.lineTo(d+3,f),a.lineTo(d-9,f+9),a.stroke(),a.fillRect(d+6,f-9,4,18)},(d,f)=>{a.beginPath(),a.arc(d,f,9,0,Math.PI*2),a.stroke(),a.beginPath(),a.moveTo(d-4,f),a.lineTo(d+4,f),a.stroke()},(d,f)=>{a.beginPath(),a.moveTo(d-8,f+6),a.lineTo(d,f-7),a.lineTo(d+8,f+6),a.stroke()},(d,f)=>{a.beginPath(),a.moveTo(d-8,f-6),a.lineTo(d,f+7),a.lineTo(d+8,f-6),a.stroke()}]:[(d,f)=>{a.beginPath(),a.arc(d,f,10,.4,Math.PI*2-.4),a.stroke(),a.beginPath(),a.moveTo(d-4,f-7),a.lineTo(d+4,f),a.lineTo(d-4,f+7),a.stroke()},(d,f)=>{a.beginPath(),a.arc(d-3,f,7,0,Math.PI*2),a.stroke(),a.beginPath(),a.moveTo(d+6,f-8),a.lineTo(d+12,f-8),a.stroke()},(d,f)=>{a.beginPath(),a.moveTo(d-10,f+8),a.lineTo(d,f-8),a.lineTo(d+10,f+8),a.stroke(),a.beginPath(),a.arc(d,f+3,2,0,Math.PI*2),a.fill()},(d,f)=>{a.beginPath(),a.arc(d,f,9,Math.PI*.2,Math.PI*1.8),a.stroke()},(d,f)=>{a.beginPath(),a.moveTo(d-9,f-4),a.lineTo(d-3,f-4),a.lineTo(d+4,f-10),a.lineTo(d+4,f+10),a.lineTo(d-3,f+4),a.lineTo(d-9,f+4),a.closePath(),a.stroke()},(d,f)=>{a.beginPath(),a.moveTo(d-9,f+5),a.lineTo(d+9,f+5),a.moveTo(d-9,f-3),a.lineTo(d+9,f-3),a.stroke()}]).forEach((d,f)=>{let u=48+f%3*80,g=40+Math.floor(f/3)*80;l(u,g),d(u,g)});let h=Ie(o);return h.wrapS=h.wrapT=Pe,h};e.btnLeft=n(!1),e.btnRight=n(!0);let s=r=>{let o=sn(128,64),a=o.getContext("2d"),l=a.createLinearGradient(0,0,0,64);l.addColorStop(0,"#e0242c"),l.addColorStop(1,"#8e0c12"),a.fillStyle=l,a.fillRect(0,0,128,64),a.fillStyle="#ffffff",a.font="bold 34px Arial",a.textAlign="center",a.textBaseline="middle",a.fillText(r,64,34);let c=Ie(o);return c.wrapS=c.wrapT=Pe,c};e.redS1=s("S1"),e.redS2=s("S2");{let r=sn(1024,128),o=r.getContext("2d");o.fillStyle="#08090b",o.fillRect(0,0,1024,128),["RADIO","MEDIA","NAV","TEL","","1","2","3","4","5","6"].forEach((l,c)=>{let h=12+c*92;o.fillStyle="#121418",o.beginPath(),o.roundRect(h,18,84,92,10),o.fill(),o.strokeStyle="rgba(255,255,255,0.12)",o.lineWidth=2,o.stroke(),o.fillStyle="#e8ecf2",o.font="600 24px Arial",o.textAlign="center",o.textBaseline="middle",l?o.fillText(l,h+42,64):(o.fillStyle="#c4161c",o.beginPath(),o.moveTo(h+42,36),o.lineTo(h+70,88),o.lineTo(h+14,88),o.closePath(),o.fill(),o.fillStyle="#121418",o.beginPath(),o.moveTo(h+42,52),o.lineTo(h+58,80),o.lineTo(h+26,80),o.closePath(),o.fill())}),e.stackButtons=Ie(r),e.stackButtons.wrapS=e.stackButtons.wrapT=Pe}return e}function Gl(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new fe;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let d=i[h],f=0,u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in d.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(d.attributes[g]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in d.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(d.morphAttributes[g]),u++}if(u!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=d.index.count;else if(d.attributes.position!==void 0)g=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(e){let h=0,d=[];for(let f=0;f<i.length;++f){let u=i[f].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(let h in r){let d=hf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let y=0;y<o[h].length;++y)u.push(o[h][y][f]);let g=hf(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function hf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ae(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let f=0,u=h.count;f<u;f++)for(let g=0;g<e;g++){let y=h.getComponent(f,g);a.setComponent(f+d,g,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var mn={half:10.5,lanes:[3.3,6.9],onLanes:[-3.3,-6.9],minD:1,maxD:9.85};function Fx(i){return 90*Math.sin(i*.0021)+35*Math.sin(i*.0057+1.3)+6*Math.sin(i*.011+.4)}function uf(i){return 90*.0021*Math.cos(i*.0021)+35*.0057*Math.cos(i*.0057+1.3)+6*.011*Math.cos(i*.011+.4)}function Vl(i){return 14*Math.sin(i*.0016)+5*Math.sin(i*.0043+2)}function Ch(i){return 14*.0016*Math.cos(i*.0016)+5*.0043*Math.cos(i*.0043+2)}var Ox={x:0,y:0,z:0,tx:0,tz:0,rx:0,rz:0,n:1};function Le(i,t=Ox){let e=uf(i),n=Math.sqrt(1+e*e);return t.x=Fx(i),t.y=Vl(i),t.z=-i,t.tx=e/n,t.tz=-1/n,t.rx=1/n,t.rz=e/n,t.n=n,t}function Oi(i){let t=uf(i);return Math.atan2(-t,1)}var Bx={s:0,d:0},kn={};function df(i,t,e,n=Bx){let s=e===void 0?-t:e;for(let r=0;r<4;r++){Le(s,kn);let o=(i-kn.x)*kn.tx+(t-kn.z)*kn.tz;s+=o/kn.n}return Le(s,kn),n.s=s,n.d=(i-kn.x)*kn.rx+(t-kn.z)*kn.rz,n}function as(i,t){let e=Vl(i);if(t>11.6){let n=t-11.6,s=.4+.75*(Jn(i*.003,7.1,3)*.5+.5),r=1.35+Math.pow(n,1.16)*s;return r+=Jn(i*.025,n*.025,5)*Math.min(n,50)*.45,r+=Jn(i*.11,n*.11,3)*Math.min(n,30)*.12,r+=wo(i*.006,n*.006,4)*Math.min(n*.7,140),e+r}if(t<-11.2){let n=-t-11.2,s=-Math.min(n*.5,11)*(.7+.3*Jn(i*.01,3.3,3));return s+=Math.max(0,n-60)*.5*(.7+.5*Jn(i*.004,1.7,3)),s+=Jn(i*.015,n*.015,5)*Math.min(n,90)*.35,s+=wo(i*.005,n*.005,4)*Math.max(0,n-40)*.9*kl(40,140,n),e+s}return e-.25}var nr=new Et(.47,.53,.62),ls=160,zx=`
varying vec3 vDir;
void main(){
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  gl_Position = p.xyww;
}`,Hx=`
varying vec3 vDir;
uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uBottom; uniform vec3 uGlow; uniform vec3 uGlowDir;
uniform float uTime;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float n2(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.0-2.0*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),u.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),u.x), u.y); }
float fbm(vec2 p){ float s=0.0,a=0.5; for(int i=0;i<6;i++){ s+=a*n2(p); p*=2.03; a*=0.5; } return s; }
void main(){
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = mix(uHorizon, uTop, pow(smoothstep(0.0, 0.75, h), 0.6));
  col = mix(col, uBottom, smoothstep(0.0, -0.25, h));
  float g = max(dot(d, normalize(uGlowDir)), 0.0);
  col += uGlow * pow(g, 5.0) * smoothstep(-0.15, 0.25, h) * (1.0 - smoothstep(0.25, 0.7, h));
  // overcast cloud layer
  vec2 uv = d.xz / (h + 0.18) * 1.4 + vec2(uTime * 0.004, 0.0);
  float c = fbm(uv);
  float cl = smoothstep(0.42, 0.85, c) * smoothstep(0.0, 0.18, h);
  vec3 cloudCol = mix(uHorizon * 0.92, uTop * 1.25, smoothstep(0.0, 0.5, h));
  col = mix(col, cloudCol, cl * 0.75);
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,Wl=class{constructor(t,e,n){this.scene=t,this.renderer=e,this.T=n,this.chunks=new Map,this.queue=[],this.skyUniforms={uTop:{value:new Et(.11,.17,.3)},uHorizon:{value:new Et(.52,.59,.69)},uBottom:{value:new Et(.18,.2,.24)},uGlow:{value:new Et(.35,.26,.2)},uGlowDir:{value:new L(-.6,.05,-.8)},uTime:{value:0}};let s=new Fe({vertexShader:zx,fragmentShader:Hx,uniforms:this.skyUniforms,side:Je,depthWrite:!1,fog:!1});this.sky=new nt(new Gs(5e3,48,24),s),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,t.add(this.sky);let r=new $i;r.add(new nt(new Gs(100,32,16),s));let o=new nt(new pe(400,400),new Te({color:2237994}));o.rotation.x=-Math.PI/2,o.position.y=-2,r.add(o),this.envScene=r,this.pmrem=new Ks(e),this.envMap=this.pmrem.fromScene(r,.02).texture,t.environment=this.envMap,t.environmentIntensity=.55,t.fog=new wr(nr,70,3300),t.background=nr,this.hemi=new Kr(10466257,3815985,1.9),t.add(this.hemi),this.sun=new eo(13226986,.55),this.sun.position.set(-300,220,-400),t.add(this.sun),t.add(this.sun.target),this.mats={terrain:new Yt({vertexColors:!0,roughness:.96,map:n.rock,bumpMap:n.rockBump,bumpScale:1.6}),road:new Yt({map:n.asphalt,roughness:.82,bumpMap:n.asphaltBump,bumpScale:.18,color:14869218}),concrete:new Yt({map:n.concrete,roughness:.9,color:12170926}),stone:new Yt({map:n.stone,roughness:.95,bumpMap:n.rockBump,bumpScale:1}),steel:new Yt({color:11054515,metalness:.85,roughness:.42,side:en}),post:new Yt({color:8225416,metalness:.7,roughness:.5}),tree:new Yt({vertexColors:!0,roughness:.95}),boulder:new Yt({color:7828332,roughness:.95,map:n.rock,flatShading:!0}),pole:new Yt({color:6054248,metalness:.3,roughness:.65}),lampHead:new Yt({color:2236962,emissive:16756834,emissiveIntensity:5.5}),reflector:new Yt({color:2236962,emissive:16752704,emissiveIntensity:2}),reflectorW:new Yt({color:2236962,emissive:15265535,emissiveIntensity:1.4}),glow:new ui({map:n.glow,color:16757611,transparent:!0,blending:Bn,depthWrite:!1,fog:!1}),pool:new Te({map:n.pool,transparent:!0,blending:Bn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})},this._buildSharedGeoms(),this._buildBackdrop(),this.day=!1}setMode(t){this.day=t;let e=this.skyUniforms,n=this.mats,s=this.scene;t?(e.uTop.value.setRGB(.4,.45,.51),e.uHorizon.value.setRGB(.7,.73,.76),e.uBottom.value.setRGB(.36,.37,.38),e.uGlow.value.setRGB(.05,.05,.05),nr.setRGB(.64,.67,.7),s.fog.near=10,s.fog.far=1300,this.hemi.color.set(13818595),this.hemi.groundColor.set(5986896),this.hemi.intensity=2.5,this.sun.color.set(15659251),this.sun.intensity=.9,n.lampHead.emissiveIntensity=.15,n.glow.opacity=0,n.pool.opacity=0,n.reflector.emissiveIntensity=.25,n.reflectorW.emissiveIntensity=.2,this.backdrop.material.color.setRGB(1.35,1.35,1.35),s.environmentIntensity=.75):(e.uTop.value.setRGB(.11,.17,.3),e.uHorizon.value.setRGB(.52,.59,.69),e.uBottom.value.setRGB(.18,.2,.24),e.uGlow.value.setRGB(.35,.26,.2),nr.setRGB(.47,.53,.62),s.fog.near=70,s.fog.far=3300,this.hemi.color.set(10466257),this.hemi.groundColor.set(3815985),this.hemi.intensity=1.9,this.sun.color.set(13226986),this.sun.intensity=.55,n.lampHead.emissiveIntensity=5.5,n.glow.opacity=1,n.pool.opacity=1,n.reflector.emissiveIntensity=2,n.reflectorW.emissiveIntensity=1.4,this.backdrop.material.color.setRGB(1,1,1),s.environmentIntensity=.55),s.fog.color.copy(nr),s.background=nr;let r=this.envMap;this.envMap=this.pmrem.fromScene(this.envScene,.02).texture,s.environment=this.envMap,r.dispose()}_buildSharedGeoms(){let t=[],e=(g,y)=>{let p=new Et(y),m=g.attributes.position.count,_=new Float32Array(m*3);for(let M=0;M<m;M++)_[M*3]=p.r,_[M*3+1]=p.g,_[M*3+2]=p.b;g.setAttribute("color",new Ae(_,3)),t.push((g.toNonIndexed,g))},n=new Ze(.12,.2,2.2,6);n.translate(0,1.1,0),e(n,3877920);let s=[1911581,2241314,2636325];for(let g=0;g<3;g++){let y=new Ur(1.9-g*.45,2.8-g*.3,8);y.translate(0,2.4+g*1.5,0),e(y,s[g])}this.treeGeo=Gl(t.map(g=>g.index?g.toNonIndexed():g)),this.treeGeo.computeVertexNormals();let r=new Yr(1.4,1),o=r.attributes.position,a=new Float32Array(o.count*3);for(let g=0;g<o.count;g++){let y=o.getY(g);o.setY(g,y*.8+1.2);let p=.7+Math.random()*.3;a[g*3]=.16*p,a[g*3+1]=.22*p,a[g*3+2]=.12*p}r.setAttribute("color",new Ae(a,3)),r.computeVertexNormals(),this.bushGeo=r,this.boulderGeo=new Or(1,0),this.postGeo=new me(.1,.85,.14),this.postGeo.translate(0,.42,0),this.reflGeo=new me(.06,.08,.04);let l=new Ze(.08,.13,10,8);l.translate(0,5,0);let c=new Ze(.05,.05,2.6,6);c.rotateZ(Math.PI/2-.12),c.translate(1.25,9.9,0);let h=c.clone();h.scale(-1,1,1),this.lampPoleGeo=Gl([l,c,h]);let d=new me(.7,.1,.3),f=d.clone();f.translate(2.55,10.05,0);let u=d.clone();u.translate(-2.55,10.05,0),this.lampHeadGeo=Gl([f,u])}_buildBackdrop(){let n=[],s=[],r=[];for(let a=0;a<=4;a++)for(let l=0;l<=256;l++){let c=l/256*Math.PI*2,h=a/4,d=lf(1500,2900,h),f=wo(Math.cos(c)*3+10,Math.sin(c)*3+10,5),u=h===0?-40:(80+f*520+Jn(c*6,h*3,4)*120)*Math.sin(h*Math.PI*.5+.2);n.push(Math.cos(c)*d,u,Math.sin(c)*d);let g=.75+.25*h;s.push(.2*g,.24*g,.26*g)}for(let a=0;a<4;a++)for(let l=0;l<256;l++){let c=a*257+l,h=c+256+1;r.push(c,h,c+1,h,h+1,c+1)}let o=new fe;o.setAttribute("position",new kt(n,3)),o.setAttribute("color",new kt(s,3)),o.setIndex(r),o.computeVertexNormals(),this.backdrop=new nt(o,new Yt({vertexColors:!0,roughness:1,side:en})),this.backdrop.frustumCulled=!1,this.scene.add(this.backdrop)}_sweep(t,e,n,s,r=1/4,o=1){let a=Math.ceil((n-e)/s)+1,l=t.length,c=new Float32Array(a*l*3),h=new Float32Array(a*l*2),d=[0];for(let y=1;y<l;y++)d.push(d[y-1]+Math.hypot(t[y][0]-t[y-1][0],t[y][1]-t[y-1][1]));let f={};for(let y=0;y<a;y++){let p=Math.min(n,e+y*s);Le(p,f);for(let m=0;m<l;m++){let[_,M]=t[m],v=y*l+m;c[v*3]=f.x+f.rx*_,c[v*3+1]=f.y+M,c[v*3+2]=f.z+f.rz*_,h[v*2]=d[m]*o,h[v*2+1]=p*r}}let u=[];for(let y=0;y<a-1;y++)for(let p=0;p<l-1;p++){let m=y*l+p,_=m+l;u.push(m,m+1,_,m+1,_+1,_)}let g=new fe;return g.setAttribute("position",new Ae(c,3)),g.setAttribute("uv",new Ae(h,2)),g.setIndex(u),g.computeVertexNormals(),g}_terrain(t,e){let n=[-300,-245,-200,-165,-135,-110,-90,-74,-61,-50,-41,-34,-28,-23,-19,-16,-13.5,-11.9,-11.2,-10.6,10.6,10.95,11.6,12.3,13.3,14.6,16.2,18.2,20.6,23.5,27,31,36,42,49,57,67,79,94,112,134,160,190,225,260],s=4,r=Math.ceil((e-t)/s)+1,o=n.length,a=new Float32Array(r*o*3),l=new Float32Array(r*o*2),c=new Float32Array(r*o*3),h={},d=new Et(3885612),f=new Et(5658426),u=new Et(10656913),g=new Et(7499109),y=new Et(7236194),p=new Et;for(let M=0;M<r;M++){let v=Math.min(e,t+M*s);Le(v,h);for(let w=0;w<o;w++){let E=n[w],x=as(v,E),S=M*o+w;a[S*3]=h.x+h.rx*E,a[S*3+1]=x,a[S*3+2]=h.z+h.rz*E,l[S*2]=E/7,l[S*2+1]=v/7;let C=Math.max(.6,Math.abs(E)*.04),A=Math.abs(as(v,E+C)-as(v,E-C))/(2*C),P=Jn(v*.03,E*.03,3)*.5+.5,N=kl(.55,1.15,A+(P-.5)*.5);p.copy(d).lerp(f,P),p.lerp(P>.5?u:g,N),Math.abs(E)<12.5&&p.copy(y),c[S*3]=p.r,c[S*3+1]=p.g,c[S*3+2]=p.b}}let m=[];for(let M=0;M<r-1;M++)for(let v=0;v<o-1;v++){let w=M*o+v,E=w+o;m.push(w,w+1,E,w+1,E+1,E)}let _=new fe;return _.setAttribute("position",new Ae(a,3)),_.setAttribute("uv",new Ae(l,2)),_.setAttribute("color",new Ae(c,3)),_.setIndex(m),_.computeVertexNormals(),_}_buildChunk(t){let e=t*ls,n=e+ls,s=new ve,r=this.mats,o=Kn(t*7919+13),a=new nt(this._terrain(e,n),r.terrain);a.receiveShadow=!0,s.add(a);let l=this._sweep([[-10.5,.02],[0,.02],[10.5,.02]],e,n,2,1/24,1/21),c=new nt(l,r.road);c.receiveShadow=!0,s.add(c);let h=[[-.3,0],[-.24,.08],[-.11,.3],[-.1,.82],[.1,.82],[.11,.3],[.24,.08],[.3,0]];s.add(new nt(this._sweep(h,e,n,4,1/3,1),r.concrete));let d=[[10.9,-.1],[10.95,1.25],[11.05,1.36],[11.65,1.36]];s.add(new nt(this._sweep(d,e,n,4,1/4,1/1.4),r.stone));let f=[[-10.72,.52],[-10.82,.6],[-10.72,.68],[-10.82,.76],[-10.72,.84]];s.add(new nt(this._sweep(f,e,n,4),r.steel));let u={},g=Math.floor(ls/4),y=new An(this.postGeo,r.post,g),p=new An(this.reflGeo,r.reflector,g/2*2),m=new An(this.reflGeo,r.reflectorW,Math.floor(ls/12)),_=new ue,M=new wn,v=new On,w=new L,E=new L(1,1,1),x=0;for(let H=0;H<g;H++){let z=e+H*4;Le(z,u),v.set(0,Math.atan2(-u.tx,-u.tz),0),M.setFromEuler(v),w.set(u.x-u.rx*10.88,u.y,u.z-u.rz*10.88),_.compose(w,M,E),y.setMatrixAt(H,_),H%2===0&&(w.set(u.x-u.rx*10.7,u.y+.7,u.z-u.rz*10.7),_.compose(w,M,E),p.setMatrixAt(x++,_),w.set(u.x+u.rx*10.93,u.y+.9,u.z+u.rz*10.93),_.compose(w,M,E),p.setMatrixAt(x++,_))}p.count=x;for(let H=0;H<m.count;H++){let z=e+H*12+6;Le(z,u),v.set(0,Math.atan2(-u.tx,-u.tz),0),M.setFromEuler(v),w.set(u.x+u.rx*.13,u.y+.6,u.z+u.rz*.13),_.compose(w,M,E),m.setMatrixAt(H,_)}s.add(y,p,m);let S=[];for(let H=Math.ceil(e/80)*80;H<n;H+=80)S.push(H);if(S.length){let H=new An(this.lampPoleGeo,r.pole,S.length),z=new An(this.lampHeadGeo,r.lampHead,S.length);S.forEach((J,k)=>{Le(J,u),v.set(0,Math.atan2(-u.tx,-u.tz),0),M.setFromEuler(v),w.set(u.x,u.y+.8,u.z),_.compose(w,M,E),H.setMatrixAt(k,_),z.setMatrixAt(k,_);for(let Y of[-1,1]){let Z=new Ai(r.glow);Z.position.set(u.x+u.rx*2.55*Y,u.y+10.75,u.z+u.rz*2.55*Y),Z.scale.set(3.2,3.2,1),s.add(Z);let ut=new nt(new pe(16,16),r.pool);ut.rotation.x=-Math.PI/2,ut.position.set(u.x+u.rx*3.6*Y,u.y+.05,u.z+u.rz*3.6*Y),s.add(ut)}}),s.add(H,z)}let C=260,A=new An(this.treeGeo,r.tree,C),P=new An(this.bushGeo,r.tree,C),N=new An(this.boulderGeo,r.boulder,40),O=0,I=0,B=0;for(let H=0;H<900&&(O<C||I<C);H++){let z=e+o()*ls,k=o()<.55?-(13+Math.pow(o(),1.4)*260):13.5+Math.pow(o(),1.6)*200,Y=1,Z=as(z,k);if(Math.abs(as(z,k+Y)-as(z,k-Y))/(2*Y)>1.05+o()*.3)continue;Le(z,u),w.set(u.x+u.rx*k,Z-.2,u.z+u.rz*k),v.set(0,o()*6.28,0),M.setFromEuler(v);let At=.7+o()*.9,q=o();if(q<.45&&O<C)E.set(At,At*(.9+o()*.5),At),_.compose(w,M,E),A.setMatrixAt(O++,_);else if(q<.93&&I<C)E.set(At,At*.8,At),_.compose(w,M,E),P.setMatrixAt(I++,_);else if(B<40){v.set(o()*3,o()*3,o()*3),M.setFromEuler(v);let at=.5+o()*1.8;E.set(at,at*.7,at),_.compose(w,M,E),N.setMatrixAt(B++,_)}}E.set(1,1,1),A.count=O,P.count=I,N.count=B,s.add(A,P,N);for(let H of[y,p,m,A,P,N])H.computeBoundingSphere();return s}ensureChunks(t,e=!1){let n=Math.floor((t-220)/ls),s=Math.floor((t+1500)/ls);for(let[o,a]of this.chunks)(o<n-1||o>s+1)&&(this.scene.remove(a),a.traverse(l=>{l.geometry&&l.geometry!==this.treeGeo&&l.geometry!==this.bushGeo&&l.geometry!==this.boulderGeo&&l.geometry!==this.postGeo&&l.geometry!==this.reflGeo&&l.geometry!==this.lampPoleGeo&&l.geometry!==this.lampHeadGeo&&l.geometry.dispose()}),this.chunks.delete(o));let r=0;for(let o=n;o<=s;o++){if(this.chunks.has(o))continue;if(!e&&r>=1)break;let a=this._buildChunk(o);this.scene.add(a),this.chunks.set(o,a),r++}}update(t,e,n){this.sky.position.copy(e),this.backdrop.position.set(e.x,Vl(n)-30,e.z),this.skyUniforms.uTime.value+=t,this.sun.target.position.set(e.x,e.y,e.z),this.sun.position.set(e.x-300,e.y+220,e.z-400),this.ensureChunks(n)}};var Ao=new L;function Pn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ao.copy(t),Ao[n]=0,Ao.normalize();let c=.5*o/(o+a),h=1-Ao.angleTo(i)/l;return Math.sign(Ao[e])===1?h*c:a/(o+a)+c+c*(1-h)}var ce=class i extends me{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new L,c=new L,h=new L(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,g=d.length/6,y=new L,p=.5/o;for(let m=0,_=0;m<d.length;m+=3,_+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[m+0]=h.x*Math.sign(l.x)+c.x*r,d[m+1]=h.y*Math.sign(l.y)+c.y*r,d[m+2]=h.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/g)){case 0:y.set(1,0,0),u[_+0]=Pn(y,c,"z","y",r,n),u[_+1]=1-Pn(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),u[_+0]=1-Pn(y,c,"z","y",r,n),u[_+1]=1-Pn(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),u[_+0]=1-Pn(y,c,"x","z",r,t),u[_+1]=Pn(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),u[_+0]=1-Pn(y,c,"x","z",r,t),u[_+1]=1-Pn(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),u[_+0]=1-Pn(y,c,"x","y",r,t),u[_+1]=1-Pn(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),u[_+0]=Pn(y,c,"x","y",r,t),u[_+1]=1-Pn(y,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var hn=new L(-.37,1.27,.18),xi={W:1024,H:384};function Xl(i,t,e,n,s){let r=new L().subVectors(t,i),o=r.length(),a=new nt(new ce(e,o,n,2,Math.min(e,n)*.35),s);return a.position.copy(i).add(t).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new L(0,1,0),r.normalize()),a}function kx(i,t,e,n){let s=new fe;return s.setAttribute("position",new kt([...i,...t,...e,...n],3)),s.setAttribute("uv",new kt([0,0,1,0,1,1,0,1],2)),s.setIndex([0,1,2,0,2,3]),s.computeVertexNormals(),s}function ff(i,t){let e=new ve,n={leather:new Yt({color:3026482,roughness:.6,bumpMap:i.leatherBump,bumpScale:.35,envMapIntensity:.6}),leatherWheel:new Yt({color:2829103,roughness:.55,bumpMap:i.leatherBump,bumpScale:.5,envMapIntensity:.8}),soft:new Yt({color:3882050,roughness:.8,bumpMap:i.leatherBump,bumpScale:.15,envMapIntensity:.6}),piano:new yn({color:263173,roughness:.1,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1}),alu:new Yt({map:i.brushed,color:14212064,metalness:1,roughness:.3,envMapIntensity:1.2}),chrome:new Yt({color:16777215,metalness:1,roughness:.08,envMapIntensity:1.4}),carbon:new yn({map:i.carbon,roughness:.35,metalness:.2,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1}),fabric:new Yt({color:3421498,roughness:1}),stitch:new Yt({color:10687516,roughness:.6}),redMark:new Yt({color:11539741,roughness:.5}),rubber:new Yt({color:723724,roughness:.9}),paint:new yn({color:990518,metalness:.65,roughness:.3,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.6}),led:new Te({color:new Et(.9,.85,.8)}),grille:new Yt({map:i.grille,roughness:.7,metalness:.4}),buttons:new Yt({map:i.buttons,emissiveMap:i.buttons,emissive:16777215,emissiveIntensity:.45,roughness:.4}),emblem:new Yt({map:i.emblem,metalness:.6,roughness:.3}),carpet:new Yt({color:1842207,roughness:1})};n.wood=n.carbon;let s=i.carbon.clone();s.repeat.set(4,4),s.needsUpdate=!0,n.carbonSq=new yn({map:s,roughness:.35,metalness:.2,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1});{let p=new qn;p.moveTo(.4,.52),p.quadraticCurveTo(.47,.66,.5,.76),p.lineTo(.56,.9),p.quadraticCurveTo(.58,.95,.62,.968),p.quadraticCurveTo(.7,.99,.82,.995),p.quadraticCurveTo(1.05,.985,1.2,.935),p.lineTo(1.34,.88),p.lineTo(1.34,.74),p.lineTo(.4,.52);let m=new Ci(p,{depth:1.8,bevelEnabled:!0,bevelThickness:.025,bevelSize:.02,bevelSegments:3,curveSegments:14});m.rotateY(Math.PI/2),m.translate(-.9,0,0),e.add(new nt(m,n.soft));let _=new nt(new me(1.78,.002,.003),n.stitch);_.position.set(0,.972,-.63),e.add(_);let M=new nt(new pe(1.74,.07),n.wood);M.position.set(0,.825,-.507),M.rotation.x=-.405,e.add(M);let v=new nt(new me(1.74,.005,.01),n.chrome);v.position.set(0,.862,-.52),v.rotation.x=-.405,e.add(v);let w=new nt(new me(1.7,.004,.004),n.led);w.position.set(0,.935,-.552),e.add(w);let E=(x,S)=>{let C=S-x,A=(x+S)/2,P=new ve,N=new nt(new pe(C,.045),new Yt({color:197379,roughness:1}));P.add(N);for(let B=0;B<4;B++){let H=new nt(new me(C-.006,.0025,.012),n.piano);H.position.set(0,-.016+B*.011,.004),H.rotation.x=.25,P.add(H)}let O=new nt(new me(C+.01,.003,.006),n.alu);O.position.set(0,.025,.003),P.add(O);let I=O.clone();I.position.y=-.025,P.add(I),P.position.set(A,.895,-.531),P.rotation.x=-.405,e.add(P)};E(-.86,-.62),E(-.34,-.02),E(.02,.34),E(.56,.86)}let r=(p,m)=>{let _=sn(p,m),M=Ie(_,{aniso:8});return M.wrapS=M.wrapT=Pe,{canvas:_,tex:M}},o=r(xi.W,xi.H),a=r(xi.W,xi.H);{let p=new ve;p.position.set(-.37,1.025,-.625);let m=new nt(new pe(.44,.165),new Te({map:o.tex,color:new Et(1.1,1.1,1.1)}));p.add(m);for(let A of[-1,1]){let P=new nt(new Rn(.071,.003,10,64),n.chrome);P.position.set(A*.1277,-.0035,.0025),p.add(P);let N=new nt(new Rn(.0765,.0037,10,64),n.piano);N.position.set(A*.1277,-.0035,.002),p.add(N)}p.lookAt(hn),e.add(p);let _=new nt(new ce(.47,.165,.08,3,.02),n.soft);_.position.set(-.37,1,-.705),e.add(_);let M=new nt(new ce(.5,.026,.12,5,.012),n.leather);M.position.set(-.37,1.118,-.6),M.rotation.x=.12,e.add(M);let v=new nt(new me(.46,.0016,.0016),n.stitch);v.position.set(-.37,1.106,-.545),e.add(v);let w=new ve,E=new nt(new pe(.4,.15),new Te({map:a.tex,color:new Et(1.1,1.1,1.1)}));E.position.z=.009,w.add(E);let x=new nt(new ce(.418,.168,.016,3,.006),n.piano);w.add(x);let S=new nt(new ce(.424,.174,.008,3,.004),n.alu);S.position.z=-.006,w.add(S),w.position.set(.14,1.09,-.67),w.lookAt(hn.x*.55,hn.y,hn.z+.2),e.add(w);let C=new nt(new ce(.12,.08,.06,2,.015),n.piano);C.position.set(.14,1,-.69),e.add(C)}let l=r(512,160);{let p=new nt(new ce(.4,.36,.24,3,.03),n.soft);p.position.set(0,.68,-.53),e.add(p);let m=new ve;m.position.set(0,.75,-.405),m.rotation.x=-.22,e.add(m);let _=new nt(new ce(.36,.2,.012,3,.006),n.piano);_.position.set(0,.02,0),m.add(_);let M=new nt(new pe(.33,.041),new Yt({map:i.stackButtons,emissiveMap:i.stackButtons,emissive:16777215,emissiveIntensity:.35,roughness:.3}));M.position.set(0,.085,.0065),m.add(M);let v=new nt(new me(.34,.003,.004),n.chrome);v.position.set(0,.057,.008),m.add(v);let w=new nt(new pe(.33,.1),new Te({map:l.tex,color:new Et(1.05,1.05,1.05)}));w.position.set(0,-.002,.0065),m.add(w);for(let H of[-1,1]){let z=new nt(new Ze(.019,.02,.022,32),n.alu);z.rotation.x=Math.PI/2,z.position.set(H*.128,-.005,.016),m.add(z);let J=new nt(new Rn(.0205,.0022,8,32),n.chrome);J.position.set(H*.128,-.005,.027),m.add(J)}let E=new nt(new pe(.36,.04),n.wood);E.position.set(0,-.09,.003),m.add(E);let x=new nt(new pe(.3,.07),new Yt({color:328966,roughness:1}));x.position.set(0,-.15,.002),m.add(x);let S=new nt(new ce(.28,.22,.95,3,.04),n.soft);S.position.set(0,.52,-.02),e.add(S);let C=new nt(new pe(.22,.5),n.carbonSq);C.rotation.x=-Math.PI/2,C.position.set(0,.632,-.18),e.add(C);let A=new nt(new Ze(.035,.04,.02,24),n.alu);A.position.set(0,.64,-.16),e.add(A);let P=new nt(new Nr(.022,.05,6,16),n.leather);P.position.set(0,.69,-.16),P.rotation.x=.25,e.add(P);let N=new nt(new Ze(.018,.018,.006,20),n.alu);N.position.set(0,.727,-.15),N.rotation.x=.25,e.add(N);let O=new nt(new Ze(.03,.032,.025,32),n.alu);O.position.set(0,.645,.04),e.add(O);let I=new nt(new Ze(.014,.014,.01,20),new Yt({color:2229253,emissive:16722474,emissiveIntensity:.6}));I.position.set(-.11,.8,-.43),I.rotation.x=-.9,e.add(I);let B=new nt(new ce(.24,.07,.36,3,.03),n.leather);B.position.set(0,.66,.42),e.add(B)}{let p=new nt(new pe(1.7,2.4),n.carpet);p.rotation.x=-Math.PI/2,p.position.set(0,.28,-.1),e.add(p)}let c=new ve;c.position.set(-.37,.895,-.4),c.rotation.x=-.35,e.add(c);let h=new ve;c.add(h);{let m=[];for(let J=0;J<120;J++){let k=J/120*Math.PI*2,Y=.19*Math.cos(k),Z=.19*Math.sin(k),ut=-.8*.19;Z<ut&&(Z=ut+(Z-ut)*.22),m.push(new L(Y,Z,0))}let _=new Hs(m,!0),M=new nt(new $r(_,260,.0345,24,!0),n.leatherWheel);h.add(M);let v=new nt(new Rn(.19-.03,.0012,4,140),n.stitch);v.position.z=.012,h.add(v);let w=new nt(new me(.006,.0014,.07),n.alu);w.position.set(0,.19+.0345,0),w.rotation.x=0,h.add(w);let E=(J,k,Y)=>{let Z=new Ci(J,{depth:k,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:3,curveSegments:10});return new nt(Z,Y)},x=new Yt({map:i.brushed,color:10922673,metalness:.8,roughness:.4,envMapIntensity:.85}),S=new Zr([new et(0,-.01),new et(.08,-.01),new et(.081,.01),new et(.076,.022),new et(.06,.031),new et(.03,.034),new et(0,.034)],64);S.rotateX(Math.PI/2);let C=new nt(S,n.leather);C.position.set(0,0,0),h.add(C);let A=new nt(new Rn(.0335,.0026,10,48),n.chrome);A.position.set(0,0,.0345),h.add(A);let P=new nt(new Ki(.0335,56),n.emblem);P.position.set(0,0,.0348),h.add(P);let N=new nt(new Rn(.074,.0016,8,64),n.chrome);N.position.set(0,0,.0245),h.add(N);for(let J of[-1,1]){let k=new qn;k.moveTo(.05,.048),k.lineTo(.14,.06),k.quadraticCurveTo(.176,.062,.182,.03),k.lineTo(.182,-.04),k.quadraticCurveTo(.176,-.07,.14,-.064),k.lineTo(.05,-.04),k.closePath();let Y=E(k,.016,x);Y.scale.x=J,Y.position.set(0,0,-.002),h.add(Y);let Z=new nt(new ce(.085,.064,.012,3,.008),n.piano);Z.position.set(J*.112,-.003,.0215),h.add(Z);let ut=new nt(new pe(.078,.049),new Yt({map:J<0?i.btnLeft:i.btnRight,emissiveMap:J<0?i.btnLeft:i.btnRight,emissive:16777215,emissiveIntensity:.42,roughness:.35}));ut.position.set(J*.112,-.003,.0283),h.add(ut);let At=new nt(new ce(.036,.02,.012,2,.005),new Yt({color:13113890,roughness:.35}));At.position.set(J*.13,.052,.02),At.rotation.z=J*-.16,h.add(At);let q=new nt(new pe(.032,.017),new Yt({map:J<0?i.redS1:i.redS2,emissiveMap:J<0?i.redS1:i.redS2,emissive:16777215,emissiveIntensity:.25,roughness:.3}));q.position.set(J*.13,.052,.0265),q.rotation.z=J*-.16,h.add(q);let at=new nt(new ce(.03,.085,.006,2,.003),n.alu);at.position.set(J*.152,.03,-.055),at.rotation.z=J*-.35,h.add(at)}let O=new qn;O.moveTo(-.034,-.05),O.lineTo(.034,-.05),O.lineTo(.056,-.148),O.lineTo(-.056,-.148),O.closePath();let I=E(O,.014,x);I.position.z=-.002,h.add(I);let B=new nt(new ce(.03,.058,.01,3,.005),n.piano);B.position.set(0,-.098,.017),h.add(B);let H=new nt(new pe(.006,.05),new Te({color:2273612}));H.position.set(0,-.098,.0225),h.add(H);let z=new nt(new Ze(.05,.065,.3,20),n.soft);z.rotation.x=Math.PI/2,z.position.set(0,-.01,-.17),c.add(z);for(let J of[-1,1]){let k=new nt(new Ze(.007,.006,.14,8),n.piano);k.rotation.z=Math.PI/2+J*.25,k.position.set(J*.1,0,-.1),c.add(k)}}let d=[-.74,.88,-1.32],f=[.74,.88,-1.32],u=[.66,1.6,-.22],g=[-.66,1.6,-.22];{for(let A of[-1,1])e.add(Xl(new L(A*.77,.86,-1.3),new L(A*.69,1.61,-.21),.075,.07,n.fabric));let p=new nt(new ce(1.4,.06,.14,2,.02),n.fabric);p.position.set(0,1.61,-.19),e.add(p);let m=new nt(new pe(1.45,1.9),n.fabric);m.rotation.x=Math.PI/2,m.position.set(0,1.63,.72),e.add(m);for(let A of[-1,1]){let P=new nt(new ce(.42,.025,.17,2,.01),n.fabric);P.position.set(A*.36,1.595,-.07),e.add(P)}let _=sn(4,128),M=_.getContext("2d"),v=M.createLinearGradient(0,128,0,0);v.addColorStop(0,"rgb(14,14,14)"),v.addColorStop(.84,"rgb(14,14,14)"),v.addColorStop(.92,"rgb(80,80,80)"),v.addColorStop(1,"rgb(130,130,130)"),M.fillStyle=v,M.fillRect(0,0,4,128);let w=Ie(_);w.wrapS=w.wrapT=Pe;let E=new nt(kx(d,f,u,g),new yn({color:7307926,alphaMap:w,transparent:!0,roughness:.05,metalness:0,envMapIntensity:.25,depthWrite:!1,side:en}));E.renderOrder=5,e.add(E);let x=new ve,S=new nt(new ce(.27,.075,.035,3,.015),n.piano);x.add(S);let C=new nt(new pe(.255,.062),new Te({color:7829367}));C.position.z=.0185,x.add(C),x.position.set(0,1.445,-.28),x.lookAt(hn.x+.15,hn.y+.05,hn.z),e.add(x),e.add(Xl(new L(0,1.5,-.28),new L(0,1.61,-.21),.03,.02,n.piano)),e.userData.rearMirror=C}{let _=[],M=[];for(let x=0;x<=16;x++)for(let S=0;S<=24;S++){let C=1.32+x/16*1.45,A=(S/24-.5)*1.84*(1-x/16*.04),P=Math.abs(A),N=.872-(C-1.32)*.05-Math.pow(P/.92,4)*.05;N+=.014*Math.exp(-Math.pow((P-.32)/.08,2))*(1-x/16*.5),N+=.03*Math.exp(-Math.pow((P-.86)/.07,2)),_.push(A,N,-C)}for(let x=0;x<16;x++)for(let S=0;S<24;S++){let C=x*25+S,A=C+24+1;M.push(C,A,C+1,C+1,A,A+1)}let v=new fe;v.setAttribute("position",new kt(_,3)),v.setIndex(M),v.computeVertexNormals();let w=new nt(v,n.paint);e.add(w);let E=new nt(new me(1.5,.02,.12),n.rubber);E.position.set(0,.875,-1.36),e.add(E);for(let[x,S,C]of[[-.55,.62,.05],[.12,.58,.04]]){let A=new nt(new me(S,.012,.018),n.rubber);A.position.set(x+S/2,.895,-1.37),A.rotation.z=C,e.add(A)}}for(let p of[-1,1]){let m=p*.8,_=new nt(new ce(.06,.62,1.35,3,.02),n.soft);_.position.set(m,.66,.05),e.add(_);let M=new nt(new ce(.1,.04,1.35,3,.015),n.leather);M.position.set(m-p*.02,.985,.05),e.add(M);let v=new nt(new pe(1.1,.12),n.wood);v.position.set(m-p*.032,.8,.05),v.rotation.y=-p*Math.PI/2,e.add(v);let w=new nt(new me(.004,.004,1.12),n.chrome);w.position.set(m-p*.035,.735,.05),e.add(w);let E=new nt(new me(.004,.004,1.05),n.led);E.position.set(m-p*.034,.875,.05),e.add(E);let x=new nt(new ce(.09,.05,.55,3,.02),n.leather);x.position.set(m-p*.06,.7,.15),e.add(x);let S=new nt(new ce(.02,.025,.1,2,.008),n.chrome);S.position.set(m-p*.04,.88,-.3),e.add(S);let C=new nt(new Ki(.075,32),n.grille);C.position.set(m-p*.032,.5,-.38),C.rotation.y=-p*Math.PI/2,e.add(C);let A=new nt(new Rn(.077,.004,8,40),n.alu);A.position.copy(C.position),A.rotation.y=-p*Math.PI/2,e.add(A);let P=new nt(new Ki(.05,32),new Yt({map:i.grille,color:13225170,metalness:.8,roughness:.35}));P.position.set(m-p*.036,.935,-.56),P.rotation.y=-p*Math.PI/2,P.rotation.x=0,e.add(P);let N=new nt(new Rn(.052,.004,8,40),n.alu);N.position.copy(P.position),N.rotation.y=-p*Math.PI/2,e.add(N);let O=new nt(new ce(.06,.16,.3,2,.02),n.soft);O.position.set(p*.79,1,-.75),e.add(O);let I=new nt(new pe(1.65,.6),new yn({color:8096410,transparent:!0,opacity:.12,roughness:.05,depthWrite:!1,side:en}));I.position.set(p*.84,1.29,-.15),I.rotation.y=Math.PI/2,I.renderOrder=5,e.add(I),e.add(Xl(new L(p*.8,.98,.72),new L(p*.7,1.62,.75),.1,.12,n.fabric));let B=new ve,H=new nt(new ce(.22,.13,.1,3,.04),n.paint);B.add(H);let z=new nt(new pe(.19,.1),new Te({color:7829367}));z.position.z=.051,B.add(z),B.position.set(p*1.04,1.03,-.72),B.lookAt(hn.x,hn.y,hn.z+.4),e.add(B),e.add(Xl(new L(p*.82,1,-.74),new L(p*.96,1.01,-.73),.04,.06,n.paint)),p<0?e.userData.leftMirror=z:e.userData.rightMirror=z}{let p=new ve,m=new nt(new ce(.52,.14,.55,3,.05),n.leather);m.position.set(0,.45,.25),p.add(m);let _=new nt(new ce(.52,.72,.14,3,.05),n.leather);_.position.set(0,.85,.58),_.rotation.x=.22,p.add(_);let M=new nt(new ce(.28,.5,.02,2,.01),n.grille);M.position.set(0,.86,.505),M.rotation.x=.22,p.add(M);let v=new nt(new ce(.28,.2,.12,3,.04),n.leather);v.position.set(0,1.33,.69),v.rotation.x=.22,p.add(v),p.position.x=.4,e.add(p)}let y=new to(14674175,.7,1.8,1.5);return y.position.set(-.6,.9,-.1),e.add(y),{group:e,wheelSpin:h,M:n,cluster:o,center:a,climate:l,leds:[n.led],mirrors:{rear:e.userData.rearMirror,left:e.userData.leftMirror,right:e.userData.rightMirror}}}var Ce='"Segoe UI", "Helvetica Neue", Arial, sans-serif';function bn(i,t,e,n,s,r){i.beginPath(),i.roundRect(t,e,n,s,r)}function pf(i,t,e,n,s){i.save(),i.translate(t,e),i.scale(n,1),i.fillStyle=s?"#2fe36b":"rgba(255,255,255,0.07)",s&&(i.shadowColor="#2fe36b",i.shadowBlur=12),i.beginPath(),i.moveTo(-14,0),i.lineTo(0,-11),i.lineTo(0,-5),i.lineTo(12,-5),i.lineTo(12,5),i.lineTo(0,5),i.lineTo(0,11),i.closePath(),i.fill(),i.restore()}function mf(i,t,e,n,s,r,o,a,l,c,h,d){let f=Math.PI*.75,u=Math.PI*2.25,g=m=>f+(u-f)*Math.min(1,Math.max(0,m/r)),y=i.createRadialGradient(t,e,n*.86,t,e,n*1.02);y.addColorStop(0,"rgba(40,60,90,0)"),y.addColorStop(.8,"rgba(70,110,170,0.35)"),y.addColorStop(1,"rgba(70,110,170,0)"),i.fillStyle=y,i.beginPath(),i.arc(t,e,n*1.02,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(190,205,225,0.55)",i.lineWidth=2.5,i.beginPath(),i.arc(t,e,n,f,u),i.stroke(),c<r&&(i.strokeStyle="#d9252b",i.lineWidth=9,i.beginPath(),i.arc(t,e,n-6,g(c),u),i.stroke()),i.textAlign="center",i.textBaseline="middle";for(let m=0;m<=r+.001;m+=o){let _=g(m),M=Math.abs(m/a-Math.round(m/a))<1e-6;i.strokeStyle=m>=c?"#ff4a4a":"#e6ebf2",i.lineWidth=M?3.2:1.6;let v=n-(M?22:13);i.beginPath(),i.moveTo(t+Math.cos(_)*v,e+Math.sin(_)*v),i.lineTo(t+Math.cos(_)*(n-3),e+Math.sin(_)*(n-3)),i.stroke(),M&&(i.fillStyle=m>=c?"#ff5a5a":"#eef2f7",i.font=`600 ${Math.round(n*.14)}px ${Ce}`,i.fillText(String(Math.round(m/l)),t+Math.cos(_)*(n-44),e+Math.sin(_)*(n-44)))}let p=g(s);i.save(),i.shadowColor="#ff3b2f",i.shadowBlur=10,i.strokeStyle="#ff4a2f",i.lineWidth=5,i.lineCap="round",i.beginPath(),i.moveTo(t+Math.cos(p)*n*.18,e+Math.sin(p)*n*.18),i.lineTo(t+Math.cos(p)*(n-8),e+Math.sin(p)*(n-8)),i.stroke(),i.restore(),i.fillStyle="#0b0d11",i.beginPath(),i.arc(t,e,n*.2,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(200,210,225,0.5)",i.lineWidth=2,i.stroke(),i.fillStyle="#9fb0c6",i.font=`600 ${Math.round(n*.1)}px ${Ce}`,i.fillText(h,t,e+n*.42),d&&(i.font=`500 ${Math.round(n*.085)}px ${Ce}`,i.fillText(d,t,e+n*.56))}var ql=class{constructor(t){this.cl=t.cluster,this.ce=t.center,this.cm=t.climate,this.acc=1,this.slowAcc=1,this.trackT=37,this.drawClimate(21.5,22)}drawClimate(t,e){let n=this.cm.canvas.getContext("2d"),s=512,r=160,o=n.createLinearGradient(0,0,0,r);o.addColorStop(0,"#0c0d10"),o.addColorStop(1,"#050507"),n.fillStyle=o,n.fillRect(0,0,s,r),n.textAlign="center",n.textBaseline="middle",n.fillStyle="#ff5a3c",n.shadowColor="#ff5a3c",n.shadowBlur=8,n.font=`600 34px ${Ce}`,n.fillText(t.toFixed(1),130,62),n.fillText(e.toFixed(1),382,62),n.shadowBlur=0,["AUTO","A/C","MAX","\u2744","\u224B"].forEach((l,c)=>{let h=176+c%3*56,d=c<3?40:100,f=c<3?h:204+(c-3)*56;n.fillStyle="#16181d",bn(n,f-24,d-20,48,40,7),n.fill(),n.strokeStyle="rgba(255,255,255,0.12)",n.lineWidth=1.5,n.stroke(),n.fillStyle=c===0||c===1?"#ff8a3c":"#e7ebf1",n.font=`700 ${l.length>2?14:20}px ${Ce}`,n.fillText(l,f,d)});for(let l=0;l<5;l++)n.fillStyle=l<3?"#e7ebf1":"rgba(255,255,255,0.15)",n.beginPath(),n.arc(100+l*16,118,4,0,Math.PI*2),n.fill();for(let l=0;l<5;l++)n.fillStyle=l<3?"#e7ebf1":"rgba(255,255,255,0.15)",n.beginPath(),n.arc(348+l*16,118,4,0,Math.PI*2),n.fill();this.cm.tex.needsUpdate=!0}update(t,e){this.acc+=t,this.slowAcc+=t,this.trackT+=t,!(this.acc<1/30)&&(this.acc=0,this.drawCluster(e),this.slowAcc>1/12&&(this.slowAcc=0,this.drawCenter(e)))}drawCluster(t){let e=this.cl.canvas.getContext("2d"),n=xi.W,s=xi.H,r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#05070b"),r.addColorStop(1,"#010203"),e.fillStyle=r,e.fillRect(0,0,n,s);let o=e.createRadialGradient(n/2,s*.55,10,n/2,s*.55,420);o.addColorStop(0,"rgba(30,55,95,0.35)"),o.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=o,e.fillRect(0,0,n,s),mf(e,215,200,165,t.speedKmh,330,10,40,1,999,"km/h"),mf(e,809,200,165,t.rpm/1e3,8,.5,1,1,6.5,"1/min x1000");let a=n/2;e.textAlign="center",e.textBaseline="middle",e.fillStyle="rgba(255,255,255,0.05)",bn(e,a-108,70,216,250,14),e.fill();let l=92,c=176;e.save(),e.beginPath(),e.rect(a-100,l,200,c-l),e.clip();let h=(u,g)=>{let p=22+58*((g-l)/(c-l));return a+(u-t.d)/7.2*p*2*.62},d=t.speedKmh>60,f=(u,g,y)=>{e.strokeStyle=g,e.lineWidth=3,e.setLineDash(y?[9,8]:[]),e.lineDashOffset=-(t.s*4)%17,e.beginPath(),e.moveTo(h(u,l),l),e.lineTo(h(u,c),c),e.stroke()};f(1.45,d?"#2fe36b":"#c9d3e0",!1),f(5.1,"#c9d3e0",!0),f(8.75,d?"#2fe36b":"#c9d3e0",!1),e.setLineDash([]);for(let u of t.traffic){if(u.ds<2||u.ds>140||u.d<0)continue;let g=c-(c-l)*Math.pow(u.ds/140,.6),y=(g-l)/(c-l),p=8+16*y;e.fillStyle=u.ds<30?"#ffb02e":"#c4cedb",bn(e,h(u.d,g)-p/2,g-p*.6,p,p*.85,3),e.fill()}e.restore(),e.fillStyle="#e6ecf5",bn(e,a-11,160,22,28,6),e.fill(),e.fillStyle="#ffffff",e.font=`700 44px ${Ce}`,e.fillText(String(Math.round(t.speedKmh)),a,222),e.fillStyle="#8fa2bb",e.font=`600 15px ${Ce}`,e.fillText("km/h",a,252),e.fillStyle=t.gear==="R"?"#ff6b5b":"#ffffff",e.font=`700 26px ${Ce}`,e.fillText(t.gear,a,288),e.fillStyle="#ff5a4a",e.font=`700 13px ${Ce}`,e.fillText("SPORT",a,310),e.fillStyle="#e8edf5",e.font=`600 17px ${Ce}`,e.fillText(t.clock,a-62,34),e.fillText(`${t.tempOut}\xB0C`,a+62,34),d&&(e.fillStyle="#2fe36b",e.font=`700 12px ${Ce}`,e.fillText("\u015EER\u0130T AS\u0130STANI",a,82)),pf(e,a-150,34,1,(t.indicator===-1||t.hazard)&&t.blinkOn),pf(e,a+150,34,-1,(t.indicator===1||t.hazard)&&t.blinkOn),t.highBeam&&(e.fillStyle="#3d8bff",e.beginPath(),e.arc(a-190,34,9,Math.PI/2,-Math.PI/2),e.fill(),e.fillRect(a-207,28,13,3),e.fillRect(a-207,34,13,3),e.fillRect(a-207,40,13,3)),t.tcs&&(e.fillStyle="#ffb02e",e.font=`700 14px ${Ce}`,e.fillText("TCS",a+195,34)),e.fillStyle="rgba(255,255,255,0.12)",bn(e,155,330,120,6,3),e.fill(),e.fillStyle=t.fuel<.15?"#ff6b5b":"#e8edf5",bn(e,155,330,120*t.fuel,6,3),e.fill(),e.fillStyle="#8fa2bb",e.font=`600 13px ${Ce}`,e.fillText(`${Math.round(t.rangeKm)} km`,215,352),e.fillText(`${Math.round(t.odo)} km`,809,340),e.fillText(`Ya\u011F ${Math.round(t.oilTemp)}\xB0C`,809,358),this.cl.tex.needsUpdate=!0}drawCenter(t){let e=this.ce.canvas.getContext("2d"),n=xi.W,s=xi.H,r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#0b1321"),r.addColorStop(1,"#04070d"),e.fillStyle=r,e.fillRect(0,0,n,s),e.textBaseline="middle",e.fillStyle="rgba(255,255,255,0.04)",e.fillRect(0,0,n,36),e.fillStyle="#e8edf5",e.font=`600 18px ${Ce}`,e.textAlign="left",e.fillText("Navigasyon",18,18),e.textAlign="right",e.fillText(`${t.clock}   ${t.tempOut}\xB0C`,n-18,18);let o=12,a=46,l=640,c=s-58;e.save(),bn(e,o,a,l,c,12),e.clip(),e.fillStyle="#0e1a2c",e.fillRect(o,a,l,c),e.fillStyle="rgba(70,110,80,0.10)";for(let P=0;P<7;P++){let N=o+(P*113+Math.floor(t.s*.05))%l,O=a+(P*61+Math.floor(t.s*.2))%c;e.beginPath(),e.arc(N,O,45+P*7,0,Math.PI*2),e.fill()}let h=o+l/2,d=a+c-50,f=.22,u=Math.cos(t.yaw),g=Math.sin(t.yaw),y=(P,N)=>{let O=P-t.x,I=N-t.z;return[h+(O*u-I*g)*f,d+(O*g+I*u)*f]},p={};e.strokeStyle="rgba(150,170,200,0.25)",e.lineWidth=3;for(let P=Math.floor((t.s-200)/300);P<(t.s+1400)/300;P++){Le(P*300+120,p);let N=P%2?1:-1,O=y(p.x,p.z),I=y(p.x+p.rx*N*600+p.tx*200,p.z+p.rz*N*600+p.tz*200);e.beginPath(),e.moveTo(O[0],O[1]),e.lineTo(I[0],I[1]),e.stroke()}e.lineJoin="round";for(let[P,N]of[[12,"rgba(40,140,255,0.25)"],[6,"#3b9bff"]]){e.strokeStyle=N,e.lineWidth=P,e.beginPath();for(let O=t.s-300,I=0;O<t.s+1500;O+=20,I++){Le(O,p);let B=y(p.x,p.z);I?e.lineTo(B[0],B[1]):e.moveTo(B[0],B[1])}e.stroke()}e.fillStyle="#ffffff",e.shadowColor="#3b9bff",e.shadowBlur=14,e.beginPath(),e.moveTo(h,d-15),e.lineTo(h+11,d+11),e.lineTo(h,d+4),e.lineTo(h-11,d+11),e.closePath(),e.fill(),e.shadowBlur=0,e.fillStyle="rgba(8,14,24,0.88)",bn(e,o+12,a+12,250,66,10),e.fill(),e.fillStyle="#3b9bff",e.font=`700 28px ${Ce}`,e.textAlign="left",e.fillText("\u2191",o+26,a+45);let m=(5e3-t.s%5e3)/1e3;e.fillStyle="#e8edf5",e.font=`700 23px ${Ce}`,e.fillText(`${m.toFixed(1)} km`,o+58,a+34),e.fillStyle="#8fa2bb",e.font=`500 15px ${Ce}`,e.fillText("O-77 Kanyon Otoyolu",o+58,a+58),e.fillStyle="#ffffff",e.beginPath(),e.arc(o+40,a+c-36,22,0,Math.PI*2),e.fill(),e.strokeStyle="#e0261c",e.lineWidth=5,e.stroke(),e.fillStyle="#111",e.font=`700 17px ${Ce}`,e.textAlign="center",e.fillText("120",o+40,a+c-35),e.fillStyle="rgba(8,14,24,0.88)",bn(e,o+l-150,a+c-58,138,46,10),e.fill(),e.fillStyle="#e8edf5",e.font=`600 17px ${Ce}`,e.fillText(t.eta,o+l-81,a+c-42),e.fillStyle="#8fa2bb",e.font=`500 13px ${Ce}`,e.fillText("Var\u0131\u015F",o+l-81,a+c-22),e.restore();let _=o+l+12,M=n-_-12,v=a;e.fillStyle="rgba(255,255,255,0.05)",bn(e,_,v,M,c,12),e.fill();let w=130,E=e.createLinearGradient(_+16,v+16,_+16+w,v+16+w);E.addColorStop(0,"#f2c14e"),E.addColorStop(.5,"#e86a3a"),E.addColorStop(1,"#4b2a6a"),e.fillStyle=E,bn(e,_+16,v+16,w,w,10),e.fill(),e.fillStyle="rgba(255,255,255,0.85)",e.beginPath(),e.arc(_+16+w*.62,v+16+w*.4,22,0,Math.PI*2),e.fill(),e.fillStyle="rgba(20,10,30,0.8)",e.beginPath(),e.moveTo(_+16,v+16+w),e.lineTo(_+16+w*.45,v+16+w*.55),e.lineTo(_+16+w,v+16+w),e.fill(),e.textAlign="left",e.fillStyle="#e8edf5",e.font=`600 19px ${Ce}`,e.fillText("Gece S\xFCr\xFC\u015F\xFC",_+160,v+46),e.fillStyle="#8fa2bb",e.font=`500 15px ${Ce}`,e.fillText("NL FM 98.4",_+160,v+72);let x=246,S=this.trackT%x;e.fillStyle="rgba(255,255,255,0.12)",bn(e,_+16,v+172,M-32,5,3),e.fill(),e.fillStyle="#ff7a3a",bn(e,_+16,v+172,(M-32)*S/x,5,3),e.fill(),e.fillStyle="#e8edf5";let C=_+M/2,A=v+240;e.beginPath(),e.moveTo(C-50,A),e.lineTo(C-64,A-10),e.lineTo(C-64,A+10),e.fill(),e.beginPath(),e.arc(C,A,22,0,Math.PI*2),e.fill(),e.fillStyle="#0a1220",e.fillRect(C-8,A-10,5,20),e.fillRect(C+3,A-10,5,20),e.fillStyle="#e8edf5",e.beginPath(),e.moveTo(C+50,A),e.lineTo(C+64,A-10),e.lineTo(C+64,A+10),e.fill(),this.ce.tex.needsUpdate=!0}};var ir=1900,Gx=2.98,gf=.35,Yl=3.15,_f=[5,3.2,2.14,1.72,1.31,1,.82,.64],Vx=305/3.6;function Wx(i){return i<1800?430+(i-800)/1e3*320:i<5800?750:Math.max(0,750-(i-5800)*.16)}var Zl=class{constructor(){this.reset(120,mn.lanes[1]),this.events=[]}reset(t,e){let n=Le(t);this.x=n.x+n.rx*e,this.z=n.z+n.rz*e,this.y=n.y,this.yaw=Oi(t),this.vx=0,this.vz=0,this.vLong=0,this.vLat=0,this.s=t,this.d=e,this.steer=0,this.steerInput=0,this.gear=1,this.mode="D",this.rpm=800,this.throttle=0,this.brake=0,this.shiftT=0,this.accLong=0,this.accLat=0,this.slip=0,this.tcs=!1,this.pitch=0,this.stillT=0,this.impact=0}update(t,e){let n=e.axis!==void 0?e.axis:(e.left?1:0)-(e.right?1:0),s=n===0?3.2:Math.sign(n)!==Math.sign(this.steerInput)?4.5:2.2;this.steerInput+=Qn(n-this.steerInput,-s*t,s*t);let r=Math.abs(this.vLong),o=.58/(1+r/16);this.steer=this.steerInput*o;let a=e.up?1:0,l=e.down?1:0;this.mode==="D"||this.mode==="N"?l&&this.vLong<.4&&!a?(this.stillT+=t,this.stillT>.25&&(this.mode="R",this.gear=1,this.stillT=0,this.events.push("gear"))):this.stillT=0:this.mode==="R"&&(a&&this.vLong>-.4&&!l?(this.stillT+=t,this.stillT>.2&&(this.mode="D",this.gear=1,this.stillT=0,this.events.push("gear"))):this.stillT=0);let c=0,h=0;this.mode==="D"?(c=a,h=l):this.mode==="R"&&(c=l,h=a),this.throttle+=(c-this.throttle)*Math.min(1,t*8),this.brake=h;let d=_f[this.gear-1],f=Math.abs(this.vLong)/(2*Math.PI*gf)*60,u=f*d*Yl;this.mode==="R"&&(u=f*4.2*Yl);let g=900+this.throttle*3200;if(this.gear===1&&u<g&&(u=u+(g-u)*.85),u=Math.max(780,u),this.shiftT>0&&(this.shiftT-=t),this.rpm+=(u-this.rpm)*Math.min(1,t*14),this.rpm=Math.min(this.rpm,7300),this.mode==="D"&&this.shiftT<=0){let Z=2400+this.throttle*4400,ut=1250+this.throttle*2300;u>Z&&this.gear<8?(this.gear++,this.shiftT=.16,this.events.push("shift")):this.gear>1&&f*_f[this.gear-2]*Yl<6500&&u<ut&&(this.gear--,this.shiftT=.12,this.events.push("down"))}let y=9.81,p=0;if(this.shiftT<=0){let Z=this.mode==="R"?4.2:d;p=Wx(Math.min(this.rpm,7200))*this.throttle*Z*Yl*.9/gf,this.rpm>=7200&&(p*=.2)}let m=.98*ir*y;this.tcs=p>m,p=Math.min(p,m),this.mode==="R"&&(p=-p);let _=Math.sign(this.vLong)||0,M=this.brake*1.12*ir*y*_+(e.handbrake?.45*ir*y*_:0),v=.44*this.vLong*Math.abs(this.vLong),w=13*this.vLong,E=this.mode==="D"&&this.throttle<.05?180*_*Math.min(1,Math.abs(this.vLong)/5):0,x=ir*y*Ch(this.s)*(Math.cos(this.yaw-Oi(this.s))>0?1:-1),S=(p-v-w-E-x)/ir,C=M/ir,A=this.vLong+S*t;Math.abs(C*t)>Math.abs(A)&&this.brake+(e.handbrake?1:0)>0?A=0:A-=C*t,this.mode==="D"&&A<0&&!e.handbrake&&(A=Math.max(A,-.5)),this.mode==="R"&&(A=Math.max(A,-9)),A=Math.min(A,Vx),this.accLong=(A-this.vLong)/t,this.vLong=A;let P=this.vLong*Math.tan(this.steer)/Gx,N=(e.handbrake?.75:1.08)*y,O=Math.abs(P*this.vLong);if(O>N&&r>1){let Z=N/O;this.slip=Math.min(1,(1-Z)*2),P*=Z+(e.handbrake?.35:.08)*(1-Z)}else this.slip*=.9;e.handbrake&&r>8&&(P*=1.25,this.slip=Math.max(this.slip,.6)),this.yaw+=P*t,this.accLat=P*this.vLong;let I=e.handbrake?1.6:9;this.vLat+=-this.accLat*(e.handbrake?.08:.015)*t,this.vLat*=Math.exp(-I*t);let B=-Math.sin(this.yaw),H=-Math.cos(this.yaw),z=Math.cos(this.yaw),J=-Math.sin(this.yaw);this.vx=B*this.vLong+z*this.vLat,this.vz=H*this.vLong+J*this.vLat,this.x+=this.vx*t,this.z+=this.vz*t;let k=df(this.x,this.z,this.s);this.s=k.s,this.d=k.d;let Y=Le(this.s);if(this.d<mn.minD||this.d>mn.maxD){let Z=this.d<mn.minD?1:-1,ut=this.d<mn.minD?mn.minD:mn.maxD;this.x=Y.x+Y.rx*ut,this.z=Y.z+Y.rz*ut,this.d=ut;let q=-(this.vx*Y.rx+this.vz*Y.rz)*Z;if(q>0){let at=Y.rx*Z,wt=Y.rz*Z;this.vx+=at*q*1.25,this.vz+=wt*q*1.25;let Nt=Math.min(.6,q*.04),Ut=(Oi(this.s)+(Math.cos(this.yaw-Oi(this.s))<0?Math.PI:0)-this.yaw+Math.PI*3)%(Math.PI*2)-Math.PI;this.yaw+=Ut*Math.min(1,q*.06+.15),this.vLong=(this.vx*-Math.sin(this.yaw)+this.vz*-Math.cos(this.yaw))*(1-Nt),this.vLat=0,q>.8&&(this.impact=Math.min(1,q/12),this.events.push("hit"))}}this.y=Y.y,this.pitch=Math.atan(Ch(this.s))*Math.cos(this.yaw-Oi(this.s)),this.speedKmh=Math.abs(this.vLong)*3.6}gearLabel(){return this.mode==="R"?"R":this.mode==="N"?"N":"D"+this.gear}};var xf=[14277855,1776671,9080982,7016212,1914199,15856113,3817284,2968122,12038306];function Xx(i,t,e){let n=new qn,s=i/2;n.moveTo(-s,.3),n.lineTo(-s,.75),n.quadraticCurveTo(-s+.05,.85,-s+.5,.88),n.lineTo(s-.9,.95),n.quadraticCurveTo(s-.1,.92,s,.72),n.lineTo(s,.3),n.lineTo(-s,.3);let r=new Ci(n,{depth:e-.16,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:3,curveSegments:8});return r.translate(0,0,-(e-.16)/2),r.rotateY(Math.PI/2),r}var $l=class{constructor(t,e){this.scene=t,this.cars=[],this.rnd=Kn(77);let n=new ui({map:e.glow,color:16722458,transparent:!0,blending:Bn,depthWrite:!1}),s=new ui({map:e.glow,color:16773853,transparent:!0,blending:Bn,depthWrite:!1}),r=Xx(4.7,1.4,1.86),o=new ce(1.6,.5,2.5,3,.15),a=new Ze(.34,.34,.24,20);a.rotateZ(Math.PI/2);let l=new me(1.5,.08,.04),c=new me(.42,.08,.04),h=new yn({color:724498,roughness:.05,metalness:.2,clearcoat:1,envMapIntensity:1.2}),d=new Yt({color:1118481,roughness:.8}),f=new Te({color:new Et(3,.15,.08)}),u=new Te({color:new Et(3,2.8,2.5)}),g=new Te({color:0,transparent:!0,opacity:.45,depthWrite:!1}),y=new pe(2,4.9);y.rotateX(-Math.PI/2);let p=[...Array.from({length:7},(m,_)=>({dir:1,lane:mn.lanes[_%2],s:200+_*130})),...Array.from({length:7},(m,_)=>({dir:-1,lane:mn.onLanes[_%2],s:300+_*160}))];for(let m of p){let _=new ve,M=new yn({color:xf[Math.floor(this.rnd()*xf.length)],metalness:.5,roughness:.35,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.3}),v=new nt(r,M);v.castShadow=!0,_.add(v);let w=new nt(o,h);w.position.set(0,1.12,.25),_.add(w);for(let[C,A]of[[-.82,-1.45],[.82,-1.45],[-.82,1.45],[.82,1.45]]){let P=new nt(a,d);P.position.set(C,.34,A),_.add(P)}let E=new nt(l,f);E.position.set(0,.82,2.42),_.add(E);for(let C of[-.62,.62]){let A=new nt(c,u);A.position.set(C,.7,-2.42),_.add(A);let P=new Ai(s);P.position.set(C,.7,-2.6),P.scale.set(1.6,1.6,1),_.add(P);let N=new Ai(n);N.position.set(C,.82,2.55),N.scale.set(1,1,1),_.add(N)}let x=new nt(y,g);x.position.y=.04,_.add(x),t.add(_);let S={g:_,dir:m.dir,d:m.lane,s:m.s,v:0,target:0};this._newSpeed(S),S.v=S.target,this.cars.push(S)}}_newSpeed(t){let e=Math.abs(t.d)<5;t.target=(e?105+this.rnd()*30:78+this.rnd()*22)/3.6}update(t,e){let n=e.s;for(let s of this.cars){let r=s.target;for(let a of this.cars){if(a===s||a.dir!==s.dir||Math.abs(a.d-s.d)>1)continue;let l=(a.s-s.s)*s.dir;l>0&&l<40&&(r=Math.min(r,a.v*(l<15?.8:1)))}if(s.dir===1){let a=n-s.s;a>0&&a<30&&Math.abs(e.d-s.d)<2.2&&(r=Math.min(r,Math.max(0,e.vLong)*(a<12?.7:1)))}s.v+=Math.max(-6*t,Math.min(2*t,r-s.v)),s.s+=s.v*s.dir*t,s.dir===1?s.s<n-250?(s.s=n+600+this.rnd()*700,this._newSpeed(s),s.v=s.target):s.s>n+1500&&(s.s=n-200,this._newSpeed(s),s.v=s.target):s.s<n-150&&(s.s=n+900+this.rnd()*900,this._newSpeed(s),s.v=s.target);let o=Le(s.s);s.g.position.set(o.x+o.rx*s.d,o.y,o.z+o.rz*s.d),s.g.rotation.y=Oi(s.s)+(s.dir===-1?Math.PI:0)}}collide(t){let e=0;for(let n of this.cars){if(n.dir!==1)continue;let s=n.s-t.s,r=n.d-t.d;if(Math.abs(s)<4.7&&Math.abs(r)<1.9){let o=t.vLong-n.v;if(Math.abs(s)/4.7>Math.abs(r)/1.9){s>0&&o>0?(e=Math.max(e,o),t.vLong=n.v*.92,n.v+=o*.3):s<0&&o<0&&(e=Math.max(e,-o),n.v=t.vLong*.9);let a=Le(t.s),l=(s>0?-1:1)*(4.7-Math.abs(s));t.x+=a.tx*l,t.z+=a.tz*l}else{let a=(r>0?-1:1)*(1.9-Math.abs(r)),l=Le(t.s);t.x+=l.rx*a,t.z+=l.rz*a,t.vLat=0,e=Math.max(e,3)}}}return e}radar(t){return this.cars.filter(e=>e.dir===1).map(e=>({ds:e.s-t.s,d:e.d}))}};var Jl=class{constructor(){this.ctx=null,this.muted=!1}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=.8;let e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=4200;let n=t.createDynamicsCompressor();this.master.connect(e),e.connect(n),n.connect(t.destination);let s=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=s.getChannelData(0);for(let d=0;d<r.length;d++)r[d]=Math.random()*2-1;this.noiseBuf=s,this.engGain=t.createGain(),this.engGain.gain.value=0,this.engFilter=t.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.Q.value=2.5;let o=t.createWaveShaper(),a=new Float32Array(1024);for(let d=0;d<1024;d++){let f=d/512-1;a[d]=Math.tanh(f*2.6)}o.curve=a,this.oscs=[];let l=(d,f)=>{let u=t.createOscillator();u.type=d;let g=t.createGain();return g.gain.value=f,u.connect(g),g.connect(o),u.start(),this.oscs.push(u),u};this.o1=l("sawtooth",.5),this.o2=l("square",.35),this.o3=l("sawtooth",.18),this.o4=l("triangle",.4),this.am=t.createGain(),this.am.gain.value=1,this.lfo=t.createOscillator(),this.lfo.type="sine",this.lfoGain=t.createGain(),this.lfoGain.gain.value=.25,this.lfo.connect(this.lfoGain),this.lfoGain.connect(this.am.gain),this.lfo.start(),o.connect(this.engFilter),this.engFilter.connect(this.am),this.am.connect(this.engGain),this.engGain.connect(this.master);let c=(d,f,u,g)=>{let y=t.createBufferSource();y.buffer=s,y.loop=!0;let p=t.createBiquadFilter();p.type=d,p.frequency.value=f,p.Q.value=u;let m=t.createGain();return m.gain.value=g,y.connect(p),p.connect(m),m.connect(this.master),y.start(),{f:p,g:m}};this.intake=c("bandpass",900,1.2,0),this.wind=c("bandpass",500,.6,0),this.road=c("lowpass",180,.8,0),this.squeal=c("bandpass",2300,12,0),this.hornGain=t.createGain(),this.hornGain.gain.value=0;for(let d of[415,520]){let f=t.createOscillator();f.type="square",f.frequency.value=d;let u=t.createGain();u.gain.value=.08,f.connect(u),u.connect(this.hornGain),f.start()}let h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=2500,this.hornGain.connect(h),h.connect(this.master)}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.05)}update(t,e){if(!this.ctx)return;let n=this.ctx.currentTime,s=.04,r=t.rpm,o=r/60*4;this.o1.frequency.setTargetAtTime(o,n,s),this.o2.frequency.setTargetAtTime(o*.5,n,s),this.o3.frequency.setTargetAtTime(o*2.01,n,s),this.o4.frequency.setTargetAtTime(o*.25,n,s),this.lfo.frequency.setTargetAtTime(o*.125+3,n,s);let a=t.shiftT>0?.1:t.throttle;this.engFilter.frequency.setTargetAtTime(280+a*1800+r*.22,n,s),this.engGain.gain.setTargetAtTime(.1+a*.22+r/7500*.08,n,s),this.lfoGain.gain.setTargetAtTime(a<.1&&r>1500?.55:.2,n,.1),this.intake.f.frequency.setTargetAtTime(500+r*.35,n,s),this.intake.g.gain.setTargetAtTime(a*.05*r/7e3,n,s);let l=Math.abs(t.vLong);this.wind.g.gain.setTargetAtTime(Math.min(.35,(l/80)**2*.35),n,.1),this.wind.f.frequency.setTargetAtTime(300+l*12,n,.1),this.road.g.gain.setTargetAtTime(Math.min(.5,l/60*.5),n,.1),this.squeal.g.gain.setTargetAtTime(t.slip>.15&&l>5?t.slip*.12:0,n,.05)}horn(t){this.ctx&&this.hornGain.gain.setTargetAtTime(t?1:0,this.ctx.currentTime,.02)}_burst(t,e,n,s="bandpass"){if(!this.ctx)return;let r=this.ctx,o=r.createBufferSource();o.buffer=this.noiseBuf;let a=r.createBiquadFilter();a.type=s,a.frequency.value=e,a.Q.value=1;let l=r.createGain();l.gain.value=n,l.gain.setTargetAtTime(0,r.currentTime+.005,t/3),o.connect(a),a.connect(l),l.connect(this.master),o.start(),o.stop(r.currentTime+t+.1)}click(t){this._burst(.03,t?2600:1800,.25)}crash(t){this._burst(.6,400,.6+t*.8,"lowpass"),this._burst(.25,2500,.3*t)}shift(){this._burst(.06,300,.15,"lowpass")}};var qx=new URLSearchParams(location.search),sr=qx.has("demo"),ke=new Dl({antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:sr});ke.setSize(window.innerWidth,window.innerHeight);ke.toneMapping=ns;ke.toneMappingExposure=1.2;ke.outputColorSpace=Xe;document.getElementById("app").appendChild(ke.domElement);var Lo=new $i,rn=new qe(70,window.innerWidth/window.innerHeight,.03,6e3);rn.layers.enable(1);var zh=cf(ke),sc=new Wl(Lo,ke,zh),us=new ve;us.rotation.order="YXZ";Lo.add(us);var rc=new ve;us.add(rc);var Bi=ff(zh);Bi.group.traverse(i=>i.layers.set(1));rc.add(Bi.group);var oc=new ve;oc.position.copy(hn);rc.add(oc);oc.add(rn);rn.rotation.order="YXZ";var Yx=new ql(Bi);ke.shadowMap.enabled=!0;ke.shadowMap.type=Ga;function bf(i){let t=document.createElement("canvas");t.width=512,t.height=256;let e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,512,256);let n=(r,o,a,l,c)=>{e.save(),e.translate(r,o),e.scale(a,l);let h=e.createRadialGradient(0,0,0,0,0,1);h.addColorStop(0,`rgba(255,255,255,${c})`),h.addColorStop(.5,`rgba(255,255,255,${c*.45})`),h.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=h,e.beginPath(),e.arc(0,0,1,0,Math.PI*2),e.fill(),e.restore()};if(i)n(256,128,250,120,.7),n(256,125,110,60,1);else{n(256,150,260,95,.8),n(262,140,120,40,1),e.fillStyle="#000",e.beginPath(),e.moveTo(0,0),e.lineTo(512,0),e.lineTo(512,112),e.lineTo(300,128),e.lineTo(0,128),e.closePath(),e.fill();let r=e.createLinearGradient(0,128,0,138);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=r,e.fillRect(0,128,300,10)}let s=new Ji(t);return s.colorSpace=Xe,s}var Ef=bf(!1),Zx=bf(!0),In=new jr(15988479,2600,160,.62,.15,1.3);In.position.set(0,.72,-2.3);In.target.position.set(0,.72,-40);In.map=Ef;In.castShadow=!0;In.shadow.mapSize.set(1024,1024);In.shadow.camera.near=.5;In.shadow.camera.far=160;In.shadow.bias=-5e-4;us.add(In,In.target);var Fh=[];function Hh(i,t,e,n,s,r){let o=new Re(s,r,{samples:2});o.texture.colorSpace=Zi;let a=new qe(n,s/r,.5,2500);a.position.copy(t),a.rotation.set(0,e,0),a.layers.set(0),us.add(a),i.material=new Te({map:o.texture,color:12567752}),o.texture.repeat.x=-1,o.texture.offset.x=1,i.layers.set(1),Fh.push({rt:o,cam:a})}Hh(Bi.mirrors.rear,new L(0,1.35,.9),Math.PI,24,384,100);Hh(Bi.mirrors.left,new L(-1.05,1.03,-.7),Math.PI-.22,30,220,120);Hh(Bi.mirrors.right,new L(1.05,1.03,-.7),Math.PI+.22,30,220,120);var Vt=new Zl,ec=new $l(Lo,zh),fn=new Jl,$x={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.55},uGrain:{value:1},uShake:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime; uniform float uVig; uniform float uGrain; uniform float uShake; varying vec2 vUv;
    void main(){
      vec2 uv = vUv; vec2 c = uv - 0.5; float r = dot(c, c);
      vec2 off = c * r * (0.005 + uShake * 0.03);
      vec3 col;
      col.r = texture2D(tDiffuse, uv + off).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - off).b;
      col *= 1.0 - uVig * smoothstep(0.05, 0.55, r * 1.5);
      float n = fract(sin(dot(uv * vec2(1931.7, 1087.3) + fract(uTime) * 91.0, vec2(12.9898, 78.233))) * 43758.5453);
      col += (n - 0.5) * uGrain * 0.025 * (0.4 + col);
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`},Gn,Ph,nc,Tf={high:{pr:Math.min(window.devicePixelRatio,1.5),samples:4,bloom:!0,mirrorEvery:1},medium:{pr:1,samples:2,bloom:!0,mirrorEvery:2},low:{pr:.75,samples:0,bloom:!1,mirrorEvery:4}},gn=(()=>{try{return(localStorage.getItem("nl_time")||"day")==="day"}catch{return!0}})();function Po(){sc.setMode(gn),ke.toneMappingExposure=gn?.95:1.2,Bi.leds.forEach(i=>i.color.setRGB(gn?.22:.9,gn?.22:.85,gn?.24:.8)),document.querySelectorAll("[data-t]").forEach(i=>i.classList.toggle("on",i.dataset.t==="day"===gn));try{localStorage.setItem("nl_time",gn?"day":"night")}catch{}}var ti=(()=>{try{return localStorage.getItem("nl_quality")||"high"}catch{return"high"}})();function ac(){let i=Tf[ti];ke.setPixelRatio(i.pr);let t=window.innerWidth,e=window.innerHeight,n=new Re(t*i.pr,e*i.pr,{type:Be,samples:i.samples});Gn&&Gn.dispose(),Gn=new Ol(ke,n),Gn.setPixelRatio(i.pr),Gn.setSize(t,e),Gn.addPass(new Bl(Lo,rn)),Ph=new er(new et(t,e),.42,.55,.88),Ph.enabled=i.bloom,Gn.addPass(Ph),nc=new tr($x),Gn.addPass(nc),Gn.addPass(new zl)}ac();window.addEventListener("resize",()=>{rn.aspect=window.innerWidth/window.innerHeight,rn.updateProjectionMatrix(),ke.setSize(window.innerWidth,window.innerHeight),Gn.setSize(window.innerWidth,window.innerHeight)});var dn=new Set,jn={up:!1,down:!1,left:!1,right:!1,handbrake:!1},hs=0,rr=!1,Oh=0,ic=0,lc=!1,Io=0,Do=!1,kh=!1,Ih=!1;window.addEventListener("keydown",i=>{if(i.repeat){dn.add(i.code);return}if(dn.add(i.code),!!Do)switch(i.code){case"Escape":Rf(!kh);break;case"KeyH":fn.horn(!0);break;case"KeyL":rr=!rr,fn.click(rr);break;case"KeyZ":hs=hs===-1?0:-1,fn.click(!0);break;case"KeyX":hs=hs===1?0:1,fn.click(!0);break;case"KeyM":fn.setMuted(!fn.muted);break;case"KeyR":{let t=Vt.s;Vt.reset(t,mn.lanes[1]);break}case"KeyG":Qx();break;case"KeyT":gn=!gn,Po(),Vh(gn?"G\xFCnd\xFCz":"Gece");break;case"F3":Ih=!Ih,document.getElementById("fps").style.display=Ih?"block":"none";break}});window.addEventListener("keyup",i=>{dn.delete(i.code),i.code==="KeyH"&&fn.horn(!1)});window.addEventListener("blur",()=>dn.clear());ke.domElement.addEventListener("mousedown",()=>{lc=!0});window.addEventListener("mouseup",()=>{lc=!1});window.addEventListener("mousemove",i=>{!lc||!Do||(ic=Qn(ic-i.movementX*.004,-1.6,1.6),Io=Qn(Io-i.movementY*.003,-.5,.35))});ke.domElement.addEventListener("contextmenu",i=>i.preventDefault());function Jx(){jn.up=dn.has("KeyW")||dn.has("ArrowUp"),jn.down=dn.has("KeyS")||dn.has("ArrowDown"),jn.left=dn.has("KeyA")||dn.has("ArrowLeft"),jn.right=dn.has("KeyD")||dn.has("ArrowRight"),jn.handbrake=dn.has("Space"),Oh=dn.has("KeyQ")?1.15:dn.has("KeyE")?-1.15:0,delete jn.axis,sr&&(Kx(),window.__look!==void 0&&(Oh=window.__look),window.__lookPitch!==void 0&&(Io=window.__lookPitch),window.__fov&&rn.fov!==window.__fov&&(rn.fov=window.__fov,rn.updateProjectionMatrix()))}function Kx(){let i=Vt.s+18+Vt.vLong*.6,t=Le(i),e=window.__demoLane??mn.lanes[0],n=t.x+t.rx*e,s=t.z+t.rz*e,o=(Math.atan2(-(n-Vt.x),-(s-Vt.z))-Vt.yaw+Math.PI*3)%(Math.PI*2)-Math.PI;jn.axis=Qn(o*6,-1,1);let a=(window.__demoSpeed??101)/3.6;jn.up=Vt.vLong<a,jn.down=Vt.vLong>a+3}var wf=document.getElementById("menu"),Bh=document.getElementById("hint"),Af=[...document.querySelectorAll("[data-q]")];function Gh(){Af.forEach(i=>i.classList.toggle("on",i.dataset.q===ti))}Af.forEach(i=>i.addEventListener("click",()=>{ti=i.dataset.q;try{localStorage.setItem("nl_quality",ti)}catch{}ac(),Gh()}));Gh();document.querySelectorAll("[data-t]").forEach(i=>i.addEventListener("click",()=>{gn=i.dataset.t==="day",Po()}));Po();function Qx(){let i=["high","medium","low"];ti=i[(i.indexOf(ti)+1)%3];try{localStorage.setItem("nl_quality",ti)}catch{}ac(),Gh(),Vh("Grafik: "+{high:"Y\xFCksek",medium:"Orta",low:"D\xFC\u015F\xFCk"}[ti])}var Co=0;function Vh(i){Bh.textContent=i,Bh.style.opacity=1,Co=2.5}function Rf(i){kh=i,wf.classList.toggle("hidden",!i),document.getElementById("startBtn").textContent=i?"DEVAM ET":"S\xDCRMEYE BA\u015ELA",fn.ctx&&(i?fn.ctx.suspend():fn.ctx.resume())}document.getElementById("startBtn").addEventListener("click",()=>{fn.start(),Do=!0,Rf(!1),Vh("W gaz \xB7 S fren/geri \xB7 A/D direksiyon \xB7 Space el freni \xB7 Esc men\xFC"),Co=6});var Kl=0,Ql=.78,Lh=62,Dh=0,Ro=!1,cs=0,jl=0,Nh=0,un={pitch:0,pitchV:0,roll:0,rollV:0},vf=i=>`${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}`;sc.ensureChunks(Vt.s,!0);var jx=0,yf=0,Mf=new io,tc=1/120,Uh=0;function Cf(){requestAnimationFrame(Cf);let i=Math.min(Mf.getDelta(),.05);if(sr&&window.__fixedDt&&(i=window.__fixedDt),jl+=i,Nh++,jl>.5&&(document.getElementById("fps").textContent=`${Math.round(Nh/jl)} FPS`,jl=0,Nh=0),kh&&(i=0),Do||sr){for(Jx(),Uh+=i;Uh>=tc;){Vt.update(tc,jn);let a=ec.collide(Vt);a>1&&(Vt.impact=Math.min(1,a/15),Vt.events.push("hit")),ec.update(tc,Vt),Uh-=tc}for(let a of Vt.events.splice(0))a==="hit"&&(fn.crash(Vt.impact),cs=Math.max(cs,Vt.impact)),a==="shift"&&fn.shift();fn.update(Vt),Kl+=Math.abs(Vt.vLong)*i/1e3,Ql=Math.max(.02,Ql-Vt.throttle*Vt.rpm*22e-10*60*i-1e-6*i),Lh=Math.min(98,Lh+i*.08*(1+Vt.throttle)),Dh+=i,hs!==0&&Dh>.38&&(Dh=0,Ro=!Ro,fn.click(Ro)),hs===0&&(Ro=!1)}if(Co>0&&(Co-=i,Co<=0&&(Bh.style.opacity=0)),us.position.set(Vt.x,Vt.y,Vt.z),us.rotation.set(Vt.pitch,Vt.yaw,0),i>0){let a=Qn(Vt.accLong*.0032,-.04,.03),l=Qn(-Vt.accLat*.0028,-.035,.035);un.pitchV+=((a-un.pitch)*90-un.pitchV*11)*i,un.pitch+=un.pitchV*i,un.rollV+=((l-un.roll)*70-un.rollV*9)*i,un.roll+=un.rollV*i}rc.rotation.set(un.pitch,0,un.roll),Bi.wheelSpin.rotation.z=Vt.steer*14*.62;let t=Mf.elapsedTime,e=Math.abs(Vt.vLong);cs=Math.max(0,cs-i*1.8);let n=Math.min(1,e/60)*.0012;oc.position.set(hn.x+Math.sin(t*23.1)*n+(Math.random()-.5)*cs*.04-un.roll*.4,hn.y+Math.sin(t*31.7)*n+(Math.random()-.5)*cs*.04,hn.z-un.pitch*.5),!lc&&!(sr&&window.__lookPitch!==void 0)&&(ic*=Math.exp(-i*3),Io*=Math.exp(-i*3));let s=Qn(Oh+ic,-1.7,1.7);rn.rotation.y+=(s-rn.rotation.y)*Math.min(1,i*7),rn.rotation.x+=(Io-.03-rn.rotation.x)*Math.min(1,i*7),rn.rotation.z=-un.roll*.3,In.map=rr?Zx:Ef,In.intensity=(rr?5200:2600)*(gn?.25:1),rn.getWorldPosition(Sf),sc.update(i,Sf,Vt.s);let r=new Date,o=new Date(r.getTime()+45*6e4);if(Yx.update(i,{speedKmh:Vt.speedKmh,rpm:Vt.rpm,gear:Vt.gearLabel(),power:Vt.throttle*Math.min(1,Vt.rpm/6e3),rangeKm:Ql*80/11*100,avgCons:9.8+Math.sin(Kl)*.6,trip:Kl,odo:12483+Kl,tempOut:18,oilTemp:Lh,fuel:Ql,clock:vf(r),eta:vf(o),indicator:hs,blinkOn:Ro,hazard:!1,highBeam:rr,lightsOn:!0,tcs:Vt.tcs&&Vt.speedKmh>2,s:Vt.s,d:Vt.d,x:Vt.x,z:Vt.z,yaw:Vt.yaw,traffic:ec.radar(Vt)}),yf++,yf%Tf[ti].mirrorEvery===0){let a=Fh[jx++%Fh.length];ke.setRenderTarget(a.rt),ke.render(Lo,a.cam),ke.setRenderTarget(null)}nc.uniforms.uTime.value=t,nc.uniforms.uShake.value=cs,Gn.render()}var Sf=new L;sr&&(window.__day!==void 0&&(gn=window.__day,Po()),wf.classList.add("hidden"),Do=!0,window.__game={car:Vt,traffic:ec,world:sc,camera:rn,renderer:ke,setDay:i=>{gn=i,Po()},setQuality:i=>{ti=i,ac()}});Cf();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

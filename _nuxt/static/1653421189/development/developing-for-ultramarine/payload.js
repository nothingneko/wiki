__NUXT_JSONP__("/development/developing-for-ultramarine", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F){return {data:[{document:{slug:r,description:"Things to get started on developing in Ultramarine.",title:o,position:40,category:"Development",toc:[{id:u,depth:v,text:w},{id:x,depth:s,text:y},{id:r,depth:v,text:o},{id:z,depth:s,text:A},{id:B,depth:s,text:C}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"Ultramarine Linux aims to be a developer-friendly environment for all kinds of developers. In this article, we will cover the basics of how to get started developing in Ultramarine."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you would like to develop your own software, you can get started with the section below."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you would like to develop "},{type:b,tag:"strong",props:{},children:[{type:a,value:"for"}]},{type:a,value:" Ultramarine, you can get started with the "},{type:b,tag:d,props:{href:D},children:[{type:a,value:o}]},{type:a,value:" section."}]},{type:a,value:c},{type:b,tag:E,props:{id:u},children:[{type:b,tag:d,props:{href:"#getting-started",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Ultramarine comes with the "},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.python.org\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"Python programming language"}]},{type:a,value:" out of the box, which is also required for most Fedora and Ultramarine\nsoftware, including the DNF package manager itself."}]},{type:a,value:c},{type:b,tag:t,props:{id:x},children:[{type:b,tag:d,props:{href:"#setting-up-rust",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To set up Rust in your environment, you can install the Rust and Cargo package from the Fedora repositories."}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:p,props:{},children:[{type:a,value:"sudo dnf install rustc cargo\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You can also use the "},{type:b,tag:p,props:{},children:[{type:a,value:"rustup"}]},{type:a,value:" installer from the "},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.rust-lang.org\u002Ftools\u002Finstall",rel:[f,g,h],target:i},children:[{type:a,value:"Rust website"}]},{type:a,value:". This will install Rust in your local environment."}]},{type:a,value:c},{type:b,tag:E,props:{id:r},children:[{type:b,tag:d,props:{href:D,ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Our main IDE is "},{type:b,tag:d,props:{href:"https:\u002F\u002Fcode.visualstudio.com\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"Visual Studio Code"}]},{type:a,value:", which is an open-source (mostly source-available) IDE that is available for both Windows, macOS, and Linux."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you, however, do not prefer to use the official Microsoft distribution of Visual Studio Code, you can also use "},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.vscodium.com\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"VSCodium"}]},{type:a,value:", which is a free alternative distribution of Visual Studio Code. Or you can also use the "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fmicrosoft\u002Fvscode",rel:[f,g,h],target:i},children:[{type:a,value:"Open-source distribution of Visual Studio Code"}]},{type:a,value:" here."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Our preferred programming languages are Python and Rust. And our preferred GUI toolkit is GTK."}]},{type:a,value:c},{type:b,tag:t,props:{id:z},children:[{type:b,tag:d,props:{href:"#ui-development",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"It is recommended you follow the "},{type:b,tag:d,props:{href:"https:\u002F\u002Fdeveloper.gnome.org\u002Fhig\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"GNOME guidelines"}]},{type:a,value:" for UI development for Ultramarine apps. However, if you think that the GNOME guidelines do not fit the aesthetic of Ultramarine, you can deviate from the GNOME guidelines and do your own UI design."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"For Ultramarine apps, we do not use libadwaita due to cross-desktop consistency issues. Instead, use standard GTK widgets for your UI."}]},{type:a,value:c},{type:b,tag:t,props:{id:B},children:[{type:b,tag:d,props:{href:"#build-systems",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"For build systems, we prefer using the programming language's native build system. For example, if you're using Rust, you can use the Rust's native Cargo build system. And in the case of Python, you can use the standard Python setuptools, which consists of either a "},{type:b,tag:p,props:{},children:[{type:a,value:"setup.py"}]},{type:a,value:" file or a "},{type:b,tag:p,props:{},children:[{type:a,value:"pyproject.toml"}]},{type:a,value:" file."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"For cases where using a native build system does not fit the needs of the application, we have a prioritized list of build systems that we recommend using:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:q,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fcmake.org\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"CMake"}]}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fmesonbuild.com\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"Meson"}]},{type:a,value:" (Little to no VSCode tooling)"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.gnu.org\u002Fsoftware\u002Fautomake\u002Fmanual\u002Fhtml_node\u002FAutotools-Introduction.html",rel:[f,g,h],target:i},children:[{type:a,value:"GNU Autotools"}]}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:"A standard makefile."}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Fdevelopment",path:"\u002Fen\u002Fdevelopment\u002Fdeveloping-for-ultramarine",extension:".md",createdAt:F,updatedAt:F,to:"\u002Fdevelopment\u002Fdeveloping-for-ultramarine"},prev:{title:"The Shell",path:"\u002Fen\u002Flinux\u002Fshell",to:"\u002Flinux\u002Fshell"},next:{title:"Errata",path:"\u002Fen\u002Frelease\u002Ferrata",to:"\u002Frelease\u002Ferrata"}}],fetch:{},mutations:[]}}("text","element","\n","a","p","nofollow","noopener","noreferrer","_blank","true",-1,"span","icon","icon-link","Developing for Ultramarine","code","li","developing-for-ultramarine",3,"h3","getting-started",2,"Getting Started","setting-up-rust","Setting up Rust","ui-development","UI development","build-systems","Build systems","#developing-for-ultramarine","h2","2022-05-24T19:38:53.368Z")));
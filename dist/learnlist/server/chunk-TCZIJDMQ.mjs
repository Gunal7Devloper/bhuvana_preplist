import './polyfills.server.mjs';
import{C as k,E as O,F as p,G as N,H as P,I as T,L as G,P as j,S as B,T as H,U as R,V as U,a as C,b as x,c,d as b,e as f,f as v,g as s,h as M,i as m,j as S,k as w,l as n,m as t,n as i,o as g,p as e,q as A,r as d,s as D,t as u,u as F,v as I}from"./chunk-EQN7F2F3.mjs";import{a as V,b as E}from"./chunk-VVCT4QZE.mjs";var L=(()=>{class r{constructor(){this.title="Bhuvana"}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=c({type:r,selectors:[["app-root"]],standalone:!0,features:[D([P,p]),u],decls:1,vars:0,template:function(o,l){o&1&&i(0,"router-outlet")},dependencies:[p,j]})}}return r})();var J={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},qe=E(V({},J),{"[class.ng-submitted]":"isSubmitted"});var Q=new x("CallSetDisabledState",{providedIn:"root",factory:()=>W}),W="always";var ee=(()=>{class r{static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275mod=b({type:r})}static{this.\u0275inj=C({})}}return r})();var $=(()=>{class r{static withConfig(a){return{ngModule:r,providers:[{provide:Q,useValue:a.callSetDisabledState??W}]}}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275mod=b({type:r})}static{this.\u0275inj=C({imports:[ee]})}}return r})();var Z=(()=>{class r{static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=c({type:r,selectors:[["app-docker"]],standalone:!0,features:[u],decls:83,vars:0,consts:[[1,"container"],[1,"btn","btn-primary"],[1,"ref_head"],[1,"video_ref"],["src","https://img.youtube.com/vi/vaXl02oGdOU/maxresdefault.jpg","width","250","alt","Devops"],[1,"container","main-img","d-flex","justify-content-center"],["src","assets/images/docker1.png","alt",""],[1,"container","mt-4"],[1,"question-style"],["src","assets/images/docker2.png","alt",""],[1,"highlight"]],template:function(o,l){o&1&&(n(0,"div",0)(1,"div",1),e(2," Video References "),t(),n(3,"h1",2),e(4,"References"),t(),n(5,"div")(6,"div",3),i(7,"img",4),t(),n(8,"div",3),i(9,"img",4),t(),n(10,"div",3),i(11,"img",4),t()()(),n(12,"div",5),i(13,"img",6),t(),n(14,"div",7)(15,"h3",8),e(16,"1. What is Docker?"),t(),n(17,"p")(18,"b"),e(19,"Docker"),t(),e(20," is an open-source platform used to develop, ship, and run applications in "),n(21,"b"),e(22,"lightweight, portable containers."),t()(),n(23,"p"),e(24," \u{1F539} In Simple Terms: Docker packages your application "),n(25,"b"),e(26,"along with everything it needs"),t(),e(27," (code, libraries, dependencies, system tools) into a single "),n(28,"b"),e(29,"container"),t(),e(30," that can run "),n(31,"b"),e(32,"anywhere"),t(),e(33,"\u2014on your machine, in testing, or in production. "),t(),n(34,"h3"),e(35,"Key Concepts:"),t(),n(36,"p"),e(37," Container: A lightweight, standalone, and executable unit that includes all application dependencies. Image: A read-only template used to create containers (like a blueprint). Dockerfile: A script with instructions to build a Docker image. Docker Hub: A cloud-based registry where Docker images can be stored and shared. "),t(),n(38,"div",5),i(39,"img",9),t(),n(40,"h2"),e(41,"What is Docker? \u2013 Interview Answer"),t(),n(42,"div",10)(43,"strong"),e(44,"Beginner to Intermediate Answer:"),t()(),n(45,"p"),e(46," Docker is a platform that allows developers to package applications into containers\u2014lightweight, portable units that include everything the application needs to run. These containers can be run consistently across any environment, whether it's development, testing, or production. Docker helps eliminate environment-related issues and simplifies deployment. I\u2019ve used Docker to containerize Angular frontends and Spring Boot backends, ensuring they work the same on every machine. "),t(),n(47,"div",10)(48,"strong"),e(49,"Advanced Answer (With Technical Depth):"),t()(),n(50,"p"),e(51," Docker uses containerization to isolate applications and their dependencies from the host system. A Docker image is built from a "),n(52,"code"),e(53,"Dockerfile"),t(),e(54,", which defines how the container is set up. The container runs from that image and can be deployed on any system that has Docker installed. I\u2019ve used "),n(55,"code"),e(56,"docker-compose"),t(),e(57," to manage multi-container applications\u2014for example, running Angular, a Spring Boot API, and PostgreSQL database together during development and testing. "),t(),n(58,"h3"),e(59,"Tips for Answering:"),t(),n(60,"ul")(61,"li"),e(62,"Tailor the answer to your project experience (e.g., Angular + Spring Boot + PostgreSQL)."),t(),n(63,"li"),e(64,"Mention tools you\u2019ve used: "),n(65,"code"),e(66,"Dockerfile"),t(),e(67,", "),n(68,"code"),e(69,"docker-compose"),t(),e(70,", "),n(71,"code"),e(72,"Docker Hub"),t(),e(73,"."),t(),n(74,"li"),e(75,"Be ready to explain: "),n(76,"ul")(77,"li"),e(78,"How you build a Docker image"),t(),n(79,"li"),e(80,"How you run a container"),t(),n(81,"li"),e(82,"How Docker helps in CI/CD or DevOps workflows"),t()()()()())}})}}return r})();function te(r,h){r&1&&(n(0,"div")(1,"div",6),i(2,"img",7),t(),n(3,"div",8)(4,"h3",9),e(5,"1. What is DevOps?"),t(),n(6,"p")(7,"strong"),e(8,"DevOps"),t(),e(9," is a set of practices, tools, and a cultural philosophy that aims to unify and automate the work of software development ("),n(10,"strong"),e(11,"Dev"),t(),e(12,") and IT operations ("),n(13,"strong"),e(14,"Ops"),t(),e(15,"). The goal is to shorten the development lifecycle, deliver high-quality software continuously, and improve collaboration between development and operations teams. "),t(),n(16,"p"),e(17,"It focuses on:"),t(),n(18,"ul")(19,"li")(20,"strong"),e(21,"Continuous Integration and Continuous Delivery (CI/CD)"),t()(),n(22,"li")(23,"strong"),e(24,"Automation of infrastructure and workflows"),t()(),n(25,"li")(26,"strong"),e(27,"Monitoring and performance feedback"),t()(),n(28,"li")(29,"strong"),e(30,"Collaboration and shared responsibilities"),t()()(),n(31,"p"),e(32," DevOps promotes using tools like Git, Jenkins, Docker, Kubernetes, Ansible, and cloud platforms like AWS or Azure to automate and streamline the software delivery process. "),t(),n(33,"p")(34,"span",10),i(35,"i",11),n(36,"span",12),e(37," Bonus Tip: "),t()(),n(38,"em"),e(39,"If asked for real-world benefits, you can add:"),t(),i(40,"br"),n(41,"q"),e(42,"With DevOps, teams can release features faster, detect bugs earlier, and respond to customer needs more efficiently."),t()()(),n(43,"div",13)(44,"h3",9),e(45,"2. Why did you choose DevOps?"),t(),n(46,"p"),e(47," I chose DevOps because it bridges the gap between development and operations, allowing me to work across the entire software delivery lifecycle \u2014 from coding and building to deploying and monitoring. I enjoy automation, problem-solving, and improving efficiency, and DevOps gives me the tools and mindset to do that at scale. "),t(),n(48,"p"),e(49," It also aligns with my passion for continuous learning and working with modern tools like Docker, Kubernetes, CI/CD pipelines, and cloud platforms. DevOps isn\u2019t just about tools \u2014 it's about culture, collaboration, and delivering value faster and more reliably, which makes the work both challenging and rewarding. "),t(),n(50,"div",14)(51,"div",10),e(52," \u{1F9E9} "),n(53,"span",12),e(54,"Optional Add-On (customizable):"),t()(),n(55,"p"),e(56,' "Coming from a [developer/sysadmin/tester] background, I found DevOps a natural evolution that allowed me to expand my impact by enabling automation, better communication, and faster delivery." '),t()()()())}function ne(r,h){r&1&&(n(0,"div")(1,"div",8)(2,"div",6),i(3,"img",15),t(),n(4,"h3",9),e(5,"1. What is Nginx?"),t(),n(6,"p")(7,"span",16),e(8,"Nginx"),t(),e(9,' (pronounced "engine-x") is a high-performance, open-source web server software that is also widely used as a: '),t(),n(10,"ul")(11,"li")(12,"span",16),e(13,"Reverse Proxy"),t()(),n(14,"li")(15,"span",16),e(16,"Load Balancer"),t()(),n(17,"li")(18,"span",16),e(19,"HTTP Cache"),t()(),n(20,"li")(21,"span",16),e(22,"API Gateway"),t()()(),n(23,"h2")(24,"span",17),e(25,"\u{1F527}"),t(),e(26,"What Can Nginx Do?"),t(),n(27,"table")(28,"tr")(29,"th"),e(30,"Use Case"),t(),n(31,"th"),e(32,"Description"),t()(),n(33,"tr")(34,"td"),e(35,"Web Server"),t(),n(36,"td"),e(37,"Serves static content (HTML, CSS, JS, images) directly to users."),t()(),n(38,"tr")(39,"td"),e(40,"Reverse Proxy"),t(),n(41,"td"),e(42,"Forwards client requests to backend servers (e.g., Node.js, Flask, Django) and returns the response to the client."),t()(),n(43,"tr")(44,"td"),e(45,"Load Balancer"),t(),n(46,"td"),e(47,"Distributes incoming traffic across multiple servers to improve performance and reliability."),t()(),n(48,"tr")(49,"td"),e(50,"SSL Termination"),t(),n(51,"td"),e(52,"Handles HTTPS/SSL encryption/decryption to offload that work from backend apps."),t()(),n(53,"tr")(54,"td"),e(55,"Caching"),t(),n(56,"td"),e(57,"Caches static or dynamic content to reduce load on backend servers."),t()()(),n(58,"h2")(59,"span",17),e(60,"\u{1F50D}"),t(),e(61,"Why Is It Popular?"),t(),n(62,"ul")(63,"li"),e(64,"Handles "),n(65,"span",16),e(66,"high concurrency"),t(),e(67," with low memory usage (event-driven, non-blocking architecture)."),t(),n(68,"li")(69,"span",16),e(70,"Faster"),t(),e(71," than traditional servers like Apache in many use cases."),t(),n(72,"li"),e(73,"Used by many high-traffic websites like Netflix, Dropbox, and WordPress.com."),t()(),n(74,"h2")(75,"span",17),e(76,"\u{1F6E0}\uFE0F"),t(),e(77,"Example Use"),t(),n(78,"div",18),e(79," nginx"),i(80,"br"),e(81),i(82,"br"),e(83," listen 80;"),i(84,"br"),e(85," server_name example.com;"),i(86,"br")(87,"br"),e(88),i(89,"br"),e(90," proxy_pass "),n(91,"a",19),e(92,"http://localhost:5000"),t(),e(93,";# Pass requests to Flask app"),i(94,"br"),e(95),i(96,"br"),e(97),t(),n(98,"h3")(99,"span",17),e(100,"\u2139\uFE0F"),t(),e(101,"In Short:"),t(),n(102,"p")(103,"span",16),e(104,"Nginx"),t(),e(105," = Fast + Lightweight + Versatile Web/Proxy Server. "),t(),n(106,"p",20),e(107,"\u2705 Step-by-Step: Deploy Angular with Nginx"),t(),n(108,"p",21),e(109,"1. Build the Angular app"),t(),n(110,"p"),e(111,"In your Angular project root:"),t(),n(112,"div",18),e(113," bash"),i(114,"br"),e(115," ng build --configuration production "),t(),n(116,"p"),e(117,"This creates a "),n(118,"code"),e(119,"dist/your-app-name/"),t(),e(120," folder with the production-ready static files."),t(),n(121,"p",21),e(122,"2. Install Nginx"),t(),n(123,"p"),e(124,"On Ubuntu/Debian:"),t(),n(125,"div",18),e(126," bash"),i(127,"br"),e(128," sudo apt update"),i(129,"br"),e(130," sudo apt install nginx "),t(),n(131,"p",21),e(132,"3. Copy build files to Nginx web root"),t(),n(133,"div",18),e(134," bash"),i(135,"br"),e(136," sudo cp -r dist/your-app-name/* /var/www/html/ "),t(),n(137,"p"),e(138,"Or to a custom directory like "),n(139,"code"),e(140,"/var/www/my-angular-app/"),t(),e(141,"."),t(),n(142,"p",21),e(143,"4. Configure Nginx"),t(),n(144,"p"),e(145,"Edit the config:"),t(),n(146,"div",18),e(147," bash"),i(148,"br"),e(149," sudo nano /etc/nginx/sites-available/default "),t(),n(150,"p"),e(151,"Replace with something like:"),t(),n(152,"div",18),e(153," nginx"),i(154,"br"),e(155),i(156,"br"),e(157," listen 80;"),i(158,"br"),e(159," server_name yourdomain.com;"),i(160,"br")(161,"br"),e(162," root /var/www/html;"),i(163,"br"),e(164," index index.html;"),i(165,"br")(166,"br"),e(167),i(168,"br"),e(169," try_files $uri $uri/ /index.html;"),i(170,"br"),e(171),i(172,"br"),e(173),t(),n(174,"p")(175,"span",16),e(176,"try_files"),t(),e(177," is important for Angular\u2019s "),n(178,"span",16),e(179,"HTML5 routing"),t(),e(180," (e.g., /dashboard, /profile)."),t(),n(181,"p",21),e(182,"5. Restart Nginx"),t(),n(183,"div",18),e(184," bash"),i(185,"br"),e(186," sudo systemctl restart nginx "),t(),n(187,"p")(188,"span",17),e(189,"\u{1F310}"),t(),n(190,"strong"),e(191,"Now your Angular app is live at:"),t()(),n(192,"p")(193,"a",22),e(194,"http://your-server-ip"),t(),e(195," or "),n(196,"a",23),e(197,"http://yourdomain.com"),t()()()()),r&2&&(s(81),d(" server ","{",""),s(7),d(" location / ","{",""),s(7),d(" ","}",""),s(2),d(" ","}"," "),s(58),d(" server ","{",""),s(12),d(" location / ","{",""),s(4),d(" ","}",""),s(2),d(" ","}"," "))}function ie(r,h){r&1&&(n(0,"div")(1,"div",8)(2,"h3",9),e(3,"1. What is Client vs Server Application?"),t()()())}function re(r,h){r&1&&(n(0,"div"),i(1,"app-docker"),t())}var q=(()=>{class r{constructor(){this.selectedTab="D"}ngOnInit(){this.selectedTab="D"}opencontent(a){this.selectedTab=a}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=c({type:r,selectors:[["app-devopsdocs"]],standalone:!0,features:[u],decls:13,vars:4,consts:[[1,"container","d-flex","my-2","gap-2"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary",3,"click"],[1,"btn","btn-warning",3,"click"],[1,"btn","btn-info",3,"click"],[4,"ngIf"],[1,"container","main-img","d-flex","justify-content-center"],["src","assets/images/devops.png","alt",""],[1,"container","mt-4"],[1,"question-style"],[1,"tips-style"],[1,"fa-solid","fa-thumbtack","tips-icon"],[1,"tipscon"],[1,"container","mt-1"],[1,"optional"],["src","assets/images/NGINX.png","alt",""],[1,"highlight"],[1,"emoji"],[1,"code-block"],["href","http://localhost:5000"],[1,"checkmark"],[1,"step-title"],["href","http://your-server-ip","target","_blank"],["href","http://yourdomain.com","target","_blank"]],template:function(o,l){o&1&&(n(0,"div",0)(1,"div",1),g("click",function(){return l.opencontent("D")}),e(2,"Devops"),t(),n(3,"div",2),g("click",function(){return l.opencontent("N")}),e(4,"Nginix"),t(),n(5,"div",3),g("click",function(){return l.opencontent("DC")}),e(6,"Docker"),t(),n(7,"div",4),g("click",function(){return l.opencontent("G")}),e(8,"Generic"),t()(),M(9,te,57,0,"div",5)(10,ne,198,8,"div",5)(11,ie,4,0,"div",5)(12,re,2,0,"div",5)),o&2&&(s(9),m("ngIf",l.selectedTab==="D"),s(),m("ngIf",l.selectedTab==="N"),s(),m("ngIf",l.selectedTab==="G"),s(),m("ngIf",l.selectedTab==="DC"))},dependencies:[p,O,$,Z],encapsulation:2})}}return r})();var oe=(r,h)=>h.title,se=()=>({title:"Explore the Docs",link:"/devops"}),ae=r=>[r];function le(r,h){if(r&1&&(n(0,"a",21)(1,"span"),e(2),t(),f(),n(3,"svg",32),i(4,"path",33),t()()),r&2){let a=h.$implicit;m("routerLink",a.link),s(2),A(a.title)}}var z=(()=>{class r{constructor(){this.title="Bhuvana"}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=c({type:r,selectors:[["app-home"]],standalone:!0,features:[u],decls:38,vars:4,consts:[[1,"main"],[1,"content"],[1,"left-side"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 982 239","fill","none",1,"angular-logo"],["clip-path","url(#a)"],["fill","url(#b)","d","M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"],["fill","url(#c)","d","M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"],["id","c","cx","0","cy","0","r","1","gradientTransform","rotate(118.122 171.182 60.81) scale(205.794)","gradientUnits","userSpaceOnUse"],["stop-color","#FF41F8"],["offset",".707","stop-color","#FF41F8","stop-opacity",".5"],["offset","1","stop-color","#FF41F8","stop-opacity","0"],["id","b","x1","0","x2","982","y1","192","y2","192","gradientUnits","userSpaceOnUse"],["stop-color","#F0060B"],["offset","0","stop-color","#F0070C"],["offset",".526","stop-color","#CC26D5"],["offset","1","stop-color","#7702FF"],["id","a"],["fill","#fff","d","M0 0h982v239H0z"],["role","separator","aria-label","Divider",1,"divider"],[1,"right-side"],[1,"pill-group"],["routerLinkActive","active",1,"pill",3,"routerLink"],[1,"social-links"],["href","https://github.com/angular/angular","aria-label","Github","target","_blank","rel","noopener"],["width","25","height","24","viewBox","0 0 25 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Github"],["d","M12.3047 0C5.50634 0 0 5.50942 0 12.3047C0 17.7423 3.52529 22.3535 8.41332 23.9787C9.02856 24.0946 9.25414 23.7142 9.25414 23.3871C9.25414 23.0949 9.24389 22.3207 9.23876 21.2953C5.81601 22.0377 5.09414 19.6444 5.09414 19.6444C4.53427 18.2243 3.72524 17.8449 3.72524 17.8449C2.61064 17.082 3.81137 17.0973 3.81137 17.0973C5.04697 17.1835 5.69604 18.3647 5.69604 18.3647C6.79321 20.2463 8.57636 19.7029 9.27978 19.3881C9.39052 18.5924 9.70736 18.0499 10.0591 17.7423C7.32641 17.4347 4.45429 16.3765 4.45429 11.6618C4.45429 10.3185 4.9311 9.22133 5.72065 8.36C5.58222 8.04931 5.16694 6.79833 5.82831 5.10337C5.82831 5.10337 6.85883 4.77319 9.2121 6.36459C10.1965 6.09082 11.2424 5.95546 12.2883 5.94931C13.3342 5.95546 14.3801 6.09082 15.3644 6.36459C17.7023 4.77319 18.7328 5.10337 18.7328 5.10337C19.3942 6.79833 18.9789 8.04931 18.8559 8.36C19.6403 9.22133 20.1171 10.3185 20.1171 11.6618C20.1171 16.3888 17.2409 17.4296 14.5031 17.7321C14.9338 18.1012 15.3337 18.8559 15.3337 20.0084C15.3337 21.6552 15.3183 22.978 15.3183 23.3779C15.3183 23.7009 15.5336 24.0854 16.1642 23.9623C21.0871 22.3484 24.6094 17.7341 24.6094 12.3047C24.6094 5.50942 19.0999 0 12.3047 0Z"],["href","https://twitter.com/angular","aria-label","Twitter","target","_blank","rel","noopener"],["width","24","height","24","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Twitter"],["d","M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"],["href","https://www.youtube.com/channel/UCbn1OgGei-DV7aSRo_HaAiw","aria-label","Youtube","target","_blank","rel","noopener"],["width","29","height","20","viewBox","0 0 29 20","fill","none","xmlns","http://www.w3.org/2000/svg","alt","Youtube"],["fill-rule","evenodd","clip-rule","evenodd","d","M27.4896 1.52422C27.9301 1.96749 28.2463 2.51866 28.4068 3.12258C29.0004 5.35161 29.0004 10 29.0004 10C29.0004 10 29.0004 14.6484 28.4068 16.8774C28.2463 17.4813 27.9301 18.0325 27.4896 18.4758C27.0492 18.9191 26.5 19.2389 25.8972 19.4032C23.6778 20 14.8068 20 14.8068 20C14.8068 20 5.93586 20 3.71651 19.4032C3.11363 19.2389 2.56449 18.9191 2.12405 18.4758C1.68361 18.0325 1.36732 17.4813 1.20683 16.8774C0.613281 14.6484 0.613281 10 0.613281 10C0.613281 10 0.613281 5.35161 1.20683 3.12258C1.36732 2.51866 1.68361 1.96749 2.12405 1.52422C2.56449 1.08095 3.11363 0.76113 3.71651 0.596774C5.93586 0 14.8068 0 14.8068 0C14.8068 0 23.6778 0 25.8972 0.596774C26.5 0.76113 27.0492 1.08095 27.4896 1.52422ZM19.3229 10L11.9036 5.77905V14.221L19.3229 10Z"],["xmlns","http://www.w3.org/2000/svg","height","14","viewBox","0 -960 960 960","width","14","fill","currentColor"],["d","M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"]],template:function(o,l){o&1&&(n(0,"main",0)(1,"div",1)(2,"div",2),f(),n(3,"svg",3)(4,"g",4),i(5,"path",5)(6,"path",6),t(),n(7,"defs")(8,"radialGradient",7),i(9,"stop",8)(10,"stop",9)(11,"stop",10),t(),n(12,"linearGradient",11),i(13,"stop",12)(14,"stop",13)(15,"stop",14)(16,"stop",15),t(),n(17,"clipPath",16),i(18,"path",17),t()()(),v(),n(19,"h1"),e(20),t(),n(21,"p"),e(22,"Congratulations! Your app is running. \u{1F389}"),t()(),i(23,"div",18),n(24,"div",19)(25,"div",20),S(26,le,5,2,"a",21,oe),t(),n(28,"div",22)(29,"a",23),f(),n(30,"svg",24),i(31,"path",25),t()(),v(),n(32,"a",26),f(),n(33,"svg",27),i(34,"path",28),t()(),v(),n(35,"a",29),f(),n(36,"svg",30),i(37,"path",31),t()()()()()()),o&2&&(s(20),d("Hello, ",l.title,""),s(6),w(I(2,ae,F(1,se))))},dependencies:[p,U,B,H],styles:[`[_nghost-%COMP%] {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(
      180deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
      90deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1[_ngcontent-%COMP%] {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  p[_ngcontent-%COMP%] {
    margin: 0;
    color: var(--gray-700);
  }

  main[_ngcontent-%COMP%] {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: inherit;
    position: relative;
  }

  .angular-logo[_ngcontent-%COMP%] {
    max-width: 9.2rem;
  }

  .content[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    margin-top: 1.75rem;
  }

  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-top: 1.5rem;
  }

  .divider[_ngcontent-%COMP%] {
    width: 1px;
    background: var(--red-to-pink-to-purple-vertical-gradient);
    margin-inline: 0.5rem;
  }

  .pill-group[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .pill[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    --pill-accent: var(--bright-blue);
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    border-radius: 2.75rem;
    border: 0;
    transition: background 0.3s ease;
    font-family: var(--inter-font);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.00875rem;
    text-decoration: none;
  }

  .pill[_ngcontent-%COMP%]:hover {
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
  }

  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 1) {
    --pill-accent: var(--bright-blue);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 2) {
    --pill-accent: var(--french-violet);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 3), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 4), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 5) {
    --pill-accent: var(--hot-red);
  }

  .pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    margin-inline-start: 0.25rem;
  }

  .social-links[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 0.73rem;
    margin-top: 1.5rem;
  }

  .social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    fill: var(--gray-900);
  }

  @media screen and (max-width: 650px) {
    .content[_ngcontent-%COMP%] {
      flex-direction: column;
      width: max-content;
    }

    .divider[_ngcontent-%COMP%] {
      height: 1px;
      width: 100%;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      margin-block: 1.5rem;
    }
  }`]})}}return r})();var Y=[{path:"",component:z},{path:"devops",component:q}];var K={providers:[R(Y),T()]};var de={providers:[G()]},X=k(K,de);var ce=()=>N(L,X),Ct=ce;export{Ct as a};

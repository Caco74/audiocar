// // window.onload(alert('Caco87'))

// @media (min-width: 320.1px) and (max-width: 375px) {
//     body {
//         color: salmon;
//         width: 100%;
//         height: 100vh;
//         margin: 0px 0px 0px;
//         margin: 0;
//         padding: 0;    
//         /* make it look decent enough */
//         background: #232323;
//         /* color: #cdcdcd; */
//         font-family: "Avenir Next", "Avenir", sans-serif;
//     }
//     header {
//         display: flex;
//         flex-flow: row;
//         justify-content: space-between;
//         background-color: lightgray;
//         padding: 1rem 0 1rem 1rem;
//         width: 100vw;
//     }
//     .btn_hamb {
//         /* background-color: red; */
//         display: flex;
//         order: 1;
//         width: 25%;
//     }    

//     #menuToggle {
//         display: block;
//         position: relative;
//         /* top: 0rem;
//         left: 1rem;     */
//         z-index: 1;    
//         -webkit-user-select: none;
//         user-select: none;
//     }

//     #menuToggle a {
//         text-decoration: none;
//         color: #232323;    
//         transition: color 0.3s ease;
//     }

//     #menuToggle a:hover {
//         color: tomato;
//     }


//     #menuToggle input {
//         display: block;
//         width: 40px;
//         height: 32px;
//         position: absolute;
//         top: -7px;
//         left: -5px;    
//         cursor: pointer;    
//         opacity: 0; /* hide this */
//         z-index: 2; /* and place it over the hamburger */    
//         -webkit-touch-callout: none;
//     }

//     #menuToggle span {
//         display: block;
//         width: 33px;
//         height: 4px;
//         margin-bottom: 5px;
//         position: relative;    
//         background: #a03f3f;
//         border-radius: 3px;    
//         z-index: 1;    
//         transform-origin: 4px 0px;    
//         transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
//                     background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
//                     opacity 0.55s ease;
//     }

//     #menuToggle span:first-child {
//         transform-origin: 0% 0%;
//     }

//     #menuToggle span:nth-last-child(2) {
//         transform-origin: 0% 100%;
//     }

//     #menuToggle input:checked ~ span {
//         opacity: 1;
//         transform: rotate(45deg) translate(-2px, -1px);
//         background: #232323;
//     }
    
//     #menuToggle input:checked ~ span:nth-last-child(3) {
//         opacity: 0;
//         transform: rotate(0deg) scale(0.2, 0.2);
//     }

//     #menuToggle input:checked ~ span:nth-last-child(2) {
//         transform: rotate(-45deg) translate(0, -1px);
//     }

//     #menu {
//         position: absolute;
//         width: 300px;
//         margin: -100px 0 0 -50px;
//         padding: 50px;
//         padding-top: 125px;        
//         background: #ededed;
//         list-style-type: none;
//         -webkit-font-smoothing: antialiased;        
//         transform-origin: 0% 0%;
//         transform: translate(-100%, 0);        
//         transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
//     }

//     #menu li {
//         padding: 10px 0;
//         font-size: 22px;
//     }
    
//     #menuToggle input:checked ~ ul {
//         transform: none;
//     }
// }

// @media (min-width: 375.1px) and (max-width: 425px) {
//     body {
//         color: salmon;
//         width: 100%;
//         height: 100vh;
//         margin: 0px 0px 0px;
//         margin: 0;
//         padding: 0;    
//         /* make it look decent enough */
//         background: #232323;
//         /* color: #cdcdcd; */
//         font-family: "Avenir Next", "Avenir", sans-serif;
//     }
//     header {
//         display: flex;
//         flex-flow: row;
//         justify-content: space-between;
//         background-color: lightgray;
//         padding: 1rem 0 1rem 1rem;
//     }
//     .btn_hamb {
//         /* background-color: red; */
//         display: flex;
//         order: 1;
//         width: 25%;
//     }
//     .logo {
//         order: 2;
//         width: 25%;
//         border: 1px solid black;
//         font-size: 5px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     }

//     #menuToggle {
//         display: block;
//         position: relative;
//         /* top: 0rem;
//         left: 1rem;     */
//         z-index: 1;    
//         -webkit-user-select: none;
//         user-select: none;
//     }

//     #menuToggle a {
//         text-decoration: none;
//         color: #232323;    
//         transition: color 0.3s ease;
//     }

//     #menuToggle a:hover {
//         color: tomato;
//     }


//     #menuToggle input {
//         display: block;
//         width: 40px;
//         height: 32px;
//         position: absolute;
//         top: -7px;
//         left: -5px;    
//         cursor: pointer;    
//         opacity: 0; /* hide this */
//         z-index: 2; /* and place it over the hamburger */    
//         -webkit-touch-callout: none;
//     }

//     #menuToggle span {
//         display: block;
//         width: 33px;
//         height: 4px;
//         margin-bottom: 5px;
//         position: relative;    
//         background: #a03f3f;
//         border-radius: 3px;    
//         z-index: 1;    
//         transform-origin: 4px 0px;    
//         transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
//                     background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
//                     opacity 0.55s ease;
//     }

//     #menuToggle span:first-child {
//         transform-origin: 0% 0%;
//     }

//     #menuToggle span:nth-last-child(2) {
//         transform-origin: 0% 100%;
//     }

//     #menuToggle input:checked ~ span {
//         opacity: 1;
//         transform: rotate(45deg) translate(-2px, -1px);
//         background: #232323;
//     }
    
//     #menuToggle input:checked ~ span:nth-last-child(3) {
//         opacity: 0;
//         transform: rotate(0deg) scale(0.2, 0.2);
//     }

//     #menuToggle input:checked ~ span:nth-last-child(2) {
//         transform: rotate(-45deg) translate(0, -1px);
//     }

//     #menu {
//         position: absolute;
//         width: 300px;
//         margin: -100px 0 0 -50px;
//         padding: 50px;
//         padding-top: 125px;        
//         background: #ededed;
//         list-style-type: none;
//         -webkit-font-smoothing: antialiased;        
//         transform-origin: 0% 0%;
//         transform: translate(-100%, 0);        
//         transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
//     }

//     #menu li {
//         padding: 10px 0;
//         font-size: 22px;
//     }
    
//     #menuToggle input:checked ~ ul {
//         transform: none;
//     }
// }

// @media (min-width: 425.1px) and (max-width: 768px) {
//     body {
//         color: tan;
//     }
// }

// @media (min-width: 768.1px) and (max-width: 1024px) {
//     body {
//         color: lightseagreen;
//     }
// }

// @media (min-width: 1024.1px) and (max-width: 1440px) {
//     body {
//         color: lightcoral;
//     }
// }
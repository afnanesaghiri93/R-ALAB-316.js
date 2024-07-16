
// /*==============================
//  DOM Manipulation (Part One)
// ================================*/
/*===== Part 1: Getting Started==========*/
//1- Select and cache the <main> element in a variable named mainEl
const mainElement = document.querySelector('main');

//2- Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainElement.style.backgroundColor = 'var(--main-bg)';//Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.

//3- Set the content of mainEl to <h1>DOM Manipulation</h1>
mainElement.innerHTML = '<h1>DOM Manipulation</h1>';
/* Another way : 
// const h1 = document.createElement('h1');
// h1.innerText = 'DOM Manipulation';
// mainEl.appendChild(h1);*/

//4- Add a class of flex-ctr to mainEl
mainElement.classList.add('flex-ctr');

/*====== Part 2: Creating a Menu Bar=========*/
// 1-Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.getElementById('top-menu');

// 2-Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = '100%';

//3- Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//4- Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');

// /*======= Part 3: Adding Menu Buttons =====*/
// // Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
//   //1- Iterate over the entire menuLinks array and create menu buttons
menuLinks.forEach(link => {
    const a = document.createElement('a');//     // 2-Create an <a> element
    a.setAttribute('href', link.href);
    a.textContent = link.text;//3- Set the href attribute of the <a> element
    topMenuEl.appendChild(a);//4- Append the <a> element to the topMenuEl element
 });



//   /*==============================
//   DOM Manipulation (Part Two)
//   ================================*/
//   // Part 1: Getting Started ==== DOM manipulation (Part One)

//   /*  ===============================================
//    Part 2: Adding Additional HTML and CSS 
//    In order to facilitate this, add the following additional
//     "sub-menu" <nav> element to the index.html file within your <header> element,
//     beneath the existing <nav> element, as follows:
//    Secondly, add the following to the styles.css file:
//    ================================================*/


//    /*========================================
//         Part 3: Creating the Submenu            
//    =======================================*/


//   // 1- Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl
const subMenuEl = document.getElementById('sub-menu');

// //2- Set the height of subMenuEl to be "100%"
subMenuEl.style.height = '100%';

// //3- Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// // 4-Add the class of flex-around to subMenuEl
subMenuEl.classList.add('flex-around');

// // 4-1-Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';
// //4-2-Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';


//  /*========================================
//         Part 4: Adding Menu Interaction           
//    =======================================*/


// // Select and cache <nav id="top-menu"> and <nav id="sub-menu">
// const topMenuEl = document.getElementById('top-menu');
// const subMenuEl = document.getElementById('sub-menu');
// const mainEl = document.querySelector('main');

// // Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '#', subLinks: [
    { text: 'all', href: '/catalog/all' },
    { text: 'top selling', href: '/catalog/top' },
    { text: 'search', href: '/catalog/search' },
  ]},
  { text: 'orders', href: '#', subLinks: [
    { text: 'new', href: '/orders/new' },
    { text: 'pending', href: '/orders/pending' },
    { text: 'history', href: '/orders/history' },
  ]},
  { text: 'account', href: '#', subLinks: [
    { text: 'profile', href: '/account/profile' },
    { text: 'sign out', href: '/account/signout' },
  ]},
];

// // Populate the top menu with links
// menuLinks.forEach(link => {
//   const a = document.createElement('a');
//   a.setAttribute('href', link.href);
//   a.textContent = link.text;
//   topMenuEl.appendChild(a);
// });

//1- Select and cache all <a> elements inside of topMenuEl
const topMenuLinks = topMenuEl.querySelectorAll('a');
function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(link => {
        const a = document.createElement('a');
        a.setAttribute('href', link.href);
        a.textContent = link.text;
        a.textContent = link.text;
        subMenuEl.appendChild(a);
          });
        }
        
        topMenuEl.addEventListener('click', function(event) {// 1-Event listener to handle top menu interactions
            event.preventDefault(); // Prevent default action of links
            if (event.target.tagName === 'A') {
                if (event.target.tagName === 'A') {
                    console.log(event.target.textContent.toLowerCase());
                    topMenuLinks.forEach(link => link.classList.remove('active'));
                        if (!event.target.classList.contains('active')) {
      event.target.classList.add('active');
            const linkText = event.target.textContent.toLowerCase();// Find the clicked link object in menuLinks
      const linkObject = menuLinks.find(link => link.text === linkText);
      if (linkObject && linkObject.subLinks) {
                // Show submenu
                subMenuEl.style.top = '100%';
                buildSubmenu(linkObject.subLinks);
              } else {
                // Hide submenu
                subMenuEl.style.top = '0';
                subMenuEl.innerHTML = ''; // Clear the submenu content
              }
            } else {
                event.target.classList.remove('active'); // Hide submenu if clicked link is already active
                      subMenuEl.style.top = '0';
                      subMenuEl.innerHTML = ''; // Clear the submenu content
                    }
                  }
                }});


   subMenuEl.addEventListener('click', function(event) { // Event listener to handle submenu interactions
  event.preventDefault();
  if (event.target.tagName !== 'A') { // Check if the clicked element is an <a> element
        return;
      }
      console.log(event.target.textContent.toLowerCase());
      subMenuEl.style.top = '0';// Hide the submenu
      topMenuLinks.forEach(link => link.classList.remove('active'));// Remove the active class from all <a> elements in topMenuLinks
        mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;// Update the contents of mainEl with the clicked submenu item's text
});


/**
 * 
 * <div id="parent">
 *      <div id="child">
 *        <h1>i,m h1 tag   </h1>
 *         <h2>i,m h2 tag   </h2> //want to create sibling then we can put this in array
 *      </div>
 *       <div id="child2">
 *        <h1>i,m h1 tag   </h1>
 *         <h2>i,m h2 tag   </h2> 
 *      </div>
 * </div> 
 * 
 *  
 */
//how to make  it

const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement("div",{id: "child"},
    [React.createElement("h1" , {}, "i'm h1 tag"),
    React.createElement("h2" , {}, "i'm h2 tag"),
] ),
React.createElement("div",{id: "child2 "},
[React.createElement("h1" , {}, "i'm h1 tag"),
React.createElement("h2" , {}, "i'm h2 tag"),
] ) ] 
);
 
// const heading= React.createElement(
//     "h1" ,
//      {id: "heading", xyz:"abc     "} , 
//      "Hello World from React" 
//     );

console.log(parent);  //object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
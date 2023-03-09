export default [
    {
        question: "React renders HTML to the web page by using a function called...?",
        a: {option: "ReactDOM.render()", isCorrect: true},
        b: {option: "createRoot()", isCorrect: false},
        c: {option: "appendChild()", isCorrect: false},
        d: {option: "createElement()", isCorrect: false},
    },
    {
        question: "JSX allows us to write HTML elements in JavaScript and place them in the DOM without any ?",
        a: {option: "Conditionals", isCorrect: false},
        b: {option: "createElement()  and/or appendChild() methods", isCorrect: true},
        c: {option: "State", isCorrect: false},
        d: {option: "Hook", isCorrect: false},
    },
    {
        question: "Props are passed to components via?",
        a: {option: "Forms", isCorrect: false},
        b: {option: "Router", isCorrect: false},
        c: {option: "Hooks", isCorrect: false},
        d: {option: "HTML attributes", isCorrect: true},
    },
    {
        question: "React events are written in?",
        a: {option: "CamelCase syntax", isCorrect: true},
        b: {option: "Pascal case", isCorrect: false},
        c: {option: "Upper case", isCorrect: false},
        d: {option: "Snake case", isCorrect: false},
    },
    {
        question: "Using memo will cause React to?",
        a: {option: "Make rendering a componenteven its props have not changed", isCorrect: false},
        b: {option: "Interact with the web page", isCorrect: false},
        c: {option: "Refresh a page", isCorrect: false},
        d: {option: "Skip rendering a component if its props have not changed", isCorrect: true},
    },
    {
        question: "The useReducer Hook is similar to the...?",
        a: {option: "useContext", isCorrect: false},
        b: {option: "useState", isCorrect: true},
        c: {option: "useMemo", isCorrect: false},
        d: {option: "useEffect", isCorrect: false},
    },
    {
        question: "The useCallback Hook only runs when...?",
        a: {option: "One of its dependencies doesn't update", isCorrect: false},
        b: {option: "When it does an expensive calculation", isCorrect: false},
        c: {option: "Never", isCorrect: false},
        d: {option: "One of its dependencies update", isCorrect: true},
    },
    {
        question: "When you have component logic that needs to be used by multiple components, we can extract that logic to a...?",
        a: {option: "Custom hook", isCorrect: true},
        b: {option: "Function", isCorrect: false},
        c: {option: "Array", isCorrect: false},
        d: {option: "Object", isCorrect: false},
    },
    {
        question: "Custom Hooks start with...?",
        a: {option: "react", isCorrect: false},
        b: {option: "take", isCorrect: false},
        c: {option: "use", isCorrect: true},
        d: {option: "with", isCorrect: false},
    },
    {
        question: "useEffect accepts",
        a: {option: "1 argument", isCorrect: false},
        b: {option: "3 arguments", isCorrect: false},
        c: {option: "2 arguments", isCorrect: true},
        d: {option: "4 arguments", isCorrect: false},
    },
    {
        question: "To create context, you must Import...?",
        a: {option: "createRoot", isCorrect: false},
        b: {option: "createContext", isCorrect: true},
        c: {option: "useContext", isCorrect: false},
        d: {option: "useReducer", isCorrect: false},
    },
    {
        question: "The useRef Hook allows you to...?",
        a: {option: "access a DOM element directly", isCorrect: true},
        b: {option: "Improve performance", isCorrect: false},
        c: {option: "Return data from Hook", isCorrect: false},
        d: {option: "Debug and troubleshoot your code easily", isCorrect: false},
    },
    {
        question: "To style an element with the inline style attribute in react, the value must be a JavaScript...?",
        a: {option: "Function", isCorrect: false},
        b: {option: "Class", isCorrect: false},
        c: {option: "String", isCorrect: false},
        d: {option: "Object", isCorrect: true},
    },
    {
        question: "Hooks allow function components to have access to...?",
        a: {option: "State and other React features", isCorrect: true},
        b: {option: "DOM", isCorrect: false},
        c: {option: "Router", isCorrect: false},
        d: {option: "Forms", isCorrect: false},
    },
    {
        question: "What is a single page application (SPA)?",
        a: {option: "A single-page application is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run.", isCorrect: true},
        b: {option: "A single page application is a web application or website that has a single HTML page that is updated with new content as the user navigates through the website", isCorrect: false},
        c: {option: "A single page application is a web application or website that only requires a single page of HTML code to be generated", isCorrect: false},
        d: {option: "A single page application is a web application or website that only requires the loading of a single web pageA single page application is a web application or website that only requires the loading of a single web page", isCorrect: false},
    },
]
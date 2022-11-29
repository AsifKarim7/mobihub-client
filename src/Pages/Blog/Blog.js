import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-10'>

            <div className='text-center text-black shadow-sm py-10 my-6 rounded-2xl bg-white'>
                <h2 className='text-4xl font-bold'>What are the different ways to manage a state in a React application?</h2>
                <p className='mx-4 md:mx-28 mt-6 text-base font-thin'>In React apps, there are many different ways to handle the state. We can use URL to store some data. Keeping such data in the URL allows users to share deep links with others. The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc. The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. </p>
            </div>

            <div className='text-center text-black shadow-sm py-10 my-6 rounded-2xl bg-white'>
                <h2 className='text-4xl font-bold'>How does prototypical inheritance work?</h2>
                <p className='mx-4 md:mx-28 mt-6 text-base font-thin'>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
            </div>

            <div className='text-center text-black shadow-sm py-10 my-6 rounded-2xl bg-white'>
                <h2 className='text-4xl font-bold'>What is a unit test? Why should we write unit tests?</h2>
                <p className='mx-4 md:mx-28 mt-6 text-base font-thin'>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast.</p>
            </div>

            <div className='text-center text-black shadow-sm py-10 my-6 rounded-2xl bg-white'>
                <h2 className='text-4xl font-bold'>React vs. Angular vs. Vue?</h2>
                <p className='mx-4 md:mx-28 mt-6 text-base font-thin'>Angular is a front-end framework with lots of components, services, and tools. It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube. <br /> React is considered a UI library. They define themselves as: “A JavaScript library for building user interfaces” Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React. <br /> Last but not least, Vue.js is, according to its site: “A progressive JavaScript framework”. Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.
                </p>
            </div>

        </div>
    );
};

export default Blog;
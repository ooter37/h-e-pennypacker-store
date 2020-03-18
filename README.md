### JUST BECAUSE YOU'RE QUARANTINED DOESN'T MEAN YOU CAN'T MAKE MONEY!
<hr/>

<img src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr03/2013/2/11/12/enhanced-buzz-16510-1360604890-8.jpg?output-quality=auto&output-format=auto&downsize=640:*">

Hello! My name is H.E. Pennypacker. I'm an eccentric venture capitalist with a keen eye for business. I have an idea to make money off of all this panic about the current global health crisis but I need your help. Since people can't get out of their homes to go shopping, my store needs to be 100% online. I have the inventory and delivery infrastructure in place -- I just need a store!

*And that's where you come in!*

I would like an online store with the following functionality:
- users can see my inventory
- they can add items to their cart
- users can see their cart on the side of the screen
- it should look enticing and appealing

<hr/>

To help you in completing H.E. Pennypacker's store you have been given a blank `create-react-app` with a server file already created and a json file for his inventory. Here's what you need to complete his store:

Step 1: Finish configuring his basic store
- complete setting up `server/index.js` with express
    - run `npm i express`
    - bring in express using the `require` key word
    - put your top level middleware in place using `app.use(express.json())`
    - Set up your server to listen to port 4000
        - ***Note: your server has already been connected to your front end so it's crucial that your server runs on port 4000***
    - run `nodemon` in your terminal to check if your server is running correctly

Step 2: Write the following end points
- an `app.get('/api/getInventory')` with a handler that sends back the entire inventory
    - **Remember!** If you don't include `res.status(200).send(whateverYouAreSending)` you won't actually be sending anything to your front end

Step 3: Design and create a front-end

- install axios using `npm i axios`
- Let your creativity go wild! Create a website worthy of H.E. Pennypacker's eccentricity, wealth, and greed. Some guidelines you should follow:
    - consider creating a visual sketch of how you want the website to look when you're done. Which components should have state? Or, in other words, which components should hold any kind of data? (**Hint**: Whichever component is holding the data from your server should have some state).
    - create your component files in the `src/components/` folder
    - remember that in order to retrieve your data from the server you need to do an axios.get call that should look something like this:
    ```js
    getAllInventory(){
        // What always follows an axios call? Hint: We get a *response* from our promise. Once we get a response, what do we do **THEN**?
        axios.get('/api/getInventory')
    }
    ```
     - it's crucial that the endpoint inside your axios.get matches the corresponding endpoint on your server like in my examples.
     - since Mr. Pennypacker wants his users to have a visible cart, you can store this temporarily in state for now

Other tips!
- consult ALL previous lecture notes, minis, and afternoons
- consult Google
- consult Mentors/Instructor if you get stuck
- stay positive!

BLACK DIAMOND
    - move your users cart from the front end to the backend where it persists as long as the server doesn't refresh
    - write an app.post endpoint for clients to add items to their cart
    - write an additional app.get for clients to see what's in their cart on the server
    - write an app.put that allows users to update the quantity in their cart
    - write an app.delete that allows users to remove an item from their cart entirely
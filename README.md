# Getting Started with Create React App

# Deployed on Website 

This website is deployed on Vercel : - https://quarks-react-assignment.vercel.app/


Question 1

Objective:-  Your task is to create a basic table component with columns as below properties and rows as respective values. Data can be 10 list of objects. 
```
{
"data": [
{    
       	"id": "0",
       	"name": "Naruto",
       	"location": "konoha",
       "health": "Healthy",
       "ip": "abcd",
       "volume": 1000000000 // in bytes
},
{
       "id": "0",
       "name": "Sasuke",
              "location": "Orochimaru Hidden Village",
        "health": "error",
        "ip": "abcd",
               "volume": 300000000 // in bytes
}
]
}
```


1. Create a status badge: Given a status ('healthy', 'error', 'disabled'), create a small component that shows a badge with the status and corresponding colors for each status - health as green, error as red, disabled as yellow as shown.

2. Basic data visualization: Given an array of data (you could use app usage data for example), create a basic bar chart to visualize the data. Use any library or even plain CSS to achieve this. Basically, you can show x-axis as User, y-axis as volume.

3. Accessible Form: Create a form that takes an app name and a volume number as input. This form should follow best practices for accessibility. On submit, it should prevent the page from refreshing and log the input data to the console.

4. Testing a User Interaction: Write basic tests for the table. The test should simulate user typing in the input fields and confirm that the correct data is logged on the table.

5. Create a loading spinner: Often while data is being fetched (like a list of objects), apps will display a loading spinner. Create a spinner component and demonstrate how you'd trigger its display while waiting for data to be fetched.

Question 2:
Extend the previous table component to have 10000 data(dummy - you can repeat as well). 

We need to introduce following features:

Sorting: Table headers should be clickable and table data should be sorted based on the corresponding column. Clicking 2nd time should reverse the order.

Filtering: There should be a text input field above the table that allows the user to filter the table rows. It should be in real time.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
Added couple if Test for Table and Form Component.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run build` to produce the build output folder


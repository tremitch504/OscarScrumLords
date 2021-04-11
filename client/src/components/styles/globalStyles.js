import { createGlobalStyle } from 'styled-components';
/**
Global Styles: Below are global styles for most components using styled-components.
Search, RotatingCarousel, map, userProfile components contain additional styling rules
DOCS: https://styled-components.com/
 */

export default createGlobalStyle`
*{
  margin: auto;
}

body{
  margin: 0;
  background-color: aliceblue;
}

a{
  color:black;
}

header{
  font-family: 'Permanent Marker', cursive;
  color: black;
  background-color: #ffd1dc;
  width: 100%;
  text-align: center;
  padding: 10px;
}

nav {
  font-family: 'Ubuntu', sans-serif;
  color: black;
  width: 100%;
  border: 1px;
  background-color: whitesmoke;
  border-color: black;
  border-style: solid;
  height: 65px;
  padding: 0px;
  font-weight: bold;
}

main{
  width: 90%;
}

.map-nav-container {
  border-radius: 15px;
  background-color: #ffd1dc; */
  input {
    margin-left: 5px;
  }
}

.map-nav {
  position: relative;
  float: left;
  display: block;
  margin-top: 11px;
  }

.map-nav-dropdown {
  border-radius: 15px;
  border: 1px;
  background-color: whitesmoke;
  border-color: black;
  border-style: solid;
  height: 65px;
  padding: 0px;
  select {
    height: 30px;
    margin: 20px 10px;
  }
  h3 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    margin: 20px 10px
  }
}

li {
  float: left;
  display: block;
}

.events {
  font-family: 'Ubuntu',sans-serif;
  border: 1px;
  border-color: lightgray;
  border-style: solid;
  border-radius: 15px;
  background-color: white;
  margin: auto;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  box-shadow: 0 1px 1px rgb(0 0 0 / 15%), 0 10px 0 -5px #eee, 0 10px 1px -4px rgb(0 0 0 / 15%), 0 20px 0 -10px #eee, 0 20px 1px -9px rgb(0 0 0 / 15%);
  padding: 30px;
}

.events-container {
  margin-top: 20px
}

`;




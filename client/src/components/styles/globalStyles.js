import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`

*{
  // box-sizing: border-box;
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
  border-radius: 25px;
  background-color: #ffd1dc;
  width: 90%;
  text-align: center;
  padding: 10px;
  border: 1px;
  border-color: black;
  border-style: solid;
}
.map-nav-container {
  display: block inline;
  width: 90%;
  block-size: auto;
  object-fit: cover;
  /* background-color: fuchsia; */
}
.map-nav-dropdown {
  select {
    margin: 10px

  }
}

nav{
  font-family: 'Ubuntu', sans-serif;
  color: black;
  width: 90%;
  border-radius: 15px;
  border: 1px;
  background-color: #ffffff;
  border-color: black;
  border-style: solid;
  height: 65px;
  padding: 0px;
  font-weight: bold;
  /* object-fit: cover; */
  label {
    padding: 10px;
  }
}

main{
  width: 90%;
}

li {
  float: left;
  display: block;
  /* background-color: blue; */
}

.events-container {
  margin: 20px 0px;
}

.events {
  border-radius: 15px;
  border: 1px;
  border-color: black;
  border-style: solid;
  background-color: #ffe1ff;
  font-family: 'Ubuntu', sans-serif;
  padding: 5px;
  margin: 4px 0px;
}
`;




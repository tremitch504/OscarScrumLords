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
  /* border-radius: 25px; */
  background-color: #ffd1dc;
  width: 100%;
  text-align: center;
  padding: 10px;
  /* border: 1px;
  border-color: black;
  border-style: solid; */
}

nav {
  font-family: 'Ubuntu', sans-serif;
  color: black;
  width: 100%;
  /* border-radius: 15px; */
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
  /* display: block inline;
  block-size: auto;
  object-fit: cover;
  border-radius: 15px;
  border: 1px;
  font-family: 'Ubuntu', sans-serif;
  background-color: whitesmoke;
  border-color: black;
  border-style: solid; */
  background-color: #ffd1dc; */
  input {
    margin-left: 5px;
  }
}
.map-nav {
  position: relative;
  float: left;
  display: block;
  padding: 15px 75px;
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




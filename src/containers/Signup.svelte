<script>
import Input from "../components/Input.svelte";
import Button from "../components/Button.svelte";
import { Router, Link, Route } from "svelte-routing";
import { token, getToken } from "../store/auth";

let name = ''
let data = {
  name: '',
  email: '',
  password: '',
  copyPassword: '',
}

function setUser() {
  getToken(data)
}

function testFunction(evt) {
    if (evt) {
      console.log("data :", evt);
    } else {
      console.log("no-evt");
    }
    console.log('data :', data);
  }
</script>

<style>
  .sign-up {
    margin: 0 auto;
    max-width: 500px;
  }
  :global(input) {
    margin-bottom: 5px;
  }
  :global(button) {
    margin: 34px 0 77px;
  }
</style>

<div class="container">
  <div class="sign-up">
    <h1>Not a Dog!</h1>
    <Input bind:name={data.name} on:inputChange={testFunction} placeholder={'name'} />
    <Input bind:name={data.email} on:inputChange={testFunction} placeholder={'email'} />
    <Input bind:name={data.password} on:inputChange={testFunction} placeholder={'password'} />
    <Input bind:name={data.name} on:inputChange={testFunction} placeholder={'confirm password'} />
    <Button on:buttonClick={setUser} text={'NOT A DOG!!!'} />
    <div><span>already onboard?</span><Link to="login">login</Link> </div>
    <div>{$token}</div>
  </div>
</div>
<script>
  import Notifications from "svelte-notifications";
  import App from "./containers/App.svelte";
  import Notification from "./components/Notification.svelte";
</script>

<Notifications item={Notification}>
  <App />
</Notifications>

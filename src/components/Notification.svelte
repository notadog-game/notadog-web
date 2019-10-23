<script>
  import { onDestroy } from "svelte";
  import { getNotificationsContext } from "svelte-notifications";

  export let notification;
  const { removeNotification } = getNotificationsContext();
  const { id, deleteAfter, classes } = notification;
  const removeNotificationHandler = () => removeNotification(id);

  const timeout = deleteAfter
    ? setTimeout(() => removeNotificationHandler(), deleteAfter)
    : null;

  onDestroy(() => {
    if (timeout) clearTimeout(timeout);
  });
</script>

<style>
  .notification {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    margin: 12px;
    background: #fff;
    color: #000;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  }

  .notification-content {
    width: 210px;
    padding: 12px 6px 12px 12px;
    box-sizing: border-box;
    word-wrap: break-word;
  }

  button {
    display: block;
    width: 40px;
    padding: 0 0 2px;
    margin: 0;
    border: none;
    border-left: 1px solid #eee;
    outline: none;
    background: none;
    cursor: pointer;
    font-size: 20px;
    color: #000;
    box-sizing: border-box;
  }

  button:hover {
    background: rgba(0, 0, 0, 0.01);
  }

  .notification.error {
    background-color: var(--NAD_ERROR);
  }

  .notification.warning {
    background-color: var(--NAD_WARNING);
  }

  .notification.success {
    background-color: var(--NAD_SUCCESS);
  }

  .notification.success .notification-content,
  .notification.success button,
  .notification.error .notification-content,
  .notification.error button,
  .notification.warning .notification-content,
  .notification.warning button {
    color: var(--NAD_WHITE);
  }
</style>

<div class="notification {classes}">
  <div class="notification-content">
    <slot>{notification.text}</slot>
  </div>
  <button on:click={removeNotificationHandler}>&times;</button>
</div>

<script>
  export let name = "";
  export let points = 0;
</script>

<style>
  .user {
    display: flex;
  }
  .avatar {
    background-color: var(--NAD_BG);
    border-radius: 50%;
    height: 50px;
    margin-right: 20px;
    width: 50px;
  }
  .user-info * {
    font-family: Poppins;
  }
  .user-name {
    color: var(--NAD_BLACK);
  }
  .user-points {
    color: var(--NAD_GREY);
  }
</style>

<div class="user">
  <div class="avatar" />
  <div class="user-info">
    <div class="user-name">{name}</div>
    <div class="user-points">{points} points</div>
  </div>
</div>

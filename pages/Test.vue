<script setup lang="ts">

</script>

<template>
  <div class="grid">
    <div class="col-12 md:col-6">
      <Card>
        <template #header>
          <img alt="user header" src="../public/images/logo-dark.svg">
        </template>
        <template #title>
          Advanced Card
        </template>
        <template #subtitle>
          Card subtitle
        </template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Cancel" severity="secondary" outlined class="w-full" />
            <Button label="Save" class="w-full" />
          </div>
        </template>
      </Card>

      <Card>
        <template #header>
          <img alt="user header" src="../public/images/logo-dark.svg">
        </template>
        <template #title>
          Advanced Card
        </template>
        <template #subtitle>
          Card subtitle
        </template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Cancel" severity="secondary" outlined class="w-full" />
            <Button label="Save" class="w-full" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

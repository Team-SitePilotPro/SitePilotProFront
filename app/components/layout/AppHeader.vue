<script setup lang="ts">
import UserMenu from '~/components/layout/UserMenu.vue';

const { t } = useI18n();
const route = useRoute();

const pageTitle = computed(() => {
  if (route.meta.i18nTitle) {
    return t(route.meta.i18nTitle as string);
  }
  return t('base.default');
});

useHead({
  title: pageTitle
});
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar :title="pageTitle">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>

        <template #right>
          <UserMenu />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <slot />
    </template>
  </UDashboardPanel>
</template>

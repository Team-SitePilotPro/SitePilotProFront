<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
import Logo from '~/assets/images/Logo.png';

useRoute();
const open = ref(false);

const links = [[{
  label: 'Tableau de Bord',
  icon: 'i-lucide-house',
  to: '/',
  onSelect: () => {
    open.value = false;
  }
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  to: '/inbox',
  onSelect: () => {
    open.value = false;
  }
}, {
  label: 'Customers',
  icon: 'i-lucide-users',
  to: '/customers',
  onSelect: () => {
    open.value = false;
  }
}], [{
  label: 'Settings',
  to: '/settings',
  icon: 'i-lucide-settings',
  defaultOpen: false,
  type: 'trigger',
  onSelect: () => {
    open.value = false;
  },
  children: [{
    label: 'General',
    to: '/settings'
  }, {
    label: 'Members',
    to: '/settings/members'
  }, {
    label: 'Notifications',
    to: '/settings/notifications'
  }, {
    label: 'Security',
    to: '/settings/security'
  }]
}]] satisfies NavigationMenuItem[][];

const groups = computed(() => [{
  id: 'links',
  label: 'Pages',
  items: links.flat()
}]);

const site = ref({
  name: 'SitePilot',
  suffixeName: 'Pro',
  avatar: {
    src: Logo,
    alt: 'SitePilotPro'
  }
});
</script>

<template>
  <UDashboardGroup unit="rem">
    <UDashboardSidebar
      id="default"
      v-model:open="open"
      collapsible
      resizable
      class="bg-elevated/25"
      :ui="{ footer: 'lg:border-t lg:border-default' }"
    >
      <template #header="{ collapsed }">
        <div class="flex justify-center w-full">
          <NuxtLink
            to="/"
            class="flex items-center gap-2"
          >
            <UAvatar
              v-bind="site.avatar"
              size="2xl"
            />
            <div v-if="!collapsed">
              <strong class="text-primarySite">
                {{ site.name }}
              </strong>
              <span class="text-secondarySite font-semibold">
                {{ site.suffixeName }}
              </span>
            </div>

          </NuxtLink>
        </div>
      </template>

      <template #default="{ collapsed }">
        <UDashboardSearchButton
          :collapsed="collapsed"
          class="bg-transparent ring-default"
        />

        <UNavigationMenu
          :collapsed="collapsed"
          :items="links[0]"
          orientation="vertical"
          tooltip
          popover
        />
      </template>

      <template #footer="{ collapsed }">
        <UNavigationMenu
          :collapsed="collapsed"
          :items="links[1]"
          orientation="vertical"
          tooltip
          class="mt-auto"
        />
      </template>
    </UDashboardSidebar>

    <UDashboardSearch :groups="groups" />
    <LayoutAppHeader>
      <slot />
    </LayoutAppHeader>
  </UDashboardGroup>
</template>

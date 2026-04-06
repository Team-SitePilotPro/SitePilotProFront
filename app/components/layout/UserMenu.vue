<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui';
import Avatar from '~/assets/images/avatar.png';

defineProps<{
  collapsed?: boolean;
}>();

const colorMode = useColorMode();

const user = ref({
  name: 'Utilisateur',
  avatar: {
    src: Avatar,
    alt: 'Utilisateur'
  }
});

const items = computed<DropdownMenuItem[][]>(() => ([[{
  type: 'label',
  label: user.value.name,
  avatar: user.value.avatar
}], [{
  label: 'Compte',
  icon: 'i-lucide-user'
}, {
  label: 'Abonnement',
  icon: 'i-lucide-credit-card'
}, {
  label: 'Settings',
  icon: 'i-lucide-settings',
  to: '/settings'
}], [{
  label: 'Appearance',
  icon: 'i-lucide-sun-moon',
  children: [{
    label: 'Light',
    icon: 'i-lucide-sun',
    type: 'checkbox',
    checked: colorMode.value === 'light',
    onSelect(e: Event) {
      e.preventDefault();

      colorMode.preference = 'light';
    }
  }, {
    label: 'Dark',
    icon: 'i-lucide-moon',
    type: 'checkbox',
    checked: colorMode.value === 'dark',
    onUpdateChecked(checked: boolean) {
      if (checked) {
        colorMode.preference = 'dark';
      }
    },
    onSelect(e: Event) {
      e.preventDefault();
    }
  }]
}], [{
  label: 'Documentation',
  icon: 'i-lucide-book-open',
  to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
  target: '_blank'
},
{
  label: 'Log out',
  icon: 'i-lucide-log-out'
}]]));
</script>

<template>
  <UDropdownMenu
    :items="items"
    :content="{ align: 'center', collisionPadding: 12 }"
  >
    <UButton
      v-bind="{
        ...user,
        label: collapsed ? undefined : user?.name,
        trailingIcon: collapsed ? undefined : 'i-lucide-chevrons-up-down'
      }"
      color="neutral"
      variant="ghost"
      block
    />
  </UDropdownMenu>
</template>

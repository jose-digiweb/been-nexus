<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui';
import type { FetchError } from 'ofetch';

const schema = z.object({
  name: z
    .string({
      required_error: 'Please add a name',
    })
    .min(2, {
      message: 'Name must be at least 2 characters long',
    })
    .max(50, {
      message: 'Name must be at most 50 characters long',
    }),
  description: z.string().optional(),
  lat: z
    .number({
      required_error: 'Please add a latitude',
    })
    .min(-90, {
      message: 'Latitude must be at least 80 degrees',
    })
    .max(90, {
      message: 'Latitude must be at most 90 degrees',
    }),
  long: z
    .number({
      required_error: 'Please add a longitude',
    })
    .min(-180, {
      message: 'Longitude must be at least -180 degrees',
    })
    .max(180, {
      message: 'Longitude must be at most 180 degrees',
    }),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  name: undefined,
  description: undefined,
  lat: undefined,
  long: undefined,
});

const loading = ref(false);

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  try {
    const res = await $fetch('/api/places', {
      method: 'POST',
      body: event.data,
    });
    toast.add({
      title: 'Success',
      description: 'The form has been submitted.',
      color: 'success',
    });
    console.log(res);

    loading.value = false;
  } catch (err) {
    const error = err as FetchError;
    console.log(error.data);

    loading.value = false;
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col mb-6">
      <h2>Nexus Connect</h2>
      <p class="text-sm text-muted">Add a place to your personal Nexus.</p>
    </div>

    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormField label="Name" name="name">
        <UInput v-model="state.name" class="w-full" />
      </UFormField>

      <UFormField label="Description" name="description">
        <UTextarea
          v-model="state.description"
          type="description"
          class="w-full"
        />
      </UFormField>

      <UFormField label="Lat" name="lat">
        <UInput v-model="state.lat" type="number" class="w-full" />
      </UFormField>
      <UFormField label="Long" name="long">
        <UInput v-model="state.long" type="number" class="w-full" />
      </UFormField>

      <UButton :disabled="loading" :loading="loading" type="submit">
        Add Place
      </UButton>
    </UForm>
  </div>
</template>

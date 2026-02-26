import { createClient } from '@sanity/client'

export const sanity = createClient({
    projectId: 'f59b0jqv',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false, // Set to false to see latest data immediately
})

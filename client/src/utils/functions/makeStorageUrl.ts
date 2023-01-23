export default function makeStorageUrl (path: string) {
   return import.meta.env.VITE_STORAGE_URL + path
}
<template>
    <div class="flex justify-center">
        <div class="container">
            <div>{{ title }}</div>
            <div class="mb-4">
                <div class="flex justify-center">
                    <InputCustom type="text" v-model="txtSearch" placeholder="Input username" name="input-search" />
                    <ButtonCustom @handle-click="handleSearch" text="Search" />
                </div>
            </div>
            <div v-if="isLoading">Loading ...</div>
            <div v-else class="relative overflow-x-auto">
                <table class="table-auto border-collapse border border-slate-400 w-full">
                    <thead class="border">
                        <tr class="border bg-blue-500 text-white text-md">
                            <th class="border p-2">ID</th>
                            <th class="border p-2">First name</th>
                            <th class="border p-2">Middle name</th>
                            <th class="border p-2">Last name</th>
                            <th class="border p-2">Age</th>
                            <th class="border p-2">Phone</th>
                        </tr>
                    </thead>
                    <tbody class="border">
                        <tr class="border even:bg-gray-50 odd:bg-white"
                            v-for="(user, index ) in userList?.filter(el => userListStore.$state.txtSearch ? [el.firstName, el.lastName, el.maidenName].includes(userListStore.$state.txtSearch) : el)">
                            <td class="border">{{ user.id }}</td>
                            <td class="border">{{ user.firstName }}</td>
                            <td class="border">{{ user.maidenName }}</td>
                            <td class="border">{{ user.lastName }}</td>
                            <td class="border">{{ user.age }}</td>
                            <td class="border">{{ user.phone }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>{{ userList }}</div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated } from "vue"
import { useUserListStore } from "../store/user-list";
import InputCustom from '../components/input-custom.vue'
import ButtonCustom from "../components/button-custom.vue"

const props = defineProps({ title: String })

const userListStore = useUserListStore();
const txtSearch = ref(userListStore.$state.txtSearch);

const isLoading = userListStore.$state?.loading
const userList = userListStore.$state?.userList

onMounted(() => {
    userListStore.reqUserList(userListStore);
})
onUpdated(() => { })

const handleSearch = () => {
    userListStore.updateTxtSearch(userListStore, txtSearch.value)
}

</script>

<style scoped></style>
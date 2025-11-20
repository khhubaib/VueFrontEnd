<script>
import apiClient from '../apiclient';
export default {
    name: 'MetaTags',

    data() {
        return {
            tags: {
                page_id: null,
                page_name: '',
                tags: []
            },
            id: ''
        };
    },

    mounted() {
        this.id = this.$route.params.id;
        this.fetchtags(this.id);
    },

    methods: {
        fetchtags(id) {
            apiClient.get(`/pages/${id}/tags`)
                .then(res => {
                    this.tags = res.data;
                    console.log("Fetched tags:", this.tags);
                })
                .catch(err => {
                    console.error("Error loading tags:", err.response?.data || err);
                });
        },

        updatetags(id) {
            this.$router.push(`/updatetag/${id}`);
        },

        addtag(id) {
            this.$router.push(`/addtag/${id}`);
        },


        deleteTag(id) {

            apiClient.delete(`/metatags/${id}`)
                .then(response => {
                    console.log(response.data.message);
                    // Refresh tag list after deletion
                    this.fetchtags(this.id);
                })
                .catch(error => {
                    console.error("Delete error:", error.response?.data || error);
                });

        },

        back(){
            this.$router.push('/admin');
        },
    },



}
</script>

<template>
    <div class="admin-container">
        <table border="1" cellpadding="10">
            <thead>
                <tr>
                    <th>Tag ID</th>
                    <th>Page ID</th>
                    <th>Page Name</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Keywords</th>
                    <th>Canonical URL</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tag in tags.tags" :key="tag.id">
                    <td>{{ tag.id }}</td>
                    <td>{{ tags.page_id }}</td>
                    <td>{{ tags.page_name }}</td>
                    <td>{{ tag.title }}</td>
                    <td>{{ tag.description }}</td>
                    <td>{{ tag.keywords }}</td>
                    <td>{{ tag.canonical_url }}</td>
                    <td><button @click="updatetags(tag.id)">Update</button></td>
                   <td> <button @click="deleteTag(tag.id)"> Delete</button></td>
                </tr>
                <tr v-if="tags.tags.length === 0">
                    <td><button  @click="addtag(id)">Add</button></td>
                    <td><button @click="back">Back</button></td>
                </tr>

                <tr v-if="tags.tags.length !== 0">
                    <td><button @click="back">Back</button></td>
                </tr>
                
            </tbody>
        </table>
    </div>
</template>

<style></style>
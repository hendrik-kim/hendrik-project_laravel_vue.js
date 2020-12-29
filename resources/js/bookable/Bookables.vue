<template>
    <div>
        <div v-if="loading">Data is loading...</div>
        <div v-else>
            <div class="row mb-4" v-for="row in rows" :key="'row' + row">
                <div
                    class="col d-flex align-items-stretch"
                    v-for="(bookable, column) in bookablesInRow(row)"
                    :key="'row' + row + column"
                >
                    <bookable-list-item v-bind="bookable"></bookable-list-item>
                </div>

                <div
                    class="col"
                    v-for="p in placeholdersInRow(row)"
                    :key="'placeholder' + row + p"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
    components: {
        BookableListItem
    },
    data() {
        return {
            bookables: null,
            loading: false,
            columns: 3
        };
    },
    computed: {
        rows() {
            return this.bookables === null
                ? 0
                : Math.ceil(this.bookables.length / this.columns);
        }
    },
    methods: {
        bookablesInRow(row) {
            return this.bookables.slice(
                (row - 1) * this.columns,
                row * this.columns
            );
        },
        placeholdersInRow(row) {
            return this.columns - this.bookablesInRow(row).length;
        }
    },
    created() {
        this.loading = true;
        setTimeout(() => {
            this.bookables = [
                {
                    id: 1,
                    title: "Cheap Villa!!!",
                    content: "A very cheap villa!!"
                },
                {
                    id: 2,
                    title: "Cheap Villa2",
                    content: "A very cheap villa2!!"
                },
                {
                    id: 3,
                    title: "Cheap Villa2",
                    content: "A very cheap villa2!!"
                },
                {
                    id: 4,
                    title: "Cheap Villa2",
                    content: "A very cheap villa2!!"
                },
                {
                    id: 5,
                    title: "Cheap Villa!!!",
                    content: "A very cheap villa!!"
                },
                {
                    id: 6,
                    title: "Cheap Villa2",
                    content: "A very cheap villa2!!"
                }
            ];
            this.loading = false;
        }, 1000);
    }
};
</script>
<style scoped></style>

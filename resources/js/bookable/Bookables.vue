<template>
    <div>
        <bookable-list-item
            :item-title="bookable1.title"
            :item-content="bookable1.content"
            :item-price="1000"
        />
        <bookable-list-item
            :item-title="bookable2.title"
            :item-content="bookable2.content"
            :item-price="2000"
        />
    </div>
</template>

<script>
import BookableListItem from "./BookableListItem.vue";
export default {
    components: {
        BookableListItem
    },
    data() {
        return {
            bookable1: {
                title: "Cheap Villa!!!",
                content: "A very cheap villa!!"
            },
            bookable2: {
                title: "Cheap Villa2",
                content: "A very cheap villa2!!"
            }
        };
    },
    created() {
        console.log("created");
        console.log(this.bookable1);
        console.log(this.bookable2);

        setTimeout(() => {
            this.bookable1.title = "Expensive Villa";
            this.bookable2.title = "Very Expensive Villa";
        }, 5000);
    }
};
</script>

<style scoped></style>

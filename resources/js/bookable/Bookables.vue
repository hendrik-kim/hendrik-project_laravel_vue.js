<template>
    <div>
        <bookable-list-item
            item-title="Cheap Villa"
            item-content="A very cheap villa"
            :item-price="1000"
        />
        <bookable-list-item
            item-title="Cheap Villa2"
            item-content="A very cheap villa2"
            :item-price="2000"
        />
    </div>
</template>

<script>
import BookableListItem from "./BookableListItem.vue";
export default {
    components: {
        BookableListItem
    }
};
</script>

<style scoped></style>

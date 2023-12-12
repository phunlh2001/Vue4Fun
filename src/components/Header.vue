<template>
    <header>
        <h1>{{ title }}</h1>
        <nav>
            <ul>
                <li v-for="item in menuItems" :key="item.id">
                    <a :href="item.url">{{ item.label }}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            title: "My Website",
            menuItems: [
                { id: 1, label: "Home", url: "/" },
                { id: 2, label: "About", url: "/about" },
                { id: 3, label: "Services", url: "/services" },
                { id: 4, label: "Contact", url: "/contact" },
            ],
        };
    },
};
</script>

<style scoped>
header {
    background-color: #f2f2f2;
    padding: 20px;
}

h1 {
    margin: 0;
}

nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

nav ul li {
    display: inline-block;
    margin-right: 10px;
}

nav ul li a {
    text-decoration: none;
    color: #333;
}
</style>

<template>
    <h1>这是nginx的测试</h1>
</template>

<script setup>
const a = () => {
    new Promise((resolve, reject) => {
        console.log('promise')
        setTimeout(() => {
            resolve(6)
        }, 2000)
    }).then(
        (res) => {
            console.log(res)
        },
        (error) => {
            console.error(`出错了——${error}`)
        }
    )
}
a()
class Person {
    static name = 'class'
    age = this
}
var p = new Person()
console.log(Person.name)
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

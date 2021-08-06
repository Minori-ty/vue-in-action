<template>
    <h1>配置移除console</h1>
</template>

<script setup>
// import config from '../vite.config'
console.log('config')
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
console.log(import.meta.env.MODE)
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
